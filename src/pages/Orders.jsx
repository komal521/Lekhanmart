import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import searchIcon from "../assets/search.png";
const Orders = () => {
  const [activeTab, setActiveTab] = useState("all");
  const tabs = [
    { key: "all", label: "All Orders" },
    { key: "progress", label: "In Progress" },
    { key: "delivered", label: "Delivered" },
    { key: "cancelled", label: "Cancelled" },
  ];
  return (
    <>
      <Navbar />
      <div className="bg-[#F4F4F4] min-h-screen px-4 md:px-10 py-6">
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm">
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div>
              <h1 className="text-xl md:text-2xl font-semibold">
                Order History
              </h1>
              <p className="text-xs md:text-sm text-gray-500 mt-1">
                View your past orders, track live shipments, and reorder easily.
              </p>
            </div>
            <div className="relative w-full md:w-72">
              <input type="text"
                placeholder="Search orders..."
                className="w-full pl-10 pr-3 py-2 border rounded-xl text-sm focus:outline-none" />
              <img src={searchIcon}
                className="w-4 absolute left-3 top-1/2 -translate-y-1/2 opacity-60" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between mt-5 gap-3">
            <div className="flex gap-2 flex-wrap">
              {tabs.map((tab) => (
                <button  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm ${
                    activeTab === tab.key
                      ? "bg-[#C2863F] text-white"
                      : "bg-gray-100 text-gray-600"
                  }`} >
                  {tab.label}
                </button>
              ))}
            </div>
            <select className="border rounded-lg px-3 py-2 text-xs md:text-sm">
              <option>Last 3 Months</option>
              <option>Last 6 Months</option>
              <option>This Year</option>
            </select>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Orders;