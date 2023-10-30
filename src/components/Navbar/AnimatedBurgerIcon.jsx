import React from 'react';
import propTypes from 'prop-types';
import Close from '../../icons/close.svg';
import Busher from '../../icons/burher.svg';
import style from './AnimatedBurgerIcon.module.scss';

export default function AnimatedBurgerIcon({ isOpen }) {
  return isOpen ? (
    <Close className={style.icon} />
  ) : (
    <Busher className={style.icon} />
  );
}

AnimatedBurgerIcon.propTypes = {
  isOpen: propTypes.bool.isRequired,
};
