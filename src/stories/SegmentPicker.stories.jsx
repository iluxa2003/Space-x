import React, { useState } from 'react';
import SegmentPicker from '../components/SegmentPicker/SegmentPicker';

export default {
  title: 'SegmentPicker',
  component: SegmentPicker,
};

export const SegmentPickerDef = {
  render: () => {
    const [value, setValue] = useState('1');
    return (
      <SegmentPicker
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    );
  },
};
