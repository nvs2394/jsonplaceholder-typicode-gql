'use strict';
const PostList = require('./PostListModel'); 
const Post = require('./PostModel'); 

const postSchema = require('./schema');
const { resolvers } = require('./resolvers');
const postResolver = resolvers;

module.exports = {
  postSchema,
  postResolver,
  PostList,
  Post
}