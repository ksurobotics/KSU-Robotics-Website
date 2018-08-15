import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { BlogLinks, Button } from 'Elements/';
import { Cloudinary, Helpers } from 'Utilities';

// eslint-disable-next-line
const AboutUsPage = ({ posts, aboutInfo }) => {
  const defaultImage = 'http://ksurobotics.esy.es/wp-content/uploads/2018/08/Default-Person.jpg';
  const aboutUsHero = { maxWidth: 1, height: 550 };
  if (posts) {
    return (
      <div className="about-us competitions">
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
            source={aboutInfo.featuredImage.sourceUrl || defaultImage}
            alt={aboutInfo.featuredImage.altText}
          />
          <div className="hero-card-wrapper">
            <div className="card hero-card">
              <h2 className="title">{Helpers.decodeHtml(aboutInfo.title)}</h2>
              <p className="excerpt">
                {// removes html tags
                Helpers.decodeHtml(aboutInfo.content)}
              </p>
              <a href={`/Competitions/${aboutInfo.slug}`}>
                <Button className="primary">View Competition</Button>
              </a>
            </div>
          </div>
        </div>
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
