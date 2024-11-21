export const typeDefs = `#graphql
type Topic @node {
  id: ID @id
  title: String! @unique
  hasSubtopics: [Topic!]! 
    @relationship(type: "HAS_SUBTOPIC", direction: OUT)
  hasActivities: [Activity!]! 
    @relationship(type: "HAS_ACTIVITY", direction: OUT)
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
  hasTopics: [Topic!]! @relationship(type: "HAS_TOPIC", direction: OUT)
  likedTopics: [Topic!]! @relationship(type: "LIKED", direction: OUT)
  dislikedTopics: [Topic!]! @relationship(type: "DISLIKED", direction: OUT)
  crownedTopics: [Topic!]! @relationship(type: "CROWNED", direction: OUT)
}
`;


