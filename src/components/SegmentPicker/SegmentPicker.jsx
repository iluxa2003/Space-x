import { React, useState } from "react";
import propTypes from "prop-types";
import style from "./SegmentPicker.module.scss";
import SegmentPickerItem from "./SegmentPickerItem";

export default function SegmentPicker({ onChange }) {
  const [segmentPickerState, setSegmentPickerState] = useState("");
  const segmentPickerHandler = (event) => {
    setSegmentPickerState(event.target.value);
    try {
      onChange(event);
    } catch {}
  };
  return (
    <div className={style.segment_picker} onChange={segmentPickerHandler}>
      <SegmentPickerItem
        name="state"
        value="1"
        checked={segmentPickerState === "1" && true}
        key={Math.random()}
      >
        Successful
      </SegmentPickerItem>
      <SegmentPickerItem
        name="state"
        value="2"
        checked={segmentPickerState === "2" && true}
        key={Math.random()}
      >
        Upcoming
      </SegmentPickerItem>
      <SegmentPickerItem
        name="state"
        value="3"
        checked={segmentPickerState === "3" && true}
        key={Math.random()}
      >
        Failed
      </SegmentPickerItem>
    </div>
  );
}
SegmentPicker.propTypes = {
  onChange: propTypes.func,
};

SegmentPicker.defaultProps = {
  onChange: () => {},
};
