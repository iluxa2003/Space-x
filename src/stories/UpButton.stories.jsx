import React from 'react';
import UpButton from '../components/UpButton/UpButton';

export default {
  title: 'UpButton',
  component: UpButton,
};

function Template(args) {
  return <UpButton {...args} />;
}

export const UpButtonDef = Template.bind({});
UpButtonDef.args = {};
