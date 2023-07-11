import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../Styles/Footer.css";
import { Padding } from "@mui/icons-material";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <p style={{ textAlign: "center", marginTop: "1rem"  }}>
          &copy; 2023 pizzaHouse.com
        </p>
        <InstagramIcon />
        <FacebookIcon />
        <TwitterIcon />
        <LinkedInIcon />
      </div>
    </div>
  );
}

export default Footer;
