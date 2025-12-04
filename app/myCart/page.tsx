"use client";
import React from "react";
import ColourfulText from "@/components/ui/colourful-text";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

const MyCartPage = () => {
  const {user} = useUser()
  const email = user?.primaryEmailAddress?.emailAddress  
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/products?email=${email}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setProducts(data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }

      fetchProducts();
    };
  }, []);
  return (
    <div className="min-w-full min-h-screen">
      <div className="container mx-auto mt-32">
        <h1 className="text-3xl font-bold text-center text-white mb-8">
          <ColourfulText text="My Cart" />
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="flex flex-col items-center py-3 px-2 bg-slate-800 m-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Your cart</h2>
        </div>
      </div>
    </div>
  );
};

export default MyCartPage;
