import React, { useState } from "react";
import profileImg from "../assets/A1.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import dashboardIcon from "../assets/settings.png";
import ordersIcon from "../assets/shopping-cart.png";
import addressIcon from "../assets/location.png";
import wishlistIcon from "../assets/heart.png";
import trackIcon from "../assets/search.png";
import chevron from "../assets/chevron.png";
import starIcon from "../assets/star.png";
import settingIcon from "../assets/settings.png";
import rightArrow from "../assets/right-arrow.png";
import boxIcon from "../assets/box.png";
import verifyIcon from "../assets/verify.png";
import notificationIcon from "../assets/notification.png";
import Orders from "../pages/Orders";
import Address from "../pages/Address";
import Wishlist from "../pages/Wishlist";
import TrackOrder from "../pages/TrackOrder";
const Profile = () => {
  const [active, setActive] = useState("dashboard");
  const [activeCard, setActiveCard] = useState("orders");
  const handleClick = (msg) => {
    alert(msg);};
  const menuClass = (name) =>
    `flex items-center justify-between p-3 rounded-xl cursor-pointer transition whitespace-nowrap ${
      active === name
        ? "bg-[#FFF49C] text-black font-semibold"
        : "hover:bg-gray-100" }`;
     return (
      <>
      <Navbar />
      <div className="w-full max-w-screen bg-[#F4F4F4]">
      <div className="w-full flex flex-col md:flex-row">
      <div className="md:w-64 w-full bg-white px-0 md:p-5 shadow-sm flex md:flex-col justify-between md:sticky md:top-16 h-auto md:h-[calc(100vh-64px)] overflow-x-auto md:overflow-visible overflow-y-hidden flex-shrink-0">
       {/* TOP MENU */}
    <div className="flex flex-col md:flex-col w-full">
    <h2 className="text-lg font-semibold mb-6 hidden md:block">
      Dashboard
    </h2>
    <div className="flex md:flex-col gap-2 md:space-y-2 text-sm w-full overflow-x-auto md:overflow-visible px-2 py-2">
      {[
        ["dashboard", "Dashboard", dashboardIcon],
        ["orders", "My Orders", ordersIcon],
        ["address", "Addresses", addressIcon],
        ["wishlist", "Wishlist", wishlistIcon],
        ["track", "Track Order", trackIcon],
      ].map(([key, label, icon]) => (
        <div  key={key}
          onClick={() => setActive(key)}
          className={`${menuClass(key)} min-w-[80px] md:min-w-full flex flex-col md:flex-row items-center justify-center md:justify-between`} >
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3">
            <img src={icon} className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-[11px] md:text-sm">{label}</span>
          </div>
          <img src={chevron} className="w-3 opacity-50 hidden md:block" />
        </div>
      ))}
      <div onClick={() => handleClick("Logout")}
        className="md:hidden flex flex-col items-center p-2 text-black min-w-[70px]"  >
        <span className="text-[11px]">Log Out</span>
         </div>
        </div>
         </div>
         <div className="hidden md:flex flex-col justify-end h-full">
      <div onClick={() => handleClick("Logout")}
    className="flex items-center justify-center p-3 rounded-xl cursor-pointer bg-[#FFF49C] text-black font-semibold hover:bg-[#f7e98a]">
    <span className="text-sm">Log Out</span>
      </div>
       </div>  
         </div>       
          {/* MAIN */}
          <div className="flex-1 w-full px-3 md:px-6 py-3 md:py-6 overflow-y-auto h-[calc(100vh-64px)] overflow-x-hidden">
            <div className="w-full bg-white px-3 py-4 md:p-5 rounded-2xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-4">
           <div className="flex items-center gap-3">
            <img src={profileImg} className="w-10 h-10 md:w-12 md:h-12 rounded-full" />
            <div>
             <h1 className="text-sm md:text-lg font-semibold">
              Welcome back, Aarav!
             </h1>
              <p className="text-[10px] md:text-sm text-gray-500">
                 Managing your office needs since March 2022
             </p>
             </div>
              </div>
              <button onClick={() => handleClick("Edit Profile")}
                className="flex items-center justify-center gap-2 bg-[#C2863F] text-white px-4 py-2 rounded-xl text-xs md:text-sm w-full md:w-auto">
                <img src={settingIcon} className="w-4" />
                Edit Profile
              </button> </div>
            {/* DASHBOARD */}
            {active === "dashboard" && (
            <>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-6 w-full">
            {[
            ["orders", "TOTAL ORDERS", "12", "3 orders in transit", boxIcon],
            ["wishlist", "IN WISHLIST", "08", "2 items ON SALE", wishlistIcon],
            ["address", "SAVED ADDRESSES", "02", "Primary: Home", addressIcon],
            ["points", "LEKHAN POINTS", "450", "Next reward at 500", starIcon],
            ].map(([key, title, val, para, icon], i) => (
         <div key={i}
          onClick={() => setActiveCard(key)}
            className={`p-3 md:p-4 rounded-2xl shadow-sm border cursor-pointer transition ${
            activeCard === key
             ? "bg-[#A8AEA4] text-black"
             : "bg-white" }`}>
       <div className="flex justify-end">
       <img src={chevron} className="w-3" />
          </div>
        <img src={icon} className="w-5 md:w-7 mx-auto mb-2" />
        <p className="text-[9px] md:text-xs text-center">{title}</p>
        <h2 className="text-base md:text-xl font-semibold text-center">{val}</h2>
        <p className="text-[9px] md:text-xs text-center">{para}</p>
          </div>))}
          </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mt-6 w-full">
        <div className="md:col-span-2 w-full bg-white p-3 md:p-5 rounded-2xl shadow-sm border">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-4">
        <div>
        <h3 className="text-base md:text-lg font-semibold text-[#C2863F]">
         Recent Orders
        </h3>
        <p className="text-[10px] md:text-xs text-gray-400">
            You have placed 12 orders in the last 6 months.
        </p>
       </div>
        <button  onClick={() => handleClick("View Orders")}
          className="w-full md:w-auto px-4 py-2 border border-[#C2863F] text-[#C2863F] rounded-lg hover:bg-[#C2863F] hover:text-white text-xs md:text-sm" >
           View All Orders
         </button>
           </div>
           <div className="overflow-x-auto w-full">
        <table className="w-full text-xs md:text-sm">
        <thead className="bg-[#A8AEA4] text-white">
          <tr>
         <th className="text-left p-2 md:p-3">Order ID</th>
         <th className="p-2 md:p-3">Date</th>
         <th className="p-2 md:p-3">Amount</th>
         <th className="p-2 md:p-3">Status</th>
         <th className="p-2 md:p-3">Action</th>
         </tr>
       </thead>
         <tbody>
         {[
          ["#LM-98210", "Oct 12, 2023", "₹1,240.00", "Delivered"],
          ["#LM-97554", "Oct 05, 2023", "₹450.00", "Processing"],
          ["#LM-96112", "Sep 28, 2023", "₹2,100.00", "Delivered"],
          ["#LM-95001", "Sep 15, 2023", "₹890.00", "Cancelled"],
          ["#LM-94220", "Sep 02, 2023", "₹1,560.00", "Delivered"],
          ].map((row, i) => (
          <tr key={i} className="border-t hover:bg-gray-50">
          <td className="p-2 md:p-3">{row[0]}</td>
          <td className="p-2 md:p-3 text-center">{row[1]}</td>
          <td className="p-2 md:p-3 text-center">{row[2]}</td>
          <td className="p-2 md:p-3 text-center font-medium">{row[3]}</td>
          <td className="p-2 md:p-3 text-[#C2863F] flex items-center justify-center gap-1 cursor-pointer">
               Details
            <img src={rightArrow} className="w-3" />
             </td>
                </tr> ))}
               </tbody>
               </table>
                </div>
                  </div>
                  {/* RIGHT SIDE */}
              <div className="space-y-4 w-full">
              <div className="bg-white px-3 py-3 rounded-2xl shadow-sm border">
                 <h4 className="font-semibold mb-3 text-sm md:text-base">Account Security</h4>
              <div className="space-y-2">
              <div  onClick={() => handleClick("Update Password")}
                className="bg-[#C2863F] text-white px-3 py-2 rounded-xl cursor-pointer">
             <div className="flex justify-between items-center">
             <div className="flex items-center gap-2 text-xs md:text-sm">
              <img src={verifyIcon} className="w-4" />
                              Update Password</div>
              <img src={chevron} className="w-3" /> </div>
             <p className="text-[10px] md:text-xs mt-1 opacity-80">
                Last changed 4 month ago
              </p> </div>
            <div onClick={() => handleClick("Notifications")}
             className="bg-[#C2863F] text-white px-3 py-2 rounded-xl cursor-pointer" >
            <div className="flex justify-between items-center">
             <div className="flex items-center gap-2 text-xs md:text-sm">
              <img src={notificationIcon} className="w-4" />
                      Notifications
              </div>
            <img src={chevron} className="w-3" /></div>
         <p className="text-[10px] md:text-xs mt-1 opacity-80">
                Manage your alerts & updates</p>
                    </div>
                      </div>
                    </div>
        <div className="bg-gradient-to-b from-white to-yellow-100 p-4 rounded-2xl shadow-sm">
              <h4 className="font-semibold text-sm md:text-base">Refer a Friend</h4>
            <p className="text-[10px] md:text-xs text-gray-500 mt-1">
                        Gift them 20% off and get 100 Lekhan Points.</p>
          <button   onClick={() => handleClick("Invite")}
           className="mt-3 bg-[#F5EBD7] px-3 py-2 rounded-xl text-xs md:text-sm w-full" >
                        Get Invite Link </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          {/* ORDERS */}
       {active === "orders" && (
    <div className="mt-6">
    <Orders />
   </div>
     )}
    {/* ADDRESS */}
      {active === "address" && (
       <div className="mt-6">
       <Address />
       </div>
          )}
       {active === "wishlist" && (
        <div className=" mt-6">
          <Wishlist/>
         </div>
         )}
      {active === "track" && (
      <div className="mt-6 ">
        <TrackOrder />
  </div>)}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;