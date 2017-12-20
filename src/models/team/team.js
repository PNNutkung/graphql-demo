import mongoose from 'mongoose'
import prepare from '../../utils/prepare'
import TeamSchema from './team.schema'

const TeamModel = mongoose.model('Team', TeamSchema)

export default class Team {
    static getModel () {
        return TeamModel
    }

    static async create (data) {
        try {
            const team = await new TeamModel(data)
            const newTeam = await team.save()
            return {
                success: true,
                team: newTeam,
                message: 'Create new team successfully.'
            }
        } catch (err) {
            switch (err.code) {
            case 11000:
                return {
                    success: false,
                    team: null,
                    message: 'This team name already in use.',
                    errorMessage: err
                }
            default:
                return {
                    success: false,
                    team: null,
                    message: 'Create team failed.',
                    errorMessage: err
                }
            }
        }
    }

    static async findById (_id) {
        return prepare(await TeamModel.findById(_id))
    }

    static async findAll () {
        return (await TeamModel.find({})).map(prepare)
    }

    static async update (teamId, updateData) {
        return TeamModel.findByIdAndUpdate(teamId, updateData, { new: true })
    }

    static async addMemberToTeam (memberId, teamId) {
        await TeamModel.update({
            _id: teamId
        },
        {
            $addToSet: {
                members: memberId
            }
        })
    }
}
