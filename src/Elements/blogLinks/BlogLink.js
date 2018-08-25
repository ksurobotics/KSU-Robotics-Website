import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Cloudinary } from 'Utilities';
// pages is the list of pages with category type <category>
const BlogLink = ({ post, category }) => {
  const { title, slug, featuredImage, excerpt } = post;
  const modifiers = { width: 175, height: 175, borderRadius: 90 };
  return (
    <Link to={`/${category}/${slug}`}>
      <li className="card blog-links-card">
        <div className="picture">
          {/* replaces non-breaking spaces */}
          <h3>{title}</h3>
          <Cloudinary modifiers={modifiers} fixed source={featuredImage.sourceUrl} alt={featuredImage.altText} />
        </div>
        {/* strips the excerpt of html tags and trims length to 200 characters */}
        <p className="excerpt">{excerpt}</p>
      </li>
    </Link>
  );
};
BlogLink.propTypes = {
  post: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
};

// media is the result from the featured_media graphQl query
// defaultImage is the default image for the given blog type

export default BlogLink;
