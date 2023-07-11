import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} name="home" exact />
        <Route path="/menu" element={<Menu />} name="menu" exact />
        <Route path="/about" element={<About />} name="about" exact />
        <Route path="/contact" element={<Contact />} name="contact" exact />
        <Route path="cart" element={<Cart />} name="cart" exact />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
