import React, { useState, useEffect } from "react";
import { animate, motion } from "framer-motion";
// import PropagateLoader from "react-spinners/PropagateLoader";
import PropagateLoader from "react-spinners/PropagateLoader";
const page = {
  before: {
    opacity: 0
  },
  after: {
    opacity: 1,
    transition: { duration: 2 }
  }
};
const pageOut = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1
    }
  },
  exit: {
    opacity: 0
  }
};
const PageOut = ({ children }) => {
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState(
    "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"
  );

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="loader">
          <motion.div variants={page} initial="before" animate="after">
            <PropagateLoader size={10} color={color} loading={loading} />
          </motion.div>
        </div>
      ) : (
        <motion.div
          variants={pageOut}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default PageOut;
