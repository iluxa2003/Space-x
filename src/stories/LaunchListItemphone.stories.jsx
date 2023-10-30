import React from 'react';
import LaunchListItem from '../components/LaunchListItem/LaunchListItem';

export default {
  title: 'LaunchListItemPhone',
  component: LaunchListItem,
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    ),
  ],
};

function Template(args) {
  return <LaunchListItem {...args} />;
}

export const LaunchListItemPhoneSuccess = Template.bind({});
LaunchListItemPhoneSuccess.args = {
  status: 'success',
  launchId: '',
  date: '2002',
};

export const LaunchListItemPhoneFailed = Template.bind({});
LaunchListItemPhoneFailed.args = {
  status: 'failed',
  launchId: '',
  date: '2002',
};

export const LaunchListItemPhoneUpcoming = Template.bind({});
LaunchListItemPhoneUpcoming.args = {
  status: 'upcoming',
  launchId: '',
  date: '2002',
};
