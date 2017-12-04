'use strict';
const todoList = require('./todoListModel'); 
const todo = require('./todoModel'); 

const todoSchema = require('./schema');
const { resolvers } = require('./resolvers');
const todoResolver = resolvers;

module.exports = {
  todoSchema,
  todoResolver,
  todoList,
  todo
}