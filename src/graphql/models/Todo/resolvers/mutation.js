'use strict';
const { combineResolvers } = require('graphql-resolvers');
/**
 * 
 * @param {*} _ Parent object, should be empty
 * @param {*} args Input arguments for the mutation
 * @param {*} ctx Singleton per request context
 */
const createTodo = (_, args, ctx) => ctx.models.Todo.create(args, ctx);

module.exports = {
  createTodo: combineResolvers(createTodo)
};