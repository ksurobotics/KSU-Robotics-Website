import React from 'react';
import Helmet from 'react-helmet';
import ContactCard from '../../Elements/ContactCard';

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
      <div className="content-wrapper">
        <div className="title">
          <h1>Kansas State Robotics</h1>
          <h2>Where Trial and Error is the Only Answer</h2>
        </div>
        <ContactCard />
      </div>
    </div>
    <div className="page-wrapper">
      <h2>This is a great statement</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iste autem neque sapiente asperiores sint,
        officia itaque quo reprehenderit, accusamus doloribus. Voluptatem quo dolores incidunt alias consectetur magnam
        aliquam deserunt neque praesentium perferendis earum, deleniti eaque officiis aspernatur saepe commodi,
        repudiandae quos magni ullam quod sed. Possimus obcaecati repudiandae debitis soluta natus neque eius aliquam
        perferendis dolores magni rem minima in illum aperiam et voluptatum, odit saepe, porro ea totam? Ea non
        perferendis velit ducimus sint quaerat doloremque fugiat tempore vitae quia, ullam saepe corporis molestiae
        illum! Adipisci natus praesentium labore corporis consequuntur earum! Harum iure molestias necessitatibus
        excepturi exercitationem.
      </p>
      <h2>This is another Great Statement!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iste autem neque sapiente asperiores sint,
        officia itaque quo reprehenderit, accusamus doloribus. Voluptatem quo dolores incidunt alias consectetur magnam
        aliquam deserunt neque praesentium perferendis earum, deleniti eaque officiis aspernatur saepe commodi,
        repudiandae quos magni ullam quod sed. Possimus obcaecati repudiandae debitis soluta natus neque eius aliquam
        perferendis dolores magni rem minima in illum aperiam et voluptatum, odit saepe, porro ea totam? Ea non
        perferendis velit ducimus sint quaerat doloremque fugiat tempore vitae quia, ullam saepe corporis molestiae
        illum! Adipisci natus praesentium labore corporis consequuntur earum! Harum iure molestias necessitatibus
        excepturi exercitationem.
      </p>
    </div>
  </div>
);

export default IndexPage;
