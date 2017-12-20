import { Member, Team } from '../models'

const team = () => {
    const teams = [
        {
            name: 'AKB48'
        },
        {
            name: 'NMB48'
        },
        {
            name: 'SKE48'
        },
        {
            name: 'STU48'
        },
        {
            name: 'NGT48'
        },
        {
            name: 'HKT48'
        },
        {
            name: 'JKT48'
        },
        {
            name: 'MNL48'
        },
        {
            name: 'TPE48'
        },
        {
            name: 'BNK48'
        }
    ]

    teams.forEach(team => {
        Team.TeamClass.create(team)
    })
}

const member = () => {
    const teams = Team.TeamClass.findAll()
    const members = [

    ]
}
