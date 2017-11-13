'use strict'
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { graphql, buildSchema } = require('graphql');

const PORT = process.env.PORT || 3000;
const server = express();

const schema = buildSchema(`
  type Video {
    id: ID,
    title: String,
    duration: Int,
    watched: Boolean
  }

  type Query {
    video: Video
    videos: [Video]
  }
`);

const resolvers = {
  video: () => ({
    id: '1',
    title: 'bar',
    duration: 10,
    watched: false
  }),
  videos: () => ([{
    id: '1',
    title: 'bar',
    duration: 10,
    watched: false
  },
  {
    id: '1',
    title: 'bar',
    duration: 10,
    watched: false
  }])
};

server.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
  rootValue: resolvers
}))

server.listen(PORT, () => {
  console.log(`***graphQL** is running on PORT ${PORT}`)
});