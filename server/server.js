const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const PORT = 8000;
const path = require('path');

// Some fake data
const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

// The GraphQL schema in string form
const typeDefs = `
  type Query { books: [Book] }
  type Book { title: String, author: String }
`;

// The resolvers
const resolvers = {
  Query: { books: () => books },
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// initialize the application and create the routes
const app = express();
const router = express.Router();

router.use(express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' }));

// tell the app to use the above rules
app.use(router);

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// start the app
app.listen(PORT, error => {
  if (error) {
    return console.log('something bad happened', error);
  }

  console.log(`backend listening on port ${PORT}... \ngo to http://localhost:${PORT}/graphiql to run queries!\n`);
});
