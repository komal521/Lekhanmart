import React, { useState } from "react";
import j1 from "../assets/j1.jpeg";
import j2 from "../assets/j2.jpeg";
import j3 from "../assets/j3.jpeg";
import d1 from "../assets/d1.jpeg";
import d2 from "../assets/d2.jpeg";
import d3 from "../assets/d3.jpeg";
import c1 from "../assets/c1.jpeg";
import c2 from "../assets/c2.jpeg";
import c3 from "../assets/c3.jpeg";
import c4 from "../assets/c4.jpeg";
import cartIcon from "../assets/shopping-cart.png";
import rightArrow from "../assets/right-arrow.png";
import infoIcon from "../assets/information.png";
const Wishlist = () => {
  const [activeBtn, setActiveBtn] = useState("Continue Shopping");
  const handleClick = (type) => {
    setActiveBtn(type);
    alert(type + " clicked");
  };
  const btnClass = (type) =>
    `px-4 py-2 rounded-lg text-xs md:text-sm flex items-center gap-2 ${
      activeBtn === type
        ? "bg-[#C2863F] text-white"
        : "bg-gray-200 text-black"
    }`;
  const card = (img, category, title, price, old, tag, discount) => (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <div className="flex items-center gap-1 text-[10px] text-gray-500 mb-2">
        <img src={infoIcon} className="w-3 h-3" />
        <span>{tag}</span>
      </div>
      <img src={img} className="w-full h-40 object-contain mb-3" />
      <p className="text-[10px] text-gray-400 uppercase">{category}</p>
      <h3 className="text-sm font-semibold leading-tight">{title}</h3>
      <div className="flex items-center gap-2 mt-1 flex-wrap">
        <span className="font-semibold">{price}</span>
        {old && (
          <span className="line-through text-gray-400 text-xs">{old}</span>)}
        {discount && (
          <span className="text-orange-500 text-xs font-semibold">
            {discount} OFF
          </span>)}
      </div>
      <button onClick={() => alert("Moved to cart")}
        className="mt-3 w-full bg-[#C2863F] text-white py-2 rounded-lg flex items-center justify-center gap-2 text-xs">
        <img src={cartIcon} className="w-4" />
        Move to Cart
      </button>
    </div>);
     const newCard = (
     img,
     category,
     title,
     price,
     old,
     tag,
     discount,
     outOfStock = false ) => (
    <div className="bg-[#f5f5f5] p-4 rounded-xl">
      <div className="relative bg-white rounded-lg p-3 flex justify-center items-center">
        <div className="absolute top-2 left-2 flex items-center gap-1 text-[10px] text-gray-600 bg-white px-2 py-[2px] rounded">
          <img src={infoIcon} className="w-3 h-3" />
          <span>{tag}</span>
        </div>
        <img src={img} className="h-40 object-contain" />
      </div>
      <p className="text-[10px] text-gray-400 uppercase mt-3">{category}</p>
      <h3 className="text-sm font-semibold">{title}</h3>
      <div className="flex items-center gap-2 mt-1 flex-wrap">
        <span className="font-semibold">{price}</span>
        {old && (
          <span className="line-through text-gray-400 text-xs"> {old}</span>
        )}
        {discount && (
          <span className="text-orange-500 text-xs font-semibold">{discount} OFF </span>
        )}</div>
       <button onClick={() =>
          alert(outOfStock ? "You will be notified!" : "Moved to cart") }
        className={`mt-3 w-full py-2 rounded-lg flex items-center justify-center gap-2 text-xs
        ${
          outOfStock
            ? "bg-gray-200 text-gray-600"
            : "bg-[#C2863F] text-white" }`}>
        <img src={cartIcon} className="w-4" />
        {outOfStock ? "Notify Me" : "Move to Cart"}
      </button>
    </div> );
    const recommendCard = (img, title, price) => (
    <div className="flex items-center gap-3 min-w-[180px]">
      <div className="bg-white p-2 rounded-lg shadow-sm">
        <img src={img} className="w-12 h-12 object-contain" />
      </div><div>
        <p className="text-xs">{title}</p>
        <span className="text-xs text-gray-500">{price}</span>
      </div></div>);
    return (
    <div className="mt-6 px-3 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-3">
        <div>
          <h2 className="text-lg font-semibold">My Wishlist</h2>
          <p className="text-xs text-gray-500">
            You have 6 items saved for later.</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button onClick={() => handleClick("Continue Shopping")}
            className={btnClass("Continue Shopping")}>
            Continue Shopping</button>
          <button onClick={() => handleClick("Add All to Cart")}
            className={btnClass("Add All to Cart")}>
                Add All to Cart
            <img src={rightArrow} className="w-3" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {card(j1, "PREMIUM WRITING", "Executive Fountain Pen - Midnight Blue", "₹1,250", "₹1,500", "In Stock", "17%")}
        {card(j2, "NOTEBOOKS", "Minimalist Hardcover Journal - A5 Sage", "₹650", "", "Limited Stock", "")}
        {card(j3, "ART SUPPLIES", "Artist Grade Watercolor Set - 24 Pans", "₹2,400", "₹2,800", "In Stock", "14%")}
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {newCard(d1,"OFFICE SUPPLIES","Ergonomic Desk Organizer - Matte Black","₹1,850","","In Stock","",false)}
          {newCard(d2,"DRAWING","Premium Graphite Pencil Set (12 degrees)","₹450","₹550","Limited Stock","18%",false)}
          {newCard(d3,"DESK ACCESSORIES","Brass Letter Opener & Ruler Set","₹1,200","","Out of Stock","",true)}
        </div>
      </div>
      <div className="mt-12 bg-[#f3f3f3] p-5 rounded-xl border-t border-gray-300">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Recommendations for You</h2>
          <button onClick={() => alert("View All Clicked")}
            className="flex items-center gap-1 text-sm text-[#C2863F]">
            View All
            <img src={rightArrow} className="w-3" />
          </button>
        </div>
        <div className="flex gap-6 overflow-x-auto">
          {recommendCard(c1, "Premium Ink Refill", "₹250")}
          {recommendCard(c2, "Sticky Note Set", "₹180")}
          {recommendCard(c3, "Calibrated Ruler", "₹320")}
          {recommendCard(c4, "Desk Mat - Grey", "₹1,450")}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;