import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withRouter, Route } from 'react-router';
import { some, filter } from 'lodash';

import { PropsRoute, importPosts } from 'Utilities';
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
    importPosts({ app: this });
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
