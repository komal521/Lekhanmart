import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import clock from "../assets/clock.png";
import createImg from "../assets/create.jpeg";
import y1 from "../assets/y1.jpeg";
import y2 from "../assets/y2.jpeg";
import y3 from "../assets/y3.jpeg";
import y4 from "../assets/y4.jpeg";
import y5 from "../assets/y5.jpeg";
import y6 from "../assets/y6.jpeg";
import bag from "../assets/shopping-bag.png";
import arrow from "../assets/right-arrow.png";
import book from "../assets/book.png";
import searchIcon from "../assets/search.png";
import sendIcon from "../assets/send.png";
import growth from "../assets/growth.png";
import gmail from "../assets/gmail (1).png";
export default function Blog() {
  const [activeBtn, setActiveBtn] = useState("start");
  const [activeFilter, setActiveFilter] = useState("All");
  const [toast, setToast] = useState("");
  const blogs = [
    {
      img: y1,
      category: "Workspace",
      title: "The Ergonomics of a Perfect Desktop Setup",
      desc: "How the placement of your notebook and  keyboardcan save your posture and boost focus  during long  work  hours",
    },
    {
      img: y2,
      category: "Pens & Ink",
      title: "Choosing Your First Fountain Pen: A Guide",
      desc: "from nib sizes to ink flow ,we break  down  everything you need to know before  inverting  in your first premium pen.",
    },
    {
      img: y3,
      category: "Art Studio",
      title: "Watercolor Techniques for Beginners",
      desc: "unlocking the secrets of  wet and dry brush techniqueswith our new professional pigment set.",
    },
    {
      img: y4,
      category: "Journaling",
      title: "The Quiet Power of Hand-Written Notes",
      desc: "in a digital  world ,the congnitive  of  writing  by hand are more relevant then ever.research shows ways.",
    },
    {
      img: y5,
      category: "Workspace",
      title: "Organizing Your Creative Chaos",
      desc: "our top picks for desk organizers and modular  storage  solution that actually look good in your room.",
    },
    {
      img: y6,
      category: "Art Studio",
      title: "Inkblot Highlights Our Favorite Sketches",
      desc: "A curation of the most stunning community contributions from this years month -long link challenge.",
    },
  ];
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  };
  return (
    <>
      <Navbar />
      {toast && (
        <div className="fixed top-5 right-5 bg-black text-white px-4 py-2 rounded shadow-lg z-50">
          {toast}
        </div>
      )}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-5 py-8 md:py-10">
         <h1 className="text-xl md:text-3xl font-bold mb-2">
            The Stationery Journal
         </h1>
         <p className="text-gray-500 mb-6 text-sm md:text-base">
            Insights, guides, and inspiration for those who appreciate writing.
          </p>
          <div className="grid md:grid-cols-2 rounded-xl overflow-hidden shadow-md">
          <div className="bg-[#FFF49CFF] p-5 md:p-8 flex flex-col justify-center">
          <div className="flex justify-between mb-4">
          <span className="text-xs bg-[#404C31FF] text-white px-3 py-1 rounded-full">
                  Featured Story
           </span>
           <div className="flex items-center gap-2 text-sm">
           <img src={clock} className="w-4" />
           <span>8 min read</span>
           </div>
             </div>
              <h2 className="text-lg md:text-3xl font-bold mb-3">
                Mastering the Art of Bullet Journaling for Maximun Productivity.
              </h2>
              <p className="text-gray-600 mb-5 text-sm">
                Discover how a simple notebook can transform your workflow. we drive  deep  into the layout,tools,and mental 
                models of  world -class  planners.
              </p>
              <div className="flex gap-3">
               <button onClick={() => {
              setActiveBtn("start");
            showToast("Start Reading Clicked!");
             }} className={`px-4 py-2 rounded border ${
                 activeBtn === "start"
                 ? "bg-[#404C31FF] text-white"
                 : "bg-white text-black" }`}>
                  Start Reading
                 </button>
             <button onClick={() => {
             setActiveBtn("view");
             showToast("Viewing Guides!");  }}
             className={`px-4 py-2 rounded border ${
              activeBtn === "view"
             ? "bg-[#404C31FF] text-white"
             : "bg-white text-black" }`}>
               View All Guides
             </button> </div>
            </div>
            <div className="h-[220px] md:h-auto">
              <img src={createImg} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        {/* FILTER */}
        <div className="max-w-7xl mx-auto px-4 md:px-5 mb-6">
          <div className="bg-white shadow-sm rounded-xl px-4 py-3 flex justify-between flex-wrap gap-3">
          <div className="flex gap-4 text-sm overflow-x-auto">
           {[
                "All",
                "Journaling",
                "Pens & Ink",
                "Workspace",
                "Art Studio",
                "Lekhan Lifestyle",
              ].map((item, i) => (
          <button key={i}
           onClick={() => setActiveFilter(item)}
           className={`whitespace-nowrap px-2 py-1 rounded ${
           activeFilter === item
           ? "text-[#C2863FFF] font-semibold"
           : "text-gray-600"
            }`}>
           {item} </button> ))}
            </div>
            <div className="flex items-center gap-2 text-sm">
              <img src={sendIcon} className="w-4" />
              <span>Filter By</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-5 pb-16 grid md:grid-cols-3 gap-8">
          {/* BLOGS */}
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-5">
            {blogs.map((blog, i) => (
              <div key={i}
                className="bg-white rounded-xl shadow-sm hover:shadow-md overflow-hidden">
                <div className="relative">
             <img src={blog.img}
              className="w-full h-44 object-cover" />
            <span className="absolute top-2 left-2 text-[10px] bg-black/70 text-white px-2 py-1 rounded">
             {blog.category}</span>
           </div>
         <div className="p-4">
       <div className="flex justify-between text-xs text-gray-500 mb-2">
       <div className="flex items-center gap-1">
       <img src={bag} className="w-3" />
       <span>Tips</span>
       </div>
        <div className="flex items-center gap-1">
        <img src={clock} className="w-3" />
         <span>5 min</span></div>
         </div>
        <h3 className="text-sm font-semibold mb-2">
          {blog.title}  </h3>
        <p className="text-xs text-gray-500 mb-3">
             {blog.desc}
         </p>
          <button  onClick={() => showToast("Opening Article...")}
          className="text-[#C2863FFF] text-xs flex gap-1"  >
             Read Full Article
          <img src={arrow} className="w-3" />
            </button>
                </div>
              </div>
            ))}
            {/* LOAD MORE */}
            <div className="col-span-full flex flex-col items-center gap-2">
              <button onClick={() => showToast("Loading More Articles...")}
                className="bg-[#C2863FFF] text-white px-6 py-2 rounded-full flex gap-2">
                <img src={book} className="w-4" />
                Load More Articles
              </button>
              <p className="text-xs text-gray-500">
                Showing 6 of 42 articles
              </p>
            </div>
          </div>
          {/* SIDEBAR */}
          <div className="space-y-6">
        <div className="bg-white p-4 rounded-xl shadow-sm">
       <div className="flex items-center gap-2 mb-2 font-medium">
      <img src={searchIcon} className="w-5 h-5 object-contain" />
      <span>Search Articles</span>
    </div>
    <div className="relative">
      <input
        className="w-full pl-10 pr-3 py-2 rounded border text-sm outline-none focus:ring-2 focus:ring-[#C2863FFF]"
        placeholder="Search articles..."/>
      <img src={searchIcon}
        className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 opacity-60" />
       </div>
         </div>
         {/* CATEGORY */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
  <div className="flex items-center gap-2 mb-3 font-medium">
    <img src={sendIcon} className="w-4 h-4" />
    <span>Categories</span>
  </div>
  <div className="grid grid-cols-2 gap-2">
    {[
      "Writing Tips",
      "Office Setup",
      "Calligraphy",
      "Product Reviews",
      "Organization",
      "Art Hacks",
      "Tech & Ink",
    ].map((c, i) => (
      <div key={i}
        className="text-xs bg-gray-100 px-2 py-2 rounded text-center hover:bg-[#C2863FFF] hover:text-white cursor-pointer">
        {c}
      </div>
         ))}
         </div>
             </div>
            {/* TRENDING */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex gap-2 mb-3 font-medium">
                <img src={growth} className="w-4" />
                <span>Trending Now</span>
              </div>
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex gap-3 mb-3">
                  <span className="text-gray-400 text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-xs">
                    Top 10 Fountain Pens for Beginners(2024)
                  </p>
                </div>
              ))}
            </div>
         {/* SUBSCRIBE */}
    <div className="p-5 rounded-xl text-center bg-gradient-to-b from-white to-[#FFF49CFF]">
  <img src={gmail} className="w-8 mx-auto mb-2" />
  <h3 className="font-semibold mb-2">Inked In.</h3>
  <p className="text-xs text-gray-600 mb-3 leading-relaxed">
    Join 12,000+ stationery lovers and get weekly tips, reviews,
    and exclusive offers.
  </p>
  <input
    className="w-full px-3 py-2 rounded mb-3 text-sm border outline-none focus:ring-2 focus:ring-[#C2863FFF]"
    placeholder="Your email address"/>
  <button onClick={() => showToast("Subscribed Successfully!")}
    className="bg-[#C2863FFF] text-white px-4 py-2 rounded w-full hover:opacity-90 transition">
    Subscribe Now
  </button>
  <p className="text-[10px] text-gray-400 mt-2">
    No spam. Unsubscribe anytime.
  </p>
    </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
} 