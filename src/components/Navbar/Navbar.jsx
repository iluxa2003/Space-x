import { React, useState } from "react";
import style from "./Navbar.module.scss";
import logo from "../../icons/spaceXLogo.svg";
import close from "../../icons/close.svg";
import busher from "../../icons/burher.svg";
import instagram from "../../icons/instagram.svg";
import twitter from "../../icons/twitter.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <navbar className={style.navbar}>
      <div className={style.navbar_top_menu}>
        <img src={logo} alt="" className="" />
        <button
          className={style.navbar_top_menu_icon_button}
          type="button"
          onClick={() => {
            setOpen((state) => !state);
          }}
        >
          <img src={open ? close : busher} alt="" className={style.icon} />
        </button>
      </div>
      <div className={`${style.navbar_mobile_menu} ${open ? "" : style.closed}`}>
        <div className={style.navbar_mobile_menu_list}>
          <div className={style.navbar_mobile_menu_list_items}>
            Launches
            <div className={style.line} />
          </div>
          <div className={style.navbar_mobile_menu_list_items}>
            Rockets
            <div className={style.line} />
          </div>
          <div className={style.navbar_mobile_menu_list_items}>
            Launchpads
            <div className={style.line} />
          </div>
          <div className={style.navbar_mobile_menu_list_items}>
            About us
            <div className={style.line} />
          </div>
          <div className={style.navbar_mobile_menu_list_items}>
            Contact Us
            <div className={style.line} />
          </div>
        </div>
        <footer className={style.navbar_footer}>
          <div className={style.navbar_footer_text}>Follow us</div>
          <div className={style.navbar_footer_icons_wrapper}>
            <a href="https://www.instagram.com/">
              <img src={instagram} alt="" className={style.navbar_footer_icon} />
            </a>
            <a href="https://twitter.com/">
              <img src={twitter} alt="" className={style.navbar_footer_icon} />
            </a>
          </div>
        </footer>
      </div>
      <div />
    </navbar>
  );
}
