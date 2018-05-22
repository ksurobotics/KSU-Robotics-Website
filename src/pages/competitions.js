import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import PostMedia from '../components/PostMedia';
import PageLinks from '../components/PageLinks';

// data is the GraphQL query return data
const CompetitionPage = ({ data }) => (
  <div className="competitions">
    <Helmet
      title="Competitions"
      meta={[
        { name: 'description', content: 'View some of our recent competitions.' },
        { name: 'keywords', content: 'KSU Robotics, KSU Robitics competitions' },
      ]}
    />
    {/* JSX Comment <h1 className="title">Past Competitions</h1> */}
    {/* Passes the WordPress posts, default image, and "Competitions" as props to the PageLinks component */}
    <div className="hero">
      <h2>{data.allWordpressPost.edges[0].node.title}</h2>
      {/* I NEED TO MAKE THIS A MUCH BIGGER PICTURE FOR THE MOST RECENT POST */}
      <PostMedia media={data.allWordpressPost.edges[0].node.featured_media} default={data.imageSharp.resolutions} />
    </div>
    <div className="blog">
      {/* Takes out the first post because it is the hero on this page */}
      <PageLinks
        pages={data.allWordpressPost.edges.slice(1)}
        defaultImage={data.imageSharp.resolutions}
        category="Competitions"
      />
    </div>
    <h2>This is a great statement</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iste autem neque sapiente asperiores sint,
      officia itaque quo reprehenderit, accusamus doloribus. Voluptatem quo dolores incidunt alias consectetur magnam
      aliquam deserunt neque praesentium perferendis earum, deleniti eaque officiis aspernatur saepe commodi,
      repudiandae quos magni ullam quod sed. Possimus obcaecati repudiandae debitis soluta natus neque eius aliquam
      perferendis dolores magni rem minima in illum aperiam et voluptatum, odit saepe, porro ea totam? Ea non
      perferendis velit ducimus sint quaerat doloremque fugiat tempore vitae quia, ullam saepe corporis molestiae illum!
      Adipisci natus praesentium labore corporis consequuntur earum! Harum iure molestias necessitatibus excepturi
      exercitationem.
    </p>
    <h2>This is another Great Statement!</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iste autem neque sapiente asperiores sint,
      officia itaque quo reprehenderit, accusamus doloribus. Voluptatem quo dolores incidunt alias consectetur magnam
      aliquam deserunt neque praesentium perferendis earum, deleniti eaque officiis aspernatur saepe commodi,
      repudiandae quos magni ullam quod sed. Possimus obcaecati repudiandae debitis soluta natus neque eius aliquam
      perferendis dolores magni rem minima in illum aperiam et voluptatum, odit saepe, porro ea totam? Ea non
      perferendis velit ducimus sint quaerat doloremque fugiat tempore vitae quia, ullam saepe corporis molestiae illum!
      Adipisci natus praesentium labore corporis consequuntur earum! Harum iure molestias necessitatibus excepturi
      exercitationem.
    </p>
  </div>
);

CompetitionPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CompetitionPage;

// Brings in a default competition image from the images folder.
// The second query brings in the WordPress posts that have the category of Competitions
export const competitionsQuery = graphql`
  query CompetitionsQuery($category: String = "Competitions") {
    imageSharp(id: { regex: "/default-competitions-image.jpeg/" }) {
      resolutions(width: 150) {
        ...GatsbyImageSharpResolutions
      }
    }
    allWordpressPost(filter: { categories: { name: { eq: $category } } }, sort: { fields: [date], order: DESC }) {
      edges {
        node {
          excerpt
          title
          slug
          categories {
            name
          }
          featured_media {
            alt_text
            title
            localFile {
              childImageSharp {
                id
                resolutions(width: 150, height: 150) {
                  ...GatsbyImageSharpResolutions
                }
              }
            }
          }
        }
      }
    }
  }
`;
