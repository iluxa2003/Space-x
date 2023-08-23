import React from "react";
import loading from "../../icons/loading.svg";
import style from "./LoadingSpinner.module.scss";

export default function LoadingSpinner() {
  return (
    <span>
      <img src={loading} alt="" className={style.spinner} />
    </span>
  );
}
