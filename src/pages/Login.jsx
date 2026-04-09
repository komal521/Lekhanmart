import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo_golden_creation.avif";
import gmail from "../assets/gmail (1).png";
import phone from "../assets/telephone.png";
import lock from "../assets/padlock (1).png";
import arrow from "../assets/right-arrow.png";
import google from "../assets/google.png";
import apple from "../assets/apple-logo.png";
import info from "../assets/information.png";
const Login = () => {
  const [activeTab, setActiveTab] = useState("email");
  const navigate = useNavigate();
  const handleLogin = () => { navigate("/home");};
  const handleGoogle = () => alert("Google Login");
  const handleApple = () => alert("Apple Login");
  const handleForgot = () => alert("Forgot Password");
  const handleCreate = () => alert("Create Account");
  const handleTerms = () => alert("Terms of Service");
  const handlePrivacy = () => alert("Privacy Policy");
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center px-4">     
      {/* HEADER */}
      <div className="text-center mt-10">
        <img src={logo} className="w-72 sm:w-80 mx-auto mb-4" />
        <h2 className="text-base sm:text-lg font-semibold">
          Welcome back to{" "}
          <span className="text-yellow-600">Golden Creation</span></h2>
        <p className="text-xs text-gray-500 mt-1 px-4">
          Sign in to access your premium stationery collection.</p></div>
      <div className="bg-white mt-6 p-5 sm:p-6 rounded-xl shadow-md w-full max-w-md">
        <div className="flex border rounded-md overflow-hidden text-sm">
          <button onClick={() => setActiveTab("email")}
            className={`flex-1 py-2 flex items-center justify-center gap-2 ${
              activeTab === "email" ? "bg-gray-200 font-medium" : ""}`} >
            <img src={gmail} className="w-4" /> Email
          </button>
          <button onClick={() => setActiveTab("mobile")}
            className={`flex-1 py-2 flex items-center justify-center gap-2 ${
              activeTab === "mobile" ? "bg-gray-200 font-medium" : ""}`}>
            <img src={phone} className="w-4" />
            Mobile</button> </div>
        {/* INPUT */}
        <div className="mt-4">
          <label className="text-xs text-gray-500">
            {activeTab === "email" ? "Email Address" : "Mobile Number"}
          </label>
          <div className="flex items-center border mt-1 px-3 py-2 rounded-md gap-2">
            <img src={activeTab === "email" ? gmail : phone}
              className="w-5"/>
            <input type="text" placeholder={
                activeTab === "email"
                  ? "name@company.com"
                  : "Enter mobile number"}
              className="outline-none text-sm w-full"/>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex justify-between text-xs text-gray-500">
         <label>OTP</label>
           </div>
          <div className="flex items-center border mt-1 px-3 py-2 rounded-md gap-2">
            <img src={lock} className="w-5" />
            <input type="write otp"placeholder="********"
              className="outline-none text-sm w-full"/>
          </div>  </div>
        <div className="flex items-center gap-1 text-xs mt-2">
          <input type="checkbox" />Keep me logged in
        </div>
        <button onClick={handleLogin}
          className="bg-yellow-600 hover:bg-yellow-700 transition text-white w-full py-2 mt-4 rounded-md flex items-center justify-center gap-2">
          Sign In
          <img src={arrow} className="w-4" />
        </button>
        <p className="text-center text-xs text-gray-400 my-3">
          OR CONTINUE WITH </p>
        {/* SOCIAL */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button onClick={handleGoogle}
            className="flex-1 border py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 text-sm" >
            <img src={google} className="w-5" /> Google
          </button>
          <button onClick={handleApple}
            className="flex-1 border py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 text-sm" >
            <img src={apple} className="w-5" />
                 Apple
          </button>
        </div>
    
      </div>
      <div className="text-center text-xs text-gray-500 mt-6 px-4 space-y-2">
        <p>Secure Checkout • SSL 256-bit • No Hidden Fees</p>
        <p> By continuing, you agree to LekhanMart's{" "}
          <span onClick={handleTerms} className="underline cursor-pointer"> Terms of Service </span>{" "}
          and{" "}
          <span onClick={handlePrivacy} className="underline cursor-pointer"> Privacy Policy </span>
        </p>
        <div className="flex justify-center items-center gap-1">
          <img src={info} className="w-4" />
          <span className="cursor-pointer hover:underline">
            Need Help? Contact Support
          </span>
        </div>
      </div>  
    </div>
  );
};
export default Login;