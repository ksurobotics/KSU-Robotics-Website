module.exports = function (app) {
  // the current latest time that is stored on the server.
  let latestPostTime = '';

  // Receives a post from wordpress and stores it in the system variable
  app.post('/api/post-updated', (req, res) => {
    console.log(req.body);
    latestPostTime = req.body;
    res.send('It was logged!');
  });

  // Whenever the client asks for it, the server tells them when the most recent post was.
  app.get('/api/latest-post', (req, res) => {
    res.send(latestPostTime);
  });
};
