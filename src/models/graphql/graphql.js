import Team from '../team'
import { makeExecutableSchema } from 'graphql-tools'

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
        Team.TypeDefs
    ],
    resolvers: GraphQLResolver
})
