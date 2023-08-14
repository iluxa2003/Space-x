import React from "react";
import rocket from "../../icons/roket.svg";
import style from "./LoadingRocket.module.scss";

export default function LoadingRocket() {
  return (
    <span className={style.rocket}>
      <img src={rocket} alt="" className={style.rocket_icon} />
    </span>
  );
}
