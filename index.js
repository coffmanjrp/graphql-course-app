import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema.js';
import resolvers from './schema/resolvers.js';

const app = express();

app.get('/', (req, res) =>
  res.send('Go to "/graphql" to launch the GraphQL IDE')
);

const root = resolvers;

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
