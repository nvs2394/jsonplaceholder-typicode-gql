'use strict';

const {
  GraphQLInterfaceType,
  GraphQLNonNull,
  GraphQLID
} = require('graphql');

const videoType = require('../index')

const nodeInterface = new GraphQLInterfaceType({
  name: "Node",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: "The id of video"
    }
  },
  resolveType: (obj) => {
    if (obj.title) {
      return videoType;
    }

    return null;
  }
})

module.exports = {
  nodeInterface
}
