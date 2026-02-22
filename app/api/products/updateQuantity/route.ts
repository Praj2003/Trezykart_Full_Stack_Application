import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function PUT(req: NextRequest) {
    try{
      const {id, quantity} = await req.json();
      const updatedProduct = await prisma.product.update({
        where: {id},
        data: {quantity}
      })
      return NextResponse.json(updatedProduct);
    }catch(err){
      return NextResponse.json({error: "Failed to update product quantity"}, {status: 500});
    }
}