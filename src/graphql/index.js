const merge = require('lodash/merge');
const { userSchema, userResolver } = require('./models/User')
const { todoSchema, todoResolver } = require('./models/Todo')
const { postSchema, postResolver} = require('./models/Post');
const { photoSchema, photoResolver } = require('./models/Photo')
const { commentSchema, commentResolver} = require('./models/Comment');

const rootSchema = require('./models/root')

const resolvers = merge(
    userResolver,
    todoResolver,
    postResolver,
    photoResolver,
    commentResolver
)

const typeDefs = [
    ...userSchema,
    ...todoSchema,
    ...postSchema,
    ...photoSchema,
    ...commentSchema,
    ...rootSchema
];

module.exports = {
    resolvers,
    rootSchema,
    typeDefs
}