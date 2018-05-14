import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import './main.styl';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Helmet
          link={[
            { href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700', rel: 'stylesheet' },
            { rel: 'icon', href: '../images/kansas-state-wildcats.svg', type: 'image/png' },
          ]}
          // link={[{ rel: 'icon',  href: '../images/kansas-state-wildcats.svg', type: 'image/png', }]}
        />
        <Header location={this.props.location.pathname} />
        <div>{this.props.children()}</div>
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};
