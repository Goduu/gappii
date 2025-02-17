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

  # Computed field: Completion percentage for a specific user
  completionPercentage(clerkId: String!): Float @cypher(
    statement: """
    OPTIONAL MATCH (u:User {clerkId: $clerkId})-[:COMPLETED_SESSION]->(scr:SessionCompletionRecord)-[:FOR_LESSON]->(this)
    WITH u, this, COLLECT(scr) AS completions
    WITH u, this, completions,
         [x IN completions WHERE x.mode = 'type-in'] AS typeInAttempts,
         [x IN completions WHERE x.mode = 'either-or'] AS eitherOrAttempts
    WITH u, this, typeInAttempts, eitherOrAttempts,
         REDUCE(s = 0, x IN typeInAttempts | s + x.score) / 
           CASE SIZE(typeInAttempts) 
             WHEN 0 THEN 1 
             ELSE SIZE(typeInAttempts) 
           END AS typeInScore,
         REDUCE(s = 0, x IN eitherOrAttempts | s + x.score) / 
           CASE SIZE(eitherOrAttempts) 
             WHEN 0 THEN 1 
             ELSE SIZE(eitherOrAttempts) 
           END AS eitherOrScore
    WITH COALESCE(typeInScore, 0) as typeInScore, COALESCE(eitherOrScore, 0) as eitherOrScore
    RETURN ROUND(((typeInScore + eitherOrScore) / 2), 2) AS completionPercentage
    """,
    columnName: "completionPercentage"
  )
}

type Keyword @node {
  id: ID @id
  name: String! @unique(constraintName: "KeywordTitleUnique")
}

interface ActivityInterface {
  description: String!
  options: [String!]!
  answer: String!
  comment: String!
  mermaid: String
}

type Activity implements ActivityInterface @node {
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
  completedSessions: [SessionCompletionRecord!]! @relationship(type: "COMPLETED_SESSION", direction: OUT)
  hasStreak: [Streak!]! @relationship(type: "HAS_STREAK", direction: OUT)
  hasPaths: [Path!]! @relationship(type: "HAS_PATH", direction: OUT)

  mistakenActivitiesCount: Int! @cypher(
    statement: """
    MATCH (this)-[:COMPLETED_SESSION]->(record:SessionCompletionRecord)-[attempt:ATTEMPTED]->(a:Activity)
    WHERE attempt.isCorrect = false AND attempt.correctedAt IS NULL
    RETURN COUNT(a) AS mistakenActivitiesCount
    """,
    columnName: "mistakenActivitiesCount"
  )
  mistakenActivities: [MistakenActivity!]! @cypher(
    statement: """
    MATCH (this)-[:COMPLETED_SESSION]->(record:SessionCompletionRecord)-[attempt:ATTEMPTED]->(a:Activity)
    WHERE attempt.isCorrect = false AND attempt.correctedAt IS NULL
    WITH a, record, attempt
    RETURN {
      id: a.id,
      description: a.description,
      options: a.options,
      answer: a.answer,
      comment: a.comment,
      mermaid: a.mermaid,
      sessionCompletionRecordId: record.id
    } as mistakenActivities
    ORDER BY attempt.attemptedAt DESC
    LIMIT 10
    """,
    columnName: "mistakenActivities"
  )
    
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
    MATCH (this)-[:COMPLETED_SESSION]->(record:SessionCompletionRecord)-[attempt:ATTEMPTED]->(:Activity)
    WITH date(attempt.attemptedAt) as date, COUNT(attempt) as count
    RETURN { date: toString(date), count: count } as dailyActivity
    ORDER BY date DESC
    LIMIT 365
    """,
    columnName: "dailyActivity"
  )
}

type MistakenActivity implements ActivityInterface {
  id: ID @id
  description: String!
  options: [String!]!
  answer: String!
  comment: String!
  mermaid: String
  sessionCompletionRecordId: String!
}

type SessionCompletionRecord @node {
  id: ID! @id
  completedAt: DateTime!
  score: Float
  timeTaken: Int
  type: String! # mistake-correction, lesson, path
  mode: String! # typeIn, eitherOr
  byUser: User! @relationship(type: "COMPLETED_SESSION", direction: IN)
  forLesson: Lesson @relationship(type: "FOR_LESSON", direction: OUT)
  forPath: Path @relationship(type: "FOR_PATH", direction: OUT)
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
  withLessons: [Lesson!]! @relationship(type: "WITH_LESSON", direction: OUT)

  randomActivities(count: Int!): [Activity!]! @cypher(
      statement: """
        MATCH (this)-[:WITH_LESSON]->(l:Lesson)-[:HAS_ACTIVITY]->(a:Activity)
        WITH a, rand() as r
        ORDER BY r
        LIMIT $count
        RETURN a as randomActivities
      """,
      columnName: "randomActivities"
    )
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
