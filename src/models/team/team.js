import mongoose from 'mongoose'
import prepare from '../../utils/prepare'
import TeamSchema from './team.schema'

const TeamModel = mongoose.model('Team', TeamSchema)

export default class Team {
    static getModel () {
        return TeamModel
    }

    static create (data) {
        const team = new TeamModel(data)
        try {
            const newTeam = team.save()
            return {
                success: true,
                team: newTeam,
                message: 'Create new team successfully.'
            }
        } catch (err) {
            console.log(err)
            return {
                success: false,
                team: null,
                message: 'Team name has already choosen.'
            }
        }
    }

    static findById (_id) {
        return prepare(TeamModel.findById(_id))
    }

    static findAll () {
        return (TeamModel.find({})).map(prepare)
    }

    static update (teamId, updateData) {
        return TeamModel.findByIdAndUpdate(teamId, updateData, { new: true })
    }
}
