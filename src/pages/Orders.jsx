import React, { useState } from "react";
import searchIcon from "../assets/search.png";
import downArrow from "../assets/down-arrow.png";
import docIcon from "../assets/document.png";
import deliveredIcon from "../assets/warranty.png";
import transitIcon from "../assets/express-delivery.png";
import processIcon from "../assets/box.png";
import cancelIcon from "../assets/close.png";
import moreIcon from "../assets/more.png";
import undoIcon from "../assets/undo.png";
import o1 from "../assets/o1.webp";
import o2 from "../assets/o2.webp";
import o3 from "../assets/o3.webp";
import o4 from "../assets/o4.webp";
import o5 from "../assets/o5.webp";
import o6 from "../assets/o6.webp";
import o7 from "../assets/o7.webp";
import o8 from "../assets/o8.webp";
const Orders = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [activeActions, setActiveActions] = useState(
    Object.fromEntries([0, 1, 2, 3, 4].map((i) => [i, "track"]))
  );
  const [activeHelp, setActiveHelp] = useState("view");
  const [openFilter, setOpenFilter] = useState(false);
const [selectedFilter, setSelectedFilter] = useState("Last 3 Months");
  const handleAction = (index, type) => {
    setActiveActions((prev) => ({
      ...prev,
      [index]: type,
    }));
  };
  const tabs = [
    { key: "all", label: "All Orders" },
    { key: "progress", label: "In Progress" },
    { key: "delivered", label: "Delivered" },
    { key: "cancelled", label: "Cancelled" },
  ];
  const orders = [
    {
      id: "#LM-78521",
      title: "Premium Fountain Pen Set and 3 more items",
      date: "Oct 12, 2025",
      price: "₹1,299",
      status: "Delivered",
      icon: deliveredIcon,
      images: [o1, o2, o3],
    },
    {
      id: "#LM-78522",
      title: "A5 Notebook Pack and 2 more items",
      date: "Nov 2, 2025",
      price: "₹599",
      status: "In Transit",
      icon: transitIcon,
      images: [o4, o5],
    },
    {
      id: "#LM-78523",
      title: "Desk Lamp and 1 more item",
      date: "Nov 5, 2025",
      price: "₹899",
      status: "Processing",
      icon: processIcon,
      images: [o6],
    },
    {
      id: "#LM-78524",
      title: "Calligraphy Ink (Blue)",
      date: "Nov 8, 2025",
      price: "₹299",
      status: "Cancelled",
      icon: cancelIcon,
      images: [o7],
    },
    {
      id: "#LM-78525",
      title: "Table and 5 more items",
      date: "Nov 10, 2025",
      price: "₹2,499",
      status: "Delivered",
      icon: deliveredIcon,
      images: [o8, o1, o2],
    },
  ];
  return (
      <div className="bg-[#F6F6F6] min-h-screen px-4 md:px-10 py-6">
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">
              Order History
            </h1>
            <p className="text-xs md:text-sm text-gray-500 mt-1">
              View your past orders, track live shipments, and quickly reorder your favorite essentials.
            </p>
          </div>
          <div className="relative w-full md:w-72">
            <img src={searchIcon}
              className="w-4 absolute left-3 top-[35%] -translate-y-1/2 opacity-60 pointer-events-none"/>
            <input  type="text"
              placeholder="Search by Order ID or Product"
              className="w-full pl-10 pr-3 py-2 border rounded-xl text-sm bg-white focus:outline-none"/>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between mt-5 gap-3">
          <div className="flex gap-2 flex-wrap">
            {tabs.map((tab) => (
              <button key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm ${
                  activeTab === tab.key
                    ? "bg-[#C2863FFF] text-white"
                    : "bg-gray-200 text-gray-600"
                }`}>
                {tab.label}
              </button>))}
          </div>
          <div className="flex items-center gap-2">
  <span className="text-sm text-gray-600">Sort by:</span>
  <div className="relative w-44">
    <div onClick={() => setOpenFilter(!openFilter)}
      className="border rounded-lg px-3 py-2 text-sm bg-white cursor-pointer flex justify-between items-center" >
      {selectedFilter}
      <img src={downArrow} className="w-3" />
    </div>
    {openFilter && (
      <div className="absolute w-full mt-1 border rounded-lg bg-white shadow z-10">
        <div onClick={() => {
            setSelectedFilter("Last 3 Months");
            setOpenFilter(false); }}
          className={`px-3 py-2 cursor-pointer ${
            selectedFilter === "Last 3 Months"
              ? "bg-[#C2863FFF] text-white"
              : "bg-white text-black" }`} >
          Last 3 Months
        </div>
        <div onClick={() => {
            setSelectedFilter("Last 6 Months");
            setOpenFilter(false); }}
          className={`px-3 py-2 cursor-pointer ${
            selectedFilter === "Last 6 Months"
              ? "bg-[#C2863FFF] text-white"
              : "bg-white text-black"
          }`} >
          Last 6 Months
        </div>   </div>
          )}
        </div>
       </div></div>
        <div className="bg-white mt-6 p-5 rounded-2xl shadow-sm space-y-4">
          {orders.map((order, index) => (
         <div key={index} className="border rounded-xl p-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-4">
         <div className="flex gap-6 text-[11px] text-gray-500 flex-wrap">
        <div>
         <p>ORDER ID</p>
         <p className="text-black font-medium">{order.id}</p>
         </div>
         <div>
         <p>PLACED ON</p>
        <p className="text-black">{order.date}</p>
        </div>
         <div>
        <p>TOTAL PRICE</p>
         <p className="text-black">{order.price}</p>
         </div>
          </div>
          <div className="flex items-center gap-4 text-xs">
           <button className="flex items-center gap-1 text-gray-600">
             <img src={docIcon} className="w-4" />
                    Invoice
               </button>
               <div className="flex items-center gap-1 text-gray-600">
                 <img src={order.icon} className="w-3" />
                    {order.status}
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
             <div className="flex items-center gap-4">
              <div className="flex">
               {order.images.slice(0, 2).map((img, i) => (
               <img key={i} src={img}
              className={`w-14 h-14 object-contain bg-white p-1 rounded-lg border ${
                i !== 0 ? "-ml-3" : "" }`} />
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{order.title}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Shipment will be delivered soon.
                    </p>
                  </div>
                </div>
                {/* RIGHT BUTTONS */}
                <div className="flex items-center gap-3">
                  <button onClick={() => handleAction(index, "track")}
                    className={`px-3 py-1.5 rounded-md text-xs border ${
                      activeActions[index] === "track"
                        ? "bg-[#C2863F] text-white"
                        : "bg-white"
                    }`} >
                    Track Order
                  </button>
                  <button onClick={() => handleAction(index, "reorder")}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-xs border ${
                      activeActions[index] === "reorder"
                        ? "bg-[#C2863F] text-white"
                        : "bg-white" }`}>
                    <img src={undoIcon} className="w-3" />
                    Reorder
                  </button>
                  <img src={moreIcon} className="w-4 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
          <div className="text-center pt-3">
            <p className="text-xs text-gray-500 mb-2">
              Showing 5 of 24 orders
            </p>
            <button className="bg-white px-4 py-2 rounded-lg text-xs">
              Load More Orders
            </button>
          </div>
        </div>
        <div className="bg-[#FFF49CFF] mt-6 p-5 rounded-xl flex flex-col md:flex-row md:justify-between items-center gap-3">
          <div>
            <p className="text-sm font-semibold text-[#C2863FFF]">
              Need help with an order?
            </p>
            <p className="text-xs text-gray-700 mt-1">
              Our support team is available 24/7 to assist with returns, exchanges, or tracking issues.
            </p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setActiveHelp("view")}
        className={`px-4 py-2 text-xs rounded-lg border ${
        activeHelp === "view"
      ? "bg-[#404C31FF] text-white border-[#404C31FF]"
      : "bg-white text-black border-gray-300" }`}>
         View Help Center
       </button>
<button onClick={() => setActiveHelp("contact")}
  className={`px-4 py-2 text-xs rounded-lg border ${
    activeHelp === "contact"
      ? "bg-[#404C31FF] text-white border-[#404C31FF]"
      : "bg-white text-black border-gray-300"
  }`}>
  Contact Support
</button>
     </div>
     </div>
    </div>
     );
       };
export default Orders;