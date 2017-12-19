export const typeDefs = `
    type TeamInput {
        name: String
    }
    type Team {
        name: String
    }
    type Query {
        teams: [Team],
        team: (_id: String): Team
    }
    type Mutation {
        createTeam(input: TeamInput)
        updateTeam()
    }
`
