'use strict';

/**
 * 
 * @param {*} user Get userId from User object
 * @param {*} args Arguments passed to the query
 * @param {*} ctx GraphQL request context
 */
const posts = (user, args, ctx) => {
  return ctx.models.Post.getPostByUserId({
    userId: user.id
  }, ctx);
}

const todos = (user, args, ctx) => {
  return ctx.models.Todo.getTodoByUserId({
    userId: user.id
  }, ctx);
}

const typeResolvers = {
  User: {
    posts,
    todos
  }
}

module.exports = typeResolvers