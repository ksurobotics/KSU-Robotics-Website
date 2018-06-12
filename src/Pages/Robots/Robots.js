import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { BlogLinks } from 'Elements/';
import defaultImage from 'assets/images/default-robot-image.svg';

// eslint-disable-next-line
const RobotsPage = ({ posts }) => {
  if (posts) {
    return (
      <div className="robots">
        {/* Sets the headers for the competitions page */}
        <Helmet
          title="About Us"
          meta={[
            { name: 'description', content: 'View some of our recent competitions.' },
            { name: 'keywords', content: 'KSU Robotics, KSU Robotics competitions' },
          ]}
        />
        <div className="blog">
          {/* Passes the WordPress posts, default image, and "Competitions" as props to the PageLinks component */}
          <BlogLinks pages={posts} defaultImage={defaultImage} category="Robots" />
        </div>
      </div>
    );
  }
  // if we don't have the posts yet display a loading icon
  return <p>>Loading</p>;
};
RobotsPage.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default RobotsPage;
