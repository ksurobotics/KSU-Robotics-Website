import React from 'react';
import Helmet from 'react-helmet';
import gql from 'graphql-tag';
import { Query } from 'react-apollo'; // they say react-apollo

import defaultImage from 'images/default-competitions-image.jpeg';
import PageLinks from 'components/Elements/PageLinks';
import ImageTransform from 'services/ImageTransformer';

// Fetch GraphQL data with a Query component
const CompetitionsPage = () => {
  const GET_POSTS = gql`
    {
      posts {
        nodes {
          id
          date
          title
          excerpt
          slug
          categories {
            nodes {
              name
            }
          }
          featuredImage {
            sourceUrl
            id
            title
            altText
          }
        }
      }
    }
  `;
  return (
    <Query query={GET_POSTS}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        const latestPost = data.posts.nodes[0];
        return (
          <div className="competitions">
            <Helmet
              title="Competitions"
              meta={[
                { name: 'description', content: 'View some of our recent competitions.' },
                { name: 'keywords', content: 'KSU Robotics, KSU Robotics competitions' },
              ]}
            />
            <div className="hero">
              {/* Passes the latestPost media, default image, and the fact that it is a fluid image to the ImageTransform component */}
              <ImageTransform media={latestPost.featuredImage} defaultImage={defaultImage} />
              <h2>{latestPost.title}</h2>
              <p>
                {latestPost.excerpt
                  .replace(/<[^>]+>/g, '')
                  .replace('&nbsp;', ' ')
                  .substring(0, 200)}
              </p>
            </div>
            <div className="blog">
              {/* Takes out the first post because it is the hero on this page */}
              {/* Passes the WordPress posts, default image, and "Competitions" as props to the PageLinks component */}
              <PageLinks pages={data.posts.nodes.slice(1)} defaultImage={defaultImage} category="Competitions" />
            </div>
          </div>
        );
      }}
    </Query>
  );
};
export default CompetitionsPage;
