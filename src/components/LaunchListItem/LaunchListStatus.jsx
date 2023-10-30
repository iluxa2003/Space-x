import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import style from './LaunchListStatus.module.scss';

export default function LaunchListStatus({ status }) {
  return (
    <span
      className={classNames({
        [style.textSuccess]: status === 'success',
        [style.textUpcoming]: status === 'upcoming',
        [style.textFailed]: status === 'failed',
      })}
    >
      {status === 'success' && 'Launched at'}
      {status === 'upcoming' && 'Upcoming at'}
      {status === 'failed' && 'Failed at'}
    </span>
  );
}

LaunchListStatus.propTypes = {
  status: propTypes.oneOf(['success', 'failed', 'upcoming']).isRequired,
};
