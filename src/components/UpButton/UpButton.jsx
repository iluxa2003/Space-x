import React from 'react';
import propTypes from 'prop-types';
import style from './UpButton.module.scss';
import ArrowUp from '../../icons/arrowUp.svg';

export default function UpButton({ click = () => {} }) {
  return (
    <button className={style.root} onClick={click} type="button">
      <ArrowUp className={style.icon} />
    </button>
  );
}

UpButton.propTypes = {
  click: propTypes.func,
};
