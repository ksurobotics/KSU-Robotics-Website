import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Cloudinary } from 'Utilities';

export default class AboutUsCard extends Component {
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
    const { post } = this.props;
    let officerIndex = 0;
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
          {/* prettier-ignore */}
          <div className="extra-info" style={{ top: this.state.y, left: this.state.x }}>
            {post.email ? <p><b>Contact Information: </b>{post.email}</p> : ''}
            {post.semester_joined ? <p><b>Semester Joined: </b>{post.semester_joined}</p> : ''}
            {post.grade_level ? <p><b>Year in School: </b>{post.grade_level}</p> : ''}
            {post.favorite_movie ? <p><b>Favorite Movie: </b>{post.favorite_movie}</p> : ''}
            {post.hobbies ? <p><b>Favorite Hobbies: </b>{post.hobbies}</p> : ''}
          </div>
        </div>
      );
    }
    return null;
  }
}

AboutUsCard.propTypes = {
  post: PropTypes.object.isRequired,
};
