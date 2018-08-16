import React, { Component, Fragment } from 'react';

import { Toggle } from 'Utilities';
import { EmailModal } from 'Elements';

class ContactCard extends Component {
  state = {
    info: {
      name: '',
      email: '',
    },
  };

  /**
   * Keeps the state up to date so that we can pass the information to the Model when necessary
   */
  handleChanges = e => {
    const newInfo = { ...this.state.info };
    const { name: elementName, value } = e.target;
    if (elementName === 'name') newInfo.name = value;
    else newInfo.email = value;
    this.setState({ info: newInfo });
  };

  render() {
    return (
      <Toggle>
        {({ on, toggle }) => (
          <Fragment>
            <div className="card contact-card">
              <h3 className="heading">We meet Mondays, Wednesdays, and Fridays from 7-9pm</h3>
              <p className="info">Send us an email to learn more!</p>
              <form
                className="contact-form"
                action="#"
                onSubmit={event => {
                  event.preventDefault();
                  event.target.reset();
                  toggle();
                }}
              >
                <input
                  className="name-input"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  onChange={this.handleChanges}
                />
                <input
                  className="email-input"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  onChange={this.handleChanges}
                />
                <input className="button primary" type="submit" value="Contact Us" />
              </form>
            </div>

            <EmailModal render={on} toggle={toggle} info={this.state.info} />
          </Fragment>
        )}
      </Toggle>
    );
  }
}
export default ContactCard;
