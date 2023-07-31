import React from "react";
import loading from "../../icons/loading.svg";
import "./LoadingSpinner.scss";

export default function LoadingSpinner() {
  return (
    <span>
      <img src={loading} alt="" className="spinner" />
    </span>
  );
}
