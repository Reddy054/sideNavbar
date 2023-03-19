import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import { AiOutlineMenu } from "react-icons/ai";

const App = () => {
  const openMenu = () => {
    const menu = document.getElementsByClassName("sidebar_container")[0];

    console.log(menu);
    menu.classList.toggle("small-menu");
  };
  return (
    <BrowserRouter>
      <header>
        <div>
          <AiOutlineMenu className="toggle_menu" onClick={openMenu} />
          <span className="logo">Logo</span>
        </div>
        <div>header</div>
        <div>Icon</div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
