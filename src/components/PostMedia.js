import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const PostMedia = props => {
  console.log(props.media);
  if (props.media) {
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
};

PostMedia.propTypes = {
  media: PropTypes.object,
  default: PropTypes.object.isRequired,
  fluid: PropTypes.bool.isRequired,
};

PostMedia.defaultProps = {
  media: {},
};
export default PostMedia;
