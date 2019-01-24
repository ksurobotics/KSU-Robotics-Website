import React from 'react';
import Helmet from 'react-helmet';
import { ContactCard } from 'Elements';
import { Link } from 'react-router-dom';

const IndexPage = () => (
  <div className="page-wrapper home-page">
    <Helmet
      title="KSU Robotics"
      meta={[
        { name: 'description', content: 'The KSU Robotics homepage.' },
        { name: 'keywords', content: 'KSU Robotics' },
      ]}
    />
    <div className="hero">
      <div className="hero-container">
        <div className="title">
          <h1>Kansas State Robotics Competition Team</h1>
        </div>
        <ContactCard />
      </div>
    </div>
    <div className="content">
      <h2 className="subheading">View our content</h2>
      <p className="p">
        We have competed in several{' '}
        <Link to="/Competitions" className="link">
          competitions
        </Link>{' '}
        over the years
      </p>
      <p className="p">
        Each of our competitions had a different robot with different specifications and designs. You can view all of
        our past robots{' '}
        <Link to="/Robots" className="link">
          here
        </Link>
      </p>
      <p className="p">
        We have an incredible team. We have a page dedicated exclusively to{' '}
        <Link to="/About-Us" className="link">
          meeting our team.
        </Link>{' '}
        We would love for you to join us!
      </p>
    </div>
  </div>
);

export default IndexPage;
