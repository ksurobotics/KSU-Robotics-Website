/* eslint react/no-danger: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PersonTemplate extends Component {
  render() {
    const Person = this.props.data.wordpressPost;

    return (
      <div className="page-wrapper">
        <h1>People</h1>
        <div dangerouslySetInnerHTML={{ __html: Person.content }} />
      </div>
    );
  }
}

PersonTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PersonTemplate;

export const PersonQuery = graphql`
  query PersonQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      featured_media {
        source_url
      }
    }
  }
`;
