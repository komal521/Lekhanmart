import React, { useState } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import heroImg from "../assets/a2.webp";
import user1 from "../assets/a3.jpg";
import user2 from "../assets/a4.jpg";
import user3 from "../assets/a5.jpg";
import rightArrow from "../assets/right-arrow.png";
import chevron from "../assets/chevron.png";
import leftIcon from "../assets/left.png";
import gift from "../assets/gift.png";
import car from "../assets/car.png";
import verify from "../assets/verify.png";
import bag from "../assets/shopping-bag.png";
import stars from "../assets/stars.png";
import t1 from "../assets/t1.jpeg";
import t2 from "../assets/t2.jpeg";
import t3 from "../assets/t3.jpeg";
import t4 from "../assets/t4.jpeg";
import t5 from "../assets/t5.jpeg";
import t6 from "../assets/t6.jpeg";
import t7 from "../assets/t7.jpeg";
import t8 from "../assets/t8.jpeg";
import t9 from "../assets/t9.jpeg";
import t10 from "../assets/t10.jpeg";
import t11 from "../assets/t11.jpeg";
import t12 from "../assets/t12.jpeg";
import t13 from "../assets/t13.jpeg";
import t14 from "../assets/t14.jpeg";
import curatedImg from "../assets/curated.webp";
import graduate from "../assets/graduate.png";
import briefcase from "../assets/briefcase.png";
import palette from "../assets/color-palette.png";
import music from "../assets/music.png";
import star from "../assets/star.png";
import s1 from "../assets/s1.webp";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.webp";
import s4 from "../assets/s4.webp";
import rahul from "../assets/rahul.jpg";
import ananya from "../assets/ananaya.jpg";
import vikram from "../assets/vikram.jpg";
const Home = () => {
  const [activeBtn, setActiveBtn] = useState("shop");
  return (
   <div className="w-full overflow-x-hidden">
  <Navbar />
  <div className="bg-[#FFF49CFF] px-4 md:px-10 py-12 grid md:grid-cols-2">
  <div>
  <p className="text-sm bg-[#C2863FFF] text-white inline-block px-3 py-1 rounded-full mb-3">
      New Arrival: Premium italian Collection</p>
  <h1 className="text-4xl font-bold text-gray-800 leading-tight">
   Your Complete <br /> Stationery <br /> Destination</h1>
  <p className="text-gray-600 mt-4">
    From luxury writing instruments to everyday office supplies, discover tools that inspire productivity and expression.</p>
  <div className="flex gap-4 mt-6">
  <button onClick={() => setActiveBtn("shop")}
   className={`px-5 py-2 rounded flex items-center gap-2 transition ${
     activeBtn === "shop"
       ? "bg-[#C2863F] text-white"
        : "bg-white text-black border" }`} >
      Shop All Products
    <img src={rightArrow} className="w-4" /></button>
      <button onClick={() => {
    setActiveBtn("show"); alert("Show Now clicked"); }}
    className={`px-5 py-2 rounded border transition ${
    activeBtn === "show"
      ? "bg-yellow-700 text-white" : "bg-white text-black border"}`}>
              Read our Blog
     </button> </div>
      <div className="flex items-center gap-3 mt-6">
       <img src={user1} className="w-8 h-8 rounded-full object-cover" />
       <img src={user2} className="w-8 h-8 rounded-full object-cover" />
      <img src={user3} className="w-8 h-8 rounded-full object-cover" />
        <p className="text-sm text-gray-600">
              Trusted by 1000+ customers </p>
          </div>   </div>
        <img src={heroImg}
  className="w-full h-[260px] sm:h-[300px] md:h-[400px] object-cover rounded-lg mt-4 md:mt-0"/>
      </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10 py-6 bg-white">
        <Feature icon={gift} title="Flat 15% off on first order" />
        <Feature icon={car} title="Free Delivery on orders above ₹999" />
        <Feature icon={verify} title="100% Stationery Brands" />
        <Feature icon={bag} title="No-Cost EMI On Premium pens" />
      </div>
     <div className="px-4 md:px-10 py-10 bg-gray-50">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Shop by Category</h2>
          <button className="flex items-center gap-1 hover:scale-105 transition"
            style={{ color: "#C2863F", background: "transparent" }}>
            View All Categories
            <img src={chevron} className="w-4" />
          </button> </div>
      <p className="text-gray-500 text-sm mt-1 mb-6">
          Curated collections for every Creative need.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

  <CategoryCard img={t1} title="OFFICE STATIONERY" />
  <CategoryCard img={t2} title="ART & CRAFT" />
  <CategoryCard img={t3} title="SCHOOL STATIONERY" />
  <CategoryCard img={t4} title="CORPORATE GIFTING" />
  <CategoryCard img={t5} title="PREMIUM PENS" />
  <CategoryCard img={t6} title="COMPUTER & ELECTRONICS ACCESSORIES" />
  <CategoryCard img={t7} title="FILES & FOLDERS" />
  <CategoryCard img={t8} title="NOTEBOOKS & DIARIES" />
  <CategoryCard img={t9} title="PENS & PENCILS" />
  <CategoryCard img={t10} title="NOTEPAD & STICKY NOTES" />
  <CategoryCard img={t11} title="MARKERS & HIGHLIGHTERS" />
  <CategoryCard img={t12} title="TAPE & SCISSORS" />
  <CategoryCard img={t13} title="Ink & Refills"/>
  <CategoryCard img={t14} title= "Clay & Dough"/>

</div></div>
      <div className="px-4 md:px-10 py-12" style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #FFF49C 100%)", }} >
      <div className="flex justify-between items-center mb-6">
       <h2 className="text-xl font-bold">Our Bestsellers</h2>
       <div className="flex gap-2">
        <button onClick={() => alert("Previous clicked")}
          className="p-2 border rounded hover:bg-gray-100">
         <img src={leftIcon} className="w-4" />
        </button>
       <button onClick={() => alert("Next clicked")}
        className="p-2 border rounded hover:bg-gray-100">
              <img src={chevron} className="w-4" /> </button>
          </div> </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {[1, 2, 3, 4, 5].map((_, i) => (
       <div key={i} onClick={() => alert(`Product ${i} clicked`)}
       className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition cursor-pointer">

<p className="text-gray-400 text-sm">Product {i + 1}</p> </div> ))}
        </div>
      </div>
      <div className="px-4 md:px-10 mt-10 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 shadow-md"
  style={{ background: "linear-gradient(180deg, #f8fafc 0%, #cbd5e1 100%)",}}>
  <div className="flex-1">
    <span className="text-xs font-semibold bg-[#c2873f] text-white px-3 py-1 rounded-full">
          Curated Bundles
    </span>
    <h2 className="text-2xl text-[#C2863FFF] md:text-3xl font-bold mt-3 leading-snug">
      Everything You Need <br className="hidden md:block" />
      For the New Semester</h2>
    <p className="text-gray-600 mt-3 text-sm md:text-base max-w-md">
      Our “Student Success Bundle” includes a premium notebook,
      mechanical pencils, highlighters, and a study pencil case—
      all at 25% off.</p>
    <div className="mt-4 flex items-center gap-3">
      <span className="text-xl font-bold text-black">₹2,499</span>
      <span className="line-through text-gray-400">₹3,299</span></div>
   <button onClick={() => alert("Bundle clicked")}
  className="mt-4 bg-[#c2873f] hover:bg-[#a86e32] transition text-white px-5 py-2 rounded-md font-medium shadow">
  Shop The Bundle
</button>
  </div>
  <div className="flex-1 flex justify-center">
    <img src={curatedImg} alt="bundle"
      className="w-full max-w-xs md:max-w-sm rounded-xl shadow-lg object-cover"/>
  </div>
</div>
<div className="w-full bg-[#FFF49CFF] mt-10">
  <div className="px-4 md:px-10 py-10">
    <h2 className="text-center text-xl font-bold text-black">
      Tailored for Your Workflow
    </h2>
    <p className="text-center text-sm text-black mt-2">
      Whether you are studying for finals, managing a team, or sketching your next masterpiece.
    </p>
    <div className="grid md:grid-cols-3 gap-6 mt-8">
      <TailCard  img={graduate}  title="For Students"
        desc="Perfect for exams, notes, and daily study needs." />
      <TailCard  img={briefcase}  title="For Professionals"
        desc="Stay organized with tools built for productivity."/>
      <TailCard  img={palette}  title="For Artists"
        desc="Unleash creativity with premium sketch tools."/>
    </div></div>  </div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-10 py-12 bg-gray-100 text-center">
  <Feature icon={car} title="Fast Shipping" />
  <Feature icon={verify} title="Secure Payment" />
  <Feature icon={music} title="Expert Support" />
  <Feature icon={star} title="Quality Guarantee" />
</div>
<div className="px-10 py-12 bg-white text-center">
  <p className="text-sm text-gray-500 mb-6 tracking-wide">
    SHOP BY LEADING BRANDS </p>
  <div className="flex justify-center items-center gap-12 flex-wrap">
  <img src={s1} className="h-28 object-contain hover:scale-110 transition duration-300" />
  <img src={s2} className="h-28 object-contain hover:scale-110 transition duration-300" />
  <img src={s3} className="h-28 object-contain hover:scale-110 transition duration-300" />
  <img src={s4} className="h-28 object-contain hover:scale-110 transition duration-300" />
</div></div>
<div className="px-10 py-14 text-center" style={{ background: "#A68B5BFF" }}>
  <h2 className="text-xl font-bold text-white">
    What Our Community Says
  </h2>
 <div className="flex justify-center mt-3 gap-1">
  {[...Array(5)].map((_, i) => (
    <img key={i} src={star} className="w-5" />))}
</div>
  <p className="text-sm text-gray-200 mt-2">
    Rated 4.8/5 by over 5,000 customers
  </p>
  <div className="grid md:grid-cols-3 gap-6 mt-10">
    <ReviewCard img={rahul} name="Rahul Sharma"
      text="lekhanmart is my go-to  for all  my office  supplies.this quality of their premium  pens  is  unmatched ,and the  delivery is always on  time.." />
    <ReviewCard img={ananya} name="Ananya Gupta"
      text="AS  an art atudent,i need  reliable  supplies. THeir art & Craft section is a dream.Greate Variety  and Very  competitive Prices!"/>
    <ReviewCard img={vikram} name="Vikram Singh"
      text="Excellent  Customer Service.I had an issue With an order and they  resolved it within an hour.Highly recommend Lekhanmart." />
  </div>
</div>
<div className="flex justify-center px-10 py-10"><div
  className="w-full px-4 md:px-10 py-12 text-center rounded-xl shadow-lg"
  style={{ background: "#161A1DFF" }}>
    <h2 className="text-white text-xl font-bold">
      Join the Golden Creation Community
    </h2>
    <p className="text-gray-400 mt-3 text-sm">
      Subscribe to get early access to new collections,
      productivity tips, and exclusive offers.
    </p>
    <div className="mt-6 flex justify-center gap-2">
  <input
    type="email"
    placeholder="Enter your email"
    className="px-4 py-2 rounded-md w-64 outline-none border border-gray-300"/>
  <button  onClick={() => alert("Subscribed Successfully ✅")}
    className="bg-[#C2863F] hover:bg-[#a86e32] transition text-white px-4 py-2 text-sm rounded-md">
    Subscribe
      </button>
</div>
    <p className="text-xs text-[#C2863F] mt-4">
      By subscribing, you agree to our Privacy Policy and Terms of Service.
    </p></div>
       </div><Footer />
       </div>
          );};
function ReviewCard({ img, name, text }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md text-left">
      <div className="flex gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <img key={i} src={star} className="w-4" />))}</div>
      <p className="text-sm text-gray-600">{text}</p>
      <div className="flex items-center gap-3 mt-4">
        <img src={img} className="w-10 h-10 rounded-full object-cover" />
        <p className="text-sm font-semibold">{name}</p>
      </div> </div>);}
           function Feature({ icon, title }) {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <img src={icon} className="w-8 h-8 object-contain" />
      <p className="text-sm font-semibold text-gray-700">
        {title} </p></div> );}
    function CategoryCard({ img, title }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition text-center cursor-pointer">
      <div className="flex justify-center items-center">
        <img src={img}
          className="w-36 h-36 object-cover rounded-full" />
      </div>
      <p className="mt-3 text-sm font-medium text-gray-700">
        {title}
      </p>
    </div>
  );
}
function TailCard({ img, title, desc }) {
  return (
    <div className="p-6 rounded-lg text-center shadow-md relative z-10"
      style={{ background: "#A68B5BFF" }}>
      <img src={img} className="w-10 mx-auto mb-3" />
      <p className="text-white font-medium">{title}</p>
      <p className="text-xs text-gray-200 mt-2">
        {desc}</p>  
           </div>     
           );}
           export default Home;