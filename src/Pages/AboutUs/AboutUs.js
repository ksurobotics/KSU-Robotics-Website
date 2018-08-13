import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { BlogLinks } from 'Elements/';

// eslint-disable-next-line
const AboutUsPage = ({ posts }) => {
  const defaultImage = 'http://ksurobotics.esy.es/wp-content/uploads/2018/08/Default-Person.jpg';
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
          {/* Passes the WordPress posts, default image, and "Competitions" as props to the PageLinks component */}
          <BlogLinks pages={posts} defaultImage={defaultImage} category="About-Us" />
        </div>
      </div>
    );
  }
  // if we don't have the posts yet display a loading icon
  return <p />;
};
AboutUsPage.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default AboutUsPage;
