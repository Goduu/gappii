export const typeDefs = `#graphql
type Topic @node {
  id: ID @id
  title: String! @unique
}

type Lesson @node {
  id: ID @id @unique
  title: String! @unique
  level: Int!
  isPublic: Boolean! # Tracks public/private status
  createdAt: DateTime!
  hasTopic: Topic! @relationship(type: "HAS_TOPIC", direction: OUT)
  hasSubtopic: Topic! @relationship(type: "HAS_SUBTOPIC", direction: OUT)
  hasKeywords: [Keyword!]! @relationship(type: "HAS_KEYWORD", direction: OUT)
  hasActivities: [Activity!]! @relationship(type: "HAS_ACTIVITY", direction: OUT)
  wasReacted: [User!]! @relationship(type: "REACTED", properties: "Reacted", direction: IN)
  likeCount: Int!
  dislikeCount: Int!
  crownCount: Int!
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
}

type User @node {
  id: ID! @id
  clerkId: String! @unique
  email: String! @unique
  hasLessons: [Lesson!]! @relationship(type: "HAS_LESSON",properties: "HasLesson", direction: OUT)
  hasCollections: [Collection!]! @relationship(type: "HAS_COLLECTION", direction: OUT)
  reactedToLessons: [Lesson!]! @relationship(type: "REACTED", properties: "Reacted", direction: OUT)
  reportedActivities: [Activity!]! @relationship(type: "REPORTED", direction: OUT)
}

type HasLesson @relationshipProperties {
  type: String! # "Like", "Dislike", "Crown"
}

type Reacted @relationshipProperties {
  type: String! # "Like", "Dislike", "Crown"
}
`;


