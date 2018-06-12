import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withRouter, Route } from 'react-router';
import axios from 'axios';
import { some, filter } from 'lodash';

import { PropsRoute } from 'Utilities';
import {
  Header,
  Footer,
  Home,
  Competitions,
  Robots,
  AboutUs,
  CompetitionTemplate,
  PersonTemplate,
  RobotTemplate,
} from 'Pages';

class App extends Component {
  state = {
    postNodes: [],
  };

  componentWillMount() {
    // Check whether the browser has local storage
    if (typeof Storage !== 'undefined') {
      // if the session storage already contains our posts then the state is set from local storage
      if (window.sessionStorage.postNodes) {
        this.setState({ postNodes: JSON.parse(window.sessionStorage.getItem('postNodes')) });
        // We don't have the posts in session storage, so we are going to get it from the api, but also set local storage to have our posts now.
      } else this.fetchCompetitionPosts({ hasSessionStorage: true });
      // The browser doesn't have local storage so we are fetching from the api
    } else this.fetchCompetitionPosts();
  }
  // Gets all of the information we need from the api
  GET_POSTS = `
  {
    posts(where: {orderby: {field: DATE order: DESC}} ){
      nodes {
        date
        title
        excerpt
        slug
        content
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

  // Fetches data from the api
  fetchCompetitionPosts({ hasSessionStorage }) {
    axios
      .post('http://ksurobotics.esy.es/graphql', {
        query: `${this.GET_POSTS}`,
        variables: '',
      })
      .then(res => {
        // makes our data easier to access
        const postNodes = res.data.data.posts.nodes;
        // sets the state
        this.setState({ postNodes });
        // If the browser supports session storage set our posts data as postNodes
        if (hasSessionStorage) window.sessionStorage.setItem('postNodes', JSON.stringify(postNodes));
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <Helmet
          link={[{ href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700', rel: 'stylesheet' }]}
        />
        <Header location={this.props.location.pathname} />
        <Route exact path="/" component={Home} />
        {/* This component allows me to pass props to a component while still routing correctly */}
        <PropsRoute
          exact
          path="/Competitions"
          component={Competitions}
          posts={filter(this.state.postNodes, node => some(node.categories.nodes, cat => cat.name === 'Competitions'))}
        />
        <PropsRoute
          path="/Competitions/:uri"
          component={CompetitionTemplate}
          post={this.state.postNodes.find(
            post => post.slug === this.props.location.pathname.split('/Competitions/').pop()
          )}
        />
        <PropsRoute
          exact
          path="/About-Us"
          component={AboutUs}
          posts={filter(this.state.postNodes, node => some(node.categories.nodes, cat => cat.name === 'People'))}
        />
        <PropsRoute
          path="/People/:uri"
          component={PersonTemplate}
          post={this.state.postNodes.find(post => post.slug === this.props.location.pathname.split('/People/').pop())}
        />
        <Footer />
        <PropsRoute
          exact
          path="/Robots"
          component={Robots}
          posts={filter(this.state.postNodes, node => some(node.categories.nodes, cat => cat.name === 'Robots'))}
        />
        <PropsRoute
          path="/Robots/:uri"
          component={RobotTemplate}
          post={this.state.postNodes.find(post => post.slug === this.props.location.pathname.split('/Robots/').pop())}
        />
        <Footer />
      </div>
    );
  }
}
// Allows App to access the location prop
export default withRouter(App);

App.propTypes = {
  location: PropTypes.object.isRequired,
};
