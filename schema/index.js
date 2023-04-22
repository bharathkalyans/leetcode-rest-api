export const typeDefs = `#graphql
  type Query {
    apiStatus: ApiStatus
    myUsers: [MyUser]
  }

  type ApiStatus {
    status: String
    code: Int
  }

  type MyUser {
    name: String
    age: Int
    married: Boolean
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
