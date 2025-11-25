"use client";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MdCancel } from "react-icons/md";

type filterData = {
  category?: string;
  price?: [number, number];
  size: string;
};

const ClothingSidebar = ({
  isOpen,
  onClose,
  onFilterChange,
}: {
  isOpen: boolean;
  onClose: () => void;
  onFilterChange?: (filters: filterData) => void;
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [category, setCategory] = useState<string>("All");
  const [size, setSize] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);

  const handleApply = () => {
    onFilterChange?.({ category, size, price: priceRange });
    onClose();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={sidebarRef}
          className="fixed top-0 left-0 h-full w-96 bg-slate-500 z-50 shadow-lg"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <h2 className="p-4 text-white font-bold text-2xl mt-12">
            Find What You Need
          </h2>
          <button
            onClick={() => onClose()}
            className="absolute top-8 right-8 text-white text-3xl font-bold cursor-pointer"
          >
            <MdCancel />
          </button>
          <div className="flex flex-col items-center mt-4">
            <div className="w-full px-4">
              <h2 className="text-white font-bold mb-3">Categories</h2>
              {["All", "Men", "Women", "Kids"].map((cat) => {
                return (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-3 py-2 m-2 rounded-lg ${
                      category === cat
                        ? "bg-amber-700 text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
             <button onClick={handleApply} className="px-3 py-2 rounded-lg bg-black text-white font-bold mt-9">Apply</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ClothingSidebar;
