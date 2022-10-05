import React from "react";

import Navbar from "../components/Nav";
import Travel from "../components/Travel";
import Footer from "../components/Footer";
import PropagateLoader from "react-spinners/PropagateLoader";
import { motion } from "framer-motion";
import PageOut from "./PageOut";

const Travels = () => {
  return (
    <PageOut>
      <Navbar />
      <Travel />
      <Footer />
    </PageOut>
  );
};

export default Travels;
