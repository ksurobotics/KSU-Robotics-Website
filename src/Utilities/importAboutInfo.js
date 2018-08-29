import axios from 'axios';

// Fetches data from the api
function fetchAboutInfo({ hasLocalStorage, app }) {
  axios
    .get(`${process.env.REACT_APP_API}/wp-json/wp/v2/pages/105/?_embed`)
    .then(res => {
      const initialInfo = res.data;
      const featuredMedia = initialInfo._embedded['wp:featuredmedia'][0];
      const aboutInfo = {
        title: initialInfo.title.rendered,
        slug: initialInfo.slug,
        acf: initialInfo.acf,
        content: initialInfo.content.rendered,
        featuredImage: {
          sourceUrl: featuredMedia.source_url,
          altText: featuredMedia.alt_text || featuredMedia.title.rendered,
        },
      };
      app.setState({ aboutInfo });
      // If the browser supports local storage set our posts data as postNodes and set a token to tell whether we should grab new data
      if (hasLocalStorage) {
        window.localStorage.setItem('aboutInfo', JSON.stringify(aboutInfo));
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
function importAboutInfo({ app }) {
  // Check whether the browser has storage
  if (typeof Storage !== 'undefined') {
    // the browser storage object
    const store = window.localStorage;

    getLatestModified()
      .then(res => {
        const latestModified = res;
        if (store.aboutInfo && latestModified === store.latestModified) {
          app.setState({ aboutInfo: JSON.parse(store.getItem('aboutInfo')) });
        } else fetchAboutInfo({ hasLocalStorage: true, app, latestModified }); // retrieve info from wordpress and set local storage
      })
      .catch(err => {
        console.log(err);
      });

    // The browser doesn't have storage so we are fetching from the api
  } else fetchAboutInfo({ hasLocalStorage: false, app });
}

export default importAboutInfo;
