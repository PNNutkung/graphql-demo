import { MemberClass } from '.'
import { TeamClass } from '../team'

const resolvers = {
    Query: {
        member: (root, { _id }) => {
            return MemberClass.findById(_id)
        },
        members: () => {
            return MemberClass.findAll()
        }
    },
    Resolver: {
        team: ({team}, _args, {loader}) => {
            // return TeamClass.findById(team)
            return loader.teamLoader.load(team)
        }
    },
    Mutation: {
        createMember: (root, { input }) => {
            return MemberClass.create(input)
        },
        updateMember: (root, { _id, input }) => {
            return MemberClass.update(_id, input)
        }
    }
}

export default resolvers
