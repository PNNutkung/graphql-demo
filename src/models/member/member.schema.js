import { Schema } from 'mongoose'

const MemberSchema = new Schema({
    picture: {
        type: String
    },
    romajiFirstName: {
        type: String,
        required: true
    },
    romajilastName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    bloodType: {
        type: String,
        required: true
    },
    height: {
        type: Number
    },
    generation: {
        type: Number
    },
    team: {
        type: Schema.ObjectId,
        ref: 'Team'
    }
})

export default MemberSchema
