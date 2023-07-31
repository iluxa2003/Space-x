import React from "react";
import propTypes from "prop-types";
import arrowRight from "../../icons/arrowRight.svg";
import LoadingRocket from "./LoadingRocket";
import "./LaunchListItem.scss";

export default function LaunchListItem({ image, status, date }) {
  return (
    <figure className="launch-list-item">
      {image === "false" ? (
        <LoadingRocket />
      ) : (
        <img src={image} alt="" className="launch-list-item_working-icon" />
      )}
      <figcaption className="launch-list-item_figcaption">
        <h2>FalconSat</h2>
        <div>
          <div className="light-grey">Rocket Falcon 9</div>
          <div className="launch-list-item_date">
            {status === "success" && <span className="text-success">Launched at</span>}
            {status === "upcoming" && <span className="text-upcoming">Upcoming at</span>}
            {status === "failed" && <span className="text-failed">Failed at</span>}
            <span className="dark-grey">{date}</span>
          </div>
        </div>
      </figcaption>
      <span>
        <img src={arrowRight} alt="" className="launch-list-item_icon-arrow" />
      </span>
    </figure>
  );
}

LaunchListItem.propTypes = {
  image: propTypes.string,
  status: propTypes.oneOf(["success", "failed", "upcoming"]),
  date: propTypes.string,
};
LaunchListItem.defaultProps = {
  image: "false",
  status: "success",
  date: "22 Dec 08:00",
};
