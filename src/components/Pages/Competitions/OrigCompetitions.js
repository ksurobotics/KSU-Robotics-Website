// data is the GraphQL query return data
const CompetitionPageOriginal = ({ data }) => {
  const latestPost = data.allWordpressPost.edges[0].node;
  return (
    <div className="competitions">
      <Helmet
        title="Competitions"
        meta={[
          { name: 'description', content: 'View some of our recent competitions.' },
          { name: 'keywords', content: 'KSU Robotics, KSU Robotics competitions' },
        ]}
      />
      {/* JSX Comment <h1 className="title">Past Competitions</h1> */}

      <div className="hero">
        {/* Passes the latestPost media, default image, and the fact that it is a fluid image to the ImageTransform component */}
        <ImageTransform media={latestPost.featured_media} default={data.imageSharp.resolutions} fluid />
        <h2>{latestPost.title}</h2>
        <p>
          {latestPost.excerpt
            .replace(/<[^>]+>/g, '')
            .replace('&nbsp;', ' ')
            .substring(0, 200)}
        </p>
      </div>
      <div className="blog">
        {/* Takes out the first post because it is the hero on this page */}
        {/* Passes the WordPress posts, default image, and "Competitions" as props to the PageLinks component */}
        <PageLinks
          pages={data.allWordpressPost.edges.slice(1)}
          defaultImage={data.imageSharp.resolutions}
          category="Competitions"
        />
      </div>
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
  );
};

CompetitionPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CompetitionPage;

// Brings in a default competition image from the images folder.
// The second query brings in the WordPress posts that have the category of Competitions
/* export const competitionsQuery = graphql`
  query CompetitionsQuery($category: String = "Competitions") {
    imageSharp(id: { regex: "/default-competitions-image.jpeg/" }) {
      resolutions(width: 150, height: 150) {
        ...GatsbyImageSharpResolutions
      }
    }
    allWordpressPost(filter: { categories: { name: { eq: $category } } }, sort: { fields: [date], order: DESC }) {
      edges {
        node {
          excerpt
          title
          slug
          categories {
            name
          }
          featured_media {
            alt_text
            title
            localFile {
              childImageSharp {
                id
                resolutions(width: 150, height: 150) {
                  ...GatsbyImageSharpResolutions
                }
                sizes(maxWidth: 700) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`; */
