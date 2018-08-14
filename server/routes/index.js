const postRoutes = require('./postRoutes');
const emailRoutes = require('./emailRoutes');

module.exports = app => {
  postRoutes(app);
  emailRoutes(app);
};
