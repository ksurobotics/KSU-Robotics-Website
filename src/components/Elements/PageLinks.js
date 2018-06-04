import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ImageTransformer from 'services/ImageTransformer';
import { decodeHtml } from 'services/Helpers';
// pages is the list of pages with category type <category>
// defaultImage is the default image for the given blog type
const PageLinks = ({ pages, category, defaultImage }) => {
  // Makes a list of all of the Competitions and links to them
  const linkItems = [];
  // pushes each link to the page into the result array
  linkItems.push(
    pages.map(page => {
      const { id, title, slug, featuredImage, excerpt } = page;
      // makes an array of li's
      return (
        <li key={id}>
          <div className="picture">
            <Link to={`/${category}/${slug}`}>
              {/* replaces non-breaking spaces */}
              <h3>{decodeHtml(title)}</h3>
              <ImageTransformer media={featuredImage} defaultImage={defaultImage} />
            </Link>
          </div>
          <div className="excerpt">
            {/* strips the excerpt of html tags and trims length to 200 characters */}
            <p>{decodeHtml(excerpt)}</p>
          </div>
        </li>
      );
    })
  );
  // returns the list of li's encapsulated in a ul
  return <ul className="page-links">{linkItems}</ul>;
};

PageLinks.propTypes = {
  pages: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  defaultImage: PropTypes.string.isRequired,
};

// media is the result from the featured_media graphQl query
// defaultImage is the default image for the given blog type

export default PageLinks;
