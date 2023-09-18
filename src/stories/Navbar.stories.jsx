import React from 'react';
import Navbar from '../components/Navbar/Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
};

function Template(args) {
  return <Navbar {...args} />;
}

export const NavbarDef = Template.bind({});
NavbarDef.args = {};
