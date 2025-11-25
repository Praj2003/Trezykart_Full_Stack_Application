import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name");
    const email = searchParams.get("email");

    const product = await prisma.product.findFirst({
      where: {
        name: name || undefined,
        userEmail: email || undefined,
      },
    });

    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: product.id }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Failed to fetch the product from database" },
      { status: 500 }
    );
  }
}
