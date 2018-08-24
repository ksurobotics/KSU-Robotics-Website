import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import BlogLink from './BlogLink';

// pages is the list of pages with category type <category>
// defaultImage is the default image for the given blog type
const BlogLinks = ({ posts, category, hasExtraInfo }) => (
  // returns the list of li's encapsulated in a ul
  <ul className="blog-links">
    {/* Once I learn about it, I will use the context api to pass category and default image right into BlogLink */}
    {map(posts, post => (
      <BlogLink post={post} category={category} key={post.slug} hasExtraInfo={hasExtraInfo} />
    ))}
  </ul>
);

BlogLinks.propTypes = {
  posts: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  hasExtraInfo: PropTypes.bool,
};

BlogLinks.defaultProps = {
  hasExtraInfo: false,
};

// media is the result from the featured_media graphQl query
// defaultImage is the default image for the given blog type

export default BlogLinks;
