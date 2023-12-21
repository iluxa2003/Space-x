import React from 'react';
import propTypes from 'prop-types';
import style from './IconButton.module.scss';

export default function IconButton({ onClick, children, variant }) {
  let styles = '';
  if (variant === 'stripped') {
    styles = style.stripped;
  }
  if (variant === 'primary') {
    styles = style.primary;
  }
  return (
    <button className={styles} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

IconButton.propTypes = {
  onClick: propTypes.func.isRequired,
  children: propTypes.element.isRequired,
  variant: propTypes.oneOf(['stripped', 'primary']).isRequired,
};
