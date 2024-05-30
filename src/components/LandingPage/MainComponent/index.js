import React from "react";
import "./styles.css";
import Buttons from "../../Common/Button";
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.png";
import { motion, spring } from "framer-motion";
import { Link } from "react-router-dom";
function MainComponent() {
  return (
    <div className="flex-info">
      <div className="left-component">
        <motion.h1
          className="track-crypto-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: spring, duration: 1 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="real-time-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: spring, duration: 1, delay: 0.5 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="text-info"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: spring, duration: 1, delay: 1 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: spring, duration: 1, delay: 1.5 }}
        >
          <Link to='/dashboard'><Buttons  text={"Dashboard"} /></Link>
          
          <Buttons text={"Share"} outlined={true} />
        </motion.div>
      </div>
      <div className="right-component">
        <motion.img
          src={iphone}
          className="iphone"
          initial={{ y: -20 }}
          animate={{ y: 20 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
        <img src={gradient} className="gradient" />
      </div>
    </div>
  );
}

export default MainComponent;
