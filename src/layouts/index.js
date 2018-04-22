import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import './index.styl';

const Layout = ({ children }) => (
  <div>
    <Helmet link={[{ href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700', rel: 'stylesheet' }]} />
    <Header location={location} />
    <div>{children()}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;
