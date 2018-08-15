import axios from 'axios';
// Gets all of the information we need from the api
const GET_POSTS = `
  {
    posts(where: { orderby: { field: DATE, order: DESC } } first: 100) {
      nodes {
        date
        title
        excerpt
        slug
        content
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          sourceUrl
          id
          title
          altText
        }
      }
    }
  }
`;

// Fetches data from the api
function fetchPosts({ hasLocalStorage, app, latestModified }) {
  axios
    .post('http://ksurobotics.esy.es/graphql', {
      query: `${GET_POSTS}`,
      variables: '',
    })
    .then(res => {
      // makes our data easier to access
      const postNodes = res.data.data.posts.nodes;
      // sets the state
      app.setState({ postNodes });
      // If the browser supports local storage set our posts data as postNodes and set a token to tell whether we should grab new data
      if (hasLocalStorage) {
        window.localStorage.setItem('postNodes', JSON.stringify(postNodes));
        window.localStorage.setItem('latestModified', latestModified);
      }
    })
    .catch(err => {
      console.error(err);
    });
}

function getLatestModified() {
  return new Promise((resolve, reject) => {
    axios
      .get('/api/latest-post')
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

/**
 * Gets
 */
function importPosts({ app }) {
  // Check whether the browser has storage
  if (typeof Storage !== 'undefined') {
    // the browser storage object
    const store = window.localStorage;
    // returns a string of the date of the most recently modified post
    getLatestModified()
      .then(res => {
        const latestModified = res;
        // if the storage already contains our posts then the state is set from storage
        if (store.postNodes && latestModified === store.latestModified) {
          app.setState({ postNodes: JSON.parse(store.getItem('postNodes')) });
        } else fetchPosts({ hasLocalStorage: true, app, latestModified }); // retrieve posts from wordpress and set local storage
      })
      .catch(err => {
        console.error(err);
      });
    // The browser doesn't have storage so we are fetching from the api
  } else fetchPosts({ hasLocalStorage: false, app });
}

export default importPosts;
