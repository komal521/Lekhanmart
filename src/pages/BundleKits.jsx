import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import rightArrow from "../assets/right-arrow.png";
import boxIcon from "../assets/box.png";
import plusIcon from "../assets/plus.png";
import checkIcon from "../assets/check.png";
import a3 from "../assets/a3.jpg";
import a4 from "../assets/a4.jpg";
import a5 from "../assets/a5.jpg";
import rahul from "../assets/rahul.jpg";
const BundleKits = () => {
  const [activeBtn, setActiveBtn] = useState("start");
  const [activeFilter, setActiveFilter] = useState("All");
  const [showToast, setShowToast] = useState(false);
  const handleAddItem = () => alert("Item added successfully ");
  const handleCheckout = () => alert("Proceeding to checkout ");
  const handleQuickAdd = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000); };
  return (
    <>
    <Navbar />
      <div className="w-full px-4 py-10 bg-[#FFF49CFF]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="bg-yellow-200 text-xs px-3 py-1 rounded-full">
              Custom Experience
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
              Build Your Own <br />
              <span className="text-[#C2863F]">Dream Box</span>
            </h1>
            <p className="text-gray-600 mt-4 max-w-md">
              Why settle for pre-made when you can pick exactly what you love?
              Choose your notebooks, pens, and accessories.
            </p>
            <div className="flex gap-4 mt-6 flex-wrap">
              <button
                onClick={() => setActiveBtn("start")}
                className={`px-5 py-2 rounded-md flex items-center gap-2 ${
                  activeBtn === "start"
                    ? "bg-[#C2863F] text-white"
                    : "bg-white border" }`}>
                Start Building Now
                <img src={rightArrow} className="w-4" />
              </button>
              <button onClick={() => setActiveBtn("how")}
                className={`px-5 py-2 rounded-md ${
                  activeBtn === "how"
                    ? "bg-[#C2863F] text-white"
                    : "bg-white border"}`}>
                How it works
             </button>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <div className="flex -space-x-2">
                <img src={a3} className="w-8 h-8 rounded-full border" />
                <img src={a4} className="w-8 h-8 rounded-full border" />
                <img src={a5} className="w-8 h-8 rounded-full border" />
                <img src={rahul} className="w-8 h-8 rounded-full border" />
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">1,200+</span> creators built their kits
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full mx-auto">
            <div className="flex justify-between mb-4">
              <div className="flex gap-2">
                <img src={boxIcon} className="w-5 h-4 mt-2" />
                <div>
                  <h2 className="text-sm font-semibold">Your Custom Kit</h2>
                  <p className="text-xs text-gray-400">Updated just now</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">Saved ₹450</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between bg-gray-50 p-2 rounded">
                <p>Premium Dot Grid Notebook</p>
                <span>₹450</span>
              </div>
              <div className="flex justify-between bg-gray-50 p-2 rounded">
                <p>Metallic Brush Pen Set</p>
                <span>₹320</span>
              </div>
              <div className="flex justify-between bg-gray-50 p-2 rounded">
                <p>Eco-Friendly Pencil Case</p>
                <span>₹180</span>
              </div>
            </div>
            <button  onClick={handleAddItem}
              className="w-full mt-4 border py-2 flex justify-center gap-2 rounded" >
              <img src={plusIcon} className="w-4 h-4 mt-1" />
              Add another item
            </button>
            <div className="flex justify-between mt-4 font-bold">
              <p>Total Bundle Price</p>
              <p>₹950</p>
            </div>
            <button onClick={handleCheckout}
              className="w-full mt-4 bg-[#C2863FFF] text-white py-2 rounded" >
              Checkout My Kit
            </button>
          </div>
        </div>
      </div>
      <div className="w-full px-4 py-14 bg-gray-100">
  <div className="max-w-7xl mx-auto">
    <p className="text-sm font-semibold text-[#C2863FFF] tracking-wide">
      HANDPICKED VALUE
    </p>
    <div className="flex justify-between items-center mt-2 flex-wrap gap-4">
      <h2 className="text-3xl md:text-4xl font-bold">
        Expertly Curated{" "}
        <span className="italic text-gray-500 font-medium">Collections</span>
      </h2>
      <div className="flex gap-2 flex-wrap">
        {["All","Academic","Art","Office","Creative"].map((item)=>(
          <button key={item}
            onClick={()=>setActiveFilter(item)}
            className={`px-4 py-1.5 rounded-full text-sm transition ${
              activeFilter === item
                ? "bg-[#C2863F] text-white shadow"
                : "bg-white border hover:bg-gray-100"
            }`} >
            {item}
          </button>))}
          </div>
         </div>
    <p className="text-gray-500 mt-3 max-w-xl">
      Designed by stationery enthusiasts to provide the perfect balance of function, quality, and savings.
    </p>
    <div className="grid md:grid-cols-3 gap-8 mt-10">
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
        <img src="/src/assets/v1.avif" className="h-56 w-full object-cover"/>
        <div className="p-5">
          <p className="text-xs text-gray-400 flex items-center gap-2 mb-1 uppercase tracking-wide">
            <img src={boxIcon} className="w-4 h-4"/>
            Academic
          </p>
          <h3 className="font-semibold text-lg">Student Starter Kit</h3>
          <p className="text-xs text-gray-400 mt-1">
            Everything a student needs to start the semester strong. </p>
          <p className="mt-3 inline-block bg-gray-100 text-xs px-3 py-1 rounded-full font-medium shadow-sm">
            Inside this bundle
          </p>
          <ul className="text-sm mt-3 text-gray-600 space-y-1">
            <li className="flex gap-2"><img src={checkIcon} className="w-4"/>3x Hardcover Notebooks</li>
            <li className="flex gap-2"><img src={checkIcon} className="w-4"/>12x Pastel Highlighters</li>
            <li className="flex gap-2"><img src={checkIcon} className="w-4"/>Mechanical Pencil Set</li>
            <li className="flex gap-2"><img src={checkIcon} className="w-4"/>A5 Weekly Planner</li>
          </ul>
          <div className="flex justify-between items-center mt-5">
            <div>
              <p className="text-sm text-gray-400 line-through">₹1799</p>
              <p className="font-bold text-lg">₹1299</p>
            </div>
            <button onClick={handleQuickAdd}
              className="bg-[#C2863F] text-white px-4 py-1.5 rounded-full text-sm hover:opacity-90">
              Quick Add
            </button>
          </div>
        </div>
      </div>
           {/* CARD 2 */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
        <img src="/src/assets/v2.avif" className="h-56 w-full object-cover"/>
        <div className="p-5">
          <p className="text-xs text-gray-400 flex items-center gap-2 mb-1 uppercase tracking-wide">
            <img src={boxIcon} className="w-4 h-4"/>
            Art
          </p>
          <h3 className="font-semibold text-lg">Artist's Gouache Set</h3>
          <p className="text-xs text-gray-400 mt-1">
            Premium pigments and tools for professional illustration. </p>
          <p className="mt-3 inline-block bg-gray-100 text-xs px-3 py-1 rounded-full font-medium shadow-sm">
            Inside this bundle
          </p>
          <ul className="text-sm mt-3 text-gray-600 space-y-1">
            <li className="flex gap-2"><img src={checkIcon} className="w-4"/>18 Color Gouache Set</li>
            <li className="flex gap-2"><img src={checkIcon} className="w-4"/>Synthetic Brush Pack</li>
            <li className="flex gap-2"><img src={checkIcon} className="w-4"/>Cold Press Paper Pad</li>
            <li className="flex gap-2"><img src={checkIcon} className="w-4"/>Ceramic Mixing Palette</li>
          </ul>
          <div className="flex justify-between items-center mt-5">
            <div>
              <p className="text-sm text-gray-400 line-through">₹2999</p>
              <p className="font-bold text-lg">₹2450</p>
            </div>
            <button onClick={handleQuickAdd}
              className="bg-[#C2863F] text-white px-4 py-1.5 rounded-full text-sm hover:opacity-90">
              Quick Add
            </button>
          </div>
        </div>
      </div>
      {/* CARD 3 */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
        <img src="/src/assets/v3.jpg" className="h-56 w-full object-cover"/>
        <div className="p-5">
          <p className="text-xs text-gray-400 flex items-center gap-2 mb-1 uppercase tracking-wide">
            <img src={boxIcon} className="w-4 h-4"/>
            Office</p>
          <h3 className="font-semibold text-lg">The Executive Desk Kit</h3>
          <p className="text-xs text-gray-400 mt-1">
            Sophisticated tools for the modern professional workspace. </p>
          <p className="mt-3 inline-block bg-gray-100 text-xs px-3 py-1 rounded-full font-medium shadow-sm">
            Inside this bundle
          </p>
          <ul className="text-sm mt-3 text-gray-600 space-y-1">
            <li className="flex gap-2"><img src={checkIcon} className="w-4"/>Signature Fountain Pen</li>
            <li className="flex gap-2"><img src={checkIcon} className="w-4"/>Leather Journal</li>
            <li className="flex gap-2"><img src={checkIcon} className="w-4"/>Desk Organizer Set</li>
            <li className="flex gap-2"><img src={checkIcon} className="w-4"/>Brass Paperweight</li>
          </ul>
          <div className="flex justify-between items-center mt-5">
            <div>
              <p className="text-sm text-gray-400 line-through">₹4500</p>
              <p className="font-bold text-lg">₹3800</p>
            </div>
            <button onClick={handleQuickAdd}
              className="bg-[#C2863F] text-white px-4 py-1.5 rounded-full text-sm hover:opacity-90">
              Quick Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
               {/* SECOND SECTION */}
<div className="w-full px-4 py-14 bg-gray-100">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-3 gap-8 mt-10">
      {[
        {
          img: "/src/assets/w1.avif",
          title: "The Creative Journaler",
          category: "Creative",
          price: "₹1599",
          oldPrice: "₹1999",
          desc: "Perfect for bullet journaling, scrapbooking, and daily reflections.",
          items: ["Dot Grid Journal","Metal Tip Brush Pen","Floral Washi Tape","Planner Stickers Set"]
        },
        {
          img: "/src/assets/w2.jpeg",
          title: "Math & Science Pro",
          category: "Technical",
          price: "₹1899",
          oldPrice: "₹2299",
          desc: "Technical precision for the numbers-driven mind.",
          items: ["Advanced Geometry Set","Scientific Calculator","Graph Notebook","Ballpoint Pens"]
        },
        {
          img: "/src/assets/W3.webp",
          title: "Calligraphy Masterclass",
          category: "Art",
          price: "₹2999",
          oldPrice: "₹3499",
          desc: "Complete journey from novice to ink master.",
          items: ["Calligraphy Pen Holder","Assorted Nibs Set","Ink Bottles Pack","Practice Workbook"]
        }
      ].map((item, i) => (
        <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
          <img src={item.img} className="h-56 w-full object-cover"/>
          <div className="p-5">
            <p className="text-xs text-gray-400 flex items-center gap-2 mb-1 uppercase tracking-wide">
              <img src={boxIcon} className="w-4 h-4"/>
              {item.category}</p>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
            <p className="mt-3 inline-block bg-gray-100 text-xs px-3 py-1 rounded-full font-medium shadow-sm">
              Inside this bundle
            </p>
            <ul className="text-sm mt-3 text-gray-600 space-y-1">
              {item.items.map((list, idx) => (
                <li key={idx} className="flex gap-2">
                  <img src={checkIcon} className="w-4"/>
                  {list}
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mt-5">
              <div>
                <p className="text-sm text-gray-400 line-through">
                  {item.oldPrice}
                </p>
                <p className="font-bold text-lg">
                  {item.price}
                </p>
              </div>
              <button onClick={handleQuickAdd}
                className="bg-[#C2863F] text-white px-4 py-1.5 rounded-full text-sm hover:opacity-90">
                Quick Add
              </button>
            </div>
          </div>
        </div>
      ))}
     </div>
    </div>
    </div>
   <div className="w-full px-4 py-16"
  style={{
    background: "linear-gradient(180deg, #F9FAFBFF 0%, #C2863FFF 100%)",
  }}>
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
    {/* CARD 1 */}
    <div className="bg-[#FFF49CFF] rounded-2xl p-6 text-center shadow-md">
      <div className="w-12 h-12 mx-auto flex items-center justify-center bg-white rounded-xl shadow">
        <img src={boxIcon} className="w-6 h-6" />
      </div>
      <h3 className="mt-4 font-semibold text-lg">
        Free Box Packaging
      </h3>
      <p className="text-sm text-gray-600 mt-2">
        Every bundle is shipped in our signature lekhanmart eco-box, ready for gifting or storage.
      </p>
    </div>
    {/* CARD 2 */}
    <div className="bg-[#A68B5BFF] rounded-2xl p-6 text-center shadow-md text-white">
      <div className="w-12 h-12 mx-auto flex items-center justify-center bg-white rounded-xl shadow">
        <img src="/src/assets/star.png" className="w-6 h-6" />
      </div>
      <h3 className="mt-4 font-semibold text-lg">
        Guaranteed Savings
      </h3>
      <p className="text-sm mt-2">
        We guarantee at least 20% savings compared to buying individual items separately.
      </p>
    </div>
    {/* CARD 3 */}
    <div className="bg-[#FFF49CFF] rounded-2xl p-6 text-center shadow-md">
      <div className="w-12 h-12 mx-auto flex items-center justify-center bg-white rounded-xl shadow">
        <img src="/src/assets/briefcase.png" className="w-6 h-6" />
      </div>
      <h3 className="mt-4 font-semibold text-lg">
        No-Hassle Returns
      </h3>
      <p className="text-sm text-gray-600 mt-2">
        Not happy with one item? Swap it out or return the whole kit within 15 days.
      </p>
    </div>
    </div>
   </div>
   <div className="w-full px-4 py-10 bg-white">
  <div className="max-w-6xl mx-auto bg-[#404C31FF] rounded-3xl py-16 px-6 text-center text-white shadow-lg">
    <h1 className="text-3xl md:text-4xl font-bold">
      Gift a Spark of{" "}
      <span className="text-[#9AD0F5] italic">Creativity</span>
    </h1>
    <p className="mt-4 text-sm md:text-base text-gray-200 max-w-2xl mx-auto">
      Our corporate and bulk bundles are perfect for teams, events, and school gifting.
      Get custom branding on orders over 50 kits.
    </p>
    <button onClick={() => alert("Enquiry sent successfully 📩")}
      className="mt-6 px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:opacity-90 transition">
      Enquire About Bulk Orders
    </button>
  </div>
    </div>
      <Footer />
    </>
  );
};
export default BundleKits;