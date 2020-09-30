const express = require('express');
const dotenv = require('dotenv');
const { graphqlHTTP } = require('express-graphql');

const dbConnect = require('./db/connection');

import schema from './schema/schema';

dotenv.config();
dbConnect();

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(4000, () =>
  console.log(
    'Running a GraphQL API server at http://localhost:4000/graphql'
  )
);
