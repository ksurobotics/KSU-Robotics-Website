import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import PageLinks from '../components/PageLinks';

const CompetitionPage = ({ data }) => (
  <div className="page-wrapper">
    <Helmet
      title="Competitions"
      meta={[
        { name: 'description', content: 'View some of our recent competitions.' },
        { name: 'keywords', content: 'KSU Robotics, KSU Robitics competitions' },
      ]}
    />
    <h1>This is the competitions page</h1>
    <ul>
      <PageLinks pages={data.allWordpressPost.edges} category="Competitions" />
    </ul>
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
    allWordpressPost(filter: { categories: { name: { eq: $category } } }) {
      edges {
        node {
          title
          slug
          categories {
            name
          }
          featured_media {
            localFile {
              childImageSharp {
                id
                sizes(maxWidth: 1240) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
