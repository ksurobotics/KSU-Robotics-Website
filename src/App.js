import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route } from 'react-router';

import { PostsProvider } from 'Modules/PostsContext';
import { Header, Footer, Home, Competitions, Robots, AboutUs, PostTemplate } from 'Pages';
import { Spinner } from 'Elements';

const App = ({ location }) => (
  <PostsProvider>
    <div>
      <Header location={location.pathname} />
      <Route exact path="/" component={Home} />
      <Route exact path="/Competitions" component={Competitions} />
      <Route exact path="/About-Us" component={AboutUs} />
      <Route exact path="/Robots" component={Robots} />
      <Route path="/(Competitions|Robots)/:uri" component={PostTemplate} />
      <Route path="/spinner" component={Spinner} />
      <Footer />
    </div>
  </PostsProvider>
);
// Allows App to access the location prop
export default withRouter(App);

App.propTypes = {
  location: PropTypes.object.isRequired,
};
