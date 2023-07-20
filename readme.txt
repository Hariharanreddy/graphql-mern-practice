Schema JS

This file is a basic implementation of a GraphQL
 schema in Node.js using the graphql-js library. It defines a simple
  schema with one GraphQLObjectType called "ClientType" and a RootQuery.

The ClientType represents the structure of a "Client" object, which 
has properties such as id, name, email, and phone. These properties are 
defined using GraphQLString and GraphQLID types from the graphql-js library.

The RootQuery is the entry point for querying the GraphQL schema.
 It contains a single field called "client", which is of type ClientType.
  The "client" field takes an argument "id" of type GraphQLID, which is used
   to query a specific client by their ID.

The resolve function inside the "client" field is responsible for fetching
 the data for the client. In this example, it uses the array method `find`
  to search for a client in the `clients` array (which is imported from 
  "../sampleData.js") that matches the provided ID. The resolved client 
  object is then returned.

Finally, the code exports a new GraphQLSchema instance, which is created 
by passing the RootQuery as the configuration for the query field.

Overall, this code sets up a basic GraphQL schema with a ClientType
 and a RootQuery that allows querying clients by their ID.