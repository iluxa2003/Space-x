/* eslint-disable object-curly-newline */
import React from 'react';
import propTypes from 'prop-types';
import style from './SegmentPickerItem.module.scss';

export default function SegmentPickerItem({
  name,
  value,
  checked = false,
  onChange,
  children,
}) {
  return (
    <label
      htmlFor={value}
      className={`${style.root} ${checked && style.line}`}
      key={value}
    >
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        onChange={onChange}
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
  onChange: propTypes.func.isRequired,
  children: propTypes.oneOfType([propTypes.string, propTypes.object])
    .isRequired,
};
