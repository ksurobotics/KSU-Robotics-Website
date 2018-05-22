import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const PostMedia = props =>
  props.media ? (
    <Img
      resolutions={props.media.localFile.childImageSharp.resolutions}
      alt={props.media.alt_text ? props.media.alt_text : props.media.title}
    />
  ) : (
    <Img resolutions={props.default} alt="Default Image" />
  );

PostMedia.propTypes = {
  media: PropTypes.object,
  default: PropTypes.object.isRequired,
};

PostMedia.defaultProps = {
  media: {},
};
export default PostMedia;
