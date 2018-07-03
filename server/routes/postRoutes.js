const axios = require('axios');

module.exports = app => {
  // the current latest time that something was modified
  let lastModifiedDate = '';

  /**
   * Fetches for the latest date modified from WordPress
   */
  function fetchLastModified() {
    const LATEST_MODIFIED = `
      {
        posts(where: { orderby: { field: MODIFIED, order: DESC } }, first: 1) {
          nodes {
            modified
          }
        }
      }
    `;

    axios
      // !Change this to the production route when I get it
      .post('http://ksurobotics.esy.es/graphql', {
        query: `${LATEST_MODIFIED}`,
        variables: '',
      })
      .then(res => {
        // gives us the latest modified date. Only will be one item in the result
        const time = res.data.data.posts.nodes[0].modified;
        lastModifiedDate = time;
      })
      .catch(err => {
        console.error(err);
      });
  }
  // Calls it once
  fetchLastModified();
  // Gets the last modified date every 3 hours
  setInterval(fetchLastModified, 1000 * 60 * 60 * 3);

  app.post('/api/post-updated', (req, res) => {
    fetchLastModified();
    res.send(lastModifiedDate);
  });

  /**
   * Whenever the client asks for it, the server tells them when the most recent post was.
   */
  app.get('/api/latest-post', (req, res) => {
    res.send(lastModifiedDate);
  });
};
