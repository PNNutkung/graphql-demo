const query = `
    type Query {
        teams: [Team]
        team(_id: String): Team
        members: [Member]
        member(_id: String): Member
    }
`

export default query
