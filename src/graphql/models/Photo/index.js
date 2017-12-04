'use strict';
const userList = require('./userListModel'); 
const user = require('./userModel'); 

const userSchema = require('./schema');
const { resolvers } = require('./resolvers');
const userResolver = resolvers;

module.exports = {
  userSchema,
  userResolver,
  userList,
  user
}