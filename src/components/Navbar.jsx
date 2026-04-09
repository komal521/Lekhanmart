import React, { useState } from "react";
import logo from "../assets/logo_golden_creation.avif";
import searchIcon from "../assets/search.png";
import heartIcon from "../assets/heart.png";
import cartIcon from "../assets/shopping-cart.png";
import profileImg from "../assets/A1.jpg";
import menuIcon from "../assets/menu.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    if (search.trim() === "") {
      alert("Please enter something to search");
    } else {
      alert(`Searching for: ${search}`);
    }};
  return (
    <nav className="bg-white shadow-sm px-3 md:px-8 py-2 sticky top-0 z-50">  
      <div className="flex items-center justify-between gap-3">
        <img src={logo} alt="logo"
          onClick={() => alert("Home")}
          className="h-9 md:h-12 object-contain cursor-pointer" />
        <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg gap-2 w-1/3">
          <img src={searchIcon} className="w-4 opacity-60 cursor-pointer" onClick={handleSearch} />
          <input type="text" placeholder="Search products..." value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none text-sm w-full" />
        </div>
        <div className="flex items-center gap-4">
          <img src={heartIcon}
            onClick={() => alert("Wishlist")}
            className="w-5 h-5 cursor-pointer" />
          <img src={cartIcon}
            onClick={() => alert("Cart")}
            className="w-5 h-5 cursor-pointer" />
          <img src={profileImg}
            onClick={() => alert("Profile")}
            className="w-7 h-7 rounded-full object-cover cursor-pointer" />
          <img src={menuIcon}
            onClick={() => setOpen(!open)}
            className="w-6 h-6 cursor-pointer md:hidden mr-3" />
        </div>
      </div>
      <div className="mt-2 md:hidden">
        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg gap-2">
          <img  src={searchIcon}
            className="w-4 opacity-60 cursor-pointer"
            onClick={handleSearch} />
          <input type="text" placeholder="Search..."
            value={search} onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none text-sm w-full"/>
        </div>
      </div>
      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-2 bg-gray-50 p-3 rounded-lg flex flex-col gap-3">
          <p onClick={() => alert("Shop")} className="cursor-pointer">
            Shop
          </p>
          <p onClick={() => alert("About")} className="cursor-pointer">
            About
          </p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;