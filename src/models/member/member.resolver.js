import {Member} from '.'
import {Team} from '../team'

const resolvers = {
    Query: {
        member: (root, { _id }) => {
            return Member.findById(_id)
        },
        members: () => {
            return Member.findAll()
        }
    },
    Resolver: {
        team: ({team}, _args, {loader}) => {
            return Team.findById(team)
            // return loader.teamLoader.load(team)
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

export default resolvers
