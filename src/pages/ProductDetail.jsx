  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import Footer from "../components/Footer";
  import Navbar from "../components/Navbar";
  import r1 from "../assets/r1.jpeg";
  import r2 from "../assets/r2.jpeg";
  import r3 from "../assets/r3.jpeg";
  import r4 from "../assets/r4.jpeg";
  import r5 from "../assets/r5.jpeg";
  import heart from "../assets/heart.png";
  import share from "../assets/share.png";
  import star from "../assets/star.png";
  import addIcon from "../assets/add.png";
  import minusIcon from "../assets/minus.png";
  import car from "../assets/car.png";
  import undo from "../assets/undo.png";
  import verify from "../assets/verify.png";
  import padlock from "../assets/padlock (1).png";
  import b1 from "../assets/b1.webp";
  import b2 from "../assets/b2.jpeg";
  import b3 from "../assets/b3.jpeg";
  import chevron from "../assets/chevron.png";
  import n1 from "../assets/n1.jpeg";
  import n2 from "../assets/n2.jpeg";
  import n3 from "../assets/n3.jpeg";
  import n4 from "../assets/n4.jpeg";
  import rightArrow from "../assets/right-arrow.png";
  const ProductPage = () => {
    const [mainImg, setMainImg] = useState(r5);
    const [qty, setQty] = useState(1);
    const [activeTab, setActiveTab] = useState("Description");
    const navigate = useNavigate();
    const thumbnails = [r1, r2, r3, r4];
    const tabs = ["Description", "Specifications", "Reviews (124)", "Q&A"];
    const [activeBtn, setActiveBtn] = useState("cart");
    
    return (
      <div className="bg-white min-h-screen w-full font-sans tracking-tight">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4">
  <div className="px-6 pt-4 flex items-center gap-2 text-sm text-gray-500">
    <span onClick={() => navigate("/")}
      className="cursor-pointer hover:text-black transition" >
      Home
    </span>
    <img src={chevron} className="w-3 h-3 opacity-60" alt=">" />
    <span
      onClick={() => navigate("/writing-essentials")}
      className="cursor-pointer hover:text-black transition">
      Writing Essentials
    </span>
    <img src={chevron} className="w-3 h-3 opacity-60" alt=">" />
    <span className="text-black font-medium">
      Product
    </span>
  </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            <div className="flex gap-4">
              <div className="flex flex-col gap-3 shrink-0">
                {thumbnails.map((img, i) => (
                  <div  key={i}
                    onMouseEnter={() => setMainImg(img)}
                    className={`w-14 h-14 md:w-16 md:h-16 rounded border cursor-pointer overflow-hidden transition-all duration-200 ${
                      mainImg === img ? "border-black shadow-sm" : "border-gray-200 hover:border-gray-400"
                    }`}>
                    <img src={img} className="w-full h-full object-cover p-0.5" alt="thumb" />
                  </div> ))}
              </div>
              {/* Main Stage */}
              <div className="relative flex-1 bg-white border border-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                <span className="absolute top-4 left-4 bg-[#C2863B] text-white text-[9px] font-bold px-2 py-0.5 rounded-sm tracking-widest uppercase">
                  Best Seller
                </span>
                <img src={mainImg}
                  className="w-full h-auto max-h-[450px] object-contain transition-all duration-300"
                  alt="Main product" />
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button className="w-8 h-8 md:w-9 md:h-9 bg-white border border-gray-100 rounded-full shadow-sm flex items-center justify-center hover:bg-gray-50 transition drop-shadow-sm">
                    <img src={heart} className="w-4 h-4" alt="fav" />
                  </button>
                  <button className="w-8 h-8 md:w-9 md:h-9 bg-white border border-gray-100 rounded-full shadow-sm flex items-center justify-center hover:bg-gray-50 transition drop-shadow-sm">
                    <img src={share} className="w-4 h-4" alt="share" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 mb-2">
                <div className="flex">
                  {[...Array(4)].map((_, i) => <img key={i} src={star} className="w-3.5 h-3.5" alt="s" />)}
                  <img src={star} className="w-3.5 h-3.5 opacity-20" alt="s" />
                </div>
                <span className="text-xs text-gray-500 font-medium">4.8 (124 Reviews)</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-[1.2] mb-4">
                Parker Sonnet Fountain Pen, Matte Black Lacquer with 18K Gold Trim
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-gray-950 tracking-tight">₹12,499</span>
                <span className="text-sm line-through text-gray-400 font-medium tracking-tight">₹14,999</span>
                <span className="text-xs font-bold bg-[#F9F1E7] text-[#C2863F] px-2 py-1 rounded border border-[#C2863F]/20">
                  15% OFF
                </span>
              </div>
              <div className="flex items-center gap-6 mb-7">
                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Quantity</span>
                <div className="flex items-center border border-gray-300 rounded-md bg-white shadow-sm overflow-hidden">
                  <button  onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition text-gray-400 border-r">
                    <img src={minusIcon} className="w-2.5 h-2.5" alt="-" />
                  </button>
                  <span className="w-10 text-center text-sm font-bold text-gray-800">{qty}</span>
                  <button onClick={() => setQty(qty + 1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition text-gray-400 border-l" >
                    <img src={addIcon} className="w-2.5 h-2.5" alt="+" />
                  </button>
                </div>
              </div>
              {/* CTAs */}
            <div className="flex flex-col gap-3">
       <button onClick={() => setActiveBtn("cart")}
        className={`w-full py-3 font-semibold text-sm rounded-md transition
      ${activeBtn === "cart"
        ? "bg-[#C2863F] text-white shadow"
        : "bg-white border-2 border-[#C2863F] text-[#C2863F]"
      }`}>
           Add to Cart
      </button>
  <button  onClick={() => setActiveBtn("buy")}
    className={`w-full py-3 font-semibold text-sm rounded-md transition
      ${activeBtn === "buy"
        ? "bg-[#C2863F] text-white shadow"
        : "bg-white border-2 border-[#C2863F] text-[#C2863F]"
      }`}>
        Buy It Now
        </button>
           </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <img src={car} className="w-5 h-5 opacity-80" alt="delivery" />
                  <div>
                    <p className="text-[11px] font-bold text-gray-800 uppercase leading-none mb-1">Free Express Delivery</p>
                    <p className="text-[10px] text-gray-400">Ships in 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src={undo} className="w-5 h-5 opacity-80" alt="returns" />
                  <div>
                    <p className="text-[11px] font-bold text-gray-800 uppercase leading-none mb-1">10-Day Easy Returns</p>
                    <p className="text-[10px] text-gray-400">Hassle-free process</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src={verify} className="w-5 h-5 opacity-80" alt="genuine" />
                  <div>
                    <p className="text-[11px] font-bold text-gray-800 uppercase leading-none mb-1">Genuine Product</p>
                    <p className="text-[10px] text-gray-400">1 Year Global Warranty</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src={padlock} className="w-5 h-5 opacity-80" alt="secure" />
                  <div>
                    <p className="text-[11px] font-bold text-gray-800 uppercase leading-none mb-1">Secure Checkout</p>
                    <p className="text-[10px] text-gray-400">256-bit SSL Encryption</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 rounded-xl border border-gray-100 p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
                <h3 className="font-bold text-lg text-gray-900 tracking-tight">Frequently Bought Together</h3>
            </div>
            <div className="bg-[#FFF49CFF] border border-yellow-200/50 rounded-xl p-5 sm:p-6 md:p-8 flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
                  <img src={b1} className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain bg-white rounded-lg border border-gray-100 shadow-sm transition hover:scale-105" alt="p1" />
        <img src={addIcon} className="w-4 h-4 sm:w-5 sm:h-5 opacity-60" alt="+" />
        <img src={b2} className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain bg-white rounded-lg border border-gray-100 shadow-sm transition hover:scale-105" alt="p2" />
        <img src={addIcon} className="w-4 h-4 sm:w-5 sm:h-5 opacity-60" alt="+" />
         <img src={b3} className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain bg-white rounded-lg border border-gray-100 shadow-sm transition hover:scale-105" alt="p3" />
                </div>
                <div className="w-full text-center md:text-right border-t border-yellow-200 pt-5 md:pt-0 md:border-t-0 md:border-l md:pl-8">
                  <p className="text-xs font-bold text-[#C2863F] uppercase tracking-widest mb-1">Total Bundle Price</p>
                  <div className="flex items-end gap-2 justify-end mb-4">
                      <span className="text-2xl font-black text-gray-900 leading-none">₹15,299</span>
                      <span className="text-sm line-through text-gray-400 font-medium">₹17,499</span>
                  </div>
                  <button className="bg-[#404C31FF] hover:bg-black text-white font-bold text-[10px] tracking-[0.2em] px-6 py-3 rounded shadow-lg transition duration-300">
                      Add 3 Items To Cart
                  </button>
                </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex border-b border-gray-100 overflow-x-auto gap-10">
              {tabs.map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 border-b-2 ${
                    activeTab === tab ? "border-[#C2863F] text-gray-900" : "border-transparent text-gray-400 hover:text-gray-600"
                  }`} >{tab}
                </button>
              ))}
            </div>
            <div className="py-6">
              {activeTab === "Description" && (
                <div className="max-w-4xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Timeless Design, Masterful Performance</h2>
                  <p className="text-sm md:text-base text-gray-500 leading-[1.8] mb-8">
                    The Parker Sonnet is the symbol of elegance. A classic expression of refined style, 
                    Sonnet is Parker's symbol of elegance. With an array of designs, including the 
                    enduring Ciselé pattern, every intricate detail is skillfully executed to bring 
                    sophistication to every writing occasion.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-12">
                    {[
                      "18K Solid Gold Nib", "Hand-assembled and checked",
                      "Matte Black Lacquer Finish", "Refillable with Quink Ink",
                      "Delivered in a premium gift box", "Chrome finish trims"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C2863F]"></span>
                        <span className="text-sm font-medium text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div> )}
              {activeTab !== "Description" && <div className="text-gray-400 text-sm italic">Detailed {activeTab} content would be displayed here.</div>}
            </div>
          </div>
        </div>
        <section className="mt-10 py-10 relative overflow-hidden" 
                style={{ background: "linear-gradient(180deg, #FFFFFFFF 0%, #FFF49CFF 100%)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                  <h2 className="text-3xl font-black text-gray-900 leading-tight mb-1 tracking-tighter">Complete Your Collection</h2>
                  <p className="text-sm text-gray-500 font-medium">Other premium items selected just for you</p>
              </div>
              <button onClick={() => navigate("/writing-essentials")} className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-700 hover:text-[#C2863F] border-b border-black hover:border-[#C2863F] pb-1 transition-all">
                  View All Products
                  <img src={rightArrow} className="w-4 transition-transform group-hover:translate-x-1" alt="arrow" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
            { img: n1, title: "Parker Jotter XL", price: "₹2,499", badge: "Value Pack", color: "#404C31FF" },
            { img: n2, title: "Waterman Hemisphere", price: "₹8,999", badge: "Friend's Choice", color: "#404C31FF" },
            { img: n3, title: "Montblanc Starwalker", price: "₹34,499", badge: "Ultra Premium", color: "#404C31FF" },
            { img: n4, title: "Cross Townsend", price: "₹14,299", badge: "Top Rated", color: "#404C31FF" }].map((item, i) => (
                <div key={i} className="group relative bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                    <div className="relative h-48 mb-6 bg-[#F8FAFC] rounded-xl flex items-center justify-center overflow-hidden">
                      <span className="absolute top-3 left-3 text-[10px] font-black uppercase text-white px-2 py-1 rounded shadow-sm z-10"
                            style={{ backgroundColor: item.color }}>
                          {item.badge} </span>
                      <img src={item.img} className="h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-105" alt="p" />
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#C2863F] transition-colors mb-2 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-base font-black text-gray-900 mb-3 tracking-tighter">{item.price}</p>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, idx) => (
                        <img key={idx} src={star} className="w-3 h-3" alt="star" />
                      ))}
                    </div> </div>))}
                    </div>
                     </div></section>
                  <Footer />
               </div>
                  );
                     } ;
                 export default ProductPage;