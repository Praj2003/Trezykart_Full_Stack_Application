import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, description, price, email, clerkId } = body;

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!existingUser) {
      await prisma.user.create({
        data: {
          email: email,
          clerkId: clerkId,
          name: email?.split("@")[0] || "No Name",
        },
      });
    }

    const createdProduct = await prisma.product.create({
      data: {
        name,
        description,
        price,
        userEmail: email,
      },
    });

    return NextResponse.json({ data: createdProduct }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { message: "Failed to add the product to database" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    const products = await prisma.product.findMany({
      where: {
        userEmail: email || undefined,
      },
    });
    return NextResponse.json(products, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Failed to fetch the products from database" },
      { status: 500 }
    );
  }
}