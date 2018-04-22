/* eslint react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';

const PageTemplate = ({ data }) => {
  // const siteMetadata = this.props.data.site.siteMetadata;
  const currentPage = data.wordpressPage;

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
    </div>
  );
};

export default PageTemplate;

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query currentPageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
  }
`;
