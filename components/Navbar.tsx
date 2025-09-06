"use client";
import React from "react";
import { motion } from "motion/react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="min-w-full flex items-center justify-between top-0 fixed bg-black/80 border-b border-amber-500/30  px-4 py-5 shadow-md z-20">
      <div className="flex items-center justify-center gap-3">
        <h1 className="font-bold text-white text-lg">Trezykart</h1>
      </div>

      <ul className="flex items-center justify-center gap-8 text-md font-bold ">
        <motion.li
          whileHover={{ scale: 1.1, backgroundColor: "white", color: "black" }}
          className="text-white cursor-pointer px-3 py-2 rounded-md"
        >
          Home
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1, backgroundColor: "white", color: "black" }}
          className="text-white cursor-pointer px-3 py-2 rounded-md"
        >
          Products
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1, backgroundColor: "white", color: "black" }}
          className="text-white cursor-pointer px-3 py-2 rounded-md"
        >
          About
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1, backgroundColor: "white", color: "black" }}
          className="text-white cursor-pointer px-3 py-2 rounded-md"
        >
          Contact
        </motion.li>
      </ul>
      
      <SignedOut>
         <SignInButton>
           <div className="flex items-center justify-center">
              <motion.button className="px-3 py-2 bg-neutral-800 border border-amber-700 rounded-lg text-white font-bold">Sign In</motion.button>
           </div>
         </SignInButton>
      </SignedOut>
    </div>
  );
};

export default Navbar;
