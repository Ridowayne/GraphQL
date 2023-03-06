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
const Mutation = new GraphQLObjectType({
  name: "mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      async resolve(parent, args) {
        // const newUser = await Usermodel.create(args)
        return {
          status: "success",
          message: "Successfully created",
          //   data: newUser,
        };
      },
    },
  },
});

exports.schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
