"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { motion } from "motion/react";
import { ProductItem } from "@/schemas/productItem";
import { useUser } from "@clerk/nextjs";



export type ClothingItem = {
  id: string;
  name?: string;
  price?: number;
  category?: string;
  discountPrice?: number;
  description?: string;
  sizes?: string[];
  image?: string;
};

type ClothingProps = {
  item: ClothingItem;
  onAddToCart: (item: ProductItem) => Promise<ProductItem | void>;
  isInCart: boolean;
  onRemoveFromCart: (name:string, email:string) => Promise<void>;
};

const ClothingDisplay = ({
  item,
  onAddToCart,
  isInCart,
  onRemoveFromCart,
}: ClothingProps) => {
  const { user } = useUser();
  const email = user?.emailAddresses[0]?.emailAddress;

  const handleAddProduct = async () => {
    if (!email) {
      console.log("No email found for user");
      return;
    }

    const productToSave: ProductItem = {
      name: item.name || "",
      description: item.description || "",
      price: item.discountPrice || 0,
      clerkId: user?.id || "",
      email: email,
    };

    await onAddToCart(productToSave);
  };

  const handleDeleteFromCart = async () => {
    if (!email) {
      console.log("No email found for user");
      return;
    }
    await onRemoveFromCart(item.name || "", email);
  };


  return (
    <Card
      className="w-[300px] lg-h-[350px] bg-white border-4 border-amber-700 rounded-2xl"
      key={item.id}
    >
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-lg  text-teal-800 font-extrabold">
          {item.name}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="relative w-full h-[200px] rounded-lg">
            <Image
              src={"/images/ClothingTrezy.jpg"}
              alt="Item Image"
              fill={true}
              className="rounded-lg"
            />
          </div>

          <p className="text-md font-semibold text-gray-600">
            {item.description}
          </p>

          <div className="flex items-center gap-3 my-3">
            <p className="font-bold text-slate-500 text-lg line-through">
              ₹{item.price}
            </p>
            <p className="font-bold text-red-600 text-lg">
              ₹{item.discountPrice}
            </p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-center">
        {isInCart ? (
          <motion.button
            onClick={handleDeleteFromCart}
            whileHover={{
              scale: 1.1,
              backgroundColor: "red",
              color: "white",
            }}
            className="px-3 py-2 rounded-lg bg-red-600 text-white font-bold cursor-pointer"
          >
            Remove from Cart
          </motion.button>
        ) : (
          <motion.button
            onClick={handleAddProduct}
            whileHover={{
              scale: 1.1,
              backgroundColor: "teal",
              color: "white",
            }}
            className="px-3 py-2 rounded-lg bg-amber-700 text-white font-bold cursor-pointer"
          >
            Add to Cart
          </motion.button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ClothingDisplay;
