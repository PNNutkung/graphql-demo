export const query = `
    type Query {
        teams: [Team],
        team: (_id: String): Team
    }
`
