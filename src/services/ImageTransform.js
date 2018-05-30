import React from 'react';
import PropTypes from 'prop-types';
// import Img from 'gatbsy-image';

const ImageTransform = props => {
  console.log(props.media);
  return <p>image</p>;
  /* if (props.media) {
    if (props.fluid) {
      return (
        <Img
          sizes={props.media.localFile.childImageSharp.sizes}
          alt={props.media.alt_text ? props.media.alt_text : props.media.title}
        />
      );
    }
    return (
      <Img
        resolutions={props.media.localFile.childImageSharp.resolutions}
        alt={props.media.alt_text ? props.media.alt_text : props.media.title}
      />
    );
  }
  return <Img resolutions={props.default} alt="Default Image" />;
  */
};

ImageTransform.propTypes = {
  media: PropTypes.object,
  default: PropTypes.object.isRequired,
  fluid: PropTypes.bool.isRequired,
};

ImageTransform.defaultProps = {
  media: {},
};
export default ImageTransform;
