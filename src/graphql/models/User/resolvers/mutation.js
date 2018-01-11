'use strict';
const { combineResolvers } = require('graphql-resolvers');

/**
 * 
 * @param {*} _ Parent object, should be empty
 * @param {*} args Input arguments for the mutation
 * @param {*} ctx Singleton per request context
 */
const user = (_, args, ctx) => ctx.models.User.create(args, ctx);
const userUpdated = (_, args, ctx) => ctx.models.User.update(args, ctx);
const userDeleted = (_, args, ctx) => ctx.models.User.s(args, ctx);

module.exports = {
  createUser: combineResolvers(user),
  updateUser: combineResolvers(userUpdated),
  deleteUser: combineResolvers(userDeleted)
};