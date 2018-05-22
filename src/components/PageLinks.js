import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import PostMedia from './PostMedia';

// pages is the list of pages with category type <category>
// defaultImage is the default image for the given blog type
const PageLinks = ({ pages, category, defaultImage }) => {
  // Makes a list of all of the Competitions and links to them
  const linkItems = [];
  // pushes each link to the page into the result array
  linkItems.push(
    pages.map(page => {
      // eslint-disable-next-line camelcase
      const { id, title, slug, featured_media, excerpt } = page.node;

      // makes an array of li's
      return (
        <li key={id}>
          <div className="picture">
            <Link to={`/${category}/${slug}`}>
              {/* replaces non-breaking spaces */}
              <h3>{title.replace('&nbsp;', ' ')}</h3>
              <PostMedia media={featured_media} default={defaultImage} />
            </Link>
          </div>
          <div className="excerpt">
            {/* strips the excerpt of html tags and trims length to 200 characters */}
            <p>{excerpt.replace(/<[^>]+>/g, '').substring(0, 200)}</p>
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
  defaultImage: PropTypes.object.isRequired,
};

// media is the result from the featured_media graphQl query
// defaultImage is the default image for the given blog type
const handleMedia = (media, defaultImage) =>
  media ? (
    <Img
      resolutions={media.localFile.childImageSharp.resolutions}
      alt={media.alt_text ? media.alt_text : media.title}
    />
  ) : (
    <Img resolutions={defaultImage} alt="Default Image" />
  );

export default PageLinks;
