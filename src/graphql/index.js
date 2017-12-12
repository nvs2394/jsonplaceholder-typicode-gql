const merge = require('lodash/merge');
const { userSchema, userResolver } = require('./models/User')
const { todoSchema, todoResolver } = require('./models/Todo')
const { postSchema, postResolver} = require('./models/Post');

const rootSchema = require('./models/root')

const resolvers = merge(
    userResolver,
    todoResolver,
    postResolver
)

const typeDefs = [
    ...userSchema,
    ...todoSchema,
    ...postSchema,
    ...rootSchema
];

module.exports = {
    resolvers,
    rootSchema,
    typeDefs
}