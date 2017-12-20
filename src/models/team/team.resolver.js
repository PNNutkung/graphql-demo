import {Team} from '.'
import {Member} from '../member'

export const resolvers = {
    Query: {
        team: (root, {_id}) => {
            return Team.findById(_id)
        },
        teams: () => {
            return Team.findAll()
        }
    },
    Resolver: {
        member: ({member}, _args, {loaders}) => {
            return Member.findById(member)
        }
    },
    Mutation: {
        createTeam: (root, {input}) => {
            return Team.create(input)
        },
        updateTeam: (root, {_id, input}) => {
            return Team.update(_id, input)
        }
    }
}
