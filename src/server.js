import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import GraphQLSchema from './models'
import { DB, loader, staticData } from './utils'

const PORT = 3000
const app = express()

app.use('/graphql', bodyParser.json(), graphqlExpress(async req => {
    return {
        schema: GraphQLSchema,
        context: {
            loader
        }
    }
}))
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

DB.connect()
setTimeout(() => { staticData.create() }, 2000)

app.listen(PORT)
