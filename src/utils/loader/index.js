import { MemberClass } from '../../models/member'
import { TeamClass } from '../../models/team'
import { loader } from './loader'

export default {
    memberLoader: loader(MemberClass),
    teamLoader: loader(TeamClass)
}
