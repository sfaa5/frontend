import React from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./homefile/Home";
import About from "./About_us/About";
import Category from "./categories/Category";
import Volunteer from "./components/Volunteer";
import "./App.css"; // Import your CSS file
import Contact from "./Contact_us/Contact";
import { Shop } from "./volunteerSop/pages/shop/shop";
import {Cart} from "./volunteerSop/pages/cart/Cart"
import { useGlobalcontext } from "./context/globalContext";
import ScrollToTop from "./Scroll";
function App() {
  const location = useLocation();
  const {donor,needy}=useGlobalcontext();
  return (
    <div className="app-container">
      {/* Conditionally render Header if the current path is not "/login" */}
      {location.pathname !== "/login" && <Header />}

      <div className="content-wrap">
        <ScrollToTop/>
        <Routes>
          <Route path="/profile"   element={donor?<ProfilePage />:<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={needy?<Shop />:<Navigate to="/login" />} />
        </Routes>
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
