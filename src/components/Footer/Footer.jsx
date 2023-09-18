import React from 'react';
import Instagram from '../../icons/instagram.svg';
import Twitter from '../../icons/twitter.svg';
import style from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={style.root}>
      <div className={style.text}>Follow us</div>
      <div className={style.iconWrapper}>
        <a href="https://www.instagram.com/">
          <Instagram className={style.icon} />
        </a>
        <a href="https://twitter.com/">
          <Twitter className={style.icon} />
        </a>
      </div>
    </footer>
  );
}
