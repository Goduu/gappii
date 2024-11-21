import neo4j from "neo4j-driver"
import { startServerAndCreateNextHandler } from "@as-integrations/next"
import { ApolloServer } from "@apollo/server"
import { Neo4jGraphQL } from "@neo4j/graphql"
import { NextRequest } from "next/server"
import { typeDefs } from "@/ogm-resolver/schema"

// Initialize Neo4j Driver
const driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "hn123456"))

// Define GraphQL schema with Neo4j @relationship directive

// Use Neo4jGraphQL to generate schema and resolvers
const neo4jGraphQL = new Neo4jGraphQL({ typeDefs: typeDefs, driver })

const schema = await neo4jGraphQL.getSchema()

// await neo4jGraphQL.assertIndexesAndConstraints();
// Create ApolloServer instance with the generated schema
const server = new ApolloServer({
  schema,
})

// Use the handler to handle requests in Next.js
const handler = startServerAndCreateNextHandler<NextRequest>(server)

export async function GET(request: NextRequest) {
  return handler(request)
}

export async function POST(request: NextRequest) {
  return handler(request)
}
