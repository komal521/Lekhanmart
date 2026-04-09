import React from "react";
import instagram from "../assets/instagram.png";
import gmail from "../assets/gmail (1).png";
import twitter from "../assets/twitter.png";
import logo from "../assets/logo_golden_creation.avif";
import { Link } from "react-router-dom";
const Footer =()=>{
  return(
    <footer className="w-full bg-white border-t mt-10">
      <div className="max-w-7xl mx-auto px-5 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
           <img src= {logo} alt="logo" className="w-40 mb-3"/>
           <p className="text-sm text-gray-500 leading-relaxed"> Premium stationery and office supplies delivered to your doorstep.</p>
           <div className="flex gap-4 mt-4">
            <button>
              <img src= {instagram} className="w-5 hover:scale-110 transition"/>
            </button>
            <button>
              <img src={gmail} className="w-5 hover:scale-110 transition"/>
            </button>
            <button>
              <img src= {twitter} className="w-5 hover:scale-110 transition"/>
            </button>
           </div>
          </div>
          <div>
            <h2 className=" font-semibold mb-3 text-gray-800">Shop</h2>
            <ul className="text-sm text-gray-500 space-y-2">
              <li className=" hover:text-black cursor-pointer">Writing Essentials </li>
              <li className="hover:text-black cursor-pointer">Desk Supplies</li>
              <li className="hover:text-black cursor-pointer">Art & Craft</li>
              <li className="hover:text-black">Prefmium Pens </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-3 text-gray-800">Company</h2>
            <ul className="text-sm text-gray-500 space-y-2">
              <li className="hover:text-black cursor-pointer">About Us</li>
              <li>
                <Link Link to="/blog" className="hover:text-black cursor-pointer">Our Blog</Link></li>
              <li className="hover:text-black cursor-pointer">Contact Us</li>
              <li className="hover:text-black cursor-pointer">FAQS</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-3 text-gray-800">Plicies</h2>
            <ul className="text-sm text-gray-500 space-y-2">
              <li className="hover:text-black cursor-pointer">Shipping Policy</li>
              <li className=" hover:text-black cursor-pointer">Return Policy</li>
              <li className="hover:text-black cursor-pointer">Privancy Policy</li>
              <li className="hover:text-black">Terms & Conditions</li>
            </ul>
          </div>
        </div>
        {/*Bottom*/}
        <div className="text-center text-sm text-gray-400 border-t py-4 px-4">
          2026 LekhanMart. All rights reserved.
        </div>
    </footer>
  )
}
export default Footer;