import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const CompetitionPage = () => (
  <div>
    <Helmet
      title="KSU Robotics || Competitions"
      meta={[
        { name: 'description', content: 'View some of our recent competitions.' },
        { name: 'keywords', content: 'KSU Robotics, KSU Robitics competitions' },
      ]}
    />
    <h1>This is the competitions page</h1>
  </div>
);

export default CompetitionPage;
