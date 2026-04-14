import React, { useState } from "react";
import locationIcon from "../assets/location.png";
import deliveryIcon from "../assets/express-delivery.png";
import walletIcon from "../assets/wallet.png";
import verifyIcon from "../assets/verify.png";
import addIcon from "../assets/add.png";
import infoIcon from "../assets/information.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import m1 from "../assets/m1.jpeg";
import m2 from "../assets/m2.jpeg";
import m3 from "../assets/m3.jpeg";
const Checkout = () => {
  const [step, setStep] = useState("address");
  const handleStep = (value) => {
    setStep(value);
    alert(value.toUpperCase() + " Selected");
  };
  const handleClick = (msg) => alert(msg);
  return (
    <>
      <Navbar />
      <div className="bg-[#f7f7f7] min-h-screen p-4 md:p-8">
        {/* HEADER */}
        <h1 className="text-2xl font-semibold">Checkout</h1>
        <p className="text-gray-400 text-sm mb-6">
          Complete your order details below
        </p>
        <div className="flex items-center justify-between mb-10 max-w-3xl">
          <div onClick={() => handleStep("address")} className="flex flex-col items-center w-24 cursor-pointer">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center shadow-sm 
              ${step === "address" ? "bg-yellow-500" : "bg-gray-200"}`}>
              <img src={locationIcon} className={`w-4 ${step !== "address" && "opacity-40"}`} />
            </div>
            <p className={`text-sm mt-2 ${step === "address" ? "font-medium" : "text-gray-400"}`}>Address</p>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300 mx-2"></div>
          <div onClick={() => handleStep("shipping")} className="flex flex-col items-center w-24 cursor-pointer">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center 
              ${step === "shipping" ? "bg-yellow-500" : "bg-gray-200"}`}>
              <img src={deliveryIcon} className={`w-4 ${step !== "shipping" && "opacity-40"}`} />
            </div>
            <p className={`text-sm mt-2 ${step === "shipping" ? "font-medium" : "text-gray-400"}`}>Shipping</p>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300 mx-2"></div>
          <div onClick={() => handleStep("payment")} className="flex flex-col items-center w-24 cursor-pointer">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center 
              ${step === "payment" ? "bg-yellow-500" : "bg-gray-200"}`}>
              <img src={walletIcon} className={`w-4 ${step !== "payment" && "opacity-40"}`} />
            </div>
            <p className={`text-sm mt-2 ${step === "payment" ? "font-medium" : "text-gray-400"}`}>Payment</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {/* LEFT */}
          <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <img src={locationIcon} className="w-5" />
                <h2 className="font-semibold text-lg">Shipping Address</h2>
              </div>
              <span className="bg-[#C2863F] text-white text-xs px-3 py-1 rounded-md">
                Step 1 of 3
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                "First Name","Last Name","Email Address","Street Address",
                "City","State","ZIP Code","Phone Number"
              ].map((label, i) => (
                <div key={i} className={i === 2 || i === 3 ? "md:col-span-2" : ""}>
                  <label className="text-xs text-gray-400">{label}</label>
                  <input className="border border-gray-200 rounded-lg px-3 py-2 w-full mt-1 bg-[#fafafa]" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
              <input type="checkbox" />
              <span>Save this information for next time</span>
            </div>
            <button onClick={() => handleClick("Continue")}
              className="mt-6 bg-[#C2863F] text-white px-6 py-2.5 rounded-md">
              Continue to Shipping
            </button>
             {/* ICONS */}
            <div className="grid grid-cols-3 text-center mt-10 text-xs text-gray-600">
              <div>
                <img src={verifyIcon} className="mx-auto w-5 mb-2" />
                <h1>Secure Checkout</h1>
                <p>SSL Encrypted</p>
              </div>
              <div>
                <img src={deliveryIcon} className="mx-auto w-5 mb-2" />
                <h1>FREE Returns</h1>
                <p>30-day window</p>
              </div>
              <div>
                <img src={walletIcon} className="mx-auto w-5 mb-2" />
                <h1>Brand warranty</h1>
                <p>100% Genuine </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm self-start">
            <div className="flex justify-between mb-4">
              <h2 className="font-semibold text-lg">Order Summary</h2>
              <span className="text-sm text-gray-500">3 items</span>
            </div>
            {[m1, m2, m3].map((img, i) => (
              <div key={i} className="flex justify-between items-center mb-4">
                <div className="flex gap-3 items-center">
                  <img src={img} className="w-12 h-12 rounded-md" />
                  <div>
                    <p className="text-sm">
                      {i === 0 ? "Parker Jotter Gold  Trim Premium Ball Pen " :
                       i === 1 ? "Moleskine Classic Notebook-Sapphire " :
                       "Faber-Castell Polychromos Artists Pencils"}
                    </p>
                    <p className="text-xs text-gray-400">Qty: {i + 1}</p>
                    <p className="text-gray-400 text-sm">
                      ₹{i === 0 ? 1250 : i === 1 ? 499 : 399}
                    </p>
                  </div>
                </div>
            </div>
            ))}
          {/* PRICE */}
            <div className="border-t mt-4 pt-4 text-sm space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹1,948</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹45</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>GST (18%)</span>
                <span>₹350</span>
              </div>
              <div className="flex justify-between font-semibold pt-2">
                <span>Total</span>
                <span>₹2,343</span>
              </div>
            </div>
            {/* SAFE */}
            <div className="flex items-center gap-2 mt-4 p-2 rounded bg-[#404C3159] text-sm">
              <img src={verifyIcon} className="w-4" />
              Safe & Secure Payments. 100% Authentic Stationery Guaranteed
            </div>
            <button onClick={() => handleClick("Placed")}
              className="w-full mt-3 py-3 rounded-md bg-[#FFF49C] font-semibold">
              Place Order
            </button>
        <div className="mt-4 border border-gray-200 rounded-lg flex items-center justify-between px-3 py-2 bg-[#fafafa]">
       <div className="flex items-center gap-2 w-full">
      <img src={addIcon} className="w-4 opacity-60" />
      <input type="text"
      placeholder="Enter Promo Code"
      className="w-full bg-transparent outline-none text-sm"/>
      </div>
        <button onClick={() => handleClick("Apply Promo")}
        className="text-[#C2863FFF] font-medium text-sm" >
           Apply
         </button>
            </div>
            <div className="flex items-start gap-2 mt-3 text-xs">
              <img src={infoIcon} className="w-4 mt-1" />
              <div>
                <p className="text-[#C2863F] font-medium">Lekhamart Rewards</p>
                <p className="text-gray-500">You will earn points</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Checkout;