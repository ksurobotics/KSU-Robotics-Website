import React from 'react';
import Helmet from 'react-helmet';
import { map } from 'lodash';

import { PostsContext } from 'Modules/PostsContext';
import { BlogLinks } from 'Elements';
import { Cloudinary } from 'Utilities';
import AboutUsCard from './AboutUsCard';

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
                  <h4 className="subheading">K-State Robotics Competition Team 2018</h4>
                </div>
              </div>
              <div className="blog-index">
                {/* Passes the WordPress posts, default image, and "Competitions" as props to the PageLinks component */}
                <h3 className="index-heading">Our Officers</h3>
                <div className="cards">
                  {map(state.personPosts, post => (
                    <AboutUsCard post={post} />
                  ))}
                </div>
                <h3 className="index-heading">Our Members</h3>
                <div className="cards">
                  {map(state.personPosts, post => (
                    <AboutUsCard post={post} />
                  ))}
                </div>
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
