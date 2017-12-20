import { TeamClass } from '.'
import { MemberClass } from '../member'

const resolvers = {
    Query: {
        team: (root, {_id}) => {
            return TeamClass.findById(_id)
        },
        teams: () => {
            return TeamClass.findAll()
        }
    },
    Resolver: {
        members: ({members}, _args, {loader}) => {
            return members.map(member => MemberClass.findById(member))
            // return loader.memberLoader.loadMany(members)
        }
    },
    Mutation: {
        createTeam: (root, {input}) => {
            return TeamClass.create(input)
        },
        updateTeam: (root, {_id, input}) => {
            return TeamClass.update(_id, input)
        }
    }
}

export default resolvers
