import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";

import clothingData from "@/dataSets/ClothingData";

type ClothingItem = {
  id: number;
  name: string;
  price: number;
  category: string;
  discountPrice: number;
  description: string;
  sizes: string[];
  image: string;
};

type ClothingProps = {
  item: ClothingItem;
};

const ClothingDisplay = ({ item }: ClothingProps) => {
  return (
    <Card className="w-[300px] lg-h-[350px] bg-white border-4 border-amber-700" key={item.id}>
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-lg  text-teal-800 font-extrabold">{item.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="relative w-[200px] h-[200px] rounded-lg">
            <Image src={"/images/ClothingTrezy.jpg"} alt="Item Image" fill={true} className="rounded-lg"></Image>
          </div>

          <p className="text-md font-semibold text-gray-600">
            {item.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClothingDisplay;
