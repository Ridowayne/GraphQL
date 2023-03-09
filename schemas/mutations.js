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

module.exports = Mutation;
