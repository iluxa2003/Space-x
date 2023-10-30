import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import ArrowRight from '../../icons/arrowRight.svg';
import style from './LaunchListItem.module.scss';
import LaunchListStatus from './LaunchListStatus';

import launchPlaceholderSrc from '../../img/rocketWithBG.png';

export default function LaunchListItem({
  launchId,
  image = launchPlaceholderSrc,
  status,
  date,
}) {
  return (
    <Link to={`/launches/${launchId}`} className={style.link}>
      <figure className={style.root}>
        <div className={style.leftSide}>
          <img src={image} alt="" className={style.image} />
          <figcaption className={style.figcaption}>
            <h2 className={style.title}>FalconSat</h2>
            <div>
              <div className={style.rocket}>Rocket Falcon 9</div>
              <div className={style.itemDate}>
                <LaunchListStatus status={status} />
                <span className={style.date}>{date}</span>
              </div>
            </div>
          </figcaption>
        </div>
        <span>
          <ArrowRight className={style.iconArrow} />
        </span>
      </figure>
    </Link>
  );
}

LaunchListItem.propTypes = {
  launchId: propTypes.string.isRequired,
  image: propTypes.string,
  status: propTypes.oneOf(['success', 'failed', 'upcoming']).isRequired,
  date: propTypes.string.isRequired,
};
