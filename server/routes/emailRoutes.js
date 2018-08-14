module.exports = app => {
  app.post('/api/send', (req, res) => {
    console.log(req.body);
    console.log('Received');
    res.send('Thanks');
  });
};
