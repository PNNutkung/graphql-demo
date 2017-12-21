import { MemberClass } from '../models/member'
import { TeamClass } from '../models/team'

const team = async () => {
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
        TeamClass.create(team)
    })
}

const member = async () => {
    const teamModel = await TeamClass.getModel()
    try {
        const bnk48 = await teamModel.findOne({ name: 'BNK48' })
        const akb48 = await teamModel.findOne({ name: 'AKB48' })
        const jkt48 = await teamModel.findOne({ name: 'JKT48' })
        if (bnk48 && bnk48.members.length === 0) {
            const members = [
                {
                    picture: 'http://stage48.net/wiki/images/3/38/CherprangAreekulBNK2017.jpg',
                    romajiFirstName: 'Cherprang',
                    romajilastName: 'Areekul',
                    firstName: 'เฌอปราง',
                    lastName: 'อารีย์กุล',
                    nickname: 'Cherprang',
                    bloodType: 'B',
                    height: '160',
                    generation: 1,
                    team: bnk48._id,
                    birthDate: new Date(1996, 4, 2)
                },
                {
                    picture: 'http://stage48.net/wiki/images/6/69/JiradapaIntajakBNK2017.jpg',
                    romajiFirstName: 'Jiradapa',
                    romajilastName: 'Intajak',
                    firstName: 'จิรดาภา',
                    lastName: 'อินทจักร',
                    nickname: 'Pupe',
                    bloodType: 'B',
                    height: '160',
                    generation: 1,
                    team: bnk48._id,
                    birthDate: new Date(1998, 0, 18)
                },
                {
                    picture: 'http://stage48.net/wiki/images/6/6d/JetsupaKruetangBNK2017.jpg',
                    romajiFirstName: 'Jetsupa',
                    romajilastName: 'Kruetang',
                    firstName: 'เจตสุภา',
                    lastName: 'เครือแตง',
                    nickname: 'Jan',
                    bloodType: 'O',
                    height: '162',
                    generation: 1,
                    team: bnk48._id,
                    birthDate: new Date(1994, 3, 8)
                },
                {
                    picture: 'http://stage48.net/wiki/images/8/8c/MioriOhkuboBNK2017.jpg',
                    romajiFirstName: 'Miori',
                    romajilastName: 'Ohkubo',
                    firstName: '美織',
                    lastName: '大久保',
                    nickname: 'Miiko',
                    bloodType: 'O',
                    height: '153',
                    generation: 1,
                    team: bnk48._id,
                    birthDate: new Date(1998, 8, 30)
                },
                {
                    picture: 'http://stage48.net/wiki/images/7/7d/WarattayaDeesomlertBNK2017.jpg',
                    romajiFirstName: 'Warattaya',
                    romajilastName: 'Deesomlert',
                    firstName: 'วรัทยา',
                    lastName: 'ดีสมเลิศ',
                    nickname: 'Kaimook',
                    bloodType: 'O',
                    height: '153',
                    generation: 1,
                    team: bnk48._id,
                    birthDate: new Date(1997, 7, 27)
                },
                {
                    picture: 'http://stage48.net/wiki/images/2/28/JennisOprasertBNK2017.jpg',
                    romajiFirstName: 'Jennis',
                    romajilastName: 'Oprasert',
                    firstName: 'เจนนิษฐ์',
                    lastName: 'โอ่ประเสริฐ',
                    nickname: 'Jennis',
                    bloodType: 'O',
                    height: '161',
                    generation: 1,
                    team: bnk48._id,
                    birthDate: new Date(2000, 6, 4)
                },
                {
                    picture: 'http://stage48.net/wiki/images/8/86/PraewaSuthamphongBNK2017.jpg',
                    romajiFirstName: 'Praewa',
                    romajilastName: 'Suthamphong',
                    firstName: 'แพรวา',
                    lastName: 'สุธรรมพงษ์',
                    nickname: 'Music',
                    bloodType: 'B',
                    height: '164',
                    generation: 1,
                    team: bnk48._id,
                    birthDate: new Date(2001, 1, 24)
                },
                {
                    picture: 'http://stage48.net/wiki/images/6/64/PunsikornTiyakornBNK2017.jpg',
                    romajiFirstName: 'Punsikorn',
                    romajilastName: 'Tiyakorn',
                    firstName: 'ปัญสิกรณ์',
                    lastName: 'ติยะกร',
                    nickname: 'Pun',
                    bloodType: 'A',
                    height: '166',
                    generation: 1,
                    team: bnk48._id,
                    birthDate: new Date(2000, 10, 9)
                },
                {
                    picture: 'http://stage48.net/wiki/images/2/2b/PatchananJiajirachoteBNK2017.jpg',
                    romajiFirstName: 'Patchanan',
                    romajilastName: 'Jiajirachote',
                    firstName: 'พัศชนันท์',
                    lastName: 'เจียจิรโชติ',
                    nickname: 'Orn',
                    bloodType: 'O',
                    height: '164',
                    generation: 1,
                    team: bnk48._id,
                    birthDate: new Date(1997, 1, 3)
                },
                {
                    picture: 'http://stage48.net/wiki/images/4/4e/MinegishiMinamiK2017.jpg',
                    romajiFirstName: 'Minami',
                    romajilastName: 'Minegishi',
                    firstName: 'みなみ',
                    lastName: '峯岸',
                    nickname: 'Miichan (みぃちゃん)',
                    bloodType: 'B',
                    height: '158',
                    generation: 1,
                    team: akb48._id,
                    birthDate: new Date(1992, 10, 15)
                },
                {
                    picture: 'http://stage48.net/wiki/images/d/d3/WatanabeMayuB2017.jpg',
                    romajiFirstName: 'Mayu',
                    romajilastName: 'Watanabe',
                    firstName: '麻友',
                    lastName: '渡辺',
                    nickname: 'Mayuyu (まゆゆ)',
                    bloodType: 'A',
                    height: '156',
                    generation: 3,
                    team: akb48._id,
                    birthDate: new Date(1994, 2, 26)
                },
                {
                    picture: 'http://stage48.net/wiki/images/b/b9/KashiwagiYukiB2017.jpg',
                    romajiFirstName: 'Yuki',
                    romajilastName: 'Kashiwagi',
                    firstName: '由紀',
                    lastName: '柏木',
                    nickname: 'Yukirin (ゆきりん)',
                    bloodType: 'A',
                    height: '164',
                    generation: 3,
                    team: akb48._id,
                    birthDate: new Date(1991, 6, 15)
                },
                {
                    picture: 'http://stage48.net/wiki/images/0/02/Della2016.jpg',
                    romajiFirstName: 'Della',
                    romajilastName: 'Delila',
                    firstName: 'Della',
                    lastName: 'Delila',
                    nickname: 'Della',
                    bloodType: 'O',
                    height: '153',
                    generation: 2,
                    team: jkt48._id,
                    birthDate: new Date(1998, 10, 15)
                },
                {
                    picture: 'http://stage48.net/wiki/images/8/82/Michelle2016.jpg',
                    romajiFirstName: 'Michelle Christo ',
                    romajilastName: 'Kusnadi',
                    firstName: 'Michelle Christo ',
                    lastName: 'Kusnadi',
                    nickname: 'Michelle',
                    bloodType: 'O',
                    height: '152',
                    generation: 3,
                    team: jkt48._id,
                    birthDate: new Date(1999, 9, 28)
                }
            ]

            members.forEach(member => {
                MemberClass.create(member)
            })
        } else {
            console.log('Members have already created!')
        }
    } catch (err) {
        console.error(err)
    }
}

const create = () => {
    team()
    setTimeout(() => {
        member()
    },
    1000)
}

export default {
    create: create
}
