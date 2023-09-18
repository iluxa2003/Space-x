import React from 'react';
import Footer from '../components/Footer/Footer';

export default {
  title: 'Footer',
  component: Footer,
};

function Template(args) {
  return <Footer {...args} />;
}

export const FooterDef = Template.bind({});
FooterDef.args = {};
