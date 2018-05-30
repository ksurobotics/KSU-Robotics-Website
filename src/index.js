import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const cache = new InMemoryCache();
const link = new HttpLink({ uri: 'http://localhost:8000/graphql' });
const client = new ApolloClient({
  link,
  cache,
});

/*
client
  .query({
    query: gql`
      {
        books {
          title
          author
        }
      }
    `,
  })
  .then(result => console.log(result))
  .catch(err => {
    console.log(err);
  }); */

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
