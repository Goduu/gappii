
const typeDefs = `#graphql
type Topic @node {
  id: ID @id
  title: String! @unique(constraintName: "TopicTitleUnique")
}


type Lesson @fulltext(indexes: [{ indexName: "LessonTitle", fields: ["title"] }]) @node {
  id: ID @id
  title: String!
  level: Int!
  isPublic: Boolean! # Tracks public/private status
  createdAt: DateTime!
  language: String!
  hasTopic: Topic! @relationship(type: "HAS_TOPIC", direction: OUT)
  hasSubtopic: Topic! @relationship(type: "HAS_SUBTOPIC", direction: OUT)
  hasKeywords: [Keyword!]! @relationship(type: "HAS_KEYWORD", direction: OUT)
  hasActivities: [Activity!]! @relationship(type: "HAS_ACTIVITY", direction: OUT)
  wasReacted: [User!]! @relationship(type: "REACTED", properties: "Reacted", direction: IN)
  wasReactedCount: Int! @cypher(statement: "MATCH (this)-[:REACTED]-(u:User) RETURN COUNT(u) AS wasReactedCount", columnName: "wasReactedCount")
  wasAttempted: [User!]! @relationship(type: "ATTEMPTED_LESSON", direction: IN)
}

type Keyword @node {
  id: ID @id
  name: String! @unique(constraintName: "KeywordTitleUnique")
}

type Activity @node {
  id: ID @id
  order: Int!
  description: String!
  options: [String!]!
  answer: String!
  comment: String!
  mermaid: String
  reportCount: Int # Tracks the number of reports
}

type Streak @node {
  id: ID! @id
  streakCount: Int!
  lastActivityDate: DateTime!
}

type User @node {
  id: ID! @id
  clerkId: String!
  email: String! @unique(constraintName: "UserEmailUnique")
  imageUrl: String
  hasLessons: [Lesson!]! @relationship(type: "HAS_LESSON",properties: "HasLesson", direction: OUT)
  reactedToLessons: [Lesson!]! @relationship(type: "REACTED", properties: "Reacted", direction: OUT)
  reportedActivities: [Activity!]! @relationship(type: "REPORTED", direction: OUT)
  completedLessons: [LessonCompletionRecord!]! @relationship(type: "COMPLETED_LESSON", direction: OUT)
  hasStreak: [Streak!]! @relationship(type: "HAS_STREAK", direction: OUT)
  hasPaths: [Path!]! @relationship(type: "HAS_PATH", direction: OUT)
  # return the number of interactions with this users created lessons
  createdLessonsInteractionsCount: Int! @cypher(
    statement: """
    MATCH (this)-[hl:HAS_LESSON]->(lesson:Lesson)<-[r:REACTED]-(user:User)
    WHERE hl.type = 'CREATED' AND NOT user = this
    RETURN COUNT(r) AS createdLessonsInteractionsCount
    """,
    columnName: "createdLessonsInteractionsCount"
  )
  dailyActivity: [DailyActivity!]! @cypher(
    statement: """
    MATCH (this)-[:COMPLETED_LESSON]->(record:LessonCompletionRecord)-[attempt:ATTEMPTED]->(:Activity)
    WITH date(attempt.attemptedAt) as date, COUNT(attempt) as count
    RETURN { date: toString(date), count: count } as dailyActivity
    ORDER BY date DESC
    LIMIT 365
    """,
    columnName: "dailyActivity"
  )
}

type LessonCompletionRecord @node {
  id: ID! @id
  completedAt: DateTime!
  score: Float
  timeTaken: Int
  mode: String! # typeIn, eitherOr
  byUser: User! @relationship(type: "COMPLETED_LESSON", direction: IN)
  forLesson: Lesson @relationship(type: "FOR_LESSON", direction: OUT)
  attemptedActivities: [Activity!]! @relationship(type: "ATTEMPTED",properties: "AttemptActivity", direction: OUT)
}

type AttemptActivity @relationshipProperties {
  attemptedAt: DateTime!
  isCorrect: Boolean!
  timeTaken: Int
  correctedAt: DateTime
}

type HasLesson @relationshipProperties {
  type: String! # "CREATED", "COPIED", "ADDED"
  hasAt: DateTime!
}

type Reacted @relationshipProperties {
  type: String! # "Like", "Crown"
  reactedAt: DateTime!
}

type DailyActivity {
    date: String!
    count: Int!
}

type Path @node {
  id: ID! @id
  title: String
  color: String
  icon: String
  lessons: [Lesson!]! @relationship(type: "WITH_LESSON", direction: OUT)
}

type WithLesson @relationshipProperties {
  hasAt: DateTime!
}

type HasPath @relationshipProperties {
  type: String! # "CREATED", "COPIED", "ADDED"
  hasAt: DateTime!
}

`;


// constraints:
// CREATE CONSTRAINT KeywordNameUnique FOR (k:Keyword) REQUIRE k.name IS UNIQUE;
// CREATE CONSTRAINT TopicTitleUnique FOR (t:Topic) REQUIRE t.title IS UNIQUE;
// CREATE CONSTRAINT UserEmailUnique FOR (u:User) REQUIRE u.email IS UNIQUE;
// CREATE FULLTEXT INDEX LessonTitle FOR (l:Lesson) ON EACH [l.title];
// CREATE FULLTEXT INDEX TopicTitle FOR (t:Topic) ON EACH [t.title];


module.exports = { typeDefs }
