import React, { Component } from 'react';

import PropTypes from 'prop-types';
import axios from 'axios';

class EmailModal extends Component {
  state = {
    messageSent: false,
  };

  formSubmitted = (e, toggle) => {
    e.preventDefault();
    const { name, email, message } = e.target;
    axios
      .post('/api/send', {
        name: name.value,
        email: email.value,
        message: message.value,
      })
      .then(res => {
        this.setState({ messageSent: true });
        setTimeout(() => {
          window.scrollTo(0, 0);
          e.target.reset();
          toggle();
          this.setState({ messageSent: false });
        }, 3000);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { render, toggle, info } = this.props;

    if (render) {
      return (
        <div className="email-modal">
          <h2 className="modal-title">KSU Robotics</h2>
          <div className="email-card card">
            <div className="header">
              <h3 className="heading">Send us an Email</h3>
              <button className="close" onClick={toggle}>
                X
              </button>
            </div>
            <p className={`email-response ${this.state.messageSent ? 'open' : ''}`}>Your email was delivered</p>
            <form className="email-form contact-form" action="#" onSubmit={e => this.formSubmitted(e, toggle)}>
              <div className="name">
                <label className="label" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="name-input"
                  type="text"
                  name="name"
                  defaultValue={info.name}
                  placeholder="Brianna Smith"
                />
              </div>
              <div className="email">
                <label className="label" htmlFor="email">
                  Your Email
                </label>
                <span>&nbsp;</span>
                <input
                  className="email-input"
                  type="email"
                  name="email"
                  defaultValue={info.email}
                  placeholder="brianna2@ksu.edu"
                />
              </div>
              <div className="message">
                <label className="label" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  className="message-input"
                  type="text"
                  cols="20"
                  rows="10"
                  name="message"
                  placeholder="What would you like to ask?"
                />
              </div>
              <input className="button primary submit" type="submit" value="Send Email" />
            </form>
          </div>
        </div>
      );
    }
    return '';
  }
}
export default EmailModal;

EmailModal.propTypes = {
  render: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  info: PropTypes.object,
};

EmailModal.defaultProps = {
  info: {},
};
