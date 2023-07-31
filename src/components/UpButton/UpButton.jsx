import React from "react";
import "./UpButton.scss";
import propTypes from "prop-types";
import arrowUp from "../../icons/arrowUp.svg";

export default function UpButton({ click }) {
  return (
    <button className="up-button" onClick={click} type="button">
      <img src={arrowUp} alt="" className="up-button_icon" />
    </button>
  );
}

UpButton.propTypes = {
  click: propTypes.func,
};
UpButton.defaultProps = {
  click: () => {},
};
