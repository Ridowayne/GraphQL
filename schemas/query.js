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

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      args: { id: { type: GraphQLInt } },
      async resolve(parent, args) {
        // const userData = await UserModel.find();
        return userData;
      },
    },
  },
});
module.exports = RootQuery;
