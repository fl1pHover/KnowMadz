import React from "react";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import Members from "../components/Members";

// loader and animation
import PageOut from "./PageOut";

const MembersPage = () => {
  return (
    <PageOut>
      <Navbar />
      <Members />
      <Footer />
    </PageOut>
  );
};

export default MembersPage;
