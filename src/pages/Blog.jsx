import React, { useState } from "react";
import clock from "../assets/clock.png";
import createImg from "../assets/create.jpeg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Blog() {
  const [activeBtn, setActiveBtn] = useState("start");
  return (
    <>
      <Navbar />
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-5 py-10">
          <h1 className="text-2xl font-bold mb-2">
            The Stationery Journal
          </h1>
          <p className="text-gray-500 mb-6">
            Insights, guides, and inspiration for those who appreciate the tactile beauty of writing and creating.
          </p>
          {/* MAIN CARD */}
          <div className="grid md:grid-cols-2 rounded-xl overflow-hidden shadow-md">
            <div className="bg-[#FFF49CFF] p-8 flex flex-col justify-center">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs bg-[#404C31FF] text-white px-4 py-1 rounded-full">
                  Featured Story
                </span>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <img src={clock} alt="clock" className="w-4" />
                  <span>8 min read</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4 leading-snug">
                Mastering the Art of Bullet Journaling for Maximum Productivity
              </h2>
              <p className="text-gray-600 mb-6">
                Discover how a simple notebook and pen can transform your workflow. We dive deep into the layouts, tools, and mental models of effective bullet journaling.
              </p>
              <div className="flex gap-4">
                <button onClick={() => setActiveBtn("start")}
                  className={`px-5 py-2 rounded-md transition ${
                    activeBtn === "start"
                      ? "bg-[#404C31FF] text-white"
                      : "bg-white text-black opacity-80"
                  }`} >
                  Start Reading
                </button>
                <button onClick={() => setActiveBtn("view")}
                  className={`px-5 py-2 rounded-md border transition ${
                    activeBtn === "view"
                      ? "bg-[#404C31FF] text-white"
                      : "bg-white text-black"
                  }`}>
                  View All Guides
                </button>
              </div>
            </div>
            {/* RIGHT IMAGE */}
            <div>
              <img src={createImg}
                alt="journal"
                className="w-full h-full object-cover"  />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}