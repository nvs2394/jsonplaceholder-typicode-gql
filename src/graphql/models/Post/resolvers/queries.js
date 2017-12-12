'use strict';
const { combineResolvers } = require('graphql-resolvers');

const post = (_, args, ctx) => ctx.models.Post.gen(args, ctx);

module.exports = {
  post: combineResolvers(post),
};