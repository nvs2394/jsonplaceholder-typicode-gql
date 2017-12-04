'use strict';
const Users = require('../mock');
const { combineResolvers } = require('graphql-resolvers');

const user = (_, args, ctx) => {
  return Users.filter((user) => user.id === args.id)[0];
};

module.exports = {
  user: combineResolvers(user)
};