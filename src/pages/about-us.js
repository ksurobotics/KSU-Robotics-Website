import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import PageLinks from '../components/PageLinks';

const AboutPage = ({ data }) => (
  <div className="page-wrapper blog">
    <Helmet
      title="About Us"
      meta={[
        { name: 'description', content: 'Learn about the KSU Robotics Club.' },
        { name: 'keywords', content: 'KSU Robotics' },
      ]}
    />
    <h1>This is the About page</h1>
    <PageLinks pages={data.allWordpressPost.edges} images={data.background} category="People" />
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

export default AboutPage;

export const AboutQuery = graphql`
  query AboutQuery($category: String = "People") {
    allWordpressPost(filter: { categories: { name: { eq: $category } } }) {
      edges {
        node {
          title
          slug
          featured_media {
            source_url
          }
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
