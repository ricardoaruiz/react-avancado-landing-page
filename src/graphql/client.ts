import { GraphQLClient } from 'graphql-request'

// TODO: criar variável de ambiente para a url do backend
const client = new GraphQLClient('http://localhost:1337/graphql', {
  headers: {}
})

export default client
