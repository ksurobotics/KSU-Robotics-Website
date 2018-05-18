import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import PageLinks from '../components/PageLinks';

const CompetitionPage = ({ data }) => (
  <div className="page-wrapper blog">
    <Helmet
      title="Competitions"
      meta={[
        { name: 'description', content: 'View some of our recent competitions.' },
        { name: 'keywords', content: 'KSU Robotics, KSU Robitics competitions' },
      ]}
    />
    <h1 className="title">This is the competitions page</h1>
    <PageLinks pages={data.allWordpressPost.edges} defaultImage={data.imageSharp.resolutions} category="Competitions" />
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

export default CompetitionPage;

export const competitionsQuery = graphql`
  query CompetitionsQuery($category: String = "Competitions") {
    imageSharp(id: { regex: "/Robot.jpeg/" }) {
      resolutions(width: 150) {
        ...GatsbyImageSharpResolutions
      }
    }
    allWordpressPost(filter: { categories: { name: { eq: $category } } }) {
      edges {
        node {
          title
          slug
          categories {
            name
          }
          excerpt
          featured_media {
            localFile {
              childImageSharp {
                id
                resolutions(width: 150) {
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
