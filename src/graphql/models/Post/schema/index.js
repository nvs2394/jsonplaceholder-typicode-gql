'use strict';
const input = require('./input.gql');
const mutation = require('./mutation.gql');
const schema = require('./schema.gql');

module.exports = [
  ...input, ...mutation, ...schema
]