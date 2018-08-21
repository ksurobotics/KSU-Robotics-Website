import React from 'react';
import Helmet from 'react-helmet';

import { BlogLinks, Button } from 'Elements';
import { Cloudinary } from 'Utilities';
import { PostsContext } from '../../Modules/PostsContext';

/**
 * Uses the Posts context to retrieve the competition posts. If the competition Posts are
 * Not available, it displays a loading spinner.
 */
const CompetitionsPage = () => (
  <PostsContext.Consumer>
    {state => {
      if (state.isLoaded) {
        const posts = state.competitionPosts;
        const latestPost = posts[0];
        const competitionsHero = { maxWidth: 1, height: 550 };
        return (
          <div className="competitions">
            {/* Sets the headers for the competitions page */}
            <Helmet
              title="Competitions"
              meta={[
                { name: 'description', content: 'View some of our recent competitions.' },
                { name: 'keywords', content: 'KSU Robotics, KSU Robotics competitions' },
              ]}
            />
            <div className="hero">
              {/* Passes the latestPost media, default image, and the fact that it is a fluid image to the ImageTransform component */}
              <Cloudinary
                modifiers={competitionsHero}
                fluid
                source={latestPost.featuredImage.sourceUrl}
                alt={latestPost.featuredImage.altText}
              />
              <div className="hero-card-wrapper">
                <div className="card hero-card">
                  <h2 className="title">{latestPost.title}</h2>
                  <p className="excerpt">
                    {
                      // removes html tags
                      latestPost.excerpt
                    }
                  </p>
                  <a href={`/Competitions/${latestPost.slug}`}>
                    <Button className="primary">View Competition</Button>
                  </a>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="competitions-info">
                <h2 className="heading">Featured Below Are the Competitions We Have Attended</h2>
                <p className="text">There is 1 competition each semester we get to compete in as a team</p>
              </div>
              {/* Takes out the first post because it is the hero on this page. Passes the WordPress posts, default image, and "Competitions" as props to the PageLinks component */}
              <BlogLinks posts={posts.slice(1)} category="Competitions" />
            </div>
          </div>
        );
      }
      return <h2>Loading</h2>;
    }}
  </PostsContext.Consumer>
);

export default CompetitionsPage;
