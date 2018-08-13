import React from 'react';

import PropTypes from 'prop-types';

const EmailModal = ({ render, toggle, info }) =>
  (render ? (
    <div className="email-modal">
      <h2 className="modal-title">KSU Robotics</h2>
      <div className="email-card card">
        <div className="header">
          <h3 className="heading">Send us an Email</h3>
          <button className="close" onClick={toggle}>
            X
          </button>
        </div>
        <form className="email-form contact-form" action="#">
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
          <input className="button primary submit" type="submit" value="Contact Us" />
        </form>
      </div>
    </div>
  ) : (
    ''
  ));
export default EmailModal;

EmailModal.propTypes = {
  render: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  info: PropTypes.object,
};

EmailModal.defaultProps = {
  info: {},
};
