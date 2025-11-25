import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const deletedProduct = await prisma.product.delete({
      where: {
        id: id || "",
      },
    });
    return NextResponse.json({ data: deletedProduct }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Failed to delete the product from database" },
      { status: 500 }
    );
  }
}
