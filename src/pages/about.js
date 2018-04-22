import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const AboutPage = () => (
  <div>
    <Helmet
      title="KSU Robotics || About"
      meta={[
        { name: 'description', content: 'Learn about the KSU robotics club.' },
        { name: 'keywords', content: 'KSU Robotics' },
      ]}
    />
    <h1>This is the about page</h1>
  </div>
);

export default AboutPage;
