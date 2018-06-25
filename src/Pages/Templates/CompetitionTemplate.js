/* eslint react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';

import { ImageTransformer } from 'Utilities';
import defaultImage from 'assets/images/default-competition-image.jpeg';

const CompetitionTemplate = ({ post = {} }) => (
  <div className="page-wrapper post">
    <h1 className="title">{post.title || 'Loading...'}</h1>
    <ImageTransformer media={post.featuredImage} defaultImage={defaultImage} className="featured" />
    <div className="content" dangerouslySetInnerHTML={{ __html: post.content }} />
  </div>
);

CompetitionTemplate.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CompetitionTemplate;
