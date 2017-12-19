import { Schema } from 'mongoose'

const TeamSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    }
})

export default TeamSchema
