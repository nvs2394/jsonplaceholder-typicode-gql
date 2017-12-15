'use strict'

/**
 * Vendor modules
 */
const Inert = require('inert')
const Vision = require('vision')
const Good = require('good')
const config = require('config')
const { graphqlHapi, graphiqlHapi } = require('graphql-server-hapi');
const { makeExecutableSchema } = require('graphql-tools');
const { typeDefs, resolvers } = require('./graphql');
const { formatError } = require('./graphql/errors');
const { models, connectors } = require('./graphql/models');

const executableSchema = makeExecutableSchema({ typeDefs, resolvers });

/**
 * Internal modules
 */
const DEVELOPMENT = 'development'

/**
 * exports array of plugins with configuration.
 * @type {Array}
 */
let plugins = []

if (config.util.getEnv('NODE_ENV') === DEVELOPMENT) {

  // add hapi swagger integration
  plugins = plugins.concat([Inert,
    Vision,
    {
      plugin: graphqlHapi,
      options: {
          path: '/graphql',
          graphqlOptions: {
            context: {
              models,
            },
            schema: executableSchema,
            debug: true,
            tracing: true
          },
          route: {
              cors: true,
          },
      },
    },
    {
      plugin: graphiqlHapi,
      options: {
        path: '/graphiql',
        route: {
          auth: false
        },
        graphiqlOptions: {
          endpointURL: '/graphql'
        }
      },
    }
  ]);
};

module.exports = plugins
