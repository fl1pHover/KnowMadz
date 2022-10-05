import React from "react";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
// import ContactPage from "../components/ContactPage";
// loader and animation
import PropagateLoader from "react-spinners/PropagateLoader";
import { motion } from "framer-motion";
import PageOut from "./PageOut";

const ContactPage = () => {
  return (
    <PageOut>
      <Navbar />
      <Contact />
      <Footer />
    </PageOut>
  );
};

export default ContactPage;
