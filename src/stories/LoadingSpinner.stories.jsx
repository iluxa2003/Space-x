import React from 'react';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

export default {
  title: 'LoadingSpinner',
  component: LoadingSpinner,
};

function Template(args) {
  return <LoadingSpinner {...args} />;
}

export const LoadingSpinnerDef = Template.bind({});
LoadingSpinnerDef.args = {};
