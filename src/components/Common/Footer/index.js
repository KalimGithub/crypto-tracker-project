import React from "react";
import styles from "./styles.css";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Footer() {
  return (
    <div className="footer">
      <Link to="/">
        <h1 className="logo">CryptoTracker.</h1>
      </Link>
      <div className="social-icons-div">
        {/* <Link to={"https://www.facebook.com/"}>
          <FacebookIcon className="social-icon" />
        </Link> */}
        <Link to={"mailto:sk22kalim@gmail.com"}>
          <EmailIcon className="social-icon" />
        </Link>
        <Link to={"https://x.com/"}>
          <XIcon className="social-icon" />
        </Link>
        <Link to={"https://www.instagram.com/"}>
          <InstagramIcon className="social-icon" />
        </Link>
        <Link to={"https://www.linkedin.com/in/kalimshaikh78/"}>
          <LinkedInIcon className="social-icon" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
