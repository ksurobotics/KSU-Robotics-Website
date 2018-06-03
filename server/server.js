const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 8000;
const path = require('path');

// initialize the application and create the routes
const app = express();
const router = express.Router();

router.use(express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' }));

// tell the app to use the above rules
app.use(router);

/* app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, Accept');
  next();
}); */

// The GraphQL endpoint
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

// start the app
app.listen(PORT, error => {
  if (error) {
    return console.log('something bad happened', error);
  }

  console.log(`backend listening on port ${PORT}... `);
});
