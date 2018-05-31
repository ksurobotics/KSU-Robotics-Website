import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

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
