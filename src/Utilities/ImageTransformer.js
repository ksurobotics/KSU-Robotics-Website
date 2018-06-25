import React from 'react';
import PropTypes from 'prop-types';
// import Img from 'gatbsy-image';

const ImageTransformer = ({ media, defaultImage, className }) => {
  if (media) {
    const { sourceUrl: src, altText: alt, title } = media;
    return <img src={src} alt={alt || title} title={title} className={className} />;
  }
  return <img src={defaultImage} alt="Default" title="Default Image" className={className} />;
};

ImageTransformer.propTypes = {
  media: PropTypes.object,
  defaultImage: PropTypes.string.isRequired,
  className: PropTypes.string,
  // fluid: PropTypes.bool.isRequired,
};

ImageTransformer.defaultProps = {
  media: {},
  className: '',
};
export default ImageTransformer;
