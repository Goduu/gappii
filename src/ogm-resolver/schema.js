export const typeDefs = `#graphql
type Topic @node {
  id: ID @id
  title: String! @unique
}

type Lesson @node {
  id: ID @id @unique
  title: String!
  level: Int!
  isPublic: Boolean! # Tracks public/private status
  createdAt: DateTime!
  hasTopic: Topic! @relationship(type: "HAS_TOPIC", direction: OUT)
  hasSubtopic: Topic! @relationship(type: "HAS_SUBTOPIC", direction: OUT)
  hasKeywords: [Keyword!]! @relationship(type: "HAS_KEYWORD", direction: OUT)
  hasActivities: [Activity!]! @relationship(type: "HAS_ACTIVITY", direction: OUT)
  wasReacted: [User!]! @relationship(type: "REACTED", properties: "Reacted", direction: IN)
  wasReactedCount: Int! @cypher(statement: "MATCH (this)-[:REACTED]-(u:User) RETURN COUNT(u) AS wasReactedCount",columnName: "wasReactedCount")
  wasCompleted: [User!]! @relationship(type: "COMPLETED_LESSON", properties: "LessonCompletion", direction: IN)
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
  parent: Collection @relationship(type: "HAS_SUBCOLLECTION", direction: OUT)
  hasLessons: [Lesson!]! @relationship(type: "HAS_LESSON", direction: OUT)
}

type Activity @node {
  id: ID @id
  order: Int!
  description: String!
  options: [String!]!
  answer: String!
  comment: String!
  reportCount: Int # Tracks the number of reports
  wasAttempted: [User!]! @relationship(type: "ATTEMPTED", properties: "ActivityAttempt", direction: IN)
}

type User @node {
  id: ID! @id
  clerkId: String! @unique
  email: String! @unique
  hasLessons: [Lesson!]! @relationship(type: "HAS_LESSON",properties: "HasLesson", direction: OUT)
  hasCollections: [Collection!]! @relationship(type: "HAS_COLLECTION", direction: OUT)
  reactedToLessons: [Lesson!]! @relationship(type: "REACTED", properties: "Reacted", direction: OUT)
  reportedActivities: [Activity!]! @relationship(type: "REPORTED", direction: OUT)
  attemptedActivities: [Activity!]! @relationship(type: "ATTEMPTED", properties: "ActivityAttempt", direction: OUT)
  completedLessons: [Lesson!]! @relationship(type: "COMPLETED_LESSON", properties: "LessonCompletion", direction: OUT)
  dailyActivityCount: Int! @cypher(
    statement: """
    MATCH (this)-[attempt:ATTEMPTED]->(activity:Activity)
    WHERE date(attempt.attemptedAt) = date()
    RETURN COUNT(attempt) AS dailyActivityCount
    """,
    columnName: "dailyActivityCount"
  )
  weeklyCorrectAnswers: Int! @cypher(
    statement: """
    MATCH (this)-[attempt:ATTEMPTED]->(activity:Activity)
    WHERE date(attempt.attemptedAt) > date() - duration('P7D')
    AND attempt.isCorrect = true
    RETURN COUNT(attempt) AS weeklyCorrectAnswers
    """,
    columnName: "weeklyCorrectAnswers"
  )
}

type HasLesson @relationshipProperties {
  type: String! # "CREATED", "COPIED", "ADDED"
  hasAt: DateTime!
}

type Reacted @relationshipProperties {
  type: String! # "Like", "Crown"
  reactedAt: DateTime!
}

type ActivityAttempt @relationshipProperties {
  attemptedAt: DateTime!
  isCorrect: Boolean!
  timeTaken: Int # Time taken in seconds
}

type LessonCompletion @relationshipProperties {
  completedAt: DateTime!
  score: Float! # Percentage of correct answers
  timeTaken: Int! # Total time taken in seconds
}
`;


