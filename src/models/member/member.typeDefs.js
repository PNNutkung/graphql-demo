const typeDefs = `
    type MemberWithMessage {
        message: String
        errorMessage: String
        member: Member
    }
    input MemberInput {
        picture: String
        romajiFirstName: String
        romajilastName: String
        firstName: String
        lastName: String
        nickname: String
        bloodType: String
        height: Float
        generation: Int
        team: String
    }
    type Member {
        _id: String
        picture: String
        romajiFirstName: String
        romajilastName: String
        firstName: String
        lastName: String
        nickname: String
        bloodType: String
        height: Float
        generation: Int
        team: Team
    }
`
export default typeDefs
