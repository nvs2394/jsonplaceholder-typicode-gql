const hapi = require('hapi');

const { graphqlHapi, graphiqlHapi } = require('graphql-server-hapi');
const { makeExecutableSchema } = require('graphql-tools');

const Config = require('config');

const { typeDefs, resolvers } = require('./graphql');
const { formatError } = require('./graphql/errors');
const { models, connectors } = require('./graphql/models');

const executableSchema = makeExecutableSchema({ typeDefs, resolvers });
const server = new hapi.Server();

server.connection({
  port: Config.get('App.port')
});

const plugins = [
  {
    register: graphqlHapi,
    options: {
      path: '/graphql',
      graphqlOptions: (request) => {
        return {
          context: {
            models,
          },
          schema: executableSchema,
          debug: true,
          tracing: true
        };
      },
      route: {
        cors: {
          origin: ['*'],
        },
        auth: false
      }
    }
  },
  {
    register: graphiqlHapi,
    options: {
      path: '/graphiql',
      route: {
        auth: false
      },
      graphiqlOptions: {
        endpointURL: '/graphql'
      }
    }
  }
];

server.register(plugins, (err) => {
  if (err) { console.error('error loading plugin ', err); }
});

/**
 * Export server, call with server.start
 */
module.exports = server;