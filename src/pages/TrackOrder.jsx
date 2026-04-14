import React, { useState } from "react";
import deliveryIcon from "../assets/express-delivery.png";
import locationIcon from "../assets/location.png";
import questionIcon from "../assets/question.png";
import clockIcon from "../assets/clock (1).png";
import checkIcon from "../assets/check.png";
import chevron from "../assets/chevron.png";
import item1 from "../assets/l1.jpeg";
import item2 from "../assets/l2.jpeg";
import searchIcon from "../assets/search.png";
const TrackOrder = () => {
  const [activeBtn, setActiveBtn] = useState("");
  const steps = [
    { label: "Order Placed", date: "Oct 24, 10:04 AM", done: true },
    { label: "Packed", date: "Oct 24, 02:15 PM", done: true },
    { label: "Shipped", date: "Oct 25, 09:00 AM", active: true },
    { label: "Out for Delivery", date: "--" },
    { label: "Delivered", date: "--" },
  ];
  const handleClick = (name) => {
    setActiveBtn(name);
  };
  return (
    <div className="w-full max-w-6xl mx-auto space-y-5 p-3 md:p-5">
      <div>
        <h1 className="text-xl md:text-2xl font-bold">Track Your Order</h1>
        <p className="text-sm text-gray-500">
          Enter your order details to see real-time updates on your shipment.
        </p>
        <div className="bg-gray-100 p-3 rounded-xl mt-3 flex flex-col md:flex-row gap-2 items-center">
          <div className="w-full">
       <p className="text-xs text-gray-600 mb-1">Order ID</p>
     <div className="flex items-center bg-white px-3 py-2 rounded-lg border w-full">
    <img src={searchIcon} className="w-4 mr-2" />
    <input placeholder="LM-8892410"
      className="outline-none text-sm w-full"/>
       </div>
       </div>
     <div className="w-full">
     <p className="text-xs text-gray-600 mb-1">Phone Number / Email</p>
     <input placeholder="ria.a@example.com"
    className="px-3 py-2 rounded-lg border w-full text-sm"/>
           </div>
            <button onClick={() => handleClick("track")}
            className="px-5 py-2 mt-4 rounded-lg text-white text-sm whitespace-nowrap"
            style={{
              backgroundColor: activeBtn === "track" ? "#404C31" : "#C2863F",
            }}>
            Track Status
          </button>
          </div>
         </div>
      <div className="rounded-2xl overflow-hidden shadow-sm border">
        <div  className="flex justify-between items-center p-4"
          style={{
            background: "linear-gradient(180deg, #FFFFFFFF 0%, #FFF49CFF 100%)",
          }}>
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-full">
              <img src={deliveryIcon} className="w-5" />
            </div>
            <div>
              <h2 className="font-semibold">Arriving by Oct 27</h2>
              <p className="text-xs text-gray-600">
                Estimated delivery date for Order #LM-8892410
              </p>
            </div>
          </div>
          <span onClick={() => handleClick("status")}
            className="text-xs px-3 py-1 rounded-full cursor-pointer"
            style={{
              backgroundColor: activeBtn === "status" ? "#404C31" : "#C2863F",
              color: "#fff",
            }}  >
            On the way
          </span>
        </div>
        <div className="px-3 py-5 bg-[#FFF8C7]">
          <div className="flex justify-between items-center relative">
            <div className="absolute top-4 left-0 right-0 h-[2px] bg-gray-300"></div>
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center w-full z-10">
                <div className={`w-8 h-8 flex items-center justify-center rounded-full ${
                    step.active
                      ? "bg-white border-2 border-black"
                      : step.done
                      ? "bg-[#404C31]"
                      : "bg-gray-300"
                  }`}>
                  {step.done ? (
                    <img src={checkIcon} className="w-4 invert" />
                  ) : step.active ? (
                    <img src={deliveryIcon} className="w-4" />
                  ) : step.label === "Out for Delivery" ? (
                    <img src={locationIcon} className="w-4" />
                  ) : (
                    <img src={checkIcon} className="w-4 opacity-40" />
                  )}
                </div>
                <p className="text-[10px] md:text-xs mt-2 text-center">
                  {step.label}
                </p>
                <p className="text-[9px] text-gray-500">{step.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl border">
          <h3 className="font-semibold mb-3">Shipment Details</h3>
          <div className="bg-gray-100 p-3 rounded-lg mb-3 text-sm">
            <div className="flex gap-2">
              <img src={locationIcon} className="w-3 h-3 mt-1" />
              <div>
                Kashish sharma <br />
                123 Elegant Avenue, Suite 400 <br />
                Whitefield, Bangalore - 560066
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Carrier</p>
              <p>BlueDart Express</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Tracking ID</p>
              <p>BD-77123901</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border">
          <div className="flex justify-between mb-3">
            <h3 className="font-semibold">Order Summary</h3>
            <span className="text-xs text-[#C2863F]">View Invoice</span>
          </div>
          <div className="flex justify-between mb-3">
            <div className="flex gap-2">
              <img src={item1} className="w-10 h-10 rounded" />
              <div className="text-xs">
                Premium Brass Fountain Pen <br />
                <span className="text-gray-500">Midnight Blue • Qty: 1</span>
              </div>
            </div>
            ₹1,249
          </div>
          <div className="flex justify-between border-t pt-3">
            <div className="flex gap-2">
              <img src={item2} className="w-10 h-10 rounded" />
              <div className="text-xs">
                Leather Journal <br />
                <span className="text-gray-500">Tan Brown • Qty: 2</span>
              </div>
            </div>
            ₹1,798
          </div>
          <div className="flex justify-between border-t mt-3 pt-3 font-semibold">
            <p>Total Paid</p>
            <p>₹3,047</p>
          </div>
        </div>
      </div>
      {/* SUPPORT */}
      <div className="bg-[#C2863F] text-white p-4 rounded-xl flex flex-col md:flex-row justify-between items-center gap-3">
        <div>
          <p className="font-medium flex items-center gap-2">
            <img src={questionIcon} className="w-4" />
            Need assistance with your shipment?
          </p>
          <p className="text-xs opacity-90">
            Our support team is available 24/7 to help you.
          </p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button onClick={() => handleClick("faq")}
            className="px-3 py-1 rounded-lg text-sm"
            style={{
              backgroundColor: activeBtn === "faq" ? "#404C31" : "#fff",
              color: activeBtn === "faq" ? "#fff" : "#000",
            }}>
            Check FAQs
          </button>
          <button onClick={() => handleClick("contact")}
            className="px-3 py-1 rounded-lg text-sm"
            style={{
              backgroundColor: activeBtn === "contact" ? "#fff" : "#404C31",
              color: activeBtn === "contact" ? "#000" : "#fff",
            }} >
            Contact Support
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl border overflow-hidden">
        <h3 className="font-semibold p-4 border-b">Recent Updates</h3>
        {[1,2,3].map((_, i) => (
          <div key={i} className="flex justify-between items-center px-4 py-3 border-b last:border-none">
            <div className="flex gap-3">
              <img src={clockIcon} className="w-3 h-3 mt-1" />
              <div className="text-sm">
                <p>Package update example</p>
                <span className="text-xs text-gray-500">Oct 25</span>
              </div>
            </div>
            <img src={chevron} className="w-4 opacity-60" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackOrder;