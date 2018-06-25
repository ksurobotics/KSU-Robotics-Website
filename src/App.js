import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withRouter, Route } from 'react-router';
import { some, filter, includes } from 'lodash';

import { PropsRoute, importPosts } from 'Utilities';
import { Header, Footer, Home, Competitions, Robots, AboutUs, PostTemplate } from 'Pages';

class App extends Component {
  state = {
    postNodes: [],
  };

  componentWillMount() {
    importPosts({ app: this });
  }

  /**
   * Gets the post corresponding to the route's category
   */
  getPost() {
    return this.state.postNodes.find(post => {
      let category = '';
      const { pathname } = this.props.location;
      if (includes(pathname, '/Competitions/')) category = '/Competitions/';
      else if (includes(pathname, '/People/')) category = '/People/';
      else if (includes(pathname, '/Robots/')) category = '/Robots/';
      return post.slug === pathname.split(category).pop();
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
          exact
          path="/About-Us"
          component={AboutUs}
          posts={filter(this.state.postNodes, node => some(node.categories.nodes, cat => cat.name === 'People'))}
        />
        <PropsRoute
          exact
          path="/Robots"
          component={Robots}
          posts={filter(this.state.postNodes, node => some(node.categories.nodes, cat => cat.name === 'Robots'))}
        />
        <PropsRoute path="/(Competitions|People|Robots)/:uri" component={PostTemplate} post={this.getPost()} />
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
