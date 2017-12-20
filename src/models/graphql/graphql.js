import { makeExecutableSchema } from 'graphql-tools'
import QueryTypeDefs from './graphql.query'
import MutationTypeDefs from './graphql.mutation'
import { TeamResolver, TeamTypeDefs } from '../team'
import { MemberResolver, MemberTypeDefs } from '../member'

const SchemaDefinition = `
    schema {
        query: Query
        mutation: Mutation
    }
`

const GraphQLResolver = {
    Query: {
        ...MemberResolver.Query,
        ...TeamResolver.Query
    },
    Mutation: {
        ...MemberResolver.Mutation,
        ...TeamResolver.Mutation
    },
    Member: MemberResolver.Resolver,
    Team: TeamResolver.Resolver
}

export default makeExecutableSchema({
    typeDefs: [
        SchemaDefinition,
        MemberTypeDefs,
        TeamTypeDefs,
        QueryTypeDefs,
        MutationTypeDefs
    ],
    resolvers: GraphQLResolver
})
