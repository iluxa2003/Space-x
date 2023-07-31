import React from "react";
import rocket from "../../icons/roket.svg";
import "./LoadingRocket.scss";

export default function LoadingRocket() {
  return (
    <span className="rocket">
      <img src={rocket} alt="" className="rocket-icon" />
    </span>
  );
}
