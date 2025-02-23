import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { Neo4jAdapter } from "@auth/neo4j-adapter"
import getDriver from "./neo4j"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
    })],
    adapter: Neo4jAdapter(getDriver().session()),
    session: {
        strategy: "database"
    },
    callbacks: {
        authorized: async ({ auth }) => {
            // Logged in users are authenticated, otherwise redirect to login page
            return !!auth
        },
    },
})