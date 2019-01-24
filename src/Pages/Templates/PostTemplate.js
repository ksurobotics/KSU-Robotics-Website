/* eslint react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';

import { Cloudinary, Helpers, Icon } from 'Utilities';
import { PostsContext } from 'Modules/PostsContext';
import { Spinner } from 'Elements';

const PostTemplate = ({ history, match }) => {
  function handleBackClick() {
    history.goBack();
  }

  const featuredImageSettings = { maxWidth: 1, height: 550 };

  return (
    <PostsContext.Consumer>
      {state => {
        if (state.isLoaded) {
          let post = null;
          if (match.params['0'] === 'Competitions') {
            post = state.competitionPosts.find(p => p.slug === match.params.uri);
          } else if (match.params['0'] === 'Robots') {
            post = state.robotPosts.find(p => p.slug === match.params.uri);
          }

          if (post) {
            return (
              <div className="post">
                <button className="back" onClick={handleBackClick}>
                  <Icon className="icon" name="back" />
                  <span className="text">Back</span>
                </button>
                <div className="page-wrapper">
                  <Cloudinary
                    modifiers={featuredImageSettings}
                    fluid
                    source={post.featuredImage.sourceUrl}
                    alt={post.featuredImage.altText}
                    className="featured-image"
                  />
                  {/* !Need to Sanitize this! */}
                  <div className="content">
                    <h1 className="title">{post.title ? Helpers.decodeHtml(post.title) : 'Loading...'}</h1>
                    <div dangerouslySetInnerHTML={{ __html: Helpers.sanitize(post.content) }} />
                  </div>
                </div>
              </div>
            );
          }
        }
        return <Spinner />;
      }}
    </PostsContext.Consumer>
  );
};

PostTemplate.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default PostTemplate;
