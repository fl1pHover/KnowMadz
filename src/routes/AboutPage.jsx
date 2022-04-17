import React, { useState, useEffect } from "react";

import Navbar from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import PageOut from "./PageOut";
import PropagateLoader from "react-spinners/PropagateLoader";
import { motion } from "framer-motion";
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
