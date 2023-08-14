import React from "react";
import instagram from "../../icons/instagram.svg";
import twitter from "../../icons/twitter.svg";
import style from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer_text}>Follow us</div>
      <div className={style.footer_icons_wrapper}>
        <a href="https://www.instagram.com/">
          <img src={instagram} alt="" className={style.footer_icon} />
        </a>
        <a href="https://twitter.com/">
          <img src={twitter} alt="" className={style.footer_icon} />
        </a>
      </div>
    </footer>
  );
}
