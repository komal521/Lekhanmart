import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import q1 from "../assets/q1.webp";
import z2 from "../assets/z2.webp";
import z3 from "../assets/z3.jpg";
import mission from "../assets/mission.png";
import vision from "../assets/visible.png";
import verify from "../assets/verify.png";
import world from "../assets/world.png";
import group from "../assets/group.png";
import support from "../assets/customer-support.png";
import arrow from "../assets/right-arrow.png";
import man from "../assets/man.jpg";
const About = () => {
  const [activeBtn, setActiveBtn] = useState("explore");
  const [ctaBtn, setCtaBtn] = useState("shop");
  const handleShopClick = () => {
    alert("Shop feature coming soon!"); };
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-5 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">  
        <div className="text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Crafting the <br />
            Future of <br />
            <span className="text-yellow-600">Creativity.</span>
            </h1>
          <p className="text-gray-500 mt-4 text-sm">
            LekhanMart was born from a simple belief that the tools we use to express 
            ourselves should be as inspiring as the ideas they bring to life. From 
            premium fountain pens to sustainable paper, we curate the finest stationery 
            for the modern visionary.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">   
            <button onClick={() => {
                setActiveBtn("explore");
                handleShopClick();}}
              className="px-5 py-2 rounded text-white"
              style={{
                backgroundColor:
                  activeBtn === "explore" ? "#404C31FF" : "#ccc",
              }}>
              Explore Collection
            </button>
            <button onClick={() => setActiveBtn("blog")}
              className="px-5 py-2 rounded text-white"
              style={{
                backgroundColor:
                  activeBtn === "blog" ? "#404C31FF" : "#ccc",
              }}>
              Read Our Blog
            </button>
          </div>
        </div>
        <div>
          <img src={q1} className="rounded-lg shadow-md w-full" />
        </div>
      </div>
      <div className="py-12 md:py-16 text-center text-white"
  style={{ backgroundColor: "#C2863FFF" }}>
  <h2 className="text-2xl md:text-3xl font-bold">
    Our Core Purpose
  </h2>
  <p className="text-sm mt-2 px-4">
    We aren't just selling stationery, we're providing the bridge between an idea and its execution.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-5xl mx-auto px-5">
    <div className="text-gray-700 p-5 rounded shadow text-left"
      style={{
        background: "linear-gradient(180deg, #FFFFFFFF 0%, #FFF49CFF 100%)"
      }} >
      <img src={mission} className="w-8 mb-3" />
      <h3 className="font-semibold text-lg">Our Mission</h3>
      <p className="text-sm mt-2">
        To empower every creator, student, and professional by providing world-class 
        stationery that blends creativity, functionality, and timeless craftsmanship. 
        We believe in making premium tools accessible to inspire ideas and bring them to life.
      </p>
    </div>
    <div className="text-gray-700 p-5 rounded shadow text-left"
      style={{
        background: "linear-gradient(180deg, #FFFFFFFF 0%, #FFF49CFF 100%)"
      }} >
      <img src={vision} className="w-8 mb-3" />
      <h3 className="font-semibold text-lg">Our Vision</h3>
      <p className="text-sm mt-2">
        To become the global destination for stationery enthusiasts, fostering a 
        community where creativity thrives and every idea finds its perfect expression 
        through thoughtfully designed tools.
      </p>
    </div>
  </div>
    </div>
      <div className="py-12 md:py-16"
        style={{
          background: "linear-gradient(180deg, #FFFFFFFF 0%, #FFF49CFF 100%)",
        }}>
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">    
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Born from a Passion for Precision</h2>
            <p className="text-gray-600 mt-4 text-sm">
              The beginning of LekhanMart started in a small home office in Mumbai, 
              where a deep passion for writing instruments turned into a meaningful 
              journey. From carefully selecting each product to serving thousands of 
              happy customers today, our commitment to quality and craftsmanship remains unchanged.
            </p>
          </div>
          <div>
            <img src={z2} className="rounded-lg shadow-md w-full" />
          </div>
        </div>
      </div>
      <div
        className="py-10 md:py-16"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFFFF 0%, #FFF49CB8 100%)",}} >
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">     
          <div>
            <img src={z3} className="rounded-lg shadow-md w-full" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-semibold">
              Kind to Your Paper, Kinder to the Planet
            </h2>
            <p className="text-gray-600 text-sm mt-3">
              We believe that great ideas shouldn't come at the cost of the environment. 
              80% of our paper products are sourced from FSC-certified forests, and we are 
              committed to sustainable practices. Our packaging uses recyclable materials, 
              ensuring a greener future while maintaining premium quality.</p>
            <button onClick={handleShopClick}
              className="flex items-center gap-2 text-white px-5 py-2 rounded mt-4 mx-auto md:mx-0"
              style={{ backgroundColor: "#C2863FFF" }}>
              Shop Sustainable
              <img src={arrow} className="w-4" />
            </button>
          </div>
        </div>
      </div>
      <div
  className="py-12 md:py-16 text-center"
  style={{ backgroundColor: "#A68B5B4D" }}>
  <h2 className="text-xl md:text-2xl font-semibold">
    Why Choose LekhanMart?
  </h2>
  <div className="w-12 h-[2px] bg-[#A68B5B] mx-auto mt-2"></div>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 max-w-6xl mx-auto px-5">
    <div>
      <img src={verify} className="w-8 mx-auto mb-3" />
      <h3 className="font-semibold text-sm mb-1">
        Authenticity Guaranteed
      </h3>
      <p className="text-xs text-gray-600">
        Every pen and ink bottle we sell is 100% genuine, sourced directly from brands.
      </p>
    </div>
    <div>
      <img src={world} className="w-8 mx-auto mb-3" />
      <h3 className="font-semibold text-sm mb-1">
        Eco-Conscious Curation
      </h3>
      <p className="text-xs text-gray-600">
        Prioritizing brands that respect environmental standards and human labor rights.
      </p>
    </div>
    <div>
      <img src={group} className="w-8 mx-auto mb-3" />
      <h3 className="font-semibold text-sm mb-1">
        Community First
      </h3>
      <p className="text-xs text-gray-600">
        We support local artists and calligraphers through workshops and collaborations.
      </p>
    </div>
    <div>
      <img src={support} className="w-8 mx-auto mb-3" />
      <h3 className="font-semibold text-sm mb-1">
        Premium Service
      </h3>
      <p className="text-xs text-gray-600">
        Fast shipping and a dedicated support team that understands your stationery needs.
      </p>
    </div>
    </div>
    </div>
      <div className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-5 p-6 rounded-lg text-white flex flex-col md:flex-row items-center gap-4"
          style={{ backgroundColor: "#C2863FFF" }}>
          <img src={man} className="w-12 h-12 rounded-full" />
          <div>
            <p className="text-sm text-black italic">
              "I believe that your thoughts deserve a home as beautiful as the mind that created them. At LekhanMart, we don’t just sell paper, we sell a sanctuary for your imagination."
            </p>
            <p className="text-sm mt-2 font-semibold">Aryan Sharma</p>
          </div>
        </div>
      </div>
      <div  className="py-12 md:py-16 text-center text-white"
        style={{ backgroundColor: "#404C31FF" }}>
        <h2 className="text-xl md:text-2xl font-semibold">
          Ready to Elevate Your Writing Experience?
        </h2>
        <p className="text-sm mt-3">
          Discover tools that inspire creativity and elevate your everyday writing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">    
          <button  onClick={() => {
              setCtaBtn("shop");
              handleShopClick(); }}
            className="px-6 py-2 rounded text-white"
            style={{
              backgroundColor:
                ctaBtn === "shop" ? "#F48525FF" : "#ccc",
            }}>
            Start Shopping Now
          </button>
          <button onClick={() => setCtaBtn("contact")}
            className="px-6 py-2 rounded text-white"
            style={{
              backgroundColor:
                ctaBtn === "contact" ? "#F48525FF" : "#ccc",
            }}>
            Contact Our Expert
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default About;