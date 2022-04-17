import React, { useState, useEffect } from "react";
import Navbar from "./components/Nav";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Banner from "./components/Banner";
import Event from "./components/Event";
import Team from "./components/Team";
import Involve from "./components/Involve";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
// Loader
import PropagateLoader from "react-spinners/PropagateLoader";
import PageOut from "./routes/PageOut";

const App = () => {
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState(
    "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"
  );

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const page = {
    before: {
      opacity: 0
    },
    after: {
      opacity: 1,
      transition: { duration: 2 }
    }
  };

  return (
    <div className="App">
      <PageOut>
        <Navbar />
        <Header />
        <Experience />
        <Banner />
        <Event />
        <Team />
        <Involve />
        <Footer />
      </PageOut>
    </div>
  );
};

export default App;
