import React from 'react';
import Rocket from '../../icons/roket.svg';
import style from './LoadingRocket.module.scss';

export default function LoadingRocket() {
  return (
    <span className={style.root}>
      <Rocket className={style.icon} />
    </span>
  );
}
