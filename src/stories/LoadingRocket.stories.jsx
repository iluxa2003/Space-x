import React from 'react';
import LoadingRocket from '../components/LaunchListItem/LoadingRocket';

export default {
  title: 'LoadingRocket',
  component: LoadingRocket,
};

function Template(args) {
  return <LoadingRocket {...args} />;
}

export const LoadingRocketDef = Template.bind({});
LoadingRocketDef.args = {};
