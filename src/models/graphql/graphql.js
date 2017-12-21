import { makeExecutableSchema } from 'graphql-tools'
import QueryTypeDefs from './graphql.query'
import MutationTypeDefs from './graphql.mutation'
import { TeamResolver, TeamTypeDefs } from '../team'
import { MemberResolver, MemberTypeDefs } from '../member'
import { DateResolver, DateTypeDefs } from '../date'

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
    Team: TeamResolver.Resolver,
    DateTime: DateResolver
}

export default makeExecutableSchema({
    typeDefs: [
        SchemaDefinition,
        DateTypeDefs,
        MemberTypeDefs,
        TeamTypeDefs,
        QueryTypeDefs,
        MutationTypeDefs
    ],
    resolvers: GraphQLResolver
})
