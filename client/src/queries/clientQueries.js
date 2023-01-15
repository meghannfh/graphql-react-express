import { gql } from '@apollo/client'

//this lets us access the graphql query
const GET_CLIENTS = gql`
  query GetClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;

export { GET_CLIENTS };