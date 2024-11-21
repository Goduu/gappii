import type { SelectionSetNode, DocumentNode } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: { input: string; output: string };
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string };
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean };
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: { input: number; output: number };
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: { input: number; output: number };
};

export type Query = {
  __typename?: "Query";
  topics: Array<Topic>;
  topicsConnection: TopicsConnection;
  topicsAggregate: TopicAggregateSelection;
  activities: Array<Activity>;
  activitiesConnection: ActivitiesConnection;
  activitiesAggregate: ActivityAggregateSelection;
  users: Array<User>;
  usersConnection: UsersConnection;
  usersAggregate: UserAggregateSelection;
};

export type QueryTopicsArgs = {
  where?: InputMaybe<TopicWhere>;
  options?: InputMaybe<TopicOptions>;
};

export type QueryTopicsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<TopicWhere>;
  sort?: InputMaybe<Array<InputMaybe<TopicSort>>>;
};

export type QueryTopicsAggregateArgs = {
  where?: InputMaybe<TopicWhere>;
};

export type QueryActivitiesArgs = {
  where?: InputMaybe<ActivityWhere>;
  options?: InputMaybe<ActivityOptions>;
};

export type QueryActivitiesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<ActivityWhere>;
  sort?: InputMaybe<Array<InputMaybe<ActivitySort>>>;
};

export type QueryActivitiesAggregateArgs = {
  where?: InputMaybe<ActivityWhere>;
};

export type QueryUsersArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
};

export type QueryUsersConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<UserWhere>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};

export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};

export type Mutation = {
  __typename?: "Mutation";
  createTopics: CreateTopicsMutationResponse;
  deleteTopics: DeleteInfo;
  updateTopics: UpdateTopicsMutationResponse;
  createActivities: CreateActivitiesMutationResponse;
  deleteActivities: DeleteInfo;
  updateActivities: UpdateActivitiesMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteUsers: DeleteInfo;
  updateUsers: UpdateUsersMutationResponse;
};

export type MutationCreateTopicsArgs = {
  input: Array<TopicCreateInput>;
};

export type MutationDeleteTopicsArgs = {
  where?: InputMaybe<TopicWhere>;
  delete?: InputMaybe<TopicDeleteInput>;
};

export type MutationUpdateTopicsArgs = {
  where?: InputMaybe<TopicWhere>;
  update?: InputMaybe<TopicUpdateInput>;
  connect?: InputMaybe<TopicConnectInput>;
  disconnect?: InputMaybe<TopicDisconnectInput>;
  create?: InputMaybe<TopicRelationInput>;
  delete?: InputMaybe<TopicDeleteInput>;
  connectOrCreate?: InputMaybe<TopicConnectOrCreateInput>;
};

export type MutationCreateActivitiesArgs = {
  input: Array<ActivityCreateInput>;
};

export type MutationDeleteActivitiesArgs = {
  where?: InputMaybe<ActivityWhere>;
};

export type MutationUpdateActivitiesArgs = {
  where?: InputMaybe<ActivityWhere>;
  update?: InputMaybe<ActivityUpdateInput>;
};

export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};

export type MutationDeleteUsersArgs = {
  where?: InputMaybe<UserWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type MutationUpdateUsersArgs = {
  where?: InputMaybe<UserWhere>;
  update?: InputMaybe<UserUpdateInput>;
  connect?: InputMaybe<UserConnectInput>;
  disconnect?: InputMaybe<UserDisconnectInput>;
  create?: InputMaybe<UserRelationInput>;
  delete?: InputMaybe<UserDeleteInput>;
  connectOrCreate?: InputMaybe<UserConnectOrCreateInput>;
};

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export type ActivitiesConnection = {
  __typename?: "ActivitiesConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<ActivityEdge>;
};

export type Activity = {
  __typename?: "Activity";
  id?: Maybe<Scalars["ID"]["output"]>;
  description: Scalars["String"]["output"];
  options: Array<Scalars["String"]["output"]>;
  answer: Scalars["String"]["output"];
  comment: Scalars["String"]["output"];
};

export type ActivityAggregateSelection = {
  __typename?: "ActivityAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  description: StringAggregateSelection;
  answer: StringAggregateSelection;
  comment: StringAggregateSelection;
};

export type ActivityEdge = {
  __typename?: "ActivityEdge";
  cursor: Scalars["String"]["output"];
  node: Activity;
};

export type CreateActivitiesMutationResponse = {
  __typename?: "CreateActivitiesMutationResponse";
  info: CreateInfo;
  activities: Array<Activity>;
};

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: "CreateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
};

export type CreateTopicsMutationResponse = {
  __typename?: "CreateTopicsMutationResponse";
  info: CreateInfo;
  topics: Array<Topic>;
};

export type CreateUsersMutationResponse = {
  __typename?: "CreateUsersMutationResponse";
  info: CreateInfo;
  users: Array<User>;
};

/** Information about the number of nodes and relationships deleted during a delete mutation */
export type DeleteInfo = {
  __typename?: "DeleteInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type IdAggregateSelection = {
  __typename?: "IDAggregateSelection";
  shortest?: Maybe<Scalars["ID"]["output"]>;
  longest?: Maybe<Scalars["ID"]["output"]>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor?: Maybe<Scalars["String"]["output"]>;
  endCursor?: Maybe<Scalars["String"]["output"]>;
};

export type StringAggregateSelection = {
  __typename?: "StringAggregateSelection";
  shortest?: Maybe<Scalars["String"]["output"]>;
  longest?: Maybe<Scalars["String"]["output"]>;
};

export type Topic = {
  __typename?: "Topic";
  id?: Maybe<Scalars["ID"]["output"]>;
  title: Scalars["String"]["output"];
  hasSubtopicsAggregate?: Maybe<TopicTopicHasSubtopicsAggregationSelection>;
  hasSubtopics: Array<Topic>;
  hasSubtopicsConnection: TopicHasSubtopicsConnection;
  hasActivitiesAggregate?: Maybe<TopicActivityHasActivitiesAggregationSelection>;
  hasActivities: Array<Activity>;
  hasActivitiesConnection: TopicHasActivitiesConnection;
};

export type TopicHasSubtopicsAggregateArgs = {
  where?: InputMaybe<TopicWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type TopicHasSubtopicsArgs = {
  where?: InputMaybe<TopicWhere>;
  options?: InputMaybe<TopicOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type TopicHasSubtopicsConnectionArgs = {
  where?: InputMaybe<TopicHasSubtopicsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<TopicHasSubtopicsConnectionSort>>;
};

export type TopicHasActivitiesAggregateArgs = {
  where?: InputMaybe<ActivityWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type TopicHasActivitiesArgs = {
  where?: InputMaybe<ActivityWhere>;
  options?: InputMaybe<ActivityOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type TopicHasActivitiesConnectionArgs = {
  where?: InputMaybe<TopicHasActivitiesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<TopicHasActivitiesConnectionSort>>;
};

export type TopicActivityHasActivitiesAggregationSelection = {
  __typename?: "TopicActivityHasActivitiesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<TopicActivityHasActivitiesNodeAggregateSelection>;
};

export type TopicActivityHasActivitiesNodeAggregateSelection = {
  __typename?: "TopicActivityHasActivitiesNodeAggregateSelection";
  id: IdAggregateSelection;
  description: StringAggregateSelection;
  answer: StringAggregateSelection;
  comment: StringAggregateSelection;
};

export type TopicAggregateSelection = {
  __typename?: "TopicAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  title: StringAggregateSelection;
};

export type TopicEdge = {
  __typename?: "TopicEdge";
  cursor: Scalars["String"]["output"];
  node: Topic;
};

export type TopicHasActivitiesConnection = {
  __typename?: "TopicHasActivitiesConnection";
  edges: Array<TopicHasActivitiesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type TopicHasActivitiesRelationship = {
  __typename?: "TopicHasActivitiesRelationship";
  cursor: Scalars["String"]["output"];
  node: Activity;
};

export type TopicHasSubtopicsConnection = {
  __typename?: "TopicHasSubtopicsConnection";
  edges: Array<TopicHasSubtopicsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type TopicHasSubtopicsRelationship = {
  __typename?: "TopicHasSubtopicsRelationship";
  cursor: Scalars["String"]["output"];
  node: Topic;
};

export type TopicsConnection = {
  __typename?: "TopicsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<TopicEdge>;
};

export type TopicTopicHasSubtopicsAggregationSelection = {
  __typename?: "TopicTopicHasSubtopicsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<TopicTopicHasSubtopicsNodeAggregateSelection>;
};

export type TopicTopicHasSubtopicsNodeAggregateSelection = {
  __typename?: "TopicTopicHasSubtopicsNodeAggregateSelection";
  id: IdAggregateSelection;
  title: StringAggregateSelection;
};

export type UpdateActivitiesMutationResponse = {
  __typename?: "UpdateActivitiesMutationResponse";
  info: UpdateInfo;
  activities: Array<Activity>;
};

/** Information about the number of nodes and relationships created and deleted during an update mutation */
export type UpdateInfo = {
  __typename?: "UpdateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type UpdateTopicsMutationResponse = {
  __typename?: "UpdateTopicsMutationResponse";
  info: UpdateInfo;
  topics: Array<Topic>;
};

export type UpdateUsersMutationResponse = {
  __typename?: "UpdateUsersMutationResponse";
  info: UpdateInfo;
  users: Array<User>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"]["output"];
  clerkId: Scalars["String"]["output"];
  email: Scalars["String"]["output"];
  hasTopicsAggregate?: Maybe<UserTopicHasTopicsAggregationSelection>;
  hasTopics: Array<Topic>;
  hasTopicsConnection: UserHasTopicsConnection;
  likedTopicsAggregate?: Maybe<UserTopicLikedTopicsAggregationSelection>;
  likedTopics: Array<Topic>;
  likedTopicsConnection: UserLikedTopicsConnection;
  dislikedTopicsAggregate?: Maybe<UserTopicDislikedTopicsAggregationSelection>;
  dislikedTopics: Array<Topic>;
  dislikedTopicsConnection: UserDislikedTopicsConnection;
  crownedTopicsAggregate?: Maybe<UserTopicCrownedTopicsAggregationSelection>;
  crownedTopics: Array<Topic>;
  crownedTopicsConnection: UserCrownedTopicsConnection;
};

export type UserHasTopicsAggregateArgs = {
  where?: InputMaybe<TopicWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserHasTopicsArgs = {
  where?: InputMaybe<TopicWhere>;
  options?: InputMaybe<TopicOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserHasTopicsConnectionArgs = {
  where?: InputMaybe<UserHasTopicsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<UserHasTopicsConnectionSort>>;
};

export type UserLikedTopicsAggregateArgs = {
  where?: InputMaybe<TopicWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserLikedTopicsArgs = {
  where?: InputMaybe<TopicWhere>;
  options?: InputMaybe<TopicOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserLikedTopicsConnectionArgs = {
  where?: InputMaybe<UserLikedTopicsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<UserLikedTopicsConnectionSort>>;
};

export type UserDislikedTopicsAggregateArgs = {
  where?: InputMaybe<TopicWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserDislikedTopicsArgs = {
  where?: InputMaybe<TopicWhere>;
  options?: InputMaybe<TopicOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserDislikedTopicsConnectionArgs = {
  where?: InputMaybe<UserDislikedTopicsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<UserDislikedTopicsConnectionSort>>;
};

export type UserCrownedTopicsAggregateArgs = {
  where?: InputMaybe<TopicWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserCrownedTopicsArgs = {
  where?: InputMaybe<TopicWhere>;
  options?: InputMaybe<TopicOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserCrownedTopicsConnectionArgs = {
  where?: InputMaybe<UserCrownedTopicsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<UserCrownedTopicsConnectionSort>>;
};

export type UserAggregateSelection = {
  __typename?: "UserAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  clerkId: StringAggregateSelection;
  email: StringAggregateSelection;
};

export type UserCrownedTopicsConnection = {
  __typename?: "UserCrownedTopicsConnection";
  edges: Array<UserCrownedTopicsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type UserCrownedTopicsRelationship = {
  __typename?: "UserCrownedTopicsRelationship";
  cursor: Scalars["String"]["output"];
  node: Topic;
};

export type UserDislikedTopicsConnection = {
  __typename?: "UserDislikedTopicsConnection";
  edges: Array<UserDislikedTopicsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type UserDislikedTopicsRelationship = {
  __typename?: "UserDislikedTopicsRelationship";
  cursor: Scalars["String"]["output"];
  node: Topic;
};

export type UserEdge = {
  __typename?: "UserEdge";
  cursor: Scalars["String"]["output"];
  node: User;
};

export type UserHasTopicsConnection = {
  __typename?: "UserHasTopicsConnection";
  edges: Array<UserHasTopicsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type UserHasTopicsRelationship = {
  __typename?: "UserHasTopicsRelationship";
  cursor: Scalars["String"]["output"];
  node: Topic;
};

export type UserLikedTopicsConnection = {
  __typename?: "UserLikedTopicsConnection";
  edges: Array<UserLikedTopicsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type UserLikedTopicsRelationship = {
  __typename?: "UserLikedTopicsRelationship";
  cursor: Scalars["String"]["output"];
  node: Topic;
};

export type UsersConnection = {
  __typename?: "UsersConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<UserEdge>;
};

export type UserTopicCrownedTopicsAggregationSelection = {
  __typename?: "UserTopicCrownedTopicsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserTopicCrownedTopicsNodeAggregateSelection>;
};

export type UserTopicCrownedTopicsNodeAggregateSelection = {
  __typename?: "UserTopicCrownedTopicsNodeAggregateSelection";
  id: IdAggregateSelection;
  title: StringAggregateSelection;
};

export type UserTopicDislikedTopicsAggregationSelection = {
  __typename?: "UserTopicDislikedTopicsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserTopicDislikedTopicsNodeAggregateSelection>;
};

export type UserTopicDislikedTopicsNodeAggregateSelection = {
  __typename?: "UserTopicDislikedTopicsNodeAggregateSelection";
  id: IdAggregateSelection;
  title: StringAggregateSelection;
};

export type UserTopicHasTopicsAggregationSelection = {
  __typename?: "UserTopicHasTopicsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserTopicHasTopicsNodeAggregateSelection>;
};

export type UserTopicHasTopicsNodeAggregateSelection = {
  __typename?: "UserTopicHasTopicsNodeAggregateSelection";
  id: IdAggregateSelection;
  title: StringAggregateSelection;
};

export type UserTopicLikedTopicsAggregationSelection = {
  __typename?: "UserTopicLikedTopicsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserTopicLikedTopicsNodeAggregateSelection>;
};

export type UserTopicLikedTopicsNodeAggregateSelection = {
  __typename?: "UserTopicLikedTopicsNodeAggregateSelection";
  id: IdAggregateSelection;
  title: StringAggregateSelection;
};

export type ActivityConnectWhere = {
  node: ActivityWhere;
};

export type ActivityCreateInput = {
  description: Scalars["String"]["input"];
  options: Array<Scalars["String"]["input"]>;
  answer: Scalars["String"]["input"];
  comment: Scalars["String"]["input"];
};

export type ActivityOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more ActivitySort objects to sort Activities by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ActivitySort>>;
};

/** Fields to sort Activities by. The order in which sorts are applied is not guaranteed when specifying many fields in one ActivitySort object. */
export type ActivitySort = {
  id?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  answer?: InputMaybe<SortDirection>;
  comment?: InputMaybe<SortDirection>;
};

export type ActivityUpdateInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  options?: InputMaybe<Array<Scalars["String"]["input"]>>;
  options_POP?: InputMaybe<Scalars["Int"]["input"]>;
  options_PUSH?: InputMaybe<Array<Scalars["String"]["input"]>>;
  answer?: InputMaybe<Scalars["String"]["input"]>;
  comment?: InputMaybe<Scalars["String"]["input"]>;
};

export type ActivityWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT?: InputMaybe<Scalars["String"]["input"]>;
  description_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  description_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  description_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  description_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  options?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  options_NOT?: InputMaybe<Array<Scalars["String"]["input"]>>;
  options_INCLUDES?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  options_NOT_INCLUDES?: InputMaybe<Scalars["String"]["input"]>;
  answer?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  answer_NOT?: InputMaybe<Scalars["String"]["input"]>;
  answer_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  answer_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  answer_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  answer_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  answer_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  answer_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  answer_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  answer_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  comment?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  comment_NOT?: InputMaybe<Scalars["String"]["input"]>;
  comment_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  comment_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  comment_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  comment_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  comment_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  comment_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  comment_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  comment_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<ActivityWhere>>;
  AND?: InputMaybe<Array<ActivityWhere>>;
  NOT?: InputMaybe<ActivityWhere>;
};

export type TopicConnectInput = {
  hasSubtopics?: InputMaybe<Array<TopicHasSubtopicsConnectFieldInput>>;
  hasActivities?: InputMaybe<Array<TopicHasActivitiesConnectFieldInput>>;
};

export type TopicConnectOrCreateInput = {
  hasSubtopics?: InputMaybe<Array<TopicHasSubtopicsConnectOrCreateFieldInput>>;
};

export type TopicConnectOrCreateWhere = {
  node: TopicUniqueWhere;
};

export type TopicConnectWhere = {
  node: TopicWhere;
};

export type TopicCreateInput = {
  title: Scalars["String"]["input"];
  hasSubtopics?: InputMaybe<TopicHasSubtopicsFieldInput>;
  hasActivities?: InputMaybe<TopicHasActivitiesFieldInput>;
};

export type TopicDeleteInput = {
  hasSubtopics?: InputMaybe<Array<TopicHasSubtopicsDeleteFieldInput>>;
  hasActivities?: InputMaybe<Array<TopicHasActivitiesDeleteFieldInput>>;
};

export type TopicDisconnectInput = {
  hasSubtopics?: InputMaybe<Array<TopicHasSubtopicsDisconnectFieldInput>>;
  hasActivities?: InputMaybe<Array<TopicHasActivitiesDisconnectFieldInput>>;
};

export type TopicHasActivitiesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<TopicHasActivitiesAggregateInput>>;
  OR?: InputMaybe<Array<TopicHasActivitiesAggregateInput>>;
  NOT?: InputMaybe<TopicHasActivitiesAggregateInput>;
  node?: InputMaybe<TopicHasActivitiesNodeAggregationWhereInput>;
};

export type TopicHasActivitiesConnectFieldInput = {
  where?: InputMaybe<ActivityConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type TopicHasActivitiesConnectionSort = {
  node?: InputMaybe<ActivitySort>;
};

export type TopicHasActivitiesConnectionWhere = {
  AND?: InputMaybe<Array<TopicHasActivitiesConnectionWhere>>;
  OR?: InputMaybe<Array<TopicHasActivitiesConnectionWhere>>;
  NOT?: InputMaybe<TopicHasActivitiesConnectionWhere>;
  node?: InputMaybe<ActivityWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ActivityWhere>;
};

export type TopicHasActivitiesCreateFieldInput = {
  node: ActivityCreateInput;
};

export type TopicHasActivitiesDeleteFieldInput = {
  where?: InputMaybe<TopicHasActivitiesConnectionWhere>;
};

export type TopicHasActivitiesDisconnectFieldInput = {
  where?: InputMaybe<TopicHasActivitiesConnectionWhere>;
};

export type TopicHasActivitiesFieldInput = {
  connect?: InputMaybe<Array<TopicHasActivitiesConnectFieldInput>>;
  create?: InputMaybe<Array<TopicHasActivitiesCreateFieldInput>>;
};

export type TopicHasActivitiesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TopicHasActivitiesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<TopicHasActivitiesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TopicHasActivitiesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  answer_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  answer_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  answer_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  answer_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  answer_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  answer_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  answer_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  answer_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  answer_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  answer_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  answer_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  answer_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  answer_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  answer_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  answer_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  answer_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  answer_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  answer_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  answer_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  answer_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  answer_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  answer_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  answer_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  answer_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  answer_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  answer_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  answer_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  answer_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  answer_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  answer_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  answer_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  answer_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  answer_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  answer_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  answer_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  comment_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  comment_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  comment_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  comment_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  comment_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  comment_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  comment_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  comment_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  comment_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  comment_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  comment_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  comment_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  comment_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  comment_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  comment_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  comment_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  comment_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  comment_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  comment_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  comment_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  comment_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TopicHasActivitiesUpdateConnectionInput = {
  node?: InputMaybe<ActivityUpdateInput>;
};

export type TopicHasActivitiesUpdateFieldInput = {
  where?: InputMaybe<TopicHasActivitiesConnectionWhere>;
  connect?: InputMaybe<Array<TopicHasActivitiesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<TopicHasActivitiesDisconnectFieldInput>>;
  create?: InputMaybe<Array<TopicHasActivitiesCreateFieldInput>>;
  update?: InputMaybe<TopicHasActivitiesUpdateConnectionInput>;
  delete?: InputMaybe<Array<TopicHasActivitiesDeleteFieldInput>>;
};

export type TopicHasSubtopicsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<TopicHasSubtopicsAggregateInput>>;
  OR?: InputMaybe<Array<TopicHasSubtopicsAggregateInput>>;
  NOT?: InputMaybe<TopicHasSubtopicsAggregateInput>;
  node?: InputMaybe<TopicHasSubtopicsNodeAggregationWhereInput>;
};

export type TopicHasSubtopicsConnectFieldInput = {
  where?: InputMaybe<TopicConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<TopicConnectInput>>;
};

export type TopicHasSubtopicsConnectionSort = {
  node?: InputMaybe<TopicSort>;
};

export type TopicHasSubtopicsConnectionWhere = {
  AND?: InputMaybe<Array<TopicHasSubtopicsConnectionWhere>>;
  OR?: InputMaybe<Array<TopicHasSubtopicsConnectionWhere>>;
  NOT?: InputMaybe<TopicHasSubtopicsConnectionWhere>;
  node?: InputMaybe<TopicWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<TopicWhere>;
};

export type TopicHasSubtopicsConnectOrCreateFieldInput = {
  where: TopicConnectOrCreateWhere;
  onCreate: TopicHasSubtopicsConnectOrCreateFieldInputOnCreate;
};

export type TopicHasSubtopicsConnectOrCreateFieldInputOnCreate = {
  node: TopicOnCreateInput;
};

export type TopicHasSubtopicsCreateFieldInput = {
  node: TopicCreateInput;
};

export type TopicHasSubtopicsDeleteFieldInput = {
  where?: InputMaybe<TopicHasSubtopicsConnectionWhere>;
  delete?: InputMaybe<TopicDeleteInput>;
};

export type TopicHasSubtopicsDisconnectFieldInput = {
  where?: InputMaybe<TopicHasSubtopicsConnectionWhere>;
  disconnect?: InputMaybe<TopicDisconnectInput>;
};

export type TopicHasSubtopicsFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<TopicHasSubtopicsConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<TopicHasSubtopicsConnectFieldInput>>;
  create?: InputMaybe<Array<TopicHasSubtopicsCreateFieldInput>>;
};

export type TopicHasSubtopicsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TopicHasSubtopicsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<TopicHasSubtopicsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TopicHasSubtopicsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TopicHasSubtopicsUpdateConnectionInput = {
  node?: InputMaybe<TopicUpdateInput>;
};

export type TopicHasSubtopicsUpdateFieldInput = {
  where?: InputMaybe<TopicHasSubtopicsConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<TopicHasSubtopicsConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<TopicHasSubtopicsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<TopicHasSubtopicsDisconnectFieldInput>>;
  create?: InputMaybe<Array<TopicHasSubtopicsCreateFieldInput>>;
  update?: InputMaybe<TopicHasSubtopicsUpdateConnectionInput>;
  delete?: InputMaybe<Array<TopicHasSubtopicsDeleteFieldInput>>;
};

export type TopicOnCreateInput = {
  title: Scalars["String"]["input"];
};

export type TopicOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more TopicSort objects to sort Topics by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TopicSort>>;
};

export type TopicRelationInput = {
  hasSubtopics?: InputMaybe<Array<TopicHasSubtopicsCreateFieldInput>>;
  hasActivities?: InputMaybe<Array<TopicHasActivitiesCreateFieldInput>>;
};

/** Fields to sort Topics by. The order in which sorts are applied is not guaranteed when specifying many fields in one TopicSort object. */
export type TopicSort = {
  id?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
};

export type TopicUniqueWhere = {
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type TopicUpdateInput = {
  title?: InputMaybe<Scalars["String"]["input"]>;
  hasSubtopics?: InputMaybe<Array<TopicHasSubtopicsUpdateFieldInput>>;
  hasActivities?: InputMaybe<Array<TopicHasActivitiesUpdateFieldInput>>;
};

export type TopicWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT?: InputMaybe<Scalars["String"]["input"]>;
  title_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  title_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  title_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  title_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<TopicWhere>>;
  AND?: InputMaybe<Array<TopicWhere>>;
  NOT?: InputMaybe<TopicWhere>;
  /** @deprecated Use `hasSubtopics_SOME` instead. */
  hasSubtopics?: InputMaybe<TopicWhere>;
  /** @deprecated Use `hasSubtopics_NONE` instead. */
  hasSubtopics_NOT?: InputMaybe<TopicWhere>;
  /** Return Topics where all of the related Topics match this filter */
  hasSubtopics_ALL?: InputMaybe<TopicWhere>;
  /** Return Topics where none of the related Topics match this filter */
  hasSubtopics_NONE?: InputMaybe<TopicWhere>;
  /** Return Topics where one of the related Topics match this filter */
  hasSubtopics_SINGLE?: InputMaybe<TopicWhere>;
  /** Return Topics where some of the related Topics match this filter */
  hasSubtopics_SOME?: InputMaybe<TopicWhere>;
  /** @deprecated Use `hasSubtopicsConnection_SOME` instead. */
  hasSubtopicsConnection?: InputMaybe<TopicHasSubtopicsConnectionWhere>;
  /** @deprecated Use `hasSubtopicsConnection_NONE` instead. */
  hasSubtopicsConnection_NOT?: InputMaybe<TopicHasSubtopicsConnectionWhere>;
  /** Return Topics where all of the related TopicHasSubtopicsConnections match this filter */
  hasSubtopicsConnection_ALL?: InputMaybe<TopicHasSubtopicsConnectionWhere>;
  /** Return Topics where none of the related TopicHasSubtopicsConnections match this filter */
  hasSubtopicsConnection_NONE?: InputMaybe<TopicHasSubtopicsConnectionWhere>;
  /** Return Topics where one of the related TopicHasSubtopicsConnections match this filter */
  hasSubtopicsConnection_SINGLE?: InputMaybe<TopicHasSubtopicsConnectionWhere>;
  /** Return Topics where some of the related TopicHasSubtopicsConnections match this filter */
  hasSubtopicsConnection_SOME?: InputMaybe<TopicHasSubtopicsConnectionWhere>;
  hasSubtopicsAggregate?: InputMaybe<TopicHasSubtopicsAggregateInput>;
  /** @deprecated Use `hasActivities_SOME` instead. */
  hasActivities?: InputMaybe<ActivityWhere>;
  /** @deprecated Use `hasActivities_NONE` instead. */
  hasActivities_NOT?: InputMaybe<ActivityWhere>;
  /** Return Topics where all of the related Activities match this filter */
  hasActivities_ALL?: InputMaybe<ActivityWhere>;
  /** Return Topics where none of the related Activities match this filter */
  hasActivities_NONE?: InputMaybe<ActivityWhere>;
  /** Return Topics where one of the related Activities match this filter */
  hasActivities_SINGLE?: InputMaybe<ActivityWhere>;
  /** Return Topics where some of the related Activities match this filter */
  hasActivities_SOME?: InputMaybe<ActivityWhere>;
  /** @deprecated Use `hasActivitiesConnection_SOME` instead. */
  hasActivitiesConnection?: InputMaybe<TopicHasActivitiesConnectionWhere>;
  /** @deprecated Use `hasActivitiesConnection_NONE` instead. */
  hasActivitiesConnection_NOT?: InputMaybe<TopicHasActivitiesConnectionWhere>;
  /** Return Topics where all of the related TopicHasActivitiesConnections match this filter */
  hasActivitiesConnection_ALL?: InputMaybe<TopicHasActivitiesConnectionWhere>;
  /** Return Topics where none of the related TopicHasActivitiesConnections match this filter */
  hasActivitiesConnection_NONE?: InputMaybe<TopicHasActivitiesConnectionWhere>;
  /** Return Topics where one of the related TopicHasActivitiesConnections match this filter */
  hasActivitiesConnection_SINGLE?: InputMaybe<TopicHasActivitiesConnectionWhere>;
  /** Return Topics where some of the related TopicHasActivitiesConnections match this filter */
  hasActivitiesConnection_SOME?: InputMaybe<TopicHasActivitiesConnectionWhere>;
  hasActivitiesAggregate?: InputMaybe<TopicHasActivitiesAggregateInput>;
};

export type UserConnectInput = {
  hasTopics?: InputMaybe<Array<UserHasTopicsConnectFieldInput>>;
  likedTopics?: InputMaybe<Array<UserLikedTopicsConnectFieldInput>>;
  dislikedTopics?: InputMaybe<Array<UserDislikedTopicsConnectFieldInput>>;
  crownedTopics?: InputMaybe<Array<UserCrownedTopicsConnectFieldInput>>;
};

export type UserConnectOrCreateInput = {
  hasTopics?: InputMaybe<Array<UserHasTopicsConnectOrCreateFieldInput>>;
  likedTopics?: InputMaybe<Array<UserLikedTopicsConnectOrCreateFieldInput>>;
  dislikedTopics?: InputMaybe<
    Array<UserDislikedTopicsConnectOrCreateFieldInput>
  >;
  crownedTopics?: InputMaybe<Array<UserCrownedTopicsConnectOrCreateFieldInput>>;
};

export type UserCreateInput = {
  clerkId: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  hasTopics?: InputMaybe<UserHasTopicsFieldInput>;
  likedTopics?: InputMaybe<UserLikedTopicsFieldInput>;
  dislikedTopics?: InputMaybe<UserDislikedTopicsFieldInput>;
  crownedTopics?: InputMaybe<UserCrownedTopicsFieldInput>;
};

export type UserCrownedTopicsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<UserCrownedTopicsAggregateInput>>;
  OR?: InputMaybe<Array<UserCrownedTopicsAggregateInput>>;
  NOT?: InputMaybe<UserCrownedTopicsAggregateInput>;
  node?: InputMaybe<UserCrownedTopicsNodeAggregationWhereInput>;
};

export type UserCrownedTopicsConnectFieldInput = {
  where?: InputMaybe<TopicConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<TopicConnectInput>>;
};

export type UserCrownedTopicsConnectionSort = {
  node?: InputMaybe<TopicSort>;
};

export type UserCrownedTopicsConnectionWhere = {
  AND?: InputMaybe<Array<UserCrownedTopicsConnectionWhere>>;
  OR?: InputMaybe<Array<UserCrownedTopicsConnectionWhere>>;
  NOT?: InputMaybe<UserCrownedTopicsConnectionWhere>;
  node?: InputMaybe<TopicWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<TopicWhere>;
};

export type UserCrownedTopicsConnectOrCreateFieldInput = {
  where: TopicConnectOrCreateWhere;
  onCreate: UserCrownedTopicsConnectOrCreateFieldInputOnCreate;
};

export type UserCrownedTopicsConnectOrCreateFieldInputOnCreate = {
  node: TopicOnCreateInput;
};

export type UserCrownedTopicsCreateFieldInput = {
  node: TopicCreateInput;
};

export type UserCrownedTopicsDeleteFieldInput = {
  where?: InputMaybe<UserCrownedTopicsConnectionWhere>;
  delete?: InputMaybe<TopicDeleteInput>;
};

export type UserCrownedTopicsDisconnectFieldInput = {
  where?: InputMaybe<UserCrownedTopicsConnectionWhere>;
  disconnect?: InputMaybe<TopicDisconnectInput>;
};

export type UserCrownedTopicsFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<UserCrownedTopicsConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<UserCrownedTopicsConnectFieldInput>>;
  create?: InputMaybe<Array<UserCrownedTopicsCreateFieldInput>>;
};

export type UserCrownedTopicsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserCrownedTopicsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserCrownedTopicsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserCrownedTopicsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserCrownedTopicsUpdateConnectionInput = {
  node?: InputMaybe<TopicUpdateInput>;
};

export type UserCrownedTopicsUpdateFieldInput = {
  where?: InputMaybe<UserCrownedTopicsConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<UserCrownedTopicsConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<UserCrownedTopicsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserCrownedTopicsDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserCrownedTopicsCreateFieldInput>>;
  update?: InputMaybe<UserCrownedTopicsUpdateConnectionInput>;
  delete?: InputMaybe<Array<UserCrownedTopicsDeleteFieldInput>>;
};

export type UserDeleteInput = {
  hasTopics?: InputMaybe<Array<UserHasTopicsDeleteFieldInput>>;
  likedTopics?: InputMaybe<Array<UserLikedTopicsDeleteFieldInput>>;
  dislikedTopics?: InputMaybe<Array<UserDislikedTopicsDeleteFieldInput>>;
  crownedTopics?: InputMaybe<Array<UserCrownedTopicsDeleteFieldInput>>;
};

export type UserDisconnectInput = {
  hasTopics?: InputMaybe<Array<UserHasTopicsDisconnectFieldInput>>;
  likedTopics?: InputMaybe<Array<UserLikedTopicsDisconnectFieldInput>>;
  dislikedTopics?: InputMaybe<Array<UserDislikedTopicsDisconnectFieldInput>>;
  crownedTopics?: InputMaybe<Array<UserCrownedTopicsDisconnectFieldInput>>;
};

export type UserDislikedTopicsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<UserDislikedTopicsAggregateInput>>;
  OR?: InputMaybe<Array<UserDislikedTopicsAggregateInput>>;
  NOT?: InputMaybe<UserDislikedTopicsAggregateInput>;
  node?: InputMaybe<UserDislikedTopicsNodeAggregationWhereInput>;
};

export type UserDislikedTopicsConnectFieldInput = {
  where?: InputMaybe<TopicConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<TopicConnectInput>>;
};

export type UserDislikedTopicsConnectionSort = {
  node?: InputMaybe<TopicSort>;
};

export type UserDislikedTopicsConnectionWhere = {
  AND?: InputMaybe<Array<UserDislikedTopicsConnectionWhere>>;
  OR?: InputMaybe<Array<UserDislikedTopicsConnectionWhere>>;
  NOT?: InputMaybe<UserDislikedTopicsConnectionWhere>;
  node?: InputMaybe<TopicWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<TopicWhere>;
};

export type UserDislikedTopicsConnectOrCreateFieldInput = {
  where: TopicConnectOrCreateWhere;
  onCreate: UserDislikedTopicsConnectOrCreateFieldInputOnCreate;
};

export type UserDislikedTopicsConnectOrCreateFieldInputOnCreate = {
  node: TopicOnCreateInput;
};

export type UserDislikedTopicsCreateFieldInput = {
  node: TopicCreateInput;
};

export type UserDislikedTopicsDeleteFieldInput = {
  where?: InputMaybe<UserDislikedTopicsConnectionWhere>;
  delete?: InputMaybe<TopicDeleteInput>;
};

export type UserDislikedTopicsDisconnectFieldInput = {
  where?: InputMaybe<UserDislikedTopicsConnectionWhere>;
  disconnect?: InputMaybe<TopicDisconnectInput>;
};

export type UserDislikedTopicsFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<UserDislikedTopicsConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<UserDislikedTopicsConnectFieldInput>>;
  create?: InputMaybe<Array<UserDislikedTopicsCreateFieldInput>>;
};

export type UserDislikedTopicsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserDislikedTopicsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserDislikedTopicsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserDislikedTopicsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserDislikedTopicsUpdateConnectionInput = {
  node?: InputMaybe<TopicUpdateInput>;
};

export type UserDislikedTopicsUpdateFieldInput = {
  where?: InputMaybe<UserDislikedTopicsConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<UserDislikedTopicsConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<UserDislikedTopicsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserDislikedTopicsDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserDislikedTopicsCreateFieldInput>>;
  update?: InputMaybe<UserDislikedTopicsUpdateConnectionInput>;
  delete?: InputMaybe<Array<UserDislikedTopicsDeleteFieldInput>>;
};

export type UserHasTopicsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<UserHasTopicsAggregateInput>>;
  OR?: InputMaybe<Array<UserHasTopicsAggregateInput>>;
  NOT?: InputMaybe<UserHasTopicsAggregateInput>;
  node?: InputMaybe<UserHasTopicsNodeAggregationWhereInput>;
};

export type UserHasTopicsConnectFieldInput = {
  where?: InputMaybe<TopicConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<TopicConnectInput>>;
};

export type UserHasTopicsConnectionSort = {
  node?: InputMaybe<TopicSort>;
};

export type UserHasTopicsConnectionWhere = {
  AND?: InputMaybe<Array<UserHasTopicsConnectionWhere>>;
  OR?: InputMaybe<Array<UserHasTopicsConnectionWhere>>;
  NOT?: InputMaybe<UserHasTopicsConnectionWhere>;
  node?: InputMaybe<TopicWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<TopicWhere>;
};

export type UserHasTopicsConnectOrCreateFieldInput = {
  where: TopicConnectOrCreateWhere;
  onCreate: UserHasTopicsConnectOrCreateFieldInputOnCreate;
};

export type UserHasTopicsConnectOrCreateFieldInputOnCreate = {
  node: TopicOnCreateInput;
};

export type UserHasTopicsCreateFieldInput = {
  node: TopicCreateInput;
};

export type UserHasTopicsDeleteFieldInput = {
  where?: InputMaybe<UserHasTopicsConnectionWhere>;
  delete?: InputMaybe<TopicDeleteInput>;
};

export type UserHasTopicsDisconnectFieldInput = {
  where?: InputMaybe<UserHasTopicsConnectionWhere>;
  disconnect?: InputMaybe<TopicDisconnectInput>;
};

export type UserHasTopicsFieldInput = {
  connectOrCreate?: InputMaybe<Array<UserHasTopicsConnectOrCreateFieldInput>>;
  connect?: InputMaybe<Array<UserHasTopicsConnectFieldInput>>;
  create?: InputMaybe<Array<UserHasTopicsCreateFieldInput>>;
};

export type UserHasTopicsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserHasTopicsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserHasTopicsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserHasTopicsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserHasTopicsUpdateConnectionInput = {
  node?: InputMaybe<TopicUpdateInput>;
};

export type UserHasTopicsUpdateFieldInput = {
  where?: InputMaybe<UserHasTopicsConnectionWhere>;
  connectOrCreate?: InputMaybe<Array<UserHasTopicsConnectOrCreateFieldInput>>;
  connect?: InputMaybe<Array<UserHasTopicsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserHasTopicsDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserHasTopicsCreateFieldInput>>;
  update?: InputMaybe<UserHasTopicsUpdateConnectionInput>;
  delete?: InputMaybe<Array<UserHasTopicsDeleteFieldInput>>;
};

export type UserLikedTopicsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<UserLikedTopicsAggregateInput>>;
  OR?: InputMaybe<Array<UserLikedTopicsAggregateInput>>;
  NOT?: InputMaybe<UserLikedTopicsAggregateInput>;
  node?: InputMaybe<UserLikedTopicsNodeAggregationWhereInput>;
};

export type UserLikedTopicsConnectFieldInput = {
  where?: InputMaybe<TopicConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<TopicConnectInput>>;
};

export type UserLikedTopicsConnectionSort = {
  node?: InputMaybe<TopicSort>;
};

export type UserLikedTopicsConnectionWhere = {
  AND?: InputMaybe<Array<UserLikedTopicsConnectionWhere>>;
  OR?: InputMaybe<Array<UserLikedTopicsConnectionWhere>>;
  NOT?: InputMaybe<UserLikedTopicsConnectionWhere>;
  node?: InputMaybe<TopicWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<TopicWhere>;
};

export type UserLikedTopicsConnectOrCreateFieldInput = {
  where: TopicConnectOrCreateWhere;
  onCreate: UserLikedTopicsConnectOrCreateFieldInputOnCreate;
};

export type UserLikedTopicsConnectOrCreateFieldInputOnCreate = {
  node: TopicOnCreateInput;
};

export type UserLikedTopicsCreateFieldInput = {
  node: TopicCreateInput;
};

export type UserLikedTopicsDeleteFieldInput = {
  where?: InputMaybe<UserLikedTopicsConnectionWhere>;
  delete?: InputMaybe<TopicDeleteInput>;
};

export type UserLikedTopicsDisconnectFieldInput = {
  where?: InputMaybe<UserLikedTopicsConnectionWhere>;
  disconnect?: InputMaybe<TopicDisconnectInput>;
};

export type UserLikedTopicsFieldInput = {
  connectOrCreate?: InputMaybe<Array<UserLikedTopicsConnectOrCreateFieldInput>>;
  connect?: InputMaybe<Array<UserLikedTopicsConnectFieldInput>>;
  create?: InputMaybe<Array<UserLikedTopicsCreateFieldInput>>;
};

export type UserLikedTopicsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserLikedTopicsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserLikedTopicsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserLikedTopicsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserLikedTopicsUpdateConnectionInput = {
  node?: InputMaybe<TopicUpdateInput>;
};

export type UserLikedTopicsUpdateFieldInput = {
  where?: InputMaybe<UserLikedTopicsConnectionWhere>;
  connectOrCreate?: InputMaybe<Array<UserLikedTopicsConnectOrCreateFieldInput>>;
  connect?: InputMaybe<Array<UserLikedTopicsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserLikedTopicsDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserLikedTopicsCreateFieldInput>>;
  update?: InputMaybe<UserLikedTopicsUpdateConnectionInput>;
  delete?: InputMaybe<Array<UserLikedTopicsDeleteFieldInput>>;
};

export type UserOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
};

export type UserRelationInput = {
  hasTopics?: InputMaybe<Array<UserHasTopicsCreateFieldInput>>;
  likedTopics?: InputMaybe<Array<UserLikedTopicsCreateFieldInput>>;
  dislikedTopics?: InputMaybe<Array<UserDislikedTopicsCreateFieldInput>>;
  crownedTopics?: InputMaybe<Array<UserCrownedTopicsCreateFieldInput>>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  id?: InputMaybe<SortDirection>;
  clerkId?: InputMaybe<SortDirection>;
  email?: InputMaybe<SortDirection>;
};

export type UserUpdateInput = {
  clerkId?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  hasTopics?: InputMaybe<Array<UserHasTopicsUpdateFieldInput>>;
  likedTopics?: InputMaybe<Array<UserLikedTopicsUpdateFieldInput>>;
  dislikedTopics?: InputMaybe<Array<UserDislikedTopicsUpdateFieldInput>>;
  crownedTopics?: InputMaybe<Array<UserCrownedTopicsUpdateFieldInput>>;
};

export type UserWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  clerkId?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  clerkId_NOT?: InputMaybe<Scalars["String"]["input"]>;
  clerkId_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  clerkId_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  clerkId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  clerkId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  clerkId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  clerkId_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  clerkId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  clerkId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT?: InputMaybe<Scalars["String"]["input"]>;
  email_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  email_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  email_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  email_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<UserWhere>>;
  AND?: InputMaybe<Array<UserWhere>>;
  NOT?: InputMaybe<UserWhere>;
  /** @deprecated Use `hasTopics_SOME` instead. */
  hasTopics?: InputMaybe<TopicWhere>;
  /** @deprecated Use `hasTopics_NONE` instead. */
  hasTopics_NOT?: InputMaybe<TopicWhere>;
  /** Return Users where all of the related Topics match this filter */
  hasTopics_ALL?: InputMaybe<TopicWhere>;
  /** Return Users where none of the related Topics match this filter */
  hasTopics_NONE?: InputMaybe<TopicWhere>;
  /** Return Users where one of the related Topics match this filter */
  hasTopics_SINGLE?: InputMaybe<TopicWhere>;
  /** Return Users where some of the related Topics match this filter */
  hasTopics_SOME?: InputMaybe<TopicWhere>;
  /** @deprecated Use `hasTopicsConnection_SOME` instead. */
  hasTopicsConnection?: InputMaybe<UserHasTopicsConnectionWhere>;
  /** @deprecated Use `hasTopicsConnection_NONE` instead. */
  hasTopicsConnection_NOT?: InputMaybe<UserHasTopicsConnectionWhere>;
  /** Return Users where all of the related UserHasTopicsConnections match this filter */
  hasTopicsConnection_ALL?: InputMaybe<UserHasTopicsConnectionWhere>;
  /** Return Users where none of the related UserHasTopicsConnections match this filter */
  hasTopicsConnection_NONE?: InputMaybe<UserHasTopicsConnectionWhere>;
  /** Return Users where one of the related UserHasTopicsConnections match this filter */
  hasTopicsConnection_SINGLE?: InputMaybe<UserHasTopicsConnectionWhere>;
  /** Return Users where some of the related UserHasTopicsConnections match this filter */
  hasTopicsConnection_SOME?: InputMaybe<UserHasTopicsConnectionWhere>;
  hasTopicsAggregate?: InputMaybe<UserHasTopicsAggregateInput>;
  /** @deprecated Use `likedTopics_SOME` instead. */
  likedTopics?: InputMaybe<TopicWhere>;
  /** @deprecated Use `likedTopics_NONE` instead. */
  likedTopics_NOT?: InputMaybe<TopicWhere>;
  /** Return Users where all of the related Topics match this filter */
  likedTopics_ALL?: InputMaybe<TopicWhere>;
  /** Return Users where none of the related Topics match this filter */
  likedTopics_NONE?: InputMaybe<TopicWhere>;
  /** Return Users where one of the related Topics match this filter */
  likedTopics_SINGLE?: InputMaybe<TopicWhere>;
  /** Return Users where some of the related Topics match this filter */
  likedTopics_SOME?: InputMaybe<TopicWhere>;
  /** @deprecated Use `likedTopicsConnection_SOME` instead. */
  likedTopicsConnection?: InputMaybe<UserLikedTopicsConnectionWhere>;
  /** @deprecated Use `likedTopicsConnection_NONE` instead. */
  likedTopicsConnection_NOT?: InputMaybe<UserLikedTopicsConnectionWhere>;
  /** Return Users where all of the related UserLikedTopicsConnections match this filter */
  likedTopicsConnection_ALL?: InputMaybe<UserLikedTopicsConnectionWhere>;
  /** Return Users where none of the related UserLikedTopicsConnections match this filter */
  likedTopicsConnection_NONE?: InputMaybe<UserLikedTopicsConnectionWhere>;
  /** Return Users where one of the related UserLikedTopicsConnections match this filter */
  likedTopicsConnection_SINGLE?: InputMaybe<UserLikedTopicsConnectionWhere>;
  /** Return Users where some of the related UserLikedTopicsConnections match this filter */
  likedTopicsConnection_SOME?: InputMaybe<UserLikedTopicsConnectionWhere>;
  likedTopicsAggregate?: InputMaybe<UserLikedTopicsAggregateInput>;
  /** @deprecated Use `dislikedTopics_SOME` instead. */
  dislikedTopics?: InputMaybe<TopicWhere>;
  /** @deprecated Use `dislikedTopics_NONE` instead. */
  dislikedTopics_NOT?: InputMaybe<TopicWhere>;
  /** Return Users where all of the related Topics match this filter */
  dislikedTopics_ALL?: InputMaybe<TopicWhere>;
  /** Return Users where none of the related Topics match this filter */
  dislikedTopics_NONE?: InputMaybe<TopicWhere>;
  /** Return Users where one of the related Topics match this filter */
  dislikedTopics_SINGLE?: InputMaybe<TopicWhere>;
  /** Return Users where some of the related Topics match this filter */
  dislikedTopics_SOME?: InputMaybe<TopicWhere>;
  /** @deprecated Use `dislikedTopicsConnection_SOME` instead. */
  dislikedTopicsConnection?: InputMaybe<UserDislikedTopicsConnectionWhere>;
  /** @deprecated Use `dislikedTopicsConnection_NONE` instead. */
  dislikedTopicsConnection_NOT?: InputMaybe<UserDislikedTopicsConnectionWhere>;
  /** Return Users where all of the related UserDislikedTopicsConnections match this filter */
  dislikedTopicsConnection_ALL?: InputMaybe<UserDislikedTopicsConnectionWhere>;
  /** Return Users where none of the related UserDislikedTopicsConnections match this filter */
  dislikedTopicsConnection_NONE?: InputMaybe<UserDislikedTopicsConnectionWhere>;
  /** Return Users where one of the related UserDislikedTopicsConnections match this filter */
  dislikedTopicsConnection_SINGLE?: InputMaybe<UserDislikedTopicsConnectionWhere>;
  /** Return Users where some of the related UserDislikedTopicsConnections match this filter */
  dislikedTopicsConnection_SOME?: InputMaybe<UserDislikedTopicsConnectionWhere>;
  dislikedTopicsAggregate?: InputMaybe<UserDislikedTopicsAggregateInput>;
  /** @deprecated Use `crownedTopics_SOME` instead. */
  crownedTopics?: InputMaybe<TopicWhere>;
  /** @deprecated Use `crownedTopics_NONE` instead. */
  crownedTopics_NOT?: InputMaybe<TopicWhere>;
  /** Return Users where all of the related Topics match this filter */
  crownedTopics_ALL?: InputMaybe<TopicWhere>;
  /** Return Users where none of the related Topics match this filter */
  crownedTopics_NONE?: InputMaybe<TopicWhere>;
  /** Return Users where one of the related Topics match this filter */
  crownedTopics_SINGLE?: InputMaybe<TopicWhere>;
  /** Return Users where some of the related Topics match this filter */
  crownedTopics_SOME?: InputMaybe<TopicWhere>;
  /** @deprecated Use `crownedTopicsConnection_SOME` instead. */
  crownedTopicsConnection?: InputMaybe<UserCrownedTopicsConnectionWhere>;
  /** @deprecated Use `crownedTopicsConnection_NONE` instead. */
  crownedTopicsConnection_NOT?: InputMaybe<UserCrownedTopicsConnectionWhere>;
  /** Return Users where all of the related UserCrownedTopicsConnections match this filter */
  crownedTopicsConnection_ALL?: InputMaybe<UserCrownedTopicsConnectionWhere>;
  /** Return Users where none of the related UserCrownedTopicsConnections match this filter */
  crownedTopicsConnection_NONE?: InputMaybe<UserCrownedTopicsConnectionWhere>;
  /** Return Users where one of the related UserCrownedTopicsConnections match this filter */
  crownedTopicsConnection_SINGLE?: InputMaybe<UserCrownedTopicsConnectionWhere>;
  /** Return Users where some of the related UserCrownedTopicsConnections match this filter */
  crownedTopicsConnection_SOME?: InputMaybe<UserCrownedTopicsConnectionWhere>;
  crownedTopicsAggregate?: InputMaybe<UserCrownedTopicsAggregateInput>;
};

export interface TopicAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  title?: boolean;
}

export declare class TopicModel {
  public find(args?: {
    where?: TopicWhere;

    options?: TopicOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Topic[]>;
  public create(args: {
    input: TopicCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateTopicsMutationResponse>;
  public update(args: {
    where?: TopicWhere;
    update?: TopicUpdateInput;
    connect?: TopicConnectInput;
    disconnect?: TopicDisconnectInput;
    create?: TopicCreateInput;
    connectOrCreate?: TopicConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateTopicsMutationResponse>;
  public delete(args: {
    where?: TopicWhere;
    delete?: TopicDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: TopicWhere;

    aggregate: TopicAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<TopicAggregateSelection>;
}

export interface ActivityAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  description?: boolean;
  answer?: boolean;
  comment?: boolean;
}

export declare class ActivityModel {
  public find(args?: {
    where?: ActivityWhere;

    options?: ActivityOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Activity[]>;
  public create(args: {
    input: ActivityCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateActivitiesMutationResponse>;
  public update(args: {
    where?: ActivityWhere;
    update?: ActivityUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateActivitiesMutationResponse>;
  public delete(args: {
    where?: ActivityWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: ActivityWhere;

    aggregate: ActivityAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<ActivityAggregateSelection>;
}

export interface UserAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  clerkId?: boolean;
  email?: boolean;
}

export declare class UserModel {
  public find(args?: {
    where?: UserWhere;

    options?: UserOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<User[]>;
  public create(args: {
    input: UserCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateUsersMutationResponse>;
  public update(args: {
    where?: UserWhere;
    update?: UserUpdateInput;
    connect?: UserConnectInput;
    disconnect?: UserDisconnectInput;
    create?: UserCreateInput;
    connectOrCreate?: UserConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateUsersMutationResponse>;
  public delete(args: {
    where?: UserWhere;
    delete?: UserDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: UserWhere;

    aggregate: UserAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<UserAggregateSelection>;
}

export interface ModelMap {
  Topic: TopicModel;
  Activity: ActivityModel;
  User: UserModel;
}
