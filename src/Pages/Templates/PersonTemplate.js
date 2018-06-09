/* eslint react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';

import { ImageTransformer } from 'Utilities';
import defaultImage from 'assets/images/default-person-image.jpeg';

const PersonTemplate = ({ post = {} }) => {
  console.log(post);
  return (
    <div className="page-wrapper">
      <h2>{post.title || 'Loading...'}</h2>
      <ImageTransformer media={post.featuredImage} defaultImage={defaultImage} />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

PersonTemplate.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PersonTemplate;
