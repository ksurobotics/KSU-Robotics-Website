import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

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
      <div className="wrapper">
        <div className="title">
          <h1>KSU Robotics</h1>
          <h2>Where Trial and Error is the Only Answer</h2>
        </div>
        <div className="card">
          <h2>Send us an email to learn more</h2>
          <form action="#">
            <input type="text" name="fname" placeholder="First Name" />
            <br />
            <input type="email" name="email" placeholder="Email" />
            <br />
            <input type="submit" value="Contact Us" />
          </form>
        </div>
      </div>
    </div>
    <h2>This is a great statement</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iste autem neque sapiente asperiores sint,
      officia itaque quo reprehenderit, accusamus doloribus. Voluptatem quo dolores incidunt alias consectetur magnam
      aliquam deserunt neque praesentium perferendis earum, deleniti eaque officiis aspernatur saepe commodi,
      repudiandae quos magni ullam quod sed. Possimus obcaecati repudiandae debitis soluta natus neque eius aliquam
      perferendis dolores magni rem minima in illum aperiam et voluptatum, odit saepe, porro ea totam? Ea non
      perferendis velit ducimus sint quaerat doloremque fugiat tempore vitae quia, ullam saepe corporis molestiae illum!
      Adipisci natus praesentium labore corporis consequuntur earum! Harum iure molestias necessitatibus excepturi
      exercitationem.
    </p>
    <h2>This is another Great Statement!</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iste autem neque sapiente asperiores sint,
      officia itaque quo reprehenderit, accusamus doloribus. Voluptatem quo dolores incidunt alias consectetur magnam
      aliquam deserunt neque praesentium perferendis earum, deleniti eaque officiis aspernatur saepe commodi,
      repudiandae quos magni ullam quod sed. Possimus obcaecati repudiandae debitis soluta natus neque eius aliquam
      perferendis dolores magni rem minima in illum aperiam et voluptatum, odit saepe, porro ea totam? Ea non
      perferendis velit ducimus sint quaerat doloremque fugiat tempore vitae quia, ullam saepe corporis molestiae illum!
      Adipisci natus praesentium labore corporis consequuntur earum! Harum iure molestias necessitatibus excepturi
      exercitationem.
    </p>
  </div>
);

export default IndexPage;
