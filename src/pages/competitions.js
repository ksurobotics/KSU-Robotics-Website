import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const CompetitionPage = ({ data }) => (
  <div className="page-wrapper">
    <Helmet
      title="KSU Robotics || Competitions"
      meta={[
        { name: 'description', content: 'View some of our recent competitions.' },
        { name: 'keywords', content: 'KSU Robotics, KSU Robitics competitions' },
      ]}
    />
    <h1>This is the competitions page</h1>
    <ul>
      {/* Makes a list of all of the Competitions and links to them */}
      {data.allWordpressPost.edges.map((competition, i) => {
        const category = competition.node.categories[0].name;
        // if category is not competitions
        if (category !== 'Competitions') return '';
        const { id, title, slug } = competition.node;
        return (
          <li key={id}>
            <Link to={`${category}/${slug}`}>
              {/* replaces non-breaking spaces */}
              {title.replace('&nbsp;', ' ')}
            </Link>
          </li>
        );
      })}
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
  query CompetitionsQuery {
    allWordpressPost {
      edges {
        node {
          id
          slug
          title
          categories {
            name
          }
        }
      }
    }
  }
`;
