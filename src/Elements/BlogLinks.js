import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import { BlogLink } from './';

// pages is the list of pages with category type <category>
// defaultImage is the default image for the given blog type
const BlogLinks = ({ pages, category, defaultImage }) => (
  // returns the list of li's encapsulated in a ul
  <ul className="page-links">
    {/* Once I learn about it, I will use the context api to pass category and default image right into BlogLink */}
    {map(pages, page => <BlogLink page={page} category={category} defaultImage={defaultImage} key={page.slug} />)}
  </ul>
);

BlogLinks.propTypes = {
  pages: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  defaultImage: PropTypes.string.isRequired,
};

// media is the result from the featured_media graphQl query
// defaultImage is the default image for the given blog type

export default BlogLinks;
