import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});



export const metadata: Metadata = {
  title: "trezykart App",
  description: "A full stack e-commerce application built with Next.js, Clerk, Razorpay, and Prisma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${poppins.variable} antialiased min-w-full  bg-slate-900`}
        >
          <Navbar />
          {children}
          <Toaster position="top-right" richColors />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
