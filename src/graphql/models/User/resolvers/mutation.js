'use strict';
const { combineResolvers } = require('graphql-resolvers');

/**
 * 
 * @param {*} _ Parent object, should be empty
 * @param {*} args Input arguments for the mutation
 * @param {*} ctx Singleton per request context
 */
const newUser = (_, args, ctx) => ctx.models.User.create(args, ctx);

module.exports = {
  createNewUser: combineResolvers(newUser)
};