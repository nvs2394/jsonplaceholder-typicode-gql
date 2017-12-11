const merge = require('lodash/merge');
const { userSchema, userResolver } = require('./models/User')
const { todoSchema, todoResolver } = require('./models/Todo')

const rootSchema = require('./models/root')

const resolvers = merge(
    userResolver,
    todoResolver
)

const typeDefs = [
    ...userSchema,
    ...todoSchema,
    ...rootSchema
];

module.exports = {
    resolvers,
    rootSchema,
    typeDefs
}