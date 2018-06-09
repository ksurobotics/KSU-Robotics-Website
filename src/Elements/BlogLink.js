import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ImageTransformer, Helpers } from 'Utilities';
import { Button } from 'Elements';
// pages is the list of pages with category type <category>
// defaultImage is the default image for the given blog type
const BlogLink = ({ page, category, defaultImage }) => {
  const { title, slug, featuredImage, excerpt } = page;
  return (
    <div className="card blog-links">
      <Link to={`/${category}/${slug}`}>
        <li>
          <div className="picture">
            {/* replaces non-breaking spaces */}
            <h3>{Helpers.decodeHtml(title)}</h3>
            <ImageTransformer media={featuredImage} defaultImage={defaultImage} />
          </div>
          {/* strips the excerpt of html tags and trims length to 200 characters */}
          <p className="excerpt">{Helpers.decodeHtml(excerpt)}</p>
          <Button className="button">Read More</Button>
        </li>
      </Link>
    </div>
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
