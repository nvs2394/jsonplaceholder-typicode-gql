'use strict';
const { combineResolvers } = require('graphql-resolvers');

const comment = (_, args, ctx) => ctx.models.Comment.gen(args, ctx);

module.exports = {
  comment: combineResolvers(comment)
};