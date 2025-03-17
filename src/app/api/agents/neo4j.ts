import { Driver, Session, auth } from 'neo4j-driver';
import neo4j from 'neo4j-driver';

/**
 * Neo4jGraph provides a simplified interface for interacting with Neo4j.
 */
export class Neo4jGraph {
  private driver: Driver;
  private uri: string;
  private username: string;
  private password: string;

  constructor(uri: string, username: string, password: string) {
    this.uri = uri;
    this.username = username;
    this.password = password;
    this.driver = neo4j.driver(
      uri,
      auth.basic(username, password),
      { disableLosslessIntegers: true }
    );
  }

  /**
   * Execute a Cypher query with parameters
   */
  async query(cypher: string, params: Record<string, any> = {}): Promise<any[]> {
    const session: Session = this.driver.session();
    try {
      const result = await session.run(cypher, params);
      return result.records.map(record => {
        // Convert Neo4j record to plain object
        return record.toObject();
      });
    } finally {
      await session.close();
    }
  }

  /**
   * Close the Neo4j driver connection
   */
  async close(): Promise<void> {
    await this.driver.close();
  }

  /**
   * Create a Neo4jGraph instance with environment variables
   */
  static create(): Neo4jGraph {
    const uri = process.env.NEO4J_URI || 'bolt://localhost:7687';
    const username = process.env.NEO4J_USERNAME || 'neo4j';
    const password = process.env.NEO4J_PASSWORD || '';
    
    if (!password) {
      console.warn('Neo4j password not set in environment variables');
    }
    
    return new Neo4jGraph(uri, username, password);
  }
} 