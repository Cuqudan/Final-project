import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AboutMe from "../Pages/AboutMe/AboutMe";


const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
