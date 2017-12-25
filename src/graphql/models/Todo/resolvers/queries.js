'use strict';
const { combineResolvers } = require('graphql-resolvers');

const todo = (_, args, ctx) => ctx.models.Todo.gen(args, ctx);
const todos = (_, args, ctx) => ctx.models.TodoList.gen(args, ctx);

module.exports = {
  todo: combineResolvers(todo),
  todos: combineResolvers(todos)
};