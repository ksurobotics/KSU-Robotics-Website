import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withRouter, Route } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import Header from './layouts/Header/Header.js';
import Home from './components/Pages/Home/Home';
import Competitions from './components/Pages/Competitions/Competitions';
import Footer from './layouts/Footer/Footer.js';

const cache = new InMemoryCache();
const link = new HttpLink({ uri: 'http://ksurobotics.esy.es/graphql' });
const client = new ApolloClient({
  link,
  cache,
});

const App = props => (
  <ApolloProvider client={client}>
    <div>
      <Helmet
        link={[
          { href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700', rel: 'stylesheet' },
          { rel: 'icon', href: '../../images/kansas-state-wildcats.svg', type: 'image/png' },
        ]}
      />
      <Header location={props.location.pathname} />
      <Route exact path="/" component={Home} />
      <Route path="/competitions" component={Competitions} />
      <Footer />
    </div>
  </ApolloProvider>
);

App.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(App);
