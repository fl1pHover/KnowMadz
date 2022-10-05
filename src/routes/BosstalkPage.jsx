import React from "react";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import Bosstalk from "../components/Bosstalk";
// loader and animation
import PropagateLoader from "react-spinners/PropagateLoader";
import { motion } from "framer-motion";
import PageOut from "./PageOut";

const BosstalkPage = () => {
  return (
    <PageOut>
      <Navbar />
      <Bosstalk />
      <Footer />
    </PageOut>
  );
};

export default BosstalkPage;
