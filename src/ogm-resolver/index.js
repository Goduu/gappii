import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { Neo4jGraphQL } from "@neo4j/graphql"
import pkg from "@neo4j/graphql-ogm"
const { OGM, generate } = pkg
import neo4j from "neo4j-driver"
import { typeDefs } from "./schema.js"

// const driver = neo4j.driver("neo4j://localhost:7687", neo4j.auth.basic("neo4j", "gapiineo4j123@!top"))
const driver = neo4j.driver("neo4j://localhost:7687", neo4j.auth.basic("neo4j", "TxkDIMw0VulE7O"))

export const ogm = new OGM({ typeDefs, driver })

const resolvers = {
}

const neoSchema = new Neo4jGraphQL({
  typeDefs,
  driver,
  resolvers,
  features: {
    authorization: {
      key: "secret",
    },
  },
})

async function main() {
  try {
    const outFile = "ogm-types.ts"

    await generate({
      ogm,
      outFile,
    })

    console.log("Types Generated")

  } catch (error) {
    console.log("error", error)
  }
  await ogm.init()

  const server = new ApolloServer({
    schema: await neoSchema.getSchema(),
  })

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req }) => ({
      token: req.headers.authorization,
    }),
  })

  console.log(`🚀 Server ready at ${url}`)
}

main()
