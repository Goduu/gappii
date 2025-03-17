import { BaseCheckpointSaver } from "@langchain/langgraph";
import { Neo4jGraph } from "./neo4j";
import { RunnableConfig } from "@langchain/core/runnables";

/**
 * A Neo4jCheckpointer that provides checkpoint functionality for LangGraph workflows.
 * Implements BaseCheckpointSaver interface for storing workflow states in Neo4j.
 */
export class Neo4jCheckpointer implements BaseCheckpointSaver<any> {
  private graph: Neo4jGraph;

  // Required by BaseCheckpointSaver interface
  serde = {
    serialize: (obj: any) => JSON.stringify(obj),
    deserialize: (str: string) => JSON.parse(str),
    // Implement the required methods for SerializerProtocol
    dumpsTyped: (obj: any): [string, Uint8Array] => {
      const jsonStr = JSON.stringify(obj);
      const encoder = new TextEncoder();
      return ["json", encoder.encode(jsonStr)];
    },
    loadsTyped: (format: string, data: Uint8Array): any => {
      if (format !== "json") {
        throw new Error(`Unsupported format: ${format}`);
      }
      const decoder = new TextDecoder();
      const jsonStr = decoder.decode(data);
      return JSON.parse(jsonStr);
    }
  };

  constructor() {
    const neo4jGraph = Neo4jGraph.create();
    this.graph = neo4jGraph;
  }

  /**
   * Get a checkpoint by config
   */
  async get(config: RunnableConfig): Promise<any> {
    try {
      // Extract the checkpoint ID from the config
      const id = config.configurable?.checkpoint_id;
      if (!id) {
        return undefined;
      }

      const query = `
        MATCH (c:Checkpoint {id: $id})
        RETURN c.state as state, c.metadata as metadata
      `;
      
      const result = await this.graph.query(query, { id });
      
      if (!result || result.length === 0) {
        return undefined;
      }
      
      const state = result[0].state ? JSON.parse(result[0].state) : {};
      const metadata = result[0].metadata ? JSON.parse(result[0].metadata) : {};
      
      return {
        state,
        versions: metadata.versions || {},
        id: id as string
      };
    } catch (error) {
      console.error("Error retrieving checkpoint:", error);
      return undefined;
    }
  }

  /**
   * Get a checkpoint tuple by config
   */
  async getTuple(config: RunnableConfig): Promise<any> {
    try {
      // Extract the checkpoint ID from the config
      const id = config.configurable?.checkpoint_id;
      if (!id) {
        return undefined;
      }

      const query = `
        MATCH (c:Checkpoint {id: $id})
        RETURN c.state as state, c.metadata as metadata
      `;
      
      const result = await this.graph.query(query, { id });
      
      if (!result || result.length === 0) {
        return undefined;
      }
      
      const state = result[0].state ? JSON.parse(result[0].state) : {};
      const metadata = result[0].metadata ? JSON.parse(result[0].metadata) : {};
      
      const checkpoint = {
        state,
        versions: metadata.versions || {},
        id: id as string
      };
      
      return [config, checkpoint];
    } catch (error) {
      console.error("Error retrieving checkpoint tuple:", error);
      return undefined;
    }
  }

  /**
   * List all checkpoints
   */
  async *list(config: RunnableConfig, options?: any): AsyncGenerator<any, any, unknown> {
    try {
      const query = `
        MATCH (c:Checkpoint)
        RETURN c.id as id, c.state as state, c.metadata as metadata, c.updatedAt as updatedAt
        ORDER BY c.updatedAt DESC
      `;
      
      const result = await this.graph.query(query);
      
      if (!result || result.length === 0) {
        return;
      }
      
      for (const record of result) {
        const state = record.state ? JSON.parse(record.state) : {};
        const metadata = record.metadata ? JSON.parse(record.metadata) : {};
        
        const checkpoint = {
          state,
          versions: metadata.versions || {},
          id: record.id
        };
        
        yield [config, checkpoint];
      }
    } catch (error) {
      console.error("Error listing checkpoints:", error);
    }
  }

  /**
   * Save a checkpoint
   */
  async put(config: RunnableConfig, checkpoint: any, metadata: any, newVersions: any): Promise<RunnableConfig> {
    try {
      // Ensure checkpoint has an id and state
      if (!checkpoint) {
        console.warn("No checkpoint provided to put method");
        return config;
      }
      
      const checkpointId = checkpoint.id || `checkpoint_${Date.now()}`;
      const checkpointState = checkpoint.state || {};
      
      const query = `
        MERGE (c:Checkpoint {id: $checkpointId})
        SET c.state = $checkpointState,
            c.metadata = $metadata,
            c.updatedAt = datetime()
      `;
      
      await this.graph.query(query, { 
        checkpointId, 
        checkpointState: JSON.stringify(checkpointState),
        metadata: JSON.stringify({
          ...(metadata || {}),
          versions: newVersions || {}
        })
      });
      
      return config;
    } catch (error) {
      console.error("Error saving checkpoint:", error);
      throw error;
    }
  }

  /**
   * Save checkpoint writes
   */
  async putWrites(config: RunnableConfig, writes: any[], taskId: string): Promise<void> {
    try {
      if (!writes || !Array.isArray(writes) || writes.length === 0) {
        console.warn("No writes provided to putWrites method");
        return;
      }
      
      // Process each write operation
      for (const write of writes) {
        if (!Array.isArray(write) || write.length < 1) {
          console.warn("Invalid write format:", write);
          continue;
        }
        
        const id = write[0];
        const checkpoint = write.length > 1 ? write[1] : {};
        const checkpointState = checkpoint?.state || {};
        const metadata = write.length > 2 ? write[2] : {};
        const newVersions = write.length > 3 ? write[3] : {};
        
        const query = `
          MERGE (c:Checkpoint {id: $id})
          SET c.state = $checkpointState,
              c.metadata = $metadata,
              c.updatedAt = datetime(),
              c.taskId = $taskId
        `;
        
        await this.graph.query(query, { 
          id, 
          checkpointState: JSON.stringify(checkpointState),
          metadata: JSON.stringify({
            ...(metadata || {}),
            versions: newVersions || {}
          }),
          taskId
        });
      }
    } catch (error) {
      console.error("Error saving checkpoint writes:", error);
      throw error;
    }
  }

  /**
   * Get the next version for a channel
   */
  getNextVersion(current: number | undefined, _channel: any): number {
    try {
      if (!_channel) {
        console.warn("No channel provided to getNextVersion");
        return (current || 0) + 1;
      }
      
      // Simply increment the current version or start at 1
      return (current || 0) + 1;
    } catch (error) {
      console.error("Error getting next version:", error);
      return 1; // Default to 1 if there's an error
    }
  }

  /**
   * Delete a checkpoint
   */
  async delete(id: string): Promise<void> {
    try {
      if (!id) {
        console.warn("No ID provided for delete operation");
        return;
      }
      
      const query = `
        MATCH (c:Checkpoint {id: $id})
        DELETE c
      `;
      
      await this.graph.query(query, { id });
    } catch (error) {
      console.error("Error deleting checkpoint:", error);
      throw error;
    }
  }
}