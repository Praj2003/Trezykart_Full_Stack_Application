import { Webhook } from "svix";
import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    return NextResponse.json(
      { message: "Please include the Webhook secret in your .env file" },
      { status: 500 }
    );
  }

  // Verify Clerk webhook
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_sign = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_sign) {
    return NextResponse.json(
      { message: "Missing one or more svix headers" },
      { status: 400 }
    );
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_sign,
    }) as WebhookEvent;
  } catch (err) {
    console.error("❌ Webhook verification failed:", err);
    return NextResponse.json(
      { message: "Webhook verification failed" },
      { status: 400 }
    );
  }
  const eventType = evt.type;

  if (eventType === "user.created") {
    try {
      const { email_addresses, first_name, primary_email_address_id } =
        evt.data;

      // Get primary email if available
      const primaryEmail =
        email_addresses.find(
          (email) => email.id === primary_email_address_id
        ) ?? email_addresses[0];


      const clerkId = evt.data.id!;

      const existingUser = await prisma.user.findUnique({ where: { clerkId } });

      if (existingUser) {
        console.log("ℹ️ User already exists:", existingUser.email);
        return new Response("User already exists", { status: 200 });
      }

      // Create new user
      if (!existingUser) {
         await prisma.user.create({
          data: {
            clerkId: clerkId,
            name: first_name ?? "No Name",
            email: primaryEmail?.email_address ?? null,
            role: "USER",
          },
        });
      }
    } catch (error) {
      console.error("❌ Error creating user in DB:", error);
      return new Response("Error creating user", { status: 500 });
    }
  }

  return new Response(
    "Webhook received successfully and User Has Been Created!",
    { status: 200 }
  );
}
