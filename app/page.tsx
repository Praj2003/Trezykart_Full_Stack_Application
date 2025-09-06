"use client";
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { FaWallet } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";

export default function Home() {
  const words = ["Simple", "Quick", "Secure", "Fun"];
  return (
    <div className="min-w-full min-h-screen bg-slate-900 grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="text-4xl text-blue-500 font-bold text-center">
            Shopping made{" "}
            <span className="inline-block w-[140px] text-left ">
              <FlipWords words={words} />
            </span>
          </h1>

          <div className="flex items-center justify-center lg:gap-2 md:gap-1 gap-2 mb-6">
            <div className="flex items-center gap-2 text-teal-700 font-bold">
              <FaWallet className="text-teal-700" />
              Secure Payments
            </div>

            <div className="flex items-center gap-2 text-teal-700 font-bold">
              <MdOutlineShoppingCart className="text-teal-700" />
              Latest Products
            </div>

            <div className="flex items-center gap-2 text-teal-700 font-bold">
              <MdSupportAgent className="text-teal-700" />
              Reliable Support
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
