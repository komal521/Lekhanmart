import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import phone from "../assets/telephone.png";
import mail from "../assets/gmail (1).png";
import whatsapp from "../assets/whatsapp.png";
import location from "../assets/location.png";
import clock from "../assets/clock (1).png";
import plane from "../assets/paper-plane.png";
import share from "../assets/share (1).png";
const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="w-full bg-[#FFF49CFF] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800">Get in Touch</h1>
          <p className="text-gray-600 mt-2 max-w-xl">
            Have questions about our premium stationery or need help with your
            order? Our dedicated support team is here to help you elevate your
            workspace.
            </p>
           </div>
          </div>
        <div className="bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-lg font-semibold mb-2">Send us a Message</h2>
            <p className="text-sm text-gray-500 mb-4">
             Fill  out the form below  and we'll respond  as soon  as possible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm mb-1 text-gray-600">First Name</p>
                <input type="text"
                  placeholder="Enter your first name"
                  className="border p-3 rounded w-full"/>
              </div>
              <div>
                <p className="text-sm mb-1 text-gray-600">Last Name</p>
                  <input type="text"
                  placeholder="Enter your last name"
                  className="border p-3 rounded w-full" />
              </div>
              </div>
            {/* EMAIL */}
            <div className="mt-4">
              <p className="text-sm mb-1 text-gray-600">Email Address</p>
              <input type="email"
                placeholder="Enter your email address"
                className="border p-3 rounded w-full" />
            </div>
            {/* SUBJECT */}
            <div className="mt-4">
              <p className="text-sm mb-1 text-gray-600">Subject</p>
              <input type="text"
                placeholder="How can we help you?"
                className="border p-3 rounded w-full"/>
            </div>
            {/* MESSAGE */}
            <div className="mt-4">
              <p className="text-sm mb-1 text-gray-600">Your Message</p>
              <textarea  placeholder="Type your detailed message here..."
                className="border p-3 rounded w-full h-32" ></textarea>
            </div>
            {/* BUTTON */}
            <button
              onClick={() => alert("Message sent successfully! ")}
              className="w-full bg-[#C2863FFF] text-white py-3 rounded mt-4 flex items-center justify-center gap-2">
              <img src={plane} alt="" className="w-4" />
              Send Message
            </button>
          </div>
          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {/* CONTACT INFO */}
            <div>
              <h2 className="font-semibold mb-4">Contact Information</h2>
              <div className="bg-white p-4 rounded shadow-sm mb-4 flex gap-4 items-start">
                <div className="bg-[#F5E9DC] p-3 rounded-full">
                  <img src={phone} className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500">CALL US</p>
                  <p className="font-medium text-gray-800">
                    +91 1800-LEKHAN-MART
                  </p>
                  <p className="text-sm text-gray-500">
                    Toll-free, Mon-Sat (9AM - 8PM)
                  </p>
                </div>
              </div>
              <div className="bg-white p-4 rounded shadow-sm mb-4 flex gap-4 items-start">
                <div className="bg-[#F5E9DC] p-3 rounded-full">
                  <img src={mail} className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500">EMAIL US</p>
                  <p className="font-medium text-gray-800">
                    support@lekhanmart.com
                  </p>
                  <p className="text-sm text-gray-500">
                    We reply within 24 working hours
                  </p>
                </div>
              </div>
              <div className="bg-white p-4 rounded shadow-sm flex gap-4 items-start">
                <div className="bg-[#F5E9DC] p-3 rounded-full">
                  <img src={whatsapp} className="w-5 h-5" />
                </div> <div>
                  <p className="text-xs font-semibold text-gray-500">WHATSAPP</p>
                  <p className="font-medium text-gray-800">
                    +91 98765 43210
                  </p>
                  <p className="text-sm text-gray-500">
                    Fastest support for quick queries
                  </p>
                </div>
              </div>
            </div>
            {/* VISIT STORE */}
            <div className="bg-[#F5F5F5] p-5 rounded-lg border">
              <div className="flex justify-between items-center mb-3">
                <h2 className="font-semibold">Visit Our Store</h2>
                <span className="text-xs text-black font-medium">
                  Open Now
                </span>
              </div>
              <div className="bg-[#E5E5E5] h-44 rounded-lg relative flex items-center justify-center">
                <div className="absolute flex flex-col items-center">
                  <div className="bg-[#C2863FFF] p-2 rounded-full shadow">
                    <img src={location} className="w-5 h-5" />
                  </div>
                  <div className="mt-2 bg-white text-xs px-3 py-1 rounded-full shadow">
                    LekhanMart Flagship Store
                  </div>
                </div>
              </div>
             <button onClick={() => alert("Opening Google Maps")}
      className="mt-3 bg-white px-4 py-2 rounded-md text-sm border border-gray-300 flex items-center gap-2 shadow-sm">
       <img src={share} className="w-4 h-4" />
       Open in Google Maps
         </button>
            </div>
            {/* BUSINESS HOURS */}
            <div className="bg-[#F5F5F5] p-5 rounded-lg border">
              <h2 className="font-semibold mb-3">Business Hours</h2>
              <div className="flex items-start gap-3 text-sm">
                <img src={clock} className="w-5 h-5 mt-1" />
                <div>
                  <p className="text-gray-600">
                    Monday - Friday: 09:00 AM - 08:00 PM
                  </p>
                  <p className="text-gray-600">
                    Saturday: 10:00 AM - 06:00 PM
                  </p>
                  <p className="text-red-500 mt-1">
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            {/* JOIN */}
            <div className="p-5 rounded bg-[linear-gradient(180deg,#FFFFFFFF_0%,#FFF49CFF_100%)] border">
              <h2 className="font-semibold mb-2">Join the Lekhan Community</h2>
              <p className="text-sm text-gray-600 mb-3">
                Subscribe to our newsletter for exclusive updates and offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input type="email"
                  placeholder="Enter email"
                  className="border p-2 rounded w-full"/>
                <button onClick={() => alert("Joined successfully! 🎉")}
                  className="bg-[#C2863FFF] text-white px-4 py-2 rounded">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;