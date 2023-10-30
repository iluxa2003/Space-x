/* eslint-disable object-curly-newline */
import React from 'react';
import propTypes from 'prop-types';
import style from './SegmentPickerItem.module.scss';

export default function SegmentPickerItem({
  name,
  value,
  checked = false,
  children,
}) {
  const id = Math.random();
  return (
    <label
      htmlFor={id}
      className={`${style.root} ${checked && style.line}`}
      key={Math.random()}
    >
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        defaultChecked={checked}
      />
      {children}
    </label>
  );
}
SegmentPickerItem.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  checked: propTypes.bool,
  children: propTypes.oneOfType([propTypes.string, propTypes.object])
    .isRequired,
};
