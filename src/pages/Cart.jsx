import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Cart() {
  return (
    <div>
      <Navbar />
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold">Your Cart 🛒</h1>
        <p className="text-gray-500 mt-3">Cart items will appear here</p>
      </div>
      <Footer />
    </div>
  );
}