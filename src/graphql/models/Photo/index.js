'use strict';
const PhotoList = require('./photoListModel'); 
const Photo = require('./photoModel'); 

const photoSchema = require('./schema');
const { resolvers } = require('./resolvers');
const photoResolver = resolvers;

module.exports = {
  photoSchema,
  photoResolver,
  PhotoList,
  Photo
}