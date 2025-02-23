// neo4j.js
import neo4j, { Driver } from 'neo4j-driver';

declare global {
    var __neo4j__: Driver | undefined
}

const NEO4J_URI = process.env.NEO4J_URI!;
const NEO4J_USERNAME = process.env.NEO4J_USERNAME!;
const NEO4J_PASSWORD = process.env.NEO4J_PASSWORD!;

if (!NEO4J_URI || !NEO4J_USERNAME || !NEO4J_PASSWORD) {
    throw new Error(
        'Please define the NEO4J_* environment variables inside .env.local'
    );
}

let driver: Driver;

if (process.env.NODE_ENV === 'development') {
    // In development, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    if (!global.__neo4j__) {
        global.__neo4j__ = neo4j.driver(
            NEO4J_URI,
            neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD)
        );
    }
    driver = global.__neo4j__;
} else {
    // In production, it's best to not use a global variable.
    driver = neo4j.driver(
        NEO4J_URI,
        neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD)
    );
}

export default function getDriver() {
    return driver;
}