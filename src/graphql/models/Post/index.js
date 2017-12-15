'use strict';
const PostList = require('./postListModel'); 
const Post = require('./postModel'); 

const postSchema = require('./schema');
const { resolvers } = require('./resolvers');
const postResolver = resolvers;

module.exports = {
  postSchema,
  postResolver,
  PostList,
  Post
}