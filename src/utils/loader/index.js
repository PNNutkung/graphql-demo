import Member from '../../models/member'
import Team from '../../models/team'
import { loader } from './loader'

export default {
    memberLoader: loader(Member),
    teamLoader: loader(Team)
}
