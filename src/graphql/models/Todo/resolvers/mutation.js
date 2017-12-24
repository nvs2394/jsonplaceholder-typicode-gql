'use strict';

/**
 * 
 * @param {*} _ Parent object, should be empty
 * @param {*} args Input arguments for the mutation
 * @param {*} ctx Singleton per request context
 */
const crateTodo = (_, args, ctx) => ctx.models.Todo.create(args, ctx);

module.exports = {
  crateTodo
};