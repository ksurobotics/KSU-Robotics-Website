/* eslint react/no-danger: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost;

    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    );
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PostTemplate;

export const postQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
  }
`;
