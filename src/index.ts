import 'dotenv/config'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from './schema'
import { resolvers } from './resolvers'

const PORT = Number(process.env.PORT)

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
  })
  console.log(`Server ready at ${url}`)
}

startServer().catch((err) => {
  console.error(err)
})
