import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import dashboard from "../assets/dashboard.png";
import menu from "../assets/menu.png";
import down from "../assets/down-arrow.png";
import star from "../assets/star.png";
import leftIcon from "../assets/left.png";
import chevron from "../assets/chevron.png";
import r1 from "../assets/r1.jpeg";
import r2 from "../assets/r2.jpeg";
import r3 from "../assets/r3.jpeg";
import r4 from "../assets/r4.jpeg";
import r5 from "../assets/r5.jpeg";
import r6 from "../assets/r6.jpeg";
import r7 from "../assets/r7.jpeg";
import r8 from "../assets/r8.jpeg";
import r9 from "../assets/r9.jpeg";
import { useNavigate } from "react-router-dom";

const WritingEssentials = () => {
  const [products] = useState([
    { id: 1, img: r1, name: "Midori MD Notebook-A5", price: "₹12,499" },
    { id: 2, img: r2, name: "Premium Fountain Pen", price: "₹8,999" },
    { id: 3, img: r3, name: "Luxury Writing Set", price: "₹5,499" },
    { id: 4, img: r4, name: "Executive Notebook", price: "₹2,499" },
    { id: 5, img: r5, name: "Calligraphy Kit", price: "₹3,299" },
    { id: 6, img: r6, name: "Ink Bottle Set", price: "₹1,999" },
    { id: 7, img: r7, name: "Premium Planner", price: "₹1,799" },
    { id: 8, img: r8, name: "Sketch Notebook", price: "₹1,299" },
    { id: 9, img: r9, name: "Artist Pencil Set", price: "₹999" },
  ]);
  const [page, setPage] = useState(1);
  const [activeIcon, setActiveIcon] = useState("");
  const [showFilters, setShowFilters] = useState(false)
  const handlePrev = () => page > 1 && setPage(page - 1);
  const handleNext = () => setPage(page + 1);
  const handleClear = () => {
    alert("Filters Cleared");
    setActiveIcon("clear");
    setTimeout(() => setActiveIcon(""), 200);};
  const handleLoadMore = () => {
    alert("Load more clicked");
  };
  const iconStyle = (name) =>
    `w-4 cursor-pointer transition transform ${
      activeIcon === name ? "scale-125 opacity-70" : "hover:scale-110"
    }`;
  const navigate = useNavigate();
  return (
    <>
      <div className="min-h-screen overflow-x-hidden bg-white">
        <Navbar />
        <div className="w-full bg-white border-b py-6 md:py-8 px-4 md:px-6">
          <h1 className="text-lg md:text-2xl font-semibold">
            Writing Essentials
          </h1>
          <p className="text-xs md:text-sm text-gray-600 mt-2 max-w-3xl">
            Explore premium writing tools including fountain pens, drafting
            pencils and luxury notebooks crafted for precision, creativity and
            everyday use.</p>
          {/* MOBILE FILTER BUTTON */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden mt-4 bg-[#C2863F] text-white px-4 py-2 rounded" >
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
        </div>
        {/* MAIN */}
        <div className="flex flex-col md:flex-row w-full">
          {/* SIDEBAR */}
          <div
            className={`w-full md:w-72 bg-white px-4 md:px-6 py-6 border-r
            ${showFilters ? "block" : "hidden"} md:block`} >
            {/* FILTER HEADER */}
            <div className="flex justify-between items-center mb-4 border-b pb-3">
              <div className="flex items-center gap-2">
                <img src={dashboard}
                  onClick={() => setActiveIcon("dashboard")}
                  className={iconStyle("dashboard")}/>
                <h2 className="text-sm font-semibold">Filters</h2>
              </div>
              <button onClick={handleClear}
                className={`text-xs ${
                  activeIcon === "clear"
                    ? "text-gray-400"
                    : "hover:text-[#C2863F]"
                }`} >
                Clear All
              </button>
            </div>
            {/* CATEGORY */}
            <div className="mb-6 border-b pb-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-semibold">Categories</h3>
                <img src={down}
                  onClick={() => setActiveIcon("cat")}
                  className={iconStyle("cat")} />
              </div>
              {[
                ["Writing Essentials", 450],
                ["Notebooks & Planners", 320],
                ["Office Supplies", 180],
                ["Art & Craft", 210],
                ["Premium Gifts", 95],
              ].map((item, i) => (
                <label key={i} className="flex justify-between text-sm mb-2">
                  <div className="flex gap-2">
                    <input type="checkbox" className="accent-[#C2863F]" />
                    {item[0]}
                  </div>
                  <span className="text-gray-400 text-xs">({item[1]})</span>
                </label>
              ))}
            </div>
            {/* PRICE */}
            <div className="mb-6 border-b pb-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-semibold">Price Range</h3>
                <img src={down}
                  onClick={() => setActiveIcon("price")}
                  className={iconStyle("price")}  />
              </div>
              <input type="range"
                className="w-full mb-2 cursor-pointer accent-[#C2863F]"/>
              <div className="flex justify-between text-xs text-gray-500 mb-1 px-1">
                <span>Min Price</span>
                <span>Max Price</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <input className="border p-1 w-full text-sm rounded" placeholder="$ 0" />
                <input className="border p-1 w-full text-sm rounded" placeholder="$ 200" />
              </div>
            </div>
            {/* BRANDS */}
            <div className="mb-6 border-b pb-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-semibold">Brands</h3>
                <img  src={down}
                  onClick={() => setActiveIcon("brand")}
                  className={iconStyle("brand")} />
              </div>
              {[
                ["Lamy", 42],
                ["Rhodia", 28],
                ["Midori", 15],
                ["Pilot", 64],
                ["Kaweco", 12],
              ].map((b, i) => (
                <label key={i} className="flex justify-between text-sm mb-2">
                  <div className="flex gap-2">
                    <input type="checkbox" className="accent-[#C2863F]" />
                    {b[0]}
                  </div>
                  <span className="text-gray-400 text-xs">({b[1]})</span>
                </label>
              ))}
            </div>
            {/* RATING */}
            <div className="pb-2">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-semibold">Customer Rating</h3>
                <img  src={down}
                  onClick={() => setActiveIcon("rating")}
                  className={iconStyle("rating")} />
              </div>
              {[4, 3, 2].map((rating, i) => (
                <div key={i} className="flex items-center gap-2 mb-2">
                  <input type="checkbox" className="accent-[#C2863F]" />
                  <div className="flex">
                    {Array(5).fill().map((_, index) => (
                      <img key={index}   src={star}
                        className={`w-4 ${
                          index < rating ? "opacity-100" : "opacity-30"
                        }`}/>
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">& up</span>
                </div>
              ))}
            </div>
          </div>
          {/* MAIN CONTENT */}
          <div className="flex-1 w-full p-4 md:p-6">
            {/* TOP BAR */}
            <div className="flex flex-col sm:flex-row justify-between gap-3 sm:items-center bg-[#FFF49CFF] p-3 rounded">
              <p className="text-sm">Showing 1-9 products</p>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-1 text-sm cursor-pointer">
                  <span>Sort by:</span>
                  <span className="font-medium">Featured</span>
                  <img src={down} className="w-3" />
                </div>
                <div className="flex gap-2">
                  <img src={dashboard} className="w-4" />
                  <img src={menu} className="w-4" />
                </div>
              </div>
            </div>
            {/* PRODUCTS */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-6">
              {products.map((item) => (
                <div key={item.id}
                  onClick={() => navigate(`/product/${item.id}`, { state: item })}
                  className="bg-white p-3 rounded shadow-sm cursor-pointer hover:shadow-md transition"    >
                  <div className="w-full h-32 sm:h-40 md:h-48 overflow-hidden rounded">
                    <img src={item.img} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex mt-2">
                    {Array(5).fill().map((_, index) => (
                      <img key={index} src={star} className="w-4" />
                    ))}
                  </div>
                  <p className="text-sm mt-2 hover:text-[#C2863F]">{item.name}</p>
                  <p className="font-bold">{item.price}</p>
                </div>
              ))}
            </div>
            {/* PAGINATION */}
            <div className="mt-10">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-2 mb-4">
                <img src={leftIcon} onClick={handlePrev} className="w-5 cursor-pointer" />
                {[1, 2, 3, "...", 42].map((p, i) => (
                  <span   key={i}
                    onClick={() => typeof p === "number" && setPage(p)}
                    className={`px-3 py-1 cursor-pointer ${
                      p === page ? "bg-[#C2863F] text-white" : "" }`} >
                    {p}
                  </span> ))}
                <img src={chevron} onClick={handleNext} className="w-5 cursor-pointer" />
              </div>
              <p className="text-sm text-gray-500 mb-4">
                YOU'VE VIEWED 9 OF 1,240 PRODUCTS
              </p>
              <div className="flex justify-start">
                <button onClick={handleLoadMore}
                  className="bg-[#C2863F] text-white px-8 py-2 rounded w-full sm:w-auto" >
                  Load More Products
                </button>
              </div>
            </div>
            {/* DISCOVER */}
            <div className="mt-10 bg-[#FFF49CFF] rounded-lg p-5 md:p-8">
              <h2 className="text-lg md:text-2xl font-semibold mb-4 text-gray-800">
                Discover Premium Writing Tools
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-xs md:text-sm text-gray-700 leading-relaxed">
                <p>
                  At LekhaMart, we believe that the right writing instrument can transform
                  your work and creative process. Our collection of writing essentials
                  features world-renowned brands known for their heritage, craftsmanship,
                  and innovation.
                </p>
                <p>
                  We source our products directly from trusted manufacturers to ensure
                  authenticity and premium quality. Our range is curated to suit every style and need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WritingEssentials;