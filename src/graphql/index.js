const merge = require('lodash/merge');
const { userSchema, userResolver } = require('./models/User')
const rootSchema = require('./models/root')

const resolvers = merge(
    userResolver
)

const typeDefs = [...userSchema, ...rootSchema];

module.exports = {
    resolvers,
    rootSchema,
    typeDefs
}