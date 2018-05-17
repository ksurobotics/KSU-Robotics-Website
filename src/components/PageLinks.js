import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import defaultImage from '../images/Robot.jpeg';

// So we are getting all posts from the api. Or we could filter the ones out that do not contain our category!

const validateMedia = (media, title) => {
  if (media) {
    const temp = <Img sizes={media.localFile.childImageSharp.sizes} />;
    return temp;
  }
  return <img src={defaultImage} alt={title} style={{ width: 250 }} />;
};

const PageLinks = ({ pages, category }) => {
  // Makes a list of all of the Competitions and links to them
  const result = [];
  // pushes each link to the page into the result array
  result.push(
    pages.map(page => {
      const { id, title, slug, featured_media } = page.node;
      const media = validateMedia(featured_media, title);

      // makes an array of li's
      return (
        <li key={id}>
          <Link to={`/${category}/${slug}`}>
            {/* replaces non-breaking spaces */}
            {title.replace('&nbsp;', ' ')}
            {/*  */} />
            {media}
          </Link>
        </li>
      );
    })
  );
  // returns the list of li' encapsulated in a ul
  return <ul>{result}</ul>;
};

export default PageLinks;
