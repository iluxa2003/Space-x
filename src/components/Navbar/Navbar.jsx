import { React, useState } from "react";
import "./Navbar.scss";
import logo from "../../icons/spaceXLogo.svg";
import close from "../../icons/close.svg";
import busher from "../../icons/burher.svg";
import instagram from "../../icons/instagram.svg";
import twitter from "../../icons/twitter.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <navbar className="navbar">
      <div className="navbar-top_menu">
        <img src={logo} alt="" className="" />
        <button
          className="navbar-top_menu_icon-button"
          type="button"
          onClick={() => {
            setOpen((state) => !state);
          }}
        >
          <img src={open ? close : busher} alt="" className="icon" />
        </button>
      </div>
      <div className={`navbar-mobile_menu ${open ? "" : "closed"}`}>
        <div className="navbar-mobile_menu-list">
          <div className="navbar-mobile_menu-list_items">
            Launches
            <div className="line" />
          </div>
          <div className="navbar-mobile_menu-list_items">
            Rockets
            <div className="line" />
          </div>
          <div className="navbar-mobile_menu-list_items">
            Launchpads
            <div className="line" />
          </div>
          <div className="navbar-mobile_menu-list_items">
            About us
            <div className="line" />
          </div>
          <div className="navbar-mobile_menu-list_items">
            Contact Us
            <div className="line" />
          </div>
        </div>
        <footer className="navbar-footer">
          <div className="navbar-footer_text">Follow us</div>
          <div className="navbar-footer_icons-wrapper">
            <a href="https://www.instagram.com/">
              <img src={instagram} alt="" className="navbar-footer_icon" />
            </a>
            <a href="https://twitter.com/">
              <img src={twitter} alt="" className="navbar-footer_icon" />
            </a>
          </div>
        </footer>
      </div>
      <div />
    </navbar>
  );
}
