import React from 'react';
import propTypes from 'prop-types';
import ArrowRight from '../../icons/arrowRight.svg';
import LoadingRocket from './LoadingRocket';
import style from './LaunchListItem.module.scss';
import LaunchListStatus from './LaunchListStatus';

export default function LaunchListItem({
  image = '',
  status = 'success',
  date = '2022',
}) {
  return (
    <figure className={style.root}>
      {image === '' ? <LoadingRocket /> : image}
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
      <span>
        <ArrowRight className={style.iconArrow} />
      </span>
    </figure>
  );
}

LaunchListItem.propTypes = {
  image: propTypes.element,
  status: propTypes.oneOf(['success', 'failed', 'upcoming']),
  date: propTypes.string,
};
