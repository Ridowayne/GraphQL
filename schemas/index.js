const {
  graphql,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require("graphql");
const UserType = require("./TypeDefs/UserType");

// const model =

const RootQuery = require("./query");
const Mutation = require("./mutations");

exports.schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
