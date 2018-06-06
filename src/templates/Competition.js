/* eslint react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';

import ImageTransformer from 'services/ImageTransformer';
import defaultImage from 'images/default-competition-image.jpeg';

const CompetitionTemplate = ({ post = {} }) => (
  <div className="page-wrapper">
    <h2>{post.title || 'Loading...'}</h2>
    <ImageTransformer media={post.featuredImage} defaultImage={defaultImage} />
    <div dangerouslySetInnerHTML={{ __html: post.content }} />
  </div>
);

CompetitionTemplate.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CompetitionTemplate;
