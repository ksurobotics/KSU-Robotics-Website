/* eslint react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';

import { ImageTransformer, Helpers } from 'Utilities';
import defaultImage from 'assets/images/default-person-image.jpeg';

const PersonTemplate = ({ post = {} }) => (
  <div className="page-wrapper post">
    <h1 className="title">{Helpers.decodeHtml(post.title) || 'Loading...'}</h1>
    <ImageTransformer media={post.featuredImage} defaultImage={defaultImage} className="featured" />
    <div className="content" dangerouslySetInnerHTML={{ __html: post.content }} />
  </div>
);

PersonTemplate.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PersonTemplate;
