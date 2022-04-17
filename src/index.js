import ReactDOM from "react-dom";
import App from "./App";
import React, { Component } from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import PageOut from "./routes/PageOut";
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/AboutPage";
import Workpage from "./routes/Workpage";
// import HomePage from "./routes/HomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/work" element={<Workpage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();
