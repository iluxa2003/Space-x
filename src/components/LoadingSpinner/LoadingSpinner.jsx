import React from 'react';
import Loading from '../../icons/loading.svg';
import style from './LoadingSpinner.module.scss';

export default function LoadingSpinner() {
  return (
    <span>
      <Loading className={style.root} />
    </span>
  );
}
