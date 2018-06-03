import React from 'react';
import PropTypes from 'prop-types';
// import Img from 'gatbsy-image';

const ImageTransformer = ({ media, defaultImage }) => {
  if (media) {
    const { sourceUrl: src, altText: alt, title } = media;
    return <img src={src} alt={alt || title} title={title} />;
  }
  return <img src={defaultImage} alt="Default" title="Default Image" />;
};

ImageTransformer.propTypes = {
  media: PropTypes.object,
  defaultImage: PropTypes.string.isRequired,
  // fluid: PropTypes.bool.isRequired,
};

ImageTransformer.defaultProps = {
  media: {},
};
export default ImageTransformer;
