'use strict';
const { combineResolvers } = require('graphql-resolvers');

const post = (_, args, ctx) => ctx.models.Post.gen(args, ctx);
const posts = (_, args, ctx) => ctx.models.PostList.gen(args, ctx);


module.exports = {
  post: combineResolvers(post),
  posts: combineResolvers(posts)
};