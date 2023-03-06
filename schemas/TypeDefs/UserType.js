const {
  graphql,
  GraphQLObjectType,

  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
} = require("graphql");

const UserType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    Password: { type: GraphQLString },
    phoneNumber: { type: GraphQLInt },
  }),
});
module.exports = UserType;
