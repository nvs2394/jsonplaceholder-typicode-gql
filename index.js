'use strict'
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { 
  GraphQLID,
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} = require('graphql');

const PORT = process.env.PORT || 3000;
const server = express();

const videoType = new GraphQLObjectType({
  name: "Video",
  description: "A video on Egghead.io",
  fields: {
    id: {
      type: GraphQLID,
      description: "The Id of video"
    },
    title: {
      type: GraphQLString,
      description: "The title of video"
    },
    duration: {
      type: GraphQLInt,
      description: "The duration of video"
    },
    watched: {
      type: GraphQLBoolean,
      description: "Whether or not viewer has watched the video"
    }
  }
})

const queryType =  new GraphQLObjectType({
  name: "QueryType",
  description: "The root query type",
  fields:{
    video: {
      type: videoType,
      resolve: () => new Promise((resolve) => {
        resolve({
          id: '1',
          title: 'bar',
          duration: 10,
          watched: false
        })
      })
    }
  }
})

const schema = new GraphQLSchema({
  query: queryType
})

server.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

server.listen(PORT, () => {
  console.log(`***graphQL** is running on PORT ${PORT}`)
});