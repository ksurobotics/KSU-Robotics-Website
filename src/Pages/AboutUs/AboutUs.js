import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { map } from 'lodash';

import { Spinner } from 'Elements';
import { PostsContext } from 'Modules/PostsContext';
import { Cloudinary } from 'Utilities';
import { importAboutInfo } from 'Utilities/index';
import AboutUsCard from './AboutUsCard';

class AboutUsPage extends Component {
  state = {
    aboutInfo: null,
  };

  componentDidMount() {
    importAboutInfo({ app: this });
  }

  render() {
    const { aboutInfo } = this.state;
    const aboutUsHero = { maxWidth: 1, height: 550 };
    let numberOfOfficers = 0;
    return (
      <PostsContext.Consumer>
        {state => {
          if (state.isLoaded && aboutInfo) {
            return (
              <div className="about-us">
                {/* Sets the headers for the competitions page */}
                <Helmet
                  title="About Us"
                  meta={[
                    { name: 'description', content: 'View some of our recent competitions.' },
                    { name: 'keywords', content: 'KSU Robotics, KSU Robotics competitions' },
                  ]}
                />
                <div className="hero">
                  {/* Passes the latestPost media, default image, and the fact that it is a fluid image to the ImageTransform component */}
                  <Cloudinary
                    modifiers={aboutUsHero}
                    fluid
                    source={aboutInfo.featuredImage.sourceUrl}
                    alt={aboutInfo.featuredImage.altText}
                    className="hero-image"
                  />
                  <div className="title-section">
                    <h2 className="heading">Meet the Team</h2>
                    <h4 className="subheading">K-State Robotics Competition Team 2018</h4>
                  </div>
                </div>
                <div className="blog-index">
                  {/* Passes the WordPress posts, default image, and "Competitions" as props to the PageLinks component */}
                  <h3 className="index-heading">Our Officers</h3>
                  <div className="officer-cards cards">
                    {map(state.personPosts, post => {
                      if (post.isOfficer) {
                        numberOfOfficers += 1;
                        return <AboutUsCard post={post} key={post.title} index={numberOfOfficers} />;
                      }
                    })}
                  </div>
                  <h3 className="index-heading team_leads_heading">Team Leads</h3>
                  <div className="team-leads cards">
                    {map(state.personPosts, post =>
                      !post.isOfficer ? <AboutUsCard post={post} key={post.title} /> : ''
                    )}
                  </div>
                </div>
              </div>
            );
          }
          // if we don't have the posts yet display a loading icon
          return <Spinner />;
        }}
      </PostsContext.Consumer>
    );
  }
}

export default AboutUsPage;
