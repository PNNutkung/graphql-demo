const mutation = `
    type Mutation {
        createTeam(input: TeamInput): TeamWithMessage
        updateTeam(_id: String, input: TeamInput): TeamWithMessage
        createMember(input: MemberInput): MemberWithMessage
        updateMember(_id: String, input: MemberInput): MemberWithMessage
    }
`

export default mutation
