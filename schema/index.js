export const typeDefs = `#graphql
  type Query {
    apiStatus: ApiStatus
  }

  type ApiStatus {
    status: String
    code: Int
  }

  type Mutation {
    createUser(input: UserInput): User
  }

  input UserInput {
    firstName: String
    lastName: String
    email: String
    password: String
  }

  type User {
    firstName: String
    lastName: String
  }

  
`;
