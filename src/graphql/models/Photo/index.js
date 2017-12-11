'use strict';
const PhotoList = require('./userListModel'); 
const user = require('./userModel'); 

const photoSchema = require('./schema');
const { resolvers } = require('./resolvers');
const photoResolver = resolvers;

module.exports = {
  photoSchema,
  photoResolver,
  PhotoList,
  Photo
}