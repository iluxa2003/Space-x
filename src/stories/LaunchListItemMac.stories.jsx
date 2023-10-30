import React from 'react';
import LaunchListItem from '../components/LaunchListItem/LaunchListItem';

export default {
  title: 'LaunchListItemMac',
  component: LaunchListItem,
  decorators: [
    (Story) => (
      <div style={{ width: '720px' }}>
        <Story />
      </div>
    ),
  ],
};

function Template(args) {
  return <LaunchListItem {...args} />;
}

export const LaunchListItemMacSuccess = Template.bind({});
LaunchListItemMacSuccess.args = {
  status: 'success',
  launchId: '',
  date: '2002',
};

export const LaunchListItemMacFailed = Template.bind({});
LaunchListItemMacFailed.args = {
  status: 'failed',
  launchId: '',
  date: '2002',
};

export const LaunchListItemMacUpcoming = Template.bind({});
LaunchListItemMacUpcoming.args = {
  status: 'upcoming',
  launchId: '',
  date: '2002',
};
