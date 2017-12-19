import Team from '.'

export const resolvers = {
    Query: {
        team: (root, {_id}) => {
            return Team.findById(_id)
        },
        teams: () => {
            return Team.findAll()
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
