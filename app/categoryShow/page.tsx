import React from "react";
import ColourfulText from "@/components/ui/colourful-text";
import Image from "next/image";
import Link from "next/link";

const CategoryShowPage = () => {
  return (
    <div className="min-w-full min-h-screen flex justify-center items-center">
      <div className="container flex flex-col items-center justify-center gap-10 lg:gap-16 mt-20">
        <h1 className="text-white font-bold lg:text-7xl md:text-6xl text-4xl">
          One Stop, <ColourfulText text="Endless" /> Choices
        </h1>

        <div className="flex items-center justify-center flex-wrap gap-10">
          <div className="flex flex-col items-center justify-center">
            <div className="lg:w-[200px] md:w-[150px] w-[150px] lg:h-[200px] md:h-[150px] h-[150px] bg-white rounded-full relative cursor-pointer">
              <Link href={"/clothingSection"}><Image src={"/images/ClothingTrezy.jpg"} fill={true} alt="Clothing Category" className="rounded-full"/></Link>
            </div>
           <p className="text-white font-semibold mt-2 text-2xl">Clothing</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="lg:w-[200px] md:w-[150px] w-[150px] lg:h-[200px] md:h-[150px] h-[150px] bg-white rounded-full relative cursor-pointer">
                 <Image src={"/images/electronicsTrezy.jpg"} fill={true} alt="Clothing Category" className="rounded-full"/>
            </div>
            <p className="text-white font-semibold mt-2 text-2xl">
              Electronics
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="lg:w-[200px] md:w-[150px] w-[150px] lg:h-[200px] md:h-[150px] h-[150px] bg-white rounded-full relative cursor-pointer">
                 <Image src={"/images/gamingTrezy.jpg"} fill={true} alt="Clothing Category" className="rounded-full"/>
            </div>
            <p className="text-white font-semibold mt-2 text-2xl">Gaming</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="lg:w-[200px] md:w-[150px] w-[150px] lg:h-[200px] md:h-[150px] h-[150px] bg-white rounded-full relative cursor-pointer">
                 <Image src={"/images/essentialsTrezy.jpg"} fill={true} alt="Clothing Category" className="rounded-full"/>
            </div>
            <p className="text-white font-semibold mt-2 text-2xl">Essentials</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryShowPage;
