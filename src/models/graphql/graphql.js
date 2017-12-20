import { makeExecutableSchema } from 'graphql-tools'
import QueryTypeDefs from './graphql.query'
import MutationTypeDefs from './graphql.mutation'
import Team from '../team'
import Member from '../member'

const SchemaDefinition = `
    schema {
        query: Query
        mutation: Mutation
    }
`

const GraphQLResolver = {
    Query: {
        ...Member.Resolver.Query,
        ...Team.Resolver.Query
    },
    Mutation: {
        ...Member.Resolver.Mutation,
        ...Team.Resolver.Mutation
    },
    Member: Member.Resolver.Resolver,
    Team: Team.Resolver.Resolver
}

export default makeExecutableSchema({
    typeDefs: [
        SchemaDefinition,
        Member.TypeDefs,
        Team.TypeDefs,
        QueryTypeDefs,
        MutationTypeDefs
    ],
    resolvers: GraphQLResolver
})
