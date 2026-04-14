import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import addIcon from "../assets/add.png";
import minusIcon from "../assets/minus.png";
import deleteIcon from "../assets/bin.png";
import copyIcon from "../assets/copy.png";
import arrow from "../assets/right-arrow.png";
import verify from "../assets/verify.png";
import undo from "../assets/undo.png";
import star from "../assets/star.png";
import carIcon from "../assets/car.png";
import p1 from "../assets/e1.jpeg";
import p2 from "../assets/e2.jpeg";
import p3 from "../assets/e3.jpeg";
import f1 from "../assets/u1.jpeg";
import f2 from "../assets/u2.jpeg";
import f3 from "../assets/u3.jpeg";
import f4 from "../assets/u4.jpeg";
const Cart = () => {
  const [qty, setQty] = useState(1);
  const handleApply = () => {
    alert("Coupon Applied ");
  };
  const navigate = useNavigate();
  const handleCheckout = () =>{
    navigate("/checkout");
  }
  const handleViewAll = () => {
    alert("Viewing All Products ");
  };
  return (
    <>
      <Navbar />
      <div className="w-full bg-[#f7f7f7] px-4 md:px-12 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-semibold"> Shopping Cart</h2>
            </div>
            <p className="text-sm text-gray-500 mb-5">
              You have 3 items in your cart
            </p>
            <div className="bg-[#FFF4CC] p-4 rounded-lg mb-6">
              <div className="flex items-center justify-between text-sm font-medium">
                <div className="flex items-center gap-2">
                  <img src={carIcon} className="w-4" />
                  <span>Add ₹149 more for FREE Shipping</span>
                </div>
                <span>73%</span>
              </div>
              <div className="w-full bg-[#F5E6A6] h-2 mt-2 rounded-full">
                <div className="bg-[#C2863F] h-2 w-[73%] rounded-full"></div>
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>PRODUCT DETAILS</span>
              <span>TOTAL</span>
            </div>
            <div className="border-b mb-4"></div>
            {[
              {
                cat: "WRITING ESSENTIALS",
                name: "Lamy Safari Fountain Pen - Charcoal Black",
                img: p1,
              },
              {
                cat: "NOTEBOOKS",
                name: "Rhodia DotPad No. 16 - A5 Orange",
                img: p2,
              },
              {
                cat: "OFFICE SUPPLIES",
                name: "Midori Brass Ruler - 15cm",
                img: p3,
              },
            ].map((item, index) => (
              <div key={index} className="border-b py-5">
                <p className="text-[11px] text-gray-400 mb-1 tracking-wide">
                  {item.cat}
                </p>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex gap-4">
                    <img src={item.img}
                      className="w-16 h-16 rounded-lg object-cover" />
                    <div>
                      <h3 className="text-sm font-semibold leading-snug max-w-[250px]">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-4 mt-3">
                        <div className="flex items-center border rounded-md px-2 py-1 gap-2">
                          <button  onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>
                            <img src={minusIcon} className="w-3" />
                          </button>
                          <span className="text-sm">{qty}</span>
                          <button onClick={() => setQty(qty + 1)}>
                            <img src={addIcon} className="w-3" />
                          </button>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500 text-sm cursor-pointer hover:text-[#C2863F] transition duration-200">
                          <img src={deleteIcon} className="w-4" />
                          Remove
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-black font-semibold text-sm">
                      ₹12,499
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {/* FREQUENT */}
            <div className="mt-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg">
                  Frequently Bought Together
                </h3>
                <button onClick={handleViewAll}
                  className="flex items-center gap-1 text-sm text-[#C2863FFF]"  >
                  View All <img src={arrow} className="w-4" />
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[f1, f2, f3, f4].map((img, i) => (
                  <div key={i} className="bg-white border rounded-lg p-3">
                    <img src={img} className="rounded-lg mb-2 h-28 w-full object-cover" />
                    <p className="text-xs font-medium">Product {i + 1}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <img src={star} className="w-3" />
                      <span className="text-xs">4.7</span>
                    </div>
                    <p className="text-xs text-gray-400">Premium Quality Item</p>
                    <p className="text-sm font-semibold text-[#C2863F] mt-1">
                      ₹12,499
                    </p> </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white border rounded-xl p-5 h-fit shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
            <p className="text-xs font-semibold text-black mb-2">
              Have a coupon code?
            </p>
            <div className="flex items-center border rounded-lg overflow-hidden mb-4">
              <div className="px-3">
                <img src={copyIcon} className="w-4" />
              </div>
              <input placeholder="Enter code"
                className="flex-1 outline-none text-sm px-2 py-2"  />
              <button onClick={handleApply}
                className="bg-[#C2863F] text-white px-4 py-2 text-sm" >
                Apply
              </button>
            </div>
            <div className="text-sm space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-black">Subtotal</span>
                <span className="text-[#C2863FFF]">₹12,499,oo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black">Estimated Tax(8%)</span>
                <span className="text-[#C2863FFF]">₹199.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black"> Estimated Shipping</span>
                <span className="text-[#C2863FFF]">₹499.00</span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-3 text-base">
                <span>Total</span>
                <span className="text-[#C2863FFF]">₹12,599.00</span>
              </div>
            </div>
            <button onClick={handleCheckout}
              className="w-full bg-[#C2863FFF] hover:bg-[#a96d2f] text-white py-3 rounded-lg flex justify-center items-center gap-2 text-sm font-medium" >
              Proceed to Checkout
              <img src={arrow} className="w-4" />
            </button>
            <div className="mt-6 flex justify-around text-xs text-gray-500">
              <div className="text-center">
                <img src={verify} className="w-5 mx-auto mb-1" />
                Secure Payment
              </div>
              <div className="text-center">
                <img src={undo} className="w-5 mx-auto mb-1" />
              30-days Returns
              </div>   
            </div>
<div className="mt-6 border-t pt-4">
  <div className="flex items-center gap-2 text-sm text-gray-600">
    <img src={copyIcon} className="w-4" />
    <span className="font-medium">Need help with your order?</span>
  </div>
  <p onClick={() => alert("Connecting to Support...")}
    className="text-[#C2863F] text-sm mt-1 cursor-pointer hover:underline" >
    Connect Support
   </p>
      </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;