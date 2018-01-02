'use strict';

const Query = require('./queries');
const Mutation = require('./mutation');
const TypeResolvers = require('./types');

const resolvers = {
  Query,
  Mutation,
  ...TypeResolvers
};

module.exports = {
  resolvers
};