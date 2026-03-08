"use client";
import React from "react";
import { motion } from "motion/react";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="min-w-full flex items-center justify-between top-0 fixed bg-black/80 border-b border-amber-500/30  px-4 py-5 shadow-md z-20">
      <div className="flex items-center justify-center gap-3">
        <Link href={"/"}>
          <h1 className="font-bold text-white text-lg">Trezykart</h1>
        </Link>
      </div>

      <ul className="items-center justify-center gap-8 text-md font-bold lg:flex md:flex hidden">
        <motion.li
          whileHover={{ scale: 1.1, backgroundColor: "white", color: "black" }}
          className="text-white cursor-pointer px-3 py-2 rounded-md"
        >
          <Link href={"/"}>Home</Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1, backgroundColor: "white", color: "black" }}
          className="text-white cursor-pointer px-3 py-2 rounded-md"
        >
          <Link href={"/categoryShow"}>Products</Link>
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
          <Link href={"/myCart"}>MyCart</Link>
        </motion.li>
      </ul>

      <SignedOut>
        <SignInButton>
          <div className="flex items-center justify-center">
            <motion.button className="px-3 py-2 bg-neutral-800 border border-amber-700 rounded-lg text-white font-bold">
              Sign In
            </motion.button>
          </div>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <div className="flex items-center justify-center gap-3 mr-4">
          <GiHamburgerMenu
            size={30}
            className="text-amber-700 cursor-pointer lg:hidden md:hidden"
          />
          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
};

export default Navbar;
