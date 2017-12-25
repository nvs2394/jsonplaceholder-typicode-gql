'use strict';
const { combineResolvers } = require('graphql-resolvers');

const comment = (_, args, ctx) => ctx.models.Comment.gen(args, ctx);
const comments = (_, args, ctx) => ctx.models.CommentList.gen(args, ctx);

module.exports = {
  comment: combineResolvers(comment),
  comments: combineResolvers(comments)
};