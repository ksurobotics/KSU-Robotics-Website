import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Cloudinary, Helpers, Icon } from 'Utilities';

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
    const relX = e.clientX - eleX;
    const relY = e.clientY - eleY;
    const finalPos = { x: 0, y: 0 };
    if (isOfficer) {
      finalPos.x = relX - 10;
      finalPos.y = relY;
    } else {
      finalPos.x = relX + 9;
      finalPos.y = relY + 15;
    }
    const rightBound = window.innerWidth - 40;
    const elemWidth = e.currentTarget.nextSibling.getBoundingClientRect().width;
    const wouldBeRight = elemWidth + e.clientX;
    if (wouldBeRight > rightBound) {
      finalPos.x -= wouldBeRight - rightBound;
    }
    this.setState({ x: finalPos.x, y: finalPos.y });
  };

  handleTouchStart = e => {
    e.currentTarget.nextSibling.classList.add('show');
  };

  handleTouchEnd = e => {
    e.currentTarget.nextSibling.classList.remove('show');
  };

  handleClick = post => {
    const text = post.email;
    Helpers.copyToClipboard(text);
  };

  render() {
    const { post, index } = this.props;
    return post.email ? (
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
          onTouchEnd={this.handleTouchEnd}
          onClick={() => this.handleClick(post)}
        >
          <div className="icon">
            <Icon name="touch" color="#444444" />
          </div>
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
        <div className={`extra-info ${index % 2 ? 'odd' : 'even'}`} style={{ top: this.state.y, left: this.state.x }}>
          {<p><span className="label">Contact: </span>{post.email}</p>}
          {post.major ? <p><span className="label">Favorite Activities: </span>{post.major}</p> : ''}
          {post.graduation_date ? <p><span className="label">Expected Graduation Date: </span>{post.graduation_date}</p> : ''}
          {post.activities ? <p><span className="label">Favorite Activities: </span>{post.activities}</p> : ''}
        </div>
      </div>
    ) : (
      <div className="person">
        <div className={`card ${index % 2 ? 'odd' : 'even'}`}>
          <div className="icon">
            <Icon name="touch" color="#444444" />
          </div>
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
