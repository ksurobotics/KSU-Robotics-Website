import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Cloudinary, Helpers } from 'Utilities';

//! Need to comment this file and rename variables.
export default class AboutUsCard extends Component {
  state = {
    x: 0,
    y: 0,
  };

  handleMouseEnter = e => {
    e.currentTarget.nextSibling.classList.add('show');
  };
  handleMouseLeave = e => {
    e.currentTarget.nextSibling.classList.remove('show');
  };

  handleMouseMove = ({ e, isOfficer }) => {
    const { x: eleX, y: eleY } = e.currentTarget.getBoundingClientRect();
    const relX1 = e.clientX - eleX;
    const relY1 = e.clientY - eleY;
    const pos = { x: 0, y: 0 };
    if (isOfficer) {
      pos.x = relX1 - 10;
      pos.y = relY1;
    } else {
      pos.x = relX1 + 9;
      pos.y = relY1 + 15;
    }
    const rightBound = window.innerWidth - 40;
    const elemWidth = e.currentTarget.nextSibling.getBoundingClientRect().width;
    const wouldBeRight = elemWidth + e.clientX;
    if (wouldBeRight > rightBound) {
      pos.x -= wouldBeRight - rightBound;
    }
    this.setState({ x: pos.x, y: pos.y });
  };

  handleTouchStart = e => {
    e.currentTarget.nextSibling.classList.add('show');
  };

  handleClick = post => {
    console.log('Clicked');
    const text = post.email;
    Helpers.copyToClipboard(text);
  };

  render() {
    const { post, index } = this.props;
    return (
      <div className="person">
        {/* eslint-disable */}
        <div
          className={`card ${index % 2 ? 'odd' : 'even'}`}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onMouseMove={
            post.isOfficer
              ? e => this.handleMouseMove({ e, isOfficer: true })
              : e => this.handleMouseMove({ e, isOfficer: false })
          }
          onTouchStart={this.handleTouchStart}
          onClick={() => this.handleClick(post)}
        >
          {/* eslint-enable */}
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
          {post.email ? <p><b>Contact: </b>{post.email} (Left click to copy)</p> : ''}
          {post.semester_joined ? <p><b>Semester Joined: </b>{post.semester_joined}</p> : ''}
          {post.grade_level ? <p><b>Year in School: </b>{post.grade_level}</p> : ''}
          {post.favorite_movie ? <p><b>Favorite Movie: </b>{post.favorite_movie}</p> : ''}
          {post.hobbies ? <p><b>Favorite Hobbies: </b>{post.hobbies}</p> : ''}
        </div>
      </div>
    );
  }
}

AboutUsCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};

AboutUsCard.defaultProps = {
  index: 0,
};
