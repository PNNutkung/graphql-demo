import mongoose from 'mongoose'
import prepare from '../../utils/prepare'
import MemberSchema from './member.schema'
import { TeamClass } from '../team'

const MemberModel = mongoose.model('Member', MemberSchema)

export default class Member {
    static getModel () {
        return MemberModel
    }

    static async create (data) {
        const member = new MemberModel(data)
        try {
            const newMember = member.save()
            TeamClass.addMemberToTeam(member._id, data.team)
            return {
                success: true,
                member: newMember,
                message: 'Create new member successfully.'
            }
        } catch (err) {
            console.log(err)
            return {
                success: false,
                member: null,
                message: 'Create member failed',
                errorMessage: err
            }
        }
    }

    static async findById (_id) {
        return prepare(await MemberModel.findById(_id))
    }

    static async findAll () {
        return (await MemberModel.find({})).map(prepare)
    }

    static async update (memberId, updateData) {
        return MemberModel.findByIdAndUpdate(memberId, updateData, { new: true })
    }
}
