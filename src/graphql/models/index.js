const { User, UserList } = require('./User');
const { Todo, TodoList } = require('./Todo');
const { Post, PostList } = require('./Post')

const models = {
  User,
  UserList,
  Todo,
  TodoList,
  Post,
  PostList
};

module.exports = {
  models
}