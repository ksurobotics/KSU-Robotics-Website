import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route } from 'react-router';
import { some, filter, includes } from 'lodash';

import { PostsProvider } from 'Modules/PostsContext';
import { PropsRoute, importPosts, importAboutInfo } from 'Utilities';
import { Header, Footer, Home, Competitions, Robots, AboutUs, PostTemplate } from 'Pages';

class App extends Component {
  state = {
    postNodes: [],
    aboutInfo: {
      featuredImage: {},
    },
  };

  componentWillMount() {
    importPosts({ app: this });
    importAboutInfo({ app: this });
  }

  /**
   * Gets the post corresponding to the route's category
   */
  getSpecificPost() {
    return this.state.postNodes.find(post => {
      let category = '';
      const { pathname } = this.props.location;
      if (includes(pathname, '/Competitions/')) category = '/Competitions/';
      else if (includes(pathname, '/About-Us/')) category = '/About-Us/';
      else if (includes(pathname, '/Robots/')) category = '/Robots/';
      return post.slug === pathname.split(category).pop();
    });
  }

  getCategoryPosts(category) {
    return filter(this.state.postNodes, node => some(node.categories.nodes, cat => cat.name === category));
  }

  render() {
    return (
      <PostsProvider>
        <div>
          <Header location={this.props.location.pathname} />
          <Route exact path="/" component={Home} />
          {/* This component allows me to pass props to a component while still routing correctly */}
          <PropsRoute
            exact
            path="/Competitions"
            component={Competitions}
            posts={this.getCategoryPosts('Competitions')}
          />
          <PropsRoute
            exact
            path="/About-Us"
            component={AboutUs}
            posts={this.getCategoryPosts('People')}
            aboutInfo={this.state.aboutInfo}
          />
          <PropsRoute exact path="/Robots" component={Robots} posts={this.getCategoryPosts('Robots')} />
          <PropsRoute
            path="/(Competitions|About-Us|Robots)/:uri"
            component={PostTemplate}
            post={this.getSpecificPost()}
            history={this.props.history}
          />
          <Footer />
        </div>
      </PostsProvider>
    );
  }
}
// Allows App to access the location prop
export default withRouter(App);

App.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};
