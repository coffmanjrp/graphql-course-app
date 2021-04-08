import express from 'express';

const app = express();

app.get('/', (req, res) =>
  res.send('Go to "/graphql" to launch the GraphQL IDE')
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
