import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import defaultImage from 'images/default-competitions-image.jpeg';
import PageLinks from 'components/Elements/PageLinks';
import ImageTransform from 'services/ImageTransformer';

// eslint-disable-next-line
const CompetitionsPage = ({ posts }) => {
  /* if (!posts) {
    fetchCompetitionPosts()
      .then(res => {
        posts = result;
      })
      .catch(err => {
        console.error(err);
      });
  } */
  const latestPost = posts[0];
  if (latestPost) {
    return (
      <div className="competitions">
        {/* Sets the headers for the competitions page */}
        <Helmet
          title="Competitions"
          meta={[
            { name: 'description', content: 'View some of our recent competitions.' },
            { name: 'keywords', content: 'KSU Robotics, KSU Robotics competitions' },
          ]}
        />
        <div className="hero">
          {/* Passes the latestPost media, default image, and the fact that it is a fluid image to the ImageTransform component */}
          <ImageTransform media={latestPost.featuredImage} defaultImage={defaultImage} />
          <h2>{latestPost.title}</h2>
          <p>
            {latestPost.excerpt
              .replace(/<[^>]+>/g, '')
              .replace('&nbsp;', ' ')
              .substring(0, 200)}
          </p>
        </div>
        <div className="blog">
          {/* Takes out the first post because it is the hero on this page */}
          {/* Passes the WordPress posts, default image, and "Competitions" as props to the PageLinks component */}
          <PageLinks pages={posts.slice(1)} defaultImage={defaultImage} category="Competitions" />
        </div>
      </div>
    );
  }
  // if we don't have the posts yet display a loading icon
  return <p>>Loading</p>;
};
CompetitionsPage.PropTypes = {
  posts: PropTypes.object.isRequired,
};

export default CompetitionsPage;
