import React from "react";
import "./styles.css";
import Drawer from "./Drawer";
import Button from "../Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="logo">
          CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
        </h1>
      </Link>

      <div className="links">
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        {/* <Link to="/compare">
          <p className="link">Compare</p>
        </Link>
        <Link to="/watchlist">
          <p className="link">WatchList</p>
        </Link> */}
        <Link to="/dashboard">
          <Button
            text="dashboard"
            onclick={() => console.log("Dashboard btn clicked")}
          />
        </Link>
      </div>
      <div className="mobile-drawer">
        <Drawer />
      </div>
    </div>
  );
}

export default Header;
