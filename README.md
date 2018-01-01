# Jsonplaceholder-typicode-gql
Convert RestAPI to GraphQL from https://jsonplaceholder.typicode.com 

To https://jsonplaceholder-typicode.herokuapp.com/graphiql

### How to run local

Install package: `npm install`

Start: `npm run start`

Start with nodemon (auto reload server): `npm run  dev`

### Run with Docker

Run : `docker-compose up`

### How to query &  mutation
  ##### Query:
  ```
  List:
    query usersQuery {
      photos{
        total
        items{
          id
          url
        }
      } 
    }

  Get detail
    query userQuery {
      user(id: 1) {
        id
        name
        username
        email
      }
    }

  ```
  ##### Mutation:
  ```
  mutation addUser($name: String, $username: String!, $email: String!, $avatar: String){
  createNewUser(input:{
   	name: $name,
    username: $username,
    avatar: $avatar,
    email: $email
  }){
    user{
      id
    }
  }
  }

  varialbes:
  {
    "name": "Son",
    "username": "sondeptrai",
    "email": "son@test.com",
    "avatar": "http://avatar.com/img.png"
  }
  ```

### Structure
  ```
  config // config env for project
    default.js //default config env 
    development
    production
  src
    graphql
      connectors #
        httpConnecttor //defind HTTPConnecttor call to ms-service
        index.js
      errors // To 
        apolloError.js //Show apollo error
        formatError.js
        index.js
        microserviceError.js //Show error when call to ms-service
      models
        ...#You can add more Models look like User
        User
          resolvers //Resolver for schema
            index.js
            mutation.js
            queries.js
            type.js
          schema
            index.js
            schema.gql //Defined schema type
            mutation.gql //Defined Mutation type
            input.gql // Defined Input type
          index.js // Exports resolvers, schema, userList, userModel.js // Defind User class
          userList.js // Defind UserList class
        index.js //Import all models of GraphQL
        root.js //Export rootSchema
        rootSchema.gql Defined all Mutation & Query
      utils
      index.js
    index.js
    plugin.js
    server.js
  Dockerfile
  docker-compose.yml
  ```