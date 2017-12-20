import {Member} from '.'
import {Team} from '../team'

export const resolvers = {
    Query: {
        member: (root, { _id }) => {
            return Member.findById(_id)
        },
        members: () => {
            return Member.findAll()
        }
    },
    Resolver: {
        team: ({team}, _args, {loaders}) => {
            return Team.findById(team)
        }
    },
    Mutation: {
        createMember: (root, { input }) => {
            return Member.create(input)
        },
        updateMember: (root, { _id, input }) => {
            return Member.update(_id, input)
        }
    }
}
