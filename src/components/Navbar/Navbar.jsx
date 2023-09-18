import React, { useState } from 'react';
import style from './Navbar.module.scss';
import Logo from '../../icons/spaceXLogo.svg';
import Close from '../../icons/close.svg';
import Busher from '../../icons/burher.svg';
import Instagram from '../../icons/instagram.svg';
import Twitter from '../../icons/twitter.svg';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className={style.root}>
      <div className={style.topMenu}>
        <Logo className="" />
        <button
          className={style.iconButton}
          type="button"
          onClick={() => {
            setOpen((state) => !state);
          }}
        >
          {open ? (
            <Close className={style.icon} />
          ) : (
            <Busher className={style.icon} />
          )}
        </button>
      </div>
      <div className={`${style.mobileMenu} ${open ? '' : style.closed}`}>
        <div>
          <div className={style.listItem}>
            Launches
            <div className={style.line} />
          </div>
          <div className={style.listItem}>
            Rockets
            <div className={style.line} />
          </div>
          <div className={style.listItem}>
            Launchpads
            <div className={style.line} />
          </div>
          <div className={style.listItem}>
            About us
            <div className={style.line} />
          </div>
          <div className={style.listItem}>
            Contact Us
            <div className={style.line} />
          </div>
        </div>
        <footer className={style.footer}>
          <div className={style.footerText}>Follow us</div>
          <div className={style.footerWrapper}>
            <a href="https://www.instagram.com/">
              <Instagram className={style.icon} />
            </a>
            <a href="https://twitter.com/">
              <Twitter className={style.icon} />
            </a>
          </div>
        </footer>
      </div>
      <div />
    </div>
  );
}
