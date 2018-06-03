/* eslint react/no-danger: 0 */

import React, { Component } from 'react';

class CompetitionTemplate extends Component {
  render() {
    const Competition = this.props.data.wordpressPost;
    let img;
    if (Competition.featured_media) {
      img = {
        url: Competition.featured_media.source_url,
        alt: Competition.featured_media.alt_text,
      };
    } else {
      img = {
        url: 'http://robots.wendtedesigns.com',
        alt: 'KSU Robotics homepage',
      };
    }

    return (
      <div className="page-wrapper">
        <h1>Competitions</h1>
        <img src={img.url} alt={img.alt} />
        <div dangerouslySetInnerHTML={{ __html: Competition.content }} />
      </div>
    );
  }
}

/* CompetitionTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}; */

export default CompetitionTemplate;

export const CompetitionQuery = graphql`
  query CompetitionQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      featured_media {
        source_url
        alt_text
      }
    }
  }
`;
