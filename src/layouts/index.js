import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header.js';
import './main.styl';

export default class Layout extends Component {
  render() {
    console.log(this.props.location.pathname);
    return (
      <div>
        <Helmet
          link={[{ href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700', rel: 'stylesheet' }]}
        />
        <Header location={this.props.location.pathname} />
        <div>{this.props.children()}</div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};
