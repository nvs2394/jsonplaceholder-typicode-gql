# Jsonplaceholder-typicode-gql
Convert RestAPI to GraphQL from https://jsonplaceholder.typicode.com 

To https://jsonplaceholder-typicode.herokuapp.com/graphiql

### GraphQL layer that integrates existing systems
  ```
  Another major use case for GraphQL is the integration of multiple existing systems behind a single, coherent GraphQL API. This is particularly compelling for companies with legacy infrastructures and many different APIs that have grown over years and now impose a high maintenance burden. One major problem with these legacy systems is that they make it practically impossible to build innovative products that need access to multiple systems.

  In that context, GraphQL can be used to unify these existing systems and hide their complexity behind a nice GraphQL API. This way, new client applications can be developed that simply talk to the GraphQL server to fetch the data they need. The GraphQL server is then responsible for fetching the data from the existing systems and package it up in the GraphQL response format.

  Just like in the previous architecture where the GraphQL server didn’t care about the type of database being used, this time it doesn’t care about the data sources that it needs to fetch the data that’s needed to resolve a query.
  ```
  Source from: https://www.howtographql.com/basics/3-big-picture/

  ![alt text](https://i.imgur.com/168FvP4.png)

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