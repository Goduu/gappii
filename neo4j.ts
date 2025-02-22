// neo4j.js
import neo4j, { Driver } from 'neo4j-driver';
let driver: Driver;

export default function getDriver() {
    if (!driver) {
        if (!process.env.NEO4J_URI || !process.env.NEO4J_USERNAME || !process.env.NEO4J_PASSWORD) {
            throw new Error('Missing NEO4J environment variables')
        }

        driver = driver = neo4j.driver(
            process.env.NEO4J_URI,
            neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD)
        )
    }
    return driver;
}