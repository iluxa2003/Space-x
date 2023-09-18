import React from 'react';
import YearLine from '../components/YearLine/YearLine';

export default {
  title: 'YearLine',
  component: YearLine,
};

function Template(args) {
  return <YearLine {...args} />;
}

export const YearLineDef = Template.bind({});
YearLineDef.args = {};
