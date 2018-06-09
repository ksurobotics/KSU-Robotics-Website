import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { BlogLinks } from 'Elements/';
import defaultImage from 'assets/images/default-person-image.jpeg';

// eslint-disable-next-line
const AboutUsPage = ({ posts }) => {
  if (posts) {
    return (
      <div className="people">
        {/* Sets the headers for the competitions page */}
        <Helmet
          title="About Us"
          meta={[
            { name: 'description', content: 'View some of our recent competitions.' },
            { name: 'keywords', content: 'KSU Robotics, KSU Robotics competitions' },
          ]}
        />
        <div className="blog">
          {/* Takes out the first post because it is the hero on this page */}
          {/* Passes the WordPress posts, default image, and "Competitions" as props to the PageLinks component */}
          <BlogLinks pages={posts.slice(1)} defaultImage={defaultImage} category="People" />
        </div>
      </div>
    );
  }
  // if we don't have the posts yet display a loading icon
  return <p>>Loading</p>;
};
AboutUsPage.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default AboutUsPage;
