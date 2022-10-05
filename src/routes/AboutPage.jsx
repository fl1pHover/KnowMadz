import React, { useState, useEffect } from "react";

import Navbar from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";

// Loader and Animation
import PageOut from "./PageOut";
const AboutPage = () => {
  return (
    <PageOut>
      <Navbar />
      <About />
      <Footer />
    </PageOut>
  );
};

export default AboutPage;
