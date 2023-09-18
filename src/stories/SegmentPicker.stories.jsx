import React from 'react';
import SegmentPicker from '../components/SegmentPicker/SegmentPicker';

export default {
  title: 'SegmentPicker',
  component: SegmentPicker,
};

function Template(args) {
  return <SegmentPicker {...args} />;
}

export const SegmentPickerDef = Template.bind({});
SegmentPickerDef.args = {};
