"use client";
import React from "react";
import ColourfulText from "@/components/ui/colourful-text";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { motion } from "motion/react";
import { FaPlus } from "react-icons/fa";
import { ProductItem } from "@/schemas/productItem";

const MyCartPage = () => {
  const { user } = useUser();
  const email = user?.primaryEmailAddress?.emailAddress;
  const name = user?.username;
  const [products, setProducts] = useState<ProductItem[]>([]);
  
  useEffect(() => {
    fetchProducts();
  }, [email]);

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
  };

  const handleQuantityIncrease = async () => {
    try {
      const response = await fetch("/api/products/updateQuantity", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: products[0].id,
          quantity: products[0].quantity + 1,
        }),
      });

      if (response.ok) {
        await fetchProducts();
      }
    } catch (err) {
      console.error("Error updating product quantity:", err);
    }
  };

  return (
    <div className="min-w-full min-h-[70vh]">
      <div className="container mx-auto mt-32">
        <h1 className="text-3xl font-bold text-center text-white mb-1 mt-24">
          <ColourfulText text={`Welcome ${name}`} />
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-4 mt-16">
        <div className="flex flex-col items-center py-3 px-2 bg-slate-800 m-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Your cart</h2>
          <div className="flex flex-col items-center max-h-96 overflow-y-auto w-full px-5">
            {products.map((product: ProductItem) => (
              <div
                key={product.id}
                className="w-full grid grid-cols-2 bg-white text-black rounded-lg px-4 mb-4 shadow-md"
              >
                <div className="flex flex-col gap-2 py-2">
                  <h3 className="text-lg font-bold">{product.name}</h3>

                  <div className="flex items-center justify-start gap-3">
                    <p className="font-bold text-gray-700">
                      Quantity: {product.quantity}
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      onClick={handleQuantityIncrease}
                      className="bg-amber-600 text-white p-2 rounded-md flex items-center justify-center"
                    >
                      <FaPlus />
                    </motion.button>
                  </div>
                </div>
                <div className="w-1/2 flex items-center justify-end ml-16">
                  <p className="mb-2 font-bold text-black">
                    ${product.price * product.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center py-3 px-2 bg-slate-800 m-4 rounded-lg shadow-lg max-h-[200px]">
          <h2 className="text-xl font-semibold text-white mb-4">
            Total Amount
          </h2>
          <div className="flex flex-col items-center w-full px-5">
            <div className="w-full bg-white text-black rounded-lg px-4 py-6 shadow-md">
              {products.length === 0 ? (
                <p className="text-center">No items in the cart</p>
              ) : (
                <>
                  <p className="mb-4 font-bold text-center text-amber-700 text-xl">
                    $
                    {products
                      .reduce(
                        (total, product: any) =>
                          total + product.price * product.quantity,
                        0,
                      )
                      .toFixed(2)}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCartPage;
