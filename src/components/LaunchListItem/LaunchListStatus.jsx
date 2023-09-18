import React from 'react';
import propTypes from 'prop-types';
import style from './LaunchListStatus.module.scss';

export default function LaunchListStatus({ status = 'success' }) {
  return (
    <>
      {status === 'success' && (
        <span className={style.text_success}>Launched at</span>
      )}
      {status === 'upcoming' && (
        <span className={style.text_upcoming}>Upcoming at</span>
      )}
      {status === 'failed' && (
        <span className={style.text_failed}>Failed at</span>
      )}
    </>
  );
}

LaunchListStatus.propTypes = {
  status: propTypes.oneOf(['success', 'failed', 'upcoming']),
};
