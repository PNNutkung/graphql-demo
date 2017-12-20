const typeDefs = `
    input TeamInput {
        name: String
        member: [String]
    }
    type TeamWithMessage {
        message: String
        errorMessage: String
        team: Team
    }
    type Team {
        _id: String
        name: String
        member: [Member]
    }
`

export default typeDefs
