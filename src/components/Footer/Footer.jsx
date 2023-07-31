import React from "react";
import instagram from "../../icons/instagram.svg";
import twitter from "../../icons/twitter.svg";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_text">Follow us</div>
      <div className="footer_icons-wrapper">
        <a href="https://www.instagram.com/">
          <img src={instagram} alt="" className="footer_icon" />
        </a>
        <a href="https://twitter.com/">
          <img src={twitter} alt="" className="footer_icon" />
        </a>
      </div>
    </footer>
  );
}
