import React from "react";

import Navbar from "../components/Nav";
import Work from "../components/Work";
import Footer from "../components/Footer";
import PageOut from "./PageOut";
import PropagateLoader from "react-spinners/PropagateLoader";
import { motion } from "framer-motion";

const Workpage = () => {
  return (
    <PageOut>
      <Navbar />
      <Work />
      <Footer />
    </PageOut>
  );
};

export default Workpage;
