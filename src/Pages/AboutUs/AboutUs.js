import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { map } from 'lodash';

import { PostsContext } from 'Modules/PostsContext';
import { BlogLinks } from 'Elements';
import { Cloudinary } from 'Utilities';

/**
 *  Returns a list of officers encapsulated in cards.
 * @param {posts} param0
 */
class OfficerPosts extends Component {
  state = {
    x: 0,
    y: 0,
  };

  handleMouseEnter = e => {
    e.currentTarget.parentElement.lastChild.classList.add('show');
  };
  handleMouseLeave = e => {
    e.currentTarget.parentElement.lastChild.classList.remove('show');
  };

  handleMouseMove = e => {
    const { x: eleX, y: eleY } = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - eleX - 10;
    const relY = e.clientY - eleY;
    this.setState({ x: relX, y: relY });
  };
  render() {
    let officerIndex = 0;
    const { posts } = this.props;
    return (
      <div className="cards">
        {map(posts, post => {
          if (post.isOfficer) {
            officerIndex += 1;
            return (
              <div className="person" key={post.title}>
                <div
                  className={`card officer ${officerIndex % 2 ? 'odd' : 'even'}`}
                  onMouseMove={this.handleMouseMove}
                  onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}
                >
                  <h4 className="header">{post.title}</h4>
                  <Cloudinary
                    modifiers={{ width: 175, height: 200, borderRadius: 0 }}
                    fixed
                    source={post.featuredImage.sourceUrl}
                    alt={post.featuredImage.altText}
                    className="card-image"
                  />
                  <p className="position">{post.position}</p>
                </div>
                <div className="extra-info" style={{ top: this.state.y, left: this.state.x }}>
                  <p>{post.email ? `Contact Information: ${post.email}` : ''}</p>
                  <p>{post.semester_joined ? `Semester Joined: ${post.semester_joined}` : ''}</p>
                  <p>{post.grade_level ? `Year in School: ${post.grade_level}` : ''}</p>
                  <p>{post.favorite_movie ? `Favorite Movie: ${post.favorite_movie}` : ''}</p>
                  <p>{post.hobbies ? `Favorite Hobbies: ${post.hobbies}` : ''}</p>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  }
}
OfficerPosts.propTypes = {
  posts: PropTypes.array.isRequired,
};

// eslint-disable-next-line
const AboutUsPage = ({ aboutInfo }) => {
  const aboutUsHero = { maxWidth: 1, height: 550 };
  return (
    <PostsContext.Consumer>
      {state => {
        if (state.isLoaded) {
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
                <OfficerPosts posts={state.personPosts} />
                <h3 className="index-heading">Our Members</h3>
                <BlogLinks
                  posts={state.personPosts.filter(post => !post.isOfficer)}
                  category="Competitions"
                  hasExtraInfo
                />
              </div>
            </div>
          );
        }
        // if we don't have the posts yet display a loading icon
        return <p>Loading</p>;
      }}
    </PostsContext.Consumer>
  );
};

export default AboutUsPage;
