import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withRouter, Route } from 'react-router';
import axios from 'axios';

import PropsRoute from './services/PropsRoute';
import Header from './layouts/Header/Header.js';
import Home from './components/Pages/Home/Home';
import Competitions from './components/Pages/Competitions/Competitions';
import Footer from './layouts/Footer/Footer.js';

class App extends Component {
  state = {
    postNodes: [],
  };

  componentDidMount() {
    axios
      .post('http://ksurobotics.esy.es/graphql', {
        query: `${this.GET_POSTS}`,
        variables: '',
      })
      .then(res => {
        const postNodes = res.data.data.posts.nodes;
        this.setState({ postNodes });
      })
      .catch(err => {
        console.log(err);
      });
  }
  GET_POSTS = `
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

  render() {
    return (
      <div>
        <Helmet
          link={[
            { href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700', rel: 'stylesheet' },
            { rel: 'icon', href: '../../images/kansas-state-wildcats.svg', type: 'image/png' },
          ]}
        />
        <Header location={this.props.location.pathname} />
        <Route exact path="/" component={Home} />
        {/* This component allows me to pass props to a component while still routing correctly */}
        <PropsRoute
          path="/competitions"
          component={Competitions}
          posts={this.state.postNodes.filter(node => node.categories.nodes[0].name === 'Competitions')}
        />
        <Footer />
      </div>
    );
  }
}
export default withRouter(App);

App.propTypes = {
  location: PropTypes.object.isRequired,
};
