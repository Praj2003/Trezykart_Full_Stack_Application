"use client";
import React, { useEffect } from "react";
import ClothingDisplay from "@/components/ClothingDisplayCard";
import clothingData from "@/dataSets/ClothingData";
import { FaFilter } from "react-icons/fa";
import { useState } from "react";
import ClothingSidebar from "@/components/ClothingSidebar";
import { ProductItem } from "@/schemas/productItem";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";
const page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filteredData, setFilteredData] = useState(clothingData);
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState<ProductItem[]>([]);
  const { user } = useUser();

  const email = user?.emailAddresses[0]?.emailAddress;

  useEffect(() => {
    if (!email) return;
    const fetchCartItems = async () => {
      try {
        const productItems = await fetch(`/api/products?email=${email}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (productItems.ok) {
          const data = await productItems.json();
          setCartItems(data);
        }
      } catch (err) {
        console.log("There is some error while fetching the cart items" + err);
      }
    };

    fetchCartItems();
  }, [email]);

  const handleAddToCart = async (
    item: ProductItem
  ): Promise<ProductItem | void> => {
    try {
      if (!user) {
        console.log("User not signed in");
        return;
      }

      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...item, email }),
      });
      if (response.ok) {
        console.log(response);
        toast.success("Item added to cart successfully");
        window.location.reload();
      }
    } catch (err) {
      console.log("There is some error while adding the item to cart" + err);
    }
  };

  const handleFilterChange = (filters: { category?: string }) => {
    try {
      setLoading(true);
      if (filters.category && filters.category !== "All") {
        const newData = clothingData.filter(
          (item) => item.category === filters.category
        );
        setFilteredData(newData);
        setLoading(false);
      }
    } catch (err) {
      console.log("There is some error while filtering the data" + err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteFromCart = async (name: string, email: string) => {
    try {
      const reponse = await fetch(
        `/api/products/findID?name=${name}&email=${email}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (reponse.ok) {
         const value = await reponse.json();
          const id = value.data;
          await fetch(`/api/products/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          toast.success("Item removed from cart successfully");
          window.location.reload();
      }
      
    } catch (err) {
      console.log(
        "There is some error while removing the item from cart" + err
      );
    }
  };
  return (
    <div className="flex min-w-full min-h-screen">
      <div className="lg:top-24 md:top-24 left-8 fixed top-32">
        <button onClick={() => setIsMenuOpen(true)}>
          <FaFilter size={30} className="text-amber-700 cursor-pointer" />
        </button>
      </div>
      <ClothingSidebar
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onFilterChange={handleFilterChange}
      />
      <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-32 place-items-center gap-8">
        {filteredData.map((item) => {
          const isInCart = cartItems.some((it) => it.name === item.name);
          return (
            <ClothingDisplay
              item={item}
              key={item.id}
              onAddToCart={handleAddToCart}
              isInCart={isInCart}
              onRemoveFromCart={(name: string, email: string) =>
                handleDeleteFromCart(name, email)
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
