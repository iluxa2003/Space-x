import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import style from './Navbar.module.scss';
import Logo from '../../icons/spaceXLogo.svg';
import Instagram from '../../icons/instagram.svg';
import Twitter from '../../icons/twitter.svg';
import IconButton from '../IconButton/IconButton';
import AnimatedBurgerIcon from './AnimatedBurgerIcon';

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={style.root}>
      <div className={style.topMenu}>
        <Logo className={style.icon} />
        <IconButton
          variant="stripped"
          onClick={() => {
            setOpen((state) => !state);
          }}
        >
          <AnimatedBurgerIcon isOpen={isOpen} />
        </IconButton>
      </div>
      <div className={classNames(style.mobileMenu, !isOpen && style.closed)}>
        <ul className={style.list}>
          <li className={style.listItem}>
            <Link to="./launches">Launches </Link>
          </li>

          <li className={style.listItem}>
            <Link to="./rockets">Rockets</Link>
          </li>

          <li className={style.listItem}>
            <Link to="./launchpads">Launchpads</Link>
          </li>

          <li className={style.listItem}>
            <Link to="./about-us">About us</Link>
          </li>

          <li className={style.listItem}>
            <Link to="./contact-us">Contact Us</Link>
          </li>
        </ul>
        <footer className={style.footer}>
          <div className={style.footerText}>Follow us</div>
          <div className={style.footerWrapper}>
            <a href="https://www.instagram.com/">
              <Instagram className={`${style.icon} ${style.purple}`} />
            </a>
            <a href="https://twitter.com/">
              <Twitter className={`${style.icon} ${style.purple}`} />
            </a>
          </div>
        </footer>
      </div>
      <div />
    </div>
  );
}
