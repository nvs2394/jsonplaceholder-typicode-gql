'use strict';
const { combineResolvers } = require('graphql-resolvers');

const photo = (_, args, ctx) => ctx.models.Photo.gen(args, ctx);

module.exports = {
  photo: combineResolvers(photo)
};