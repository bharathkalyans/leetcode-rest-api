export const resolvers = {
  Query: {
    apiStatus: () => {
      return { status: "The API is working!", code: 404 };
    },
  },
  Mutation: {
    createUser: (parent, args, context, info) => {
      return {
        firstName: args.input.firstName,
        lastName: args.input.lastName,
      };
    },
  },
};
