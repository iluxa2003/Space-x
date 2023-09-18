import React from 'react';
import LaunchListItem from '../components/LaunchListItem/LaunchListItem';

export default {
  title: 'LaunchListItem',
  component: LaunchListItem,
};

function Template(args) {
  return <LaunchListItem {...args} />;
}

export const LaunchListItemDefault = Template.bind({});
LaunchListItemDefault.args = {};

export const LaunchListItemSuccess = Template.bind({});
LaunchListItemSuccess.args = {
  status: 'success',
};

export const LaunchListItemFailed = Template.bind({});
LaunchListItemFailed.args = {
  status: 'failed',
};

export const LaunchListItemUpcoming = Template.bind({});
LaunchListItemUpcoming.args = {
  status: 'upcoming',
};
