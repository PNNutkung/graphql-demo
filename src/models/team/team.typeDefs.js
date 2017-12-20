const typeDefs = `
    input TeamInput {
        name: String
        members: [String]
    }
    type TeamWithMessage {
        message: String
        errorMessage: String
        team: Team
    }
    type Team {
        _id: String
        name: String
        members: [Member]
    }
`

export default typeDefs
