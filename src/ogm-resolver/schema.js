export const typeDefs = `#graphql
type Topic @node {
  id: ID @id
  title: String! @unique
}

type Lesson @node {
  id: ID @id @unique
  title: String! @unique
  level: Int!
  createdAt: DateTime!
  hasTopic: Topic! 
    @relationship(type: "HAS_TOPIC", direction: OUT)
  hasSubtopic: Topic! 
    @relationship(type: "HAS_SUBTOPIC", direction: OUT)
  hasActivities: [Activity!]!
    @relationship(type: "HAS_ACTIVITY", direction: OUT)
  wasReacted: [User!]!
    @relationship(type: "REACTED", properties: "Reacted", direction: IN)
  hasKeywords: [Keyword!]!
    @relationship(type: "HAS_KEYWORD", direction: OUT)
  reactedCount: Int! 
    @cypher(statement: "RETURN count([(this)<-[:REACTED]-() | 0]) AS reactedCount", columnName: "reactedCount")
  hasLessonCount: Int! 
    @cypher(statement: "RETURN count([(this)<-[:HAS_LESSON]-() | 0]) AS hasLessonCount", columnName: "hasLessonCount")
}

type Keyword @node {
  id: ID @id
  name: String! @unique
}

type Collection @node {
  id: ID @id
  title: String!
  icon: String!
  color: String!
  hasLessons: [Lesson!]! @relationship(type: "HAS_LESSON", direction: OUT)
}

type Activity @node {
  id: ID @id
  description: String!
  options: [String!]!
  answer: String!
  comment: String!
}

type User @node {
  id: ID! @id
  clerkId: String! @unique
  email: String! @unique
  hasLessons: [Lesson!]! @relationship(type: "HAS_LESSON", direction: OUT)
  hasCollections: [Collection!]! @relationship(type: "HAS_COLLECTION", direction: OUT)
  reactedToLessons: [Lesson!]! @relationship(type: "REACTED", properties: "Reacted", direction: OUT)
  reportedActivities: [Activity!]! @relationship(type: "REPORTED", direction: OUT)
}

type Reacted @relationshipProperties {
  type: String!
}
`;


