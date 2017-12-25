'use strict';
const { combineResolvers } = require('graphql-resolvers');

const photo = (_, args, ctx) => ctx.models.Photo.gen(args, ctx);
const photos = (_, args, ctx) => ctx.models.PhotoList.gen(args, ctx);


module.exports = {
  photo: combineResolvers(photo),
  photos: combineResolvers(photos)
};