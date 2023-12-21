import React from 'react';
import propTypes from 'prop-types';
import style from './SegmentPicker.module.scss';
import SegmentPickerItem from './SegmentPickerItem';

export default function SegmentPicker({ onChange, value }) {
  return (
    <div className={style.root}>
      <SegmentPickerItem
        name="state"
        value="1"
        onChange={onChange}
        checked={value === '1'}
      >
        Successful
      </SegmentPickerItem>
      <SegmentPickerItem
        name="state"
        value="2"
        onChange={onChange}
        checked={value === '2'}
      >
        Upcoming
      </SegmentPickerItem>
      <SegmentPickerItem
        name="state"
        value="3"
        onChange={onChange}
        checked={value === '3'}
      >
        Failed
      </SegmentPickerItem>
    </div>
  );
}

SegmentPicker.propTypes = {
  onChange: propTypes.func.isRequired,
  value: propTypes.oneOf(['1', '2', '3']).isRequired,
};
