const express = require('express');

const PORT = 1234;
const path = require('path');

// initialize the application and create the routes
const app = express();
const router = express.Router();

// Does this set my build folder to be cached in a users folder?
router.use(express.static(path.resolve(__dirname, 'build'), { maxAge: '30d' }));

// tell the app to use the above rules
app.use(router);

// start the app
app.listen(PORT, error => {
  if (error) {
    return console.log('something bad happened', error);
  }

  console.log(`backend listening on port ${PORT}... `);
});
