"use client";
import React from "react";
import ClothingDisplay from "@/components/ClothingDisplay";
import clothingData from "@/dataSets/ClothingData";

const page = () => {
  return (
    <div className="flex min-w-full min-h-screen">
      <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-32 place-items-center gap-8">
        {clothingData.map((item) => (
          <ClothingDisplay item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default page;
