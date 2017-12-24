const { User, UserList } = require('./User');
const { Todo, TodoList } = require('./Todo');
const { Post, PostList } = require('./Post')
const { Photo, PhotoList } = require('./Photo')
const { Comment, CommentList } = require('./Comment')

const models = {
  User,
  UserList,
  Todo,
  TodoList,
  Post,
  PostList,
  Photo,
  PhotoList,
  Comment,
  CommentList
};

module.exports = {
  models
}