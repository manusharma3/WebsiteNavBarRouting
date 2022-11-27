import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";


const Main= () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar/>}>
        <Route index element={<Home />} />
        <Route path="ContactUs" element={<Contact />} />
        <Route path="AboutUs" element={<About/>} />       
      </Route>
    </Routes>
  </BrowserRouter>
  );
};
export default Main;
