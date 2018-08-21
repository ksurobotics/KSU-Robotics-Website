import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { PostsContext } from 'Modules/PostsContext';
import { BlogLinks } from 'Elements';
import { Cloudinary } from 'Utilities';

/**
 *  Returns a list of officers encapsulated in cards.
 * @param {posts} param0
 */
const OfficerPosts = ({ posts }) => (
  <div className="cards">
    {posts.map(post => {
      if (post.isOfficer) {
        return (
          <div className="card" key={post.title}>
            <h4 className="header">{post.title}</h4>
            <Cloudinary
              modifiers={{ width: 175, height: 200, borderRadius: 0 }}
              fixed
              source={post.featuredImage.sourceUrl}
              alt={post.featuredImage.altText}
              className="card-image"
            />
            <p className="position">{post.excerpt}</p>
          </div>
        );
      }
      return null;
    })}
  </div>
);
OfficerPosts.propTypes = {
  posts: PropTypes.array.isRequired,
};

// eslint-disable-next-line
const AboutUsPage = ({ aboutInfo }) => {
  const aboutUsHero = { maxWidth: 1, height: 550 };
  return (
    <PostsContext.Consumer>
      {state => {
        if (state.isLoaded) {
          return (
            <div className="about-us">
              {/* Sets the headers for the competitions page */}
              <Helmet
                title="About Us"
                meta={[
                  { name: 'description', content: 'View some of our recent competitions.' },
                  { name: 'keywords', content: 'KSU Robotics, KSU Robotics competitions' },
                ]}
              />
              <div className="hero">
                {/* Passes the latestPost media, default image, and the fact that it is a fluid image to the ImageTransform component */}
                <Cloudinary
                  modifiers={aboutUsHero}
                  fluid
                  source={aboutInfo.featuredImage.sourceUrl}
                  alt={aboutInfo.featuredImage.altText}
                  className="hero-image"
                />
                <div className="title-section">
                  <h2 className="heading">Meet the Team</h2>
                  <h4 className="subheading">K-State Robotics 2018</h4>
                </div>
              </div>
              <div className="blog-index">
                {/* Passes the WordPress posts, default image, and "Competitions" as props to the PageLinks component */}
                <h3 className="index-heading">Our Officers</h3>
                <OfficerPosts posts={state.personPosts} />
                <h3 className="index-heading">Our Members</h3>
                <BlogLinks posts={state.personPosts.filter(post => !post.isOfficer)} category="Competitions" />
              </div>
            </div>
          );
        }
        // if we don't have the posts yet display a loading icon
        return <p>Loading</p>;
      }}
    </PostsContext.Consumer>
  );
};

export default AboutUsPage;
