/* eslint-disable object-curly-newline */
import React from 'react';
import propTypes from 'prop-types';
import style from './SegmentPickerItem.module.scss';

export default function SegmentPickerItem({
  name = '',
  value = '',
  checked = false,
  children = '',
}) {
  const id = Math.random();
  return (
    <div className={style.root} key={Math.random()}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        defaultChecked={checked}
      />

      <label htmlFor={id}>
        {children}
        {checked && <div className={style.line} />}
      </label>
    </div>
  );
}
SegmentPickerItem.propTypes = {
  name: propTypes.string,
  value: propTypes.string,
  checked: propTypes.bool,
  children: propTypes.oneOfType([propTypes.string, propTypes.object]),
};
