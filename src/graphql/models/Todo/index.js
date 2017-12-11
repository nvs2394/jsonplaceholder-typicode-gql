'use strict';
const TodoList = require('./todoListModel'); 
const Todo = require('./todoModel'); 

const todoSchema = require('./schema');
const { resolvers } = require('./resolvers');
const todoResolver = resolvers;

module.exports = {
  todoSchema,
  todoResolver,
  TodoList,
  Todo
}