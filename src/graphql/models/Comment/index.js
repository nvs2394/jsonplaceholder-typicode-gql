'use strict';
const CommentList = require('./commentListModel'); 
const Comment = require('./commentModel'); 

const commentSchema = require('./schema');
const { resolvers } = require('./resolvers');
const commentResolver = resolvers;

module.exports = {
  commentSchema,
  commentResolver,
  CommentList,
  Comment
}