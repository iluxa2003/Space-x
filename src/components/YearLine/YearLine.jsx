import React from 'react';
import propTypes from 'prop-types';
import style from './YearLine.module.scss';

export default function YearLine({ year = 2022 }) {
  return <div className={style.root}>{year}</div>;
}

YearLine.propTypes = {
  year: propTypes.number,
};
