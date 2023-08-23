import React from "react";
import propTypes from "prop-types";
import style from "./YearLine.module.scss";

export default function YearLine({ year }) {
  return <div className={style.year_line}>{year}</div>;
}

YearLine.propTypes = {
  year: propTypes.number,
};
YearLine.defaultProps = {
  year: 2022,
};
