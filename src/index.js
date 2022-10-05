import ReactDOM from "react-dom";
import App from "./App";
import React, { Component } from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import PageOut from "./routes/PageOut";
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/AboutPage";
import TravelsPage from "./routes/TravelsPage";
import BosstalkPage from "./routes/BosstalkPage";
import ContactPage from "./routes/ContactPage";
import MembersPage from "./routes/MembersPage";
// import HomePage from "./routes/HomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/travel" element={<TravelsPage />} />
      <Route path="/bosstalk" element={<BosstalkPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/members" element={<MembersPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();
