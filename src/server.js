import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import GraphQLSchema from './models'

const PORT = 3000
const app = express()

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: GraphQLSchema }))
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(PORT)
