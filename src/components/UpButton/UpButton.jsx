import React from "react";
import propTypes from "prop-types";
import style from "./UpButton.module.scss";
import arrowUp from "../../icons/arrowUp.svg";

export default function UpButton({ click }) {
  return (
    <button className={style.up_button} onClick={click} type="button">
      <img src={arrowUp} alt="" className={style.up_button_icon} />
    </button>
  );
}

UpButton.propTypes = {
  click: propTypes.func,
};
UpButton.defaultProps = {
  click: () => {},
};
