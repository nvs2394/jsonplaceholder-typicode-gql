'use strict';
const { combineResolvers } = require('graphql-resolvers');

const todo = (_, args, ctx) => ctx.models.Todo.gen(args, ctx);

module.exports = {
  todo: combineResolvers(todo),
};