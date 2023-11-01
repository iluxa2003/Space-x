import React, { useState } from 'react';
import propTypes from 'prop-types';
import style from './SegmentPicker.module.scss';
import SegmentPickerItem from './SegmentPickerItem';

export default function SegmentPicker({ onChange, value }) {
  const [segmentPickerState, setSegmentPickerState] = useState(value);
  const segmentPickerHandler = (event) => {
    setSegmentPickerState(event.target.value);
    try {
      onChange(event);
    } catch {
      Math.random();
    }
  };

  return (
    <div className={style.root}>
      <SegmentPickerItem
        name="state"
        value="1"
        onChange={segmentPickerHandler}
        checked={segmentPickerState === '1' && true}
      >
        Successful
      </SegmentPickerItem>
      <SegmentPickerItem
        name="state"
        value="2"
        onChange={segmentPickerHandler}
        checked={segmentPickerState === '2' && true}
      >
        Upcoming
      </SegmentPickerItem>
      <SegmentPickerItem
        name="state"
        value="3"
        onChange={segmentPickerHandler}
        checked={segmentPickerState === '3' && true}
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
