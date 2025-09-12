"use client";
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { FaWallet } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export default function Home() {
  const words = ["Simple", "Quick", "Secure", "Fun"];
  return (
    <div className="min-w-full min-h-screen bg-slate-900 grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="lg:text-5xl text-4xl text-amber-500 font-bold text-center">
            Shopping made{" "}
            <span className="inline-block w-[140px] text-left ">
              <FlipWords words={words} />
            </span>
          </h1>

          <div className="flex items-center justify-center lg:gap-8 md:gap-1 gap-2 mb-6 mt-5">
            <div className="flex items-center gap-2 text-blue-400 font-bold">
              <FaWallet className="text-white" />
              Secure Payments
            </div>

            <div className="flex items-center gap-2 text-blue-400 font-bold">
              <MdOutlineShoppingCart className="text-white" />
              Latest Products
            </div>

            <div className="flex items-center gap-2 text-blue-400 font-bold">
              <MdSupportAgent className="text-white" />
              Reliable Support
            </div>
          </div>

          <div className="flex items-center justify-center gap-10 mt-10">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Sign Up
              </span>
            </button>

            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Start Shopping
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="Picture w-full lg:flex items-center justify-center md:hidden hidden">
        <CardContainer className="mt-10">
          <CardBody className="w-[500px] h-[500px] border-3 bg-white  border-amber-600 shadow-2xl flex flex-col items-center justify-center gap-6">
            <CardItem translateZ={20}>
              <h1 className=" font-bold text-2xl bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                Your cart been waiting for you at TrezyKart
              </h1>
            </CardItem>

            <CardItem translateZ={30}>
              <h1 className=" font-bold text-lg bg-gradient-to-r text-gray-600">
                Discover trendy finds, handpicked just for you.
              </h1>
            </CardItem>

            <CardItem
              translateZ={50}
              className="w-[300px] h-[300px] relative rounded-full border-1 shadow-2xl"
            >
              <Image
                src={"/images/shop.jpg"}
                alt="shopping picture"
                fill={true}
                className="rounded-full"
              ></Image>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}
