const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');

const PORT = 1234;
const path = require('path');

// initialize the application and create the routes
const app = express();

// allow cors so my site can communicate with my back-end.
app.use(cors());

const router = express.Router();

// so that I can look at the body of post requests
app.use(bodyParser.json());

// Serve any static files
router.use(express.static(path.resolve(__dirname, '../build'), { maxAge: '30d' }));

// tell the app to use the above rules
app.use(router);

require('./routes')(app);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'), err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// start the app
app.listen(PORT, error => {
  if (error) {
    return console.error('something bad happened', error);
  }

  console.log(`Backend listening on port ${PORT}... \n go to http://localhost:${PORT} to view the server-rendered app`);
});
