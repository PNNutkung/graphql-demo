import mongoose from 'mongoose'
import prepare from '../../utils/prepare'
import MemberSchema from './member.schema'

const MemberModel = mongoose.model('Member', MemberSchema)

export default class Member {
    static getModel () {
        return MemberModel
    }

    static create (data) {
        const member = new MemberModel(data)
        try {
            const newMember = member.save()
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

    static findById (_id) {
        return prepare(MemberModel.findById(_id))
    }

    static findAll () {
        return (MemberModel.find({})).map(prepare)
    }

    static update (memberId, updateData) {
        return MemberModel.findByIdAndUpdate(memberId, updateData, { new: true })
    }
}
