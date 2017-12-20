import { Schema } from 'mongoose'

const TeamSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    members: [{
        type: Schema.ObjectId,
        ref: 'Member'
    }]
})

export default TeamSchema
