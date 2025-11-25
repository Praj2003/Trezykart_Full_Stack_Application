"use client";
import React from "react";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 md:gap-4 min-w-full px-8 py-5 bg-black text-white items-center justify-between mt-3 border-amber-600">
      <div className="flex flex-col items-center gap-5">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-3 py-2  text-white rounded-lg text-sm font-bold cursor-pointer w-24 hover:bg-amber-600 hover:text-white transition-colors duration-300"
        >
          Home
        </motion.button>

         <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-3 py-2  text-white rounded-lg text-sm font-bold cursor-pointer w-24 hover:bg-amber-600 hover:text-white transition-colors duration-300"
        >
            Products
        </motion.button>

         <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-3 py-2  text-white rounded-lg text-sm font-bold cursor-pointer w-24 hover:bg-amber-600 hover:text-white transition-colors duration-300"
        >
            About Us
        </motion.button>
      </div>

      <div className="flex flex-col items-center gap-5 text-white font-bold">
        <p className="text-sm ">© 2025 Trezykart. All rights reserved.</p>
        <p className="text-sm ">Created by Prajval Kanda</p>
          <p className="text-sm ">Phone: +91 XXXXX XXXXX</p>
      </div>

      <div className="flex flex-col items-center gap-5 text-white font-bold">
           <p className="text-md ">Connect with me</p>
      </div>
    </div>
  );
};

export default Footer;
