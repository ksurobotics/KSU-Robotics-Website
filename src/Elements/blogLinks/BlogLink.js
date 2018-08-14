import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Helpers, Cloudinary } from 'Utilities';
// pages is the list of pages with category type <category>
// defaultImage is the default image for the given blog type
const BlogLink = ({ page, category, defaultImage }) => {
  const { title, slug, featuredImage, excerpt } = page;
  const modifiers = { width: 175, height: 175, borderRadius: 90 };
  return (
    <Link to={`/${category}/${slug}`}>
      <li className="card blog-links-card">
        <div className="picture">
          {/* replaces non-breaking spaces */}
          <h3>{title ? Helpers.decodeHtml(title) : 'Loading...'}</h3>
          <Cloudinary
            modifiers={modifiers}
            fixed
            source={featuredImage ? featuredImage.sourceUrl : defaultImage}
            alt={featuredImage ? featuredImage.altText : 'Default Image'}
          />
        </div>
        {/* strips the excerpt of html tags and trims length to 200 characters */}
        <p className="excerpt">{excerpt ? Helpers.decodeHtml(excerpt) : ''}</p>
      </li>
    </Link>
  );
};
BlogLink.propTypes = {
  page: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
  defaultImage: PropTypes.string.isRequired,
};

// media is the result from the featured_media graphQl query
// defaultImage is the default image for the given blog type

export default BlogLink;
