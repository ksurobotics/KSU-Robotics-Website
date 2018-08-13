/* eslint react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';

import { ImageTransformer, Helpers, Icon } from 'Utilities';
import defaultImage from 'assets/images/default-person-image.jpeg';

const PostTemplate = ({ post = {}, history }) => {
  function handleBackClick() {
    history.goBack();
  }
  return (
    <div className="post">
      <button className="back" onClick={handleBackClick}>
        <Icon className="icon" name="back" />
        <span className="text">Back</span>
      </button>
      <div className="page-wrapper">
        <h1 className="title">{post.title ? Helpers.decodeHtml(post.title) : 'Loading...'}</h1>
        <ImageTransformer media={post.featuredImage} defaultImage={defaultImage} className="featured" />
        <div className="content" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
};

PostTemplate.propTypes = {
  post: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default PostTemplate;
