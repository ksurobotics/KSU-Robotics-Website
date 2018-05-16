const path = require(`path`);
const _ = require(`lodash`);
const slash = require(`slash`);
// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for Wordpress pages (route : /{slug})
// Will create pages for Wordpress posts (route : /post/{slug})
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allWordpressPost {
            edges {
              node {
                id
                slug
                categories {
                  name
                }
                featured_media {
                  source_url
                }
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }
      const personTemplate = path.resolve(`./src/templates/person.js`);
      const competitionTemplate = path.resolve(`./src/templates/competition.js`);
      // We want to create a detailed page for each
      // post node. We'll just use the Wordpress Slug for the slug.
      // The Post ID is prefixed with 'POST_'
      _.each(result.data.allWordpressPost.edges, edge => {
        createPage({
          path: `${edge.node.categories[0].name}/${edge.node.slug}`,
          component: slash(`${edge.node.categories[0].name === 'Competitions' ? competitionTemplate : personTemplate}`),
          context: {
            id: edge.node.id,
          },
        });
      });
      resolve();
    });
  });
  // ==== END POSTS ====
};
