import React from 'react';
import LaunchListItem from '../components/LaunchListItem/LaunchListItem';

export default {
  title: 'LaunchListItem',
  component: LaunchListItem,
};

export const LaunchListItemMacSuccess = {
  args: {
    status: 'success',
    launchId: '1',
    date: '2002',
  },
  render: ({ status, launchId, date }) => (
    <div style={{ width: '720px' }}>
      <LaunchListItem status={status} launchId={launchId} date={date} />
    </div>
  ),
};

export const LaunchListItemMacFailed = {
  args: {
    status: 'failed',
    launchId: '1',
    date: '2002',
  },
  render: ({ status, launchId, date }) => (
    <div style={{ width: '720px' }}>
      <LaunchListItem status={status} launchId={launchId} date={date} />
    </div>
  ),
};

export const LaunchListItemMacUpcoming = {
  args: {
    status: 'upcoming',
    launchId: '1',
    date: '2002',
  },
  render: ({ status, launchId, date }) => (
    <div style={{ width: '720px' }}>
      <LaunchListItem status={status} launchId={launchId} date={date} />
    </div>
  ),
};

export const LaunchListItemPhoneSuccess = {
  args: {
    status: 'success',
    launchId: '1',
    date: '2002',
  },
  render: ({ status, launchId, date }) => (
    <div style={{ width: '360px' }}>
      <LaunchListItem status={status} launchId={launchId} date={date} />
    </div>
  ),
};

export const LaunchListItemPhoneFailed = {
  args: {
    status: 'failed',
    launchId: '1',
    date: '2002',
  },
  render: ({ status, launchId, date }) => (
    <div style={{ width: '360px' }}>
      <LaunchListItem status={status} launchId={launchId} date={date} />
    </div>
  ),
};

export const LaunchListItemPhoneUpcoming = {
  args: {
    status: 'upcoming',
    launchId: '',
    date: '2002',
  },
  render: ({ status, launchId, date }) => (
    <div style={{ width: '360px' }}>
      <LaunchListItem status={status} launchId={launchId} date={date} />
    </div>
  ),
};
