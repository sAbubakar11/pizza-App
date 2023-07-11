import React, { useState } from "react";
import logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../Styles/Navbar.css";

function Navbar() {
  const [openLink, setOpenLink] = useState(false);

  const toggleNavbar = () => {
    setOpenLink(!openLink);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLink ? "open" : "close"}>
        <img src={logo} alt="logo" />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu"> Menu</Link>
          <Link to="/about"> About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu"> Menu</Link>
        <Link to="/about"> About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
