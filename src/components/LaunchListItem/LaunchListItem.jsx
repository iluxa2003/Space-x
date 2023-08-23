import React from "react";
import propTypes from "prop-types";
import arrowRight from "../../icons/arrowRight.svg";
import LoadingRocket from "./LoadingRocket";
import style from "./LaunchListItem.module.scss";

export default function LaunchListItem({ image, status, date }) {
  return (
    <figure className={style.launch_list_item}>
      {image === "false" ? (
        <LoadingRocket />
      ) : (
        <img src={image} alt="" className={style.launch_list_item_working_icon} />
      )}
      <figcaption className={style.launch_list_item_figcaption}>
        <h2>FalconSat</h2>
        <div>
          <div className={style.light_grey}>Rocket Falcon 9</div>
          <div className={style.launch_list_item_date}>
            {status === "success" && <span className={style.text_success}>Launched at</span>}
            {status === "upcoming" && <span className={style.text_upcoming}>Upcoming at</span>}
            {status === "failed" && <span className={style.text_failed}>Failed at</span>}
            <span className={style.dark_grey}>{date}</span>
          </div>
        </div>
      </figcaption>
      <span>
        <img src={arrowRight} alt="" className={style.launch_list_item_icon_arrow} />
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
