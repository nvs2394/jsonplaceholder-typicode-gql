'use strict';

const Query = require('./queries');
const Mutation = require('./mutation');

const resolvers = {
  Query,
  Mutation
};

module.exports = {
  resolvers
};