import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AboutMe from "../Pages/AboutMe/AboutMe";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import MyAccount from "../Pages/MyAccount/MyAccount";


const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/myaccount" element={<MyAccount/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
