import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

// So we are getting all posts from the api. Or we could filter the ones out that do not contain our category!

const validateMedia = (media, title, defaultImage) => {
  if (media) {
    return <Img resolutions={media.localFile.childImageSharp.resolutions} alt={title} />;
  }
  return <Img resolutions={defaultImage} alt={title} />;
};

const PageLinks = ({ pages, category, defaultImage }) => {
  // Makes a list of all of the Competitions and links to them
  const result = [];
  // pushes each link to the page into the result array
  result.push(
    pages.map(page => {
      const { id, title, slug, featured_media, excerpt } = page.node;
      const media = validateMedia(featured_media, title, defaultImage);
      // strips the excerpt of html tags
      const strippedExcerpt = excerpt.replace(/<[^>]+>/g, '');
      // makes an array of li's
      return (
        <li key={id}>
          <div className="picture">
            <Link to={`/${category}/${slug}`}>
              {/* replaces non-breaking spaces */}
              <h3>{title.replace('&nbsp;', ' ')}</h3>
              {/*  */}
              {media}
            </Link>
          </div>
          <div className="excerpt">
            <p>{strippedExcerpt}</p>
          </div>
        </li>
      );
    })
  );
  // returns the list of li' encapsulated in a ul
  return <ul className="page-links">{result}</ul>;
};

export default PageLinks;
