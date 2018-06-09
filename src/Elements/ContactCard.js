import React from 'react';

const ContactCard = () => (
  <div className="contact-card">
    <h2>Send us an email to learn more</h2>
    <form action="#">
      <input type="text" name="fname" placeholder="First Name" />
      <input type="email" name="email" placeholder="Email" />
      <input className="button primary" type="submit" value="Contact Us" />
    </form>
  </div>
);
export default ContactCard;
