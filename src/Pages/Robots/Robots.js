import React from 'react';
import Helmet from 'react-helmet';

import { BlogLinks, Spinner } from 'Elements/';
import { PostsContext } from 'Modules/PostsContext';

// eslint-disable-next-line
const RobotsPage = () => (
  <PostsContext.Consumer>
    {state => {
      if (state.isLoaded) {
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
              <BlogLinks posts={state.robotPosts} category="Robots" />
            </div>
          </div>
        );
      }
      return <Spinner />;
    }}
  </PostsContext.Consumer>
);
export default RobotsPage;
