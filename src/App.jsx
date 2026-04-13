import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import WritingEssentials from "./pages/WritingEssentials"; 
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import  Profile from "./pages/Profile";
import Blog from "./pages/Blog";
import Orders from "./pages/Orders";
import Address from "./pages/Address";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/writing-essentials" element={<WritingEssentials />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element ={<Checkout />} />
        <Route path="/profile" element ={<Profile/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/address" element={<Address />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;