import { makeExecutableSchema } from 'graphql-tools'
import QueryTypeDefs from './graphql.query'
import MutationTypeDefs from './graphql.mutation'
import Team from '../team'

const SchemaDefinition = `
    schema {
        query: Query
        mutation: Mutation
    }
`

const GraphQLResolver = {
    Query: {
        ...Team.Resolver.Query
    },
    Mutation: {
        ...Team.Resolver.Mutation
    }
}

export default makeExecutableSchema({
    typeDefs: [
        SchemaDefinition,
        Team.TypeDefs,
        QueryTypeDefs,
        MutationTypeDefs
    ],
    resolvers: GraphQLResolver
})
