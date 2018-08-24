import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { map, orderBy } from 'lodash';

import { Helpers } from 'Utilities';

const PostsContext = React.createContext();

// Urls for the default images. Need to change to production.
const defaultImages = {
  Competitions: 'http://ksurobotics.esy.es/wp-content/uploads/2018/08/Default-Competition.jpg',
  Robots: 'http://ksurobotics.esy.es/wp-content/uploads/2018/08/Default-Robot.jpg',
  People: 'http://ksurobotics.esy.es/wp-content/uploads/2018/08/Default-Person.jpg',
};

class PostsProvider extends Component {
  state = {
    competitionPosts: [],
    personPosts: [],
    robotPosts: [],
    isLoaded: false,
  };

  componentDidMount() {
    axios
      .get('http://ksurobotics.esy.es/wp-json/wp/v2/posts/?_embed&per_page=100')
      .then(res => {
        const initialPosts = res.data;
        const tempRob = [];
        const tempPeople = [];
        const tempComp = [];
        map(initialPosts, post => {
          const category = post._embedded['wp:term'][0][0].name;
          const featuredMedia = post._embedded['wp:featuredmedia']
            ? post._embedded['wp:featuredmedia'][0]
            : // Else the featured Media comes from our default image.
              {
                source_url: defaultImages[category],
                title: { rendered: `${category} Default` },
              };
          const returnPost = {
            category,
            date: post.date,
            title: Helpers.decodeHtml(post.title.rendered),
            excerpt: Helpers.decodeHtml(post.excerpt.rendered),
            slug: post.slug,
            content: post.content.rendered,
            featuredImage: {
              sourceUrl: featuredMedia.source_url,
              altText: featuredMedia.alt_text || featuredMedia.title.rendered,
              title: featuredMedia.title.rendered,
            },
          };

          if (category === 'Competitions') {
            returnPost.dateOfCompetition = post.acf.dateOfCompetition;
            tempComp.push(returnPost);
          } else if (category === 'Robots') {
            returnPost.dateOfCompetition = post.acf.dateOfCompetition;
            tempRob.push(returnPost);
          } else if (category === 'People') {
            returnPost.isOfficer = post.acf.isOfficer;
            returnPost.position = post.acf.position;
            returnPost.email = post.acf.email;
            returnPost.semester_joined = post.acf.semester_joined;
            returnPost.grade_level = post.acf.grade_level;
            returnPost.favorite_movie = post.acf.favorite_movie;
            returnPost.hobbies = post.acf.hobbies;

            tempPeople.push(returnPost);
          }
        });

        // Sorts the posts by dateOfCompetition then date in descending order.
        const competitionPosts = orderBy(tempComp, ['dateOfCompetition', 'date'], ['desc', 'desc']);
        const robotPosts = orderBy(tempRob, ['dateOfCompetition', 'date'], ['desc', 'desc']);
        const personPosts = orderBy(tempPeople, ['date'], ['desc']);

        this.setState({ personPosts, robotPosts, competitionPosts, isLoaded: true });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <PostsContext.Provider
        value={{
          competitionPosts: this.state.competitionPosts,
          personPosts: this.state.personPosts,
          robotPosts: this.state.robotPosts,
          isLoaded: this.state.isLoaded,
        }}
      >
        {this.props.children}
      </PostsContext.Provider>
    );
  }
}

PostsProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export { PostsContext, PostsProvider };
