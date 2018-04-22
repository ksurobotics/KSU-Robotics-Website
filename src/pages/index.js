import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const IndexPage = () => (
  <div>
    <Helmet
      title="KSU Robotics"
      meta={[
        { name: 'description', content: 'The KSU Robotics homepage.' },
        { name: 'keywords', content: 'KSU Robotics' },
      ]}
    />
    <h1>This is the homepage</h1>
  </div>
);

export default IndexPage;
