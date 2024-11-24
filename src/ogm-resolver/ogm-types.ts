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
  lessons: Array<Lesson>;
  lessonsConnection: LessonsConnection;
  lessonsAggregate: LessonAggregateSelection;
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

export type QueryLessonsArgs = {
  where?: InputMaybe<LessonWhere>;
  options?: InputMaybe<LessonOptions>;
};

export type QueryLessonsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<LessonWhere>;
  sort?: InputMaybe<Array<InputMaybe<LessonSort>>>;
};

export type QueryLessonsAggregateArgs = {
  where?: InputMaybe<LessonWhere>;
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
  createLessons: CreateLessonsMutationResponse;
  deleteLessons: DeleteInfo;
  updateLessons: UpdateLessonsMutationResponse;
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
};

export type MutationUpdateTopicsArgs = {
  where?: InputMaybe<TopicWhere>;
  update?: InputMaybe<TopicUpdateInput>;
};

export type MutationCreateLessonsArgs = {
  input: Array<LessonCreateInput>;
};

export type MutationDeleteLessonsArgs = {
  where?: InputMaybe<LessonWhere>;
  delete?: InputMaybe<LessonDeleteInput>;
};

export type MutationUpdateLessonsArgs = {
  where?: InputMaybe<LessonWhere>;
  update?: InputMaybe<LessonUpdateInput>;
  connect?: InputMaybe<LessonConnectInput>;
  disconnect?: InputMaybe<LessonDisconnectInput>;
  create?: InputMaybe<LessonRelationInput>;
  delete?: InputMaybe<LessonDeleteInput>;
  connectOrCreate?: InputMaybe<LessonConnectOrCreateInput>;
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

export type CreateLessonsMutationResponse = {
  __typename?: "CreateLessonsMutationResponse";
  info: CreateInfo;
  lessons: Array<Lesson>;
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

export type Lesson = {
  __typename?: "Lesson";
  id?: Maybe<Scalars["ID"]["output"]>;
  title: Scalars["String"]["output"];
  hasTopicAggregate?: Maybe<LessonTopicHasTopicAggregationSelection>;
  hasTopic: Topic;
  hasTopicConnection: LessonHasTopicConnection;
  hasSubtopicAggregate?: Maybe<LessonTopicHasSubtopicAggregationSelection>;
  hasSubtopic: Topic;
  hasSubtopicConnection: LessonHasSubtopicConnection;
  hasActivitiesAggregate?: Maybe<LessonActivityHasActivitiesAggregationSelection>;
  hasActivities: Array<Activity>;
  hasActivitiesConnection: LessonHasActivitiesConnection;
  wasReactedAggregate?: Maybe<LessonUserWasReactedAggregationSelection>;
  wasReacted: Array<User>;
  wasReactedConnection: LessonWasReactedConnection;
};

export type LessonHasTopicAggregateArgs = {
  where?: InputMaybe<TopicWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type LessonHasTopicArgs = {
  where?: InputMaybe<TopicWhere>;
  options?: InputMaybe<TopicOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type LessonHasTopicConnectionArgs = {
  where?: InputMaybe<LessonHasTopicConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<LessonHasTopicConnectionSort>>;
};

export type LessonHasSubtopicAggregateArgs = {
  where?: InputMaybe<TopicWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type LessonHasSubtopicArgs = {
  where?: InputMaybe<TopicWhere>;
  options?: InputMaybe<TopicOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type LessonHasSubtopicConnectionArgs = {
  where?: InputMaybe<LessonHasSubtopicConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<LessonHasSubtopicConnectionSort>>;
};

export type LessonHasActivitiesAggregateArgs = {
  where?: InputMaybe<ActivityWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type LessonHasActivitiesArgs = {
  where?: InputMaybe<ActivityWhere>;
  options?: InputMaybe<ActivityOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type LessonHasActivitiesConnectionArgs = {
  where?: InputMaybe<LessonHasActivitiesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<LessonHasActivitiesConnectionSort>>;
};

export type LessonWasReactedAggregateArgs = {
  where?: InputMaybe<UserWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type LessonWasReactedArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type LessonWasReactedConnectionArgs = {
  where?: InputMaybe<LessonWasReactedConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<LessonWasReactedConnectionSort>>;
};

export type LessonActivityHasActivitiesAggregationSelection = {
  __typename?: "LessonActivityHasActivitiesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<LessonActivityHasActivitiesNodeAggregateSelection>;
};

export type LessonActivityHasActivitiesNodeAggregateSelection = {
  __typename?: "LessonActivityHasActivitiesNodeAggregateSelection";
  id: IdAggregateSelection;
  description: StringAggregateSelection;
  answer: StringAggregateSelection;
  comment: StringAggregateSelection;
};

export type LessonAggregateSelection = {
  __typename?: "LessonAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  title: StringAggregateSelection;
};

export type LessonEdge = {
  __typename?: "LessonEdge";
  cursor: Scalars["String"]["output"];
  node: Lesson;
};

export type LessonHasActivitiesConnection = {
  __typename?: "LessonHasActivitiesConnection";
  edges: Array<LessonHasActivitiesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type LessonHasActivitiesRelationship = {
  __typename?: "LessonHasActivitiesRelationship";
  cursor: Scalars["String"]["output"];
  node: Activity;
};

export type LessonHasSubtopicConnection = {
  __typename?: "LessonHasSubtopicConnection";
  edges: Array<LessonHasSubtopicRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type LessonHasSubtopicRelationship = {
  __typename?: "LessonHasSubtopicRelationship";
  cursor: Scalars["String"]["output"];
  node: Topic;
};

export type LessonHasTopicConnection = {
  __typename?: "LessonHasTopicConnection";
  edges: Array<LessonHasTopicRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type LessonHasTopicRelationship = {
  __typename?: "LessonHasTopicRelationship";
  cursor: Scalars["String"]["output"];
  node: Topic;
};

export type LessonsConnection = {
  __typename?: "LessonsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<LessonEdge>;
};

export type LessonTopicHasSubtopicAggregationSelection = {
  __typename?: "LessonTopicHasSubtopicAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<LessonTopicHasSubtopicNodeAggregateSelection>;
};

export type LessonTopicHasSubtopicNodeAggregateSelection = {
  __typename?: "LessonTopicHasSubtopicNodeAggregateSelection";
  id: IdAggregateSelection;
  title: StringAggregateSelection;
};

export type LessonTopicHasTopicAggregationSelection = {
  __typename?: "LessonTopicHasTopicAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<LessonTopicHasTopicNodeAggregateSelection>;
};

export type LessonTopicHasTopicNodeAggregateSelection = {
  __typename?: "LessonTopicHasTopicNodeAggregateSelection";
  id: IdAggregateSelection;
  title: StringAggregateSelection;
};

export type LessonUserWasReactedAggregationSelection = {
  __typename?: "LessonUserWasReactedAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<LessonUserWasReactedNodeAggregateSelection>;
  edge?: Maybe<LessonUserWasReactedEdgeAggregateSelection>;
};

export type LessonUserWasReactedEdgeAggregateSelection = {
  __typename?: "LessonUserWasReactedEdgeAggregateSelection";
  type: StringAggregateSelection;
};

export type LessonUserWasReactedNodeAggregateSelection = {
  __typename?: "LessonUserWasReactedNodeAggregateSelection";
  id: IdAggregateSelection;
  clerkId: StringAggregateSelection;
  email: StringAggregateSelection;
};

export type LessonWasReactedConnection = {
  __typename?: "LessonWasReactedConnection";
  edges: Array<LessonWasReactedRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type LessonWasReactedRelationship = {
  __typename?: "LessonWasReactedRelationship";
  cursor: Scalars["String"]["output"];
  node: User;
  properties: Reacted;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor?: Maybe<Scalars["String"]["output"]>;
  endCursor?: Maybe<Scalars["String"]["output"]>;
};

/**
 * The edge properties for the following fields:
 * * Lesson.wasReacted
 * * User.reactedToLessons
 */
export type Reacted = {
  __typename?: "Reacted";
  type: Scalars["String"]["output"];
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

export type TopicsConnection = {
  __typename?: "TopicsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<TopicEdge>;
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

export type UpdateLessonsMutationResponse = {
  __typename?: "UpdateLessonsMutationResponse";
  info: UpdateInfo;
  lessons: Array<Lesson>;
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
  hasLessonsAggregate?: Maybe<UserLessonHasLessonsAggregationSelection>;
  hasLessons: Array<Lesson>;
  hasLessonsConnection: UserHasLessonsConnection;
  reactedToLessonsAggregate?: Maybe<UserLessonReactedToLessonsAggregationSelection>;
  reactedToLessons: Array<Lesson>;
  reactedToLessonsConnection: UserReactedToLessonsConnection;
  reportedActivitiesAggregate?: Maybe<UserActivityReportedActivitiesAggregationSelection>;
  reportedActivities: Array<Activity>;
  reportedActivitiesConnection: UserReportedActivitiesConnection;
};

export type UserHasLessonsAggregateArgs = {
  where?: InputMaybe<LessonWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserHasLessonsArgs = {
  where?: InputMaybe<LessonWhere>;
  options?: InputMaybe<LessonOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserHasLessonsConnectionArgs = {
  where?: InputMaybe<UserHasLessonsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<UserHasLessonsConnectionSort>>;
};

export type UserReactedToLessonsAggregateArgs = {
  where?: InputMaybe<LessonWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserReactedToLessonsArgs = {
  where?: InputMaybe<LessonWhere>;
  options?: InputMaybe<LessonOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserReactedToLessonsConnectionArgs = {
  where?: InputMaybe<UserReactedToLessonsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<UserReactedToLessonsConnectionSort>>;
};

export type UserReportedActivitiesAggregateArgs = {
  where?: InputMaybe<ActivityWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserReportedActivitiesArgs = {
  where?: InputMaybe<ActivityWhere>;
  options?: InputMaybe<ActivityOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserReportedActivitiesConnectionArgs = {
  where?: InputMaybe<UserReportedActivitiesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<UserReportedActivitiesConnectionSort>>;
};

export type UserActivityReportedActivitiesAggregationSelection = {
  __typename?: "UserActivityReportedActivitiesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserActivityReportedActivitiesNodeAggregateSelection>;
};

export type UserActivityReportedActivitiesNodeAggregateSelection = {
  __typename?: "UserActivityReportedActivitiesNodeAggregateSelection";
  id: IdAggregateSelection;
  description: StringAggregateSelection;
  answer: StringAggregateSelection;
  comment: StringAggregateSelection;
};

export type UserAggregateSelection = {
  __typename?: "UserAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  clerkId: StringAggregateSelection;
  email: StringAggregateSelection;
};

export type UserEdge = {
  __typename?: "UserEdge";
  cursor: Scalars["String"]["output"];
  node: User;
};

export type UserHasLessonsConnection = {
  __typename?: "UserHasLessonsConnection";
  edges: Array<UserHasLessonsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type UserHasLessonsRelationship = {
  __typename?: "UserHasLessonsRelationship";
  cursor: Scalars["String"]["output"];
  node: Lesson;
};

export type UserLessonHasLessonsAggregationSelection = {
  __typename?: "UserLessonHasLessonsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserLessonHasLessonsNodeAggregateSelection>;
};

export type UserLessonHasLessonsNodeAggregateSelection = {
  __typename?: "UserLessonHasLessonsNodeAggregateSelection";
  id: IdAggregateSelection;
  title: StringAggregateSelection;
};

export type UserLessonReactedToLessonsAggregationSelection = {
  __typename?: "UserLessonReactedToLessonsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserLessonReactedToLessonsNodeAggregateSelection>;
  edge?: Maybe<UserLessonReactedToLessonsEdgeAggregateSelection>;
};

export type UserLessonReactedToLessonsEdgeAggregateSelection = {
  __typename?: "UserLessonReactedToLessonsEdgeAggregateSelection";
  type: StringAggregateSelection;
};

export type UserLessonReactedToLessonsNodeAggregateSelection = {
  __typename?: "UserLessonReactedToLessonsNodeAggregateSelection";
  id: IdAggregateSelection;
  title: StringAggregateSelection;
};

export type UserReactedToLessonsConnection = {
  __typename?: "UserReactedToLessonsConnection";
  edges: Array<UserReactedToLessonsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type UserReactedToLessonsRelationship = {
  __typename?: "UserReactedToLessonsRelationship";
  cursor: Scalars["String"]["output"];
  node: Lesson;
  properties: Reacted;
};

export type UserReportedActivitiesConnection = {
  __typename?: "UserReportedActivitiesConnection";
  edges: Array<UserReportedActivitiesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type UserReportedActivitiesRelationship = {
  __typename?: "UserReportedActivitiesRelationship";
  cursor: Scalars["String"]["output"];
  node: Activity;
};

export type UsersConnection = {
  __typename?: "UsersConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<UserEdge>;
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

export type LessonConnectInput = {
  hasTopic?: InputMaybe<LessonHasTopicConnectFieldInput>;
  hasSubtopic?: InputMaybe<LessonHasSubtopicConnectFieldInput>;
  hasActivities?: InputMaybe<Array<LessonHasActivitiesConnectFieldInput>>;
  wasReacted?: InputMaybe<Array<LessonWasReactedConnectFieldInput>>;
};

export type LessonConnectOrCreateInput = {
  hasTopic?: InputMaybe<LessonHasTopicConnectOrCreateFieldInput>;
  hasSubtopic?: InputMaybe<LessonHasSubtopicConnectOrCreateFieldInput>;
  wasReacted?: InputMaybe<Array<LessonWasReactedConnectOrCreateFieldInput>>;
};

export type LessonConnectOrCreateWhere = {
  node: LessonUniqueWhere;
};

export type LessonConnectWhere = {
  node: LessonWhere;
};

export type LessonCreateInput = {
  title: Scalars["String"]["input"];
  hasTopic?: InputMaybe<LessonHasTopicFieldInput>;
  hasSubtopic?: InputMaybe<LessonHasSubtopicFieldInput>;
  hasActivities?: InputMaybe<LessonHasActivitiesFieldInput>;
  wasReacted?: InputMaybe<LessonWasReactedFieldInput>;
};

export type LessonDeleteInput = {
  hasTopic?: InputMaybe<LessonHasTopicDeleteFieldInput>;
  hasSubtopic?: InputMaybe<LessonHasSubtopicDeleteFieldInput>;
  hasActivities?: InputMaybe<Array<LessonHasActivitiesDeleteFieldInput>>;
  wasReacted?: InputMaybe<Array<LessonWasReactedDeleteFieldInput>>;
};

export type LessonDisconnectInput = {
  hasTopic?: InputMaybe<LessonHasTopicDisconnectFieldInput>;
  hasSubtopic?: InputMaybe<LessonHasSubtopicDisconnectFieldInput>;
  hasActivities?: InputMaybe<Array<LessonHasActivitiesDisconnectFieldInput>>;
  wasReacted?: InputMaybe<Array<LessonWasReactedDisconnectFieldInput>>;
};

export type LessonHasActivitiesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<LessonHasActivitiesAggregateInput>>;
  OR?: InputMaybe<Array<LessonHasActivitiesAggregateInput>>;
  NOT?: InputMaybe<LessonHasActivitiesAggregateInput>;
  node?: InputMaybe<LessonHasActivitiesNodeAggregationWhereInput>;
};

export type LessonHasActivitiesConnectFieldInput = {
  where?: InputMaybe<ActivityConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type LessonHasActivitiesConnectionSort = {
  node?: InputMaybe<ActivitySort>;
};

export type LessonHasActivitiesConnectionWhere = {
  AND?: InputMaybe<Array<LessonHasActivitiesConnectionWhere>>;
  OR?: InputMaybe<Array<LessonHasActivitiesConnectionWhere>>;
  NOT?: InputMaybe<LessonHasActivitiesConnectionWhere>;
  node?: InputMaybe<ActivityWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ActivityWhere>;
};

export type LessonHasActivitiesCreateFieldInput = {
  node: ActivityCreateInput;
};

export type LessonHasActivitiesDeleteFieldInput = {
  where?: InputMaybe<LessonHasActivitiesConnectionWhere>;
};

export type LessonHasActivitiesDisconnectFieldInput = {
  where?: InputMaybe<LessonHasActivitiesConnectionWhere>;
};

export type LessonHasActivitiesFieldInput = {
  connect?: InputMaybe<Array<LessonHasActivitiesConnectFieldInput>>;
  create?: InputMaybe<Array<LessonHasActivitiesCreateFieldInput>>;
};

export type LessonHasActivitiesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<LessonHasActivitiesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<LessonHasActivitiesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<LessonHasActivitiesNodeAggregationWhereInput>;
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

export type LessonHasActivitiesUpdateConnectionInput = {
  node?: InputMaybe<ActivityUpdateInput>;
};

export type LessonHasActivitiesUpdateFieldInput = {
  where?: InputMaybe<LessonHasActivitiesConnectionWhere>;
  connect?: InputMaybe<Array<LessonHasActivitiesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<LessonHasActivitiesDisconnectFieldInput>>;
  create?: InputMaybe<Array<LessonHasActivitiesCreateFieldInput>>;
  update?: InputMaybe<LessonHasActivitiesUpdateConnectionInput>;
  delete?: InputMaybe<Array<LessonHasActivitiesDeleteFieldInput>>;
};

export type LessonHasSubtopicAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<LessonHasSubtopicAggregateInput>>;
  OR?: InputMaybe<Array<LessonHasSubtopicAggregateInput>>;
  NOT?: InputMaybe<LessonHasSubtopicAggregateInput>;
  node?: InputMaybe<LessonHasSubtopicNodeAggregationWhereInput>;
};

export type LessonHasSubtopicConnectFieldInput = {
  where?: InputMaybe<TopicConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type LessonHasSubtopicConnectionSort = {
  node?: InputMaybe<TopicSort>;
};

export type LessonHasSubtopicConnectionWhere = {
  AND?: InputMaybe<Array<LessonHasSubtopicConnectionWhere>>;
  OR?: InputMaybe<Array<LessonHasSubtopicConnectionWhere>>;
  NOT?: InputMaybe<LessonHasSubtopicConnectionWhere>;
  node?: InputMaybe<TopicWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<TopicWhere>;
};

export type LessonHasSubtopicConnectOrCreateFieldInput = {
  where: TopicConnectOrCreateWhere;
  onCreate: LessonHasSubtopicConnectOrCreateFieldInputOnCreate;
};

export type LessonHasSubtopicConnectOrCreateFieldInputOnCreate = {
  node: TopicOnCreateInput;
};

export type LessonHasSubtopicCreateFieldInput = {
  node: TopicCreateInput;
};

export type LessonHasSubtopicDeleteFieldInput = {
  where?: InputMaybe<LessonHasSubtopicConnectionWhere>;
};

export type LessonHasSubtopicDisconnectFieldInput = {
  where?: InputMaybe<LessonHasSubtopicConnectionWhere>;
};

export type LessonHasSubtopicFieldInput = {
  connectOrCreate?: InputMaybe<LessonHasSubtopicConnectOrCreateFieldInput>;
  connect?: InputMaybe<LessonHasSubtopicConnectFieldInput>;
  create?: InputMaybe<LessonHasSubtopicCreateFieldInput>;
};

export type LessonHasSubtopicNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<LessonHasSubtopicNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<LessonHasSubtopicNodeAggregationWhereInput>>;
  NOT?: InputMaybe<LessonHasSubtopicNodeAggregationWhereInput>;
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

export type LessonHasSubtopicUpdateConnectionInput = {
  node?: InputMaybe<TopicUpdateInput>;
};

export type LessonHasSubtopicUpdateFieldInput = {
  where?: InputMaybe<LessonHasSubtopicConnectionWhere>;
  connectOrCreate?: InputMaybe<LessonHasSubtopicConnectOrCreateFieldInput>;
  connect?: InputMaybe<LessonHasSubtopicConnectFieldInput>;
  disconnect?: InputMaybe<LessonHasSubtopicDisconnectFieldInput>;
  create?: InputMaybe<LessonHasSubtopicCreateFieldInput>;
  update?: InputMaybe<LessonHasSubtopicUpdateConnectionInput>;
  delete?: InputMaybe<LessonHasSubtopicDeleteFieldInput>;
};

export type LessonHasTopicAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<LessonHasTopicAggregateInput>>;
  OR?: InputMaybe<Array<LessonHasTopicAggregateInput>>;
  NOT?: InputMaybe<LessonHasTopicAggregateInput>;
  node?: InputMaybe<LessonHasTopicNodeAggregationWhereInput>;
};

export type LessonHasTopicConnectFieldInput = {
  where?: InputMaybe<TopicConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type LessonHasTopicConnectionSort = {
  node?: InputMaybe<TopicSort>;
};

export type LessonHasTopicConnectionWhere = {
  AND?: InputMaybe<Array<LessonHasTopicConnectionWhere>>;
  OR?: InputMaybe<Array<LessonHasTopicConnectionWhere>>;
  NOT?: InputMaybe<LessonHasTopicConnectionWhere>;
  node?: InputMaybe<TopicWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<TopicWhere>;
};

export type LessonHasTopicConnectOrCreateFieldInput = {
  where: TopicConnectOrCreateWhere;
  onCreate: LessonHasTopicConnectOrCreateFieldInputOnCreate;
};

export type LessonHasTopicConnectOrCreateFieldInputOnCreate = {
  node: TopicOnCreateInput;
};

export type LessonHasTopicCreateFieldInput = {
  node: TopicCreateInput;
};

export type LessonHasTopicDeleteFieldInput = {
  where?: InputMaybe<LessonHasTopicConnectionWhere>;
};

export type LessonHasTopicDisconnectFieldInput = {
  where?: InputMaybe<LessonHasTopicConnectionWhere>;
};

export type LessonHasTopicFieldInput = {
  connectOrCreate?: InputMaybe<LessonHasTopicConnectOrCreateFieldInput>;
  connect?: InputMaybe<LessonHasTopicConnectFieldInput>;
  create?: InputMaybe<LessonHasTopicCreateFieldInput>;
};

export type LessonHasTopicNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<LessonHasTopicNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<LessonHasTopicNodeAggregationWhereInput>>;
  NOT?: InputMaybe<LessonHasTopicNodeAggregationWhereInput>;
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

export type LessonHasTopicUpdateConnectionInput = {
  node?: InputMaybe<TopicUpdateInput>;
};

export type LessonHasTopicUpdateFieldInput = {
  where?: InputMaybe<LessonHasTopicConnectionWhere>;
  connectOrCreate?: InputMaybe<LessonHasTopicConnectOrCreateFieldInput>;
  connect?: InputMaybe<LessonHasTopicConnectFieldInput>;
  disconnect?: InputMaybe<LessonHasTopicDisconnectFieldInput>;
  create?: InputMaybe<LessonHasTopicCreateFieldInput>;
  update?: InputMaybe<LessonHasTopicUpdateConnectionInput>;
  delete?: InputMaybe<LessonHasTopicDeleteFieldInput>;
};

export type LessonOnCreateInput = {
  title: Scalars["String"]["input"];
};

export type LessonOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more LessonSort objects to sort Lessons by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<LessonSort>>;
};

export type LessonRelationInput = {
  hasTopic?: InputMaybe<LessonHasTopicCreateFieldInput>;
  hasSubtopic?: InputMaybe<LessonHasSubtopicCreateFieldInput>;
  hasActivities?: InputMaybe<Array<LessonHasActivitiesCreateFieldInput>>;
  wasReacted?: InputMaybe<Array<LessonWasReactedCreateFieldInput>>;
};

/** Fields to sort Lessons by. The order in which sorts are applied is not guaranteed when specifying many fields in one LessonSort object. */
export type LessonSort = {
  id?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
};

export type LessonUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type LessonUpdateInput = {
  title?: InputMaybe<Scalars["String"]["input"]>;
  hasTopic?: InputMaybe<LessonHasTopicUpdateFieldInput>;
  hasSubtopic?: InputMaybe<LessonHasSubtopicUpdateFieldInput>;
  hasActivities?: InputMaybe<Array<LessonHasActivitiesUpdateFieldInput>>;
  wasReacted?: InputMaybe<Array<LessonWasReactedUpdateFieldInput>>;
};

export type LessonWasReactedAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<LessonWasReactedAggregateInput>>;
  OR?: InputMaybe<Array<LessonWasReactedAggregateInput>>;
  NOT?: InputMaybe<LessonWasReactedAggregateInput>;
  node?: InputMaybe<LessonWasReactedNodeAggregationWhereInput>;
  edge?: InputMaybe<ReactedAggregationWhereInput>;
};

export type LessonWasReactedConnectFieldInput = {
  edge: ReactedCreateInput;
  where?: InputMaybe<UserConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<UserConnectInput>>;
};

export type LessonWasReactedConnectionSort = {
  node?: InputMaybe<UserSort>;
  edge?: InputMaybe<ReactedSort>;
};

export type LessonWasReactedConnectionWhere = {
  AND?: InputMaybe<Array<LessonWasReactedConnectionWhere>>;
  OR?: InputMaybe<Array<LessonWasReactedConnectionWhere>>;
  NOT?: InputMaybe<LessonWasReactedConnectionWhere>;
  node?: InputMaybe<UserWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<UserWhere>;
  edge?: InputMaybe<ReactedWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ReactedWhere>;
};

export type LessonWasReactedConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: LessonWasReactedConnectOrCreateFieldInputOnCreate;
};

export type LessonWasReactedConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
  edge: ReactedCreateInput;
};

export type LessonWasReactedCreateFieldInput = {
  edge: ReactedCreateInput;
  node: UserCreateInput;
};

export type LessonWasReactedDeleteFieldInput = {
  where?: InputMaybe<LessonWasReactedConnectionWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type LessonWasReactedDisconnectFieldInput = {
  where?: InputMaybe<LessonWasReactedConnectionWhere>;
  disconnect?: InputMaybe<UserDisconnectInput>;
};

export type LessonWasReactedFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<LessonWasReactedConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<LessonWasReactedConnectFieldInput>>;
  create?: InputMaybe<Array<LessonWasReactedCreateFieldInput>>;
};

export type LessonWasReactedNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<LessonWasReactedNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<LessonWasReactedNodeAggregationWhereInput>>;
  NOT?: InputMaybe<LessonWasReactedNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  clerkId_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  clerkId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  clerkId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  clerkId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  clerkId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  clerkId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  clerkId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  clerkId_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  clerkId_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  clerkId_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  clerkId_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  clerkId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  clerkId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  clerkId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  clerkId_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  clerkId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  clerkId_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  clerkId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  clerkId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  clerkId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  clerkId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  clerkId_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  clerkId_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  clerkId_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  clerkId_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  clerkId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  clerkId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  clerkId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  clerkId_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  clerkId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  clerkId_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  clerkId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  clerkId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  clerkId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  clerkId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LessonWasReactedUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
  edge?: InputMaybe<ReactedUpdateInput>;
};

export type LessonWasReactedUpdateFieldInput = {
  where?: InputMaybe<LessonWasReactedConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<LessonWasReactedConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<LessonWasReactedConnectFieldInput>>;
  disconnect?: InputMaybe<Array<LessonWasReactedDisconnectFieldInput>>;
  create?: InputMaybe<Array<LessonWasReactedCreateFieldInput>>;
  update?: InputMaybe<LessonWasReactedUpdateConnectionInput>;
  delete?: InputMaybe<Array<LessonWasReactedDeleteFieldInput>>;
};

export type LessonWhere = {
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
  OR?: InputMaybe<Array<LessonWhere>>;
  AND?: InputMaybe<Array<LessonWhere>>;
  NOT?: InputMaybe<LessonWhere>;
  hasTopic?: InputMaybe<TopicWhere>;
  hasTopic_NOT?: InputMaybe<TopicWhere>;
  hasTopicConnection?: InputMaybe<LessonHasTopicConnectionWhere>;
  hasTopicConnection_NOT?: InputMaybe<LessonHasTopicConnectionWhere>;
  hasTopicAggregate?: InputMaybe<LessonHasTopicAggregateInput>;
  hasSubtopic?: InputMaybe<TopicWhere>;
  hasSubtopic_NOT?: InputMaybe<TopicWhere>;
  hasSubtopicConnection?: InputMaybe<LessonHasSubtopicConnectionWhere>;
  hasSubtopicConnection_NOT?: InputMaybe<LessonHasSubtopicConnectionWhere>;
  hasSubtopicAggregate?: InputMaybe<LessonHasSubtopicAggregateInput>;
  /** @deprecated Use `hasActivities_SOME` instead. */
  hasActivities?: InputMaybe<ActivityWhere>;
  /** @deprecated Use `hasActivities_NONE` instead. */
  hasActivities_NOT?: InputMaybe<ActivityWhere>;
  /** Return Lessons where all of the related Activities match this filter */
  hasActivities_ALL?: InputMaybe<ActivityWhere>;
  /** Return Lessons where none of the related Activities match this filter */
  hasActivities_NONE?: InputMaybe<ActivityWhere>;
  /** Return Lessons where one of the related Activities match this filter */
  hasActivities_SINGLE?: InputMaybe<ActivityWhere>;
  /** Return Lessons where some of the related Activities match this filter */
  hasActivities_SOME?: InputMaybe<ActivityWhere>;
  /** @deprecated Use `hasActivitiesConnection_SOME` instead. */
  hasActivitiesConnection?: InputMaybe<LessonHasActivitiesConnectionWhere>;
  /** @deprecated Use `hasActivitiesConnection_NONE` instead. */
  hasActivitiesConnection_NOT?: InputMaybe<LessonHasActivitiesConnectionWhere>;
  /** Return Lessons where all of the related LessonHasActivitiesConnections match this filter */
  hasActivitiesConnection_ALL?: InputMaybe<LessonHasActivitiesConnectionWhere>;
  /** Return Lessons where none of the related LessonHasActivitiesConnections match this filter */
  hasActivitiesConnection_NONE?: InputMaybe<LessonHasActivitiesConnectionWhere>;
  /** Return Lessons where one of the related LessonHasActivitiesConnections match this filter */
  hasActivitiesConnection_SINGLE?: InputMaybe<LessonHasActivitiesConnectionWhere>;
  /** Return Lessons where some of the related LessonHasActivitiesConnections match this filter */
  hasActivitiesConnection_SOME?: InputMaybe<LessonHasActivitiesConnectionWhere>;
  hasActivitiesAggregate?: InputMaybe<LessonHasActivitiesAggregateInput>;
  /** @deprecated Use `wasReacted_SOME` instead. */
  wasReacted?: InputMaybe<UserWhere>;
  /** @deprecated Use `wasReacted_NONE` instead. */
  wasReacted_NOT?: InputMaybe<UserWhere>;
  /** Return Lessons where all of the related Users match this filter */
  wasReacted_ALL?: InputMaybe<UserWhere>;
  /** Return Lessons where none of the related Users match this filter */
  wasReacted_NONE?: InputMaybe<UserWhere>;
  /** Return Lessons where one of the related Users match this filter */
  wasReacted_SINGLE?: InputMaybe<UserWhere>;
  /** Return Lessons where some of the related Users match this filter */
  wasReacted_SOME?: InputMaybe<UserWhere>;
  /** @deprecated Use `wasReactedConnection_SOME` instead. */
  wasReactedConnection?: InputMaybe<LessonWasReactedConnectionWhere>;
  /** @deprecated Use `wasReactedConnection_NONE` instead. */
  wasReactedConnection_NOT?: InputMaybe<LessonWasReactedConnectionWhere>;
  /** Return Lessons where all of the related LessonWasReactedConnections match this filter */
  wasReactedConnection_ALL?: InputMaybe<LessonWasReactedConnectionWhere>;
  /** Return Lessons where none of the related LessonWasReactedConnections match this filter */
  wasReactedConnection_NONE?: InputMaybe<LessonWasReactedConnectionWhere>;
  /** Return Lessons where one of the related LessonWasReactedConnections match this filter */
  wasReactedConnection_SINGLE?: InputMaybe<LessonWasReactedConnectionWhere>;
  /** Return Lessons where some of the related LessonWasReactedConnections match this filter */
  wasReactedConnection_SOME?: InputMaybe<LessonWasReactedConnectionWhere>;
  wasReactedAggregate?: InputMaybe<LessonWasReactedAggregateInput>;
};

export type ReactedAggregationWhereInput = {
  AND?: InputMaybe<Array<ReactedAggregationWhereInput>>;
  OR?: InputMaybe<Array<ReactedAggregationWhereInput>>;
  NOT?: InputMaybe<ReactedAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  type_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  type_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  type_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  type_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  type_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  type_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  type_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  type_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ReactedCreateInput = {
  type: Scalars["String"]["input"];
};

export type ReactedSort = {
  type?: InputMaybe<SortDirection>;
};

export type ReactedUpdateInput = {
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type ReactedWhere = {
  type?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  type_NOT?: InputMaybe<Scalars["String"]["input"]>;
  type_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  type_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  type_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  type_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  type_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  type_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  type_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  type_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<ReactedWhere>>;
  AND?: InputMaybe<Array<ReactedWhere>>;
  NOT?: InputMaybe<ReactedWhere>;
};

export type TopicConnectOrCreateWhere = {
  node: TopicUniqueWhere;
};

export type TopicConnectWhere = {
  node: TopicWhere;
};

export type TopicCreateInput = {
  title: Scalars["String"]["input"];
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
};

export type UserConnectInput = {
  hasLessons?: InputMaybe<Array<UserHasLessonsConnectFieldInput>>;
  reactedToLessons?: InputMaybe<Array<UserReactedToLessonsConnectFieldInput>>;
  reportedActivities?: InputMaybe<
    Array<UserReportedActivitiesConnectFieldInput>
  >;
};

export type UserConnectOrCreateInput = {
  hasLessons?: InputMaybe<Array<UserHasLessonsConnectOrCreateFieldInput>>;
  reactedToLessons?: InputMaybe<
    Array<UserReactedToLessonsConnectOrCreateFieldInput>
  >;
};

export type UserConnectOrCreateWhere = {
  node: UserUniqueWhere;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreateInput = {
  clerkId: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  hasLessons?: InputMaybe<UserHasLessonsFieldInput>;
  reactedToLessons?: InputMaybe<UserReactedToLessonsFieldInput>;
  reportedActivities?: InputMaybe<UserReportedActivitiesFieldInput>;
};

export type UserDeleteInput = {
  hasLessons?: InputMaybe<Array<UserHasLessonsDeleteFieldInput>>;
  reactedToLessons?: InputMaybe<Array<UserReactedToLessonsDeleteFieldInput>>;
  reportedActivities?: InputMaybe<
    Array<UserReportedActivitiesDeleteFieldInput>
  >;
};

export type UserDisconnectInput = {
  hasLessons?: InputMaybe<Array<UserHasLessonsDisconnectFieldInput>>;
  reactedToLessons?: InputMaybe<
    Array<UserReactedToLessonsDisconnectFieldInput>
  >;
  reportedActivities?: InputMaybe<
    Array<UserReportedActivitiesDisconnectFieldInput>
  >;
};

export type UserHasLessonsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<UserHasLessonsAggregateInput>>;
  OR?: InputMaybe<Array<UserHasLessonsAggregateInput>>;
  NOT?: InputMaybe<UserHasLessonsAggregateInput>;
  node?: InputMaybe<UserHasLessonsNodeAggregationWhereInput>;
};

export type UserHasLessonsConnectFieldInput = {
  where?: InputMaybe<LessonConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<LessonConnectInput>>;
};

export type UserHasLessonsConnectionSort = {
  node?: InputMaybe<LessonSort>;
};

export type UserHasLessonsConnectionWhere = {
  AND?: InputMaybe<Array<UserHasLessonsConnectionWhere>>;
  OR?: InputMaybe<Array<UserHasLessonsConnectionWhere>>;
  NOT?: InputMaybe<UserHasLessonsConnectionWhere>;
  node?: InputMaybe<LessonWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<LessonWhere>;
};

export type UserHasLessonsConnectOrCreateFieldInput = {
  where: LessonConnectOrCreateWhere;
  onCreate: UserHasLessonsConnectOrCreateFieldInputOnCreate;
};

export type UserHasLessonsConnectOrCreateFieldInputOnCreate = {
  node: LessonOnCreateInput;
};

export type UserHasLessonsCreateFieldInput = {
  node: LessonCreateInput;
};

export type UserHasLessonsDeleteFieldInput = {
  where?: InputMaybe<UserHasLessonsConnectionWhere>;
  delete?: InputMaybe<LessonDeleteInput>;
};

export type UserHasLessonsDisconnectFieldInput = {
  where?: InputMaybe<UserHasLessonsConnectionWhere>;
  disconnect?: InputMaybe<LessonDisconnectInput>;
};

export type UserHasLessonsFieldInput = {
  connectOrCreate?: InputMaybe<Array<UserHasLessonsConnectOrCreateFieldInput>>;
  connect?: InputMaybe<Array<UserHasLessonsConnectFieldInput>>;
  create?: InputMaybe<Array<UserHasLessonsCreateFieldInput>>;
};

export type UserHasLessonsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserHasLessonsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserHasLessonsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserHasLessonsNodeAggregationWhereInput>;
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

export type UserHasLessonsUpdateConnectionInput = {
  node?: InputMaybe<LessonUpdateInput>;
};

export type UserHasLessonsUpdateFieldInput = {
  where?: InputMaybe<UserHasLessonsConnectionWhere>;
  connectOrCreate?: InputMaybe<Array<UserHasLessonsConnectOrCreateFieldInput>>;
  connect?: InputMaybe<Array<UserHasLessonsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserHasLessonsDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserHasLessonsCreateFieldInput>>;
  update?: InputMaybe<UserHasLessonsUpdateConnectionInput>;
  delete?: InputMaybe<Array<UserHasLessonsDeleteFieldInput>>;
};

export type UserOnCreateInput = {
  clerkId: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
};

export type UserOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
};

export type UserReactedToLessonsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<UserReactedToLessonsAggregateInput>>;
  OR?: InputMaybe<Array<UserReactedToLessonsAggregateInput>>;
  NOT?: InputMaybe<UserReactedToLessonsAggregateInput>;
  node?: InputMaybe<UserReactedToLessonsNodeAggregationWhereInput>;
  edge?: InputMaybe<ReactedAggregationWhereInput>;
};

export type UserReactedToLessonsConnectFieldInput = {
  edge: ReactedCreateInput;
  where?: InputMaybe<LessonConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<LessonConnectInput>>;
};

export type UserReactedToLessonsConnectionSort = {
  node?: InputMaybe<LessonSort>;
  edge?: InputMaybe<ReactedSort>;
};

export type UserReactedToLessonsConnectionWhere = {
  AND?: InputMaybe<Array<UserReactedToLessonsConnectionWhere>>;
  OR?: InputMaybe<Array<UserReactedToLessonsConnectionWhere>>;
  NOT?: InputMaybe<UserReactedToLessonsConnectionWhere>;
  node?: InputMaybe<LessonWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<LessonWhere>;
  edge?: InputMaybe<ReactedWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ReactedWhere>;
};

export type UserReactedToLessonsConnectOrCreateFieldInput = {
  where: LessonConnectOrCreateWhere;
  onCreate: UserReactedToLessonsConnectOrCreateFieldInputOnCreate;
};

export type UserReactedToLessonsConnectOrCreateFieldInputOnCreate = {
  node: LessonOnCreateInput;
  edge: ReactedCreateInput;
};

export type UserReactedToLessonsCreateFieldInput = {
  edge: ReactedCreateInput;
  node: LessonCreateInput;
};

export type UserReactedToLessonsDeleteFieldInput = {
  where?: InputMaybe<UserReactedToLessonsConnectionWhere>;
  delete?: InputMaybe<LessonDeleteInput>;
};

export type UserReactedToLessonsDisconnectFieldInput = {
  where?: InputMaybe<UserReactedToLessonsConnectionWhere>;
  disconnect?: InputMaybe<LessonDisconnectInput>;
};

export type UserReactedToLessonsFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<UserReactedToLessonsConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<UserReactedToLessonsConnectFieldInput>>;
  create?: InputMaybe<Array<UserReactedToLessonsCreateFieldInput>>;
};

export type UserReactedToLessonsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserReactedToLessonsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserReactedToLessonsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserReactedToLessonsNodeAggregationWhereInput>;
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

export type UserReactedToLessonsUpdateConnectionInput = {
  node?: InputMaybe<LessonUpdateInput>;
  edge?: InputMaybe<ReactedUpdateInput>;
};

export type UserReactedToLessonsUpdateFieldInput = {
  where?: InputMaybe<UserReactedToLessonsConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<UserReactedToLessonsConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<UserReactedToLessonsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserReactedToLessonsDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserReactedToLessonsCreateFieldInput>>;
  update?: InputMaybe<UserReactedToLessonsUpdateConnectionInput>;
  delete?: InputMaybe<Array<UserReactedToLessonsDeleteFieldInput>>;
};

export type UserRelationInput = {
  hasLessons?: InputMaybe<Array<UserHasLessonsCreateFieldInput>>;
  reactedToLessons?: InputMaybe<Array<UserReactedToLessonsCreateFieldInput>>;
  reportedActivities?: InputMaybe<
    Array<UserReportedActivitiesCreateFieldInput>
  >;
};

export type UserReportedActivitiesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<UserReportedActivitiesAggregateInput>>;
  OR?: InputMaybe<Array<UserReportedActivitiesAggregateInput>>;
  NOT?: InputMaybe<UserReportedActivitiesAggregateInput>;
  node?: InputMaybe<UserReportedActivitiesNodeAggregationWhereInput>;
};

export type UserReportedActivitiesConnectFieldInput = {
  where?: InputMaybe<ActivityConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type UserReportedActivitiesConnectionSort = {
  node?: InputMaybe<ActivitySort>;
};

export type UserReportedActivitiesConnectionWhere = {
  AND?: InputMaybe<Array<UserReportedActivitiesConnectionWhere>>;
  OR?: InputMaybe<Array<UserReportedActivitiesConnectionWhere>>;
  NOT?: InputMaybe<UserReportedActivitiesConnectionWhere>;
  node?: InputMaybe<ActivityWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ActivityWhere>;
};

export type UserReportedActivitiesCreateFieldInput = {
  node: ActivityCreateInput;
};

export type UserReportedActivitiesDeleteFieldInput = {
  where?: InputMaybe<UserReportedActivitiesConnectionWhere>;
};

export type UserReportedActivitiesDisconnectFieldInput = {
  where?: InputMaybe<UserReportedActivitiesConnectionWhere>;
};

export type UserReportedActivitiesFieldInput = {
  connect?: InputMaybe<Array<UserReportedActivitiesConnectFieldInput>>;
  create?: InputMaybe<Array<UserReportedActivitiesCreateFieldInput>>;
};

export type UserReportedActivitiesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserReportedActivitiesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserReportedActivitiesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserReportedActivitiesNodeAggregationWhereInput>;
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

export type UserReportedActivitiesUpdateConnectionInput = {
  node?: InputMaybe<ActivityUpdateInput>;
};

export type UserReportedActivitiesUpdateFieldInput = {
  where?: InputMaybe<UserReportedActivitiesConnectionWhere>;
  connect?: InputMaybe<Array<UserReportedActivitiesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserReportedActivitiesDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserReportedActivitiesCreateFieldInput>>;
  update?: InputMaybe<UserReportedActivitiesUpdateConnectionInput>;
  delete?: InputMaybe<Array<UserReportedActivitiesDeleteFieldInput>>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  id?: InputMaybe<SortDirection>;
  clerkId?: InputMaybe<SortDirection>;
  email?: InputMaybe<SortDirection>;
};

export type UserUniqueWhere = {
  clerkId?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserUpdateInput = {
  clerkId?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  hasLessons?: InputMaybe<Array<UserHasLessonsUpdateFieldInput>>;
  reactedToLessons?: InputMaybe<Array<UserReactedToLessonsUpdateFieldInput>>;
  reportedActivities?: InputMaybe<
    Array<UserReportedActivitiesUpdateFieldInput>
  >;
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
  /** @deprecated Use `hasLessons_SOME` instead. */
  hasLessons?: InputMaybe<LessonWhere>;
  /** @deprecated Use `hasLessons_NONE` instead. */
  hasLessons_NOT?: InputMaybe<LessonWhere>;
  /** Return Users where all of the related Lessons match this filter */
  hasLessons_ALL?: InputMaybe<LessonWhere>;
  /** Return Users where none of the related Lessons match this filter */
  hasLessons_NONE?: InputMaybe<LessonWhere>;
  /** Return Users where one of the related Lessons match this filter */
  hasLessons_SINGLE?: InputMaybe<LessonWhere>;
  /** Return Users where some of the related Lessons match this filter */
  hasLessons_SOME?: InputMaybe<LessonWhere>;
  /** @deprecated Use `hasLessonsConnection_SOME` instead. */
  hasLessonsConnection?: InputMaybe<UserHasLessonsConnectionWhere>;
  /** @deprecated Use `hasLessonsConnection_NONE` instead. */
  hasLessonsConnection_NOT?: InputMaybe<UserHasLessonsConnectionWhere>;
  /** Return Users where all of the related UserHasLessonsConnections match this filter */
  hasLessonsConnection_ALL?: InputMaybe<UserHasLessonsConnectionWhere>;
  /** Return Users where none of the related UserHasLessonsConnections match this filter */
  hasLessonsConnection_NONE?: InputMaybe<UserHasLessonsConnectionWhere>;
  /** Return Users where one of the related UserHasLessonsConnections match this filter */
  hasLessonsConnection_SINGLE?: InputMaybe<UserHasLessonsConnectionWhere>;
  /** Return Users where some of the related UserHasLessonsConnections match this filter */
  hasLessonsConnection_SOME?: InputMaybe<UserHasLessonsConnectionWhere>;
  hasLessonsAggregate?: InputMaybe<UserHasLessonsAggregateInput>;
  /** @deprecated Use `reactedToLessons_SOME` instead. */
  reactedToLessons?: InputMaybe<LessonWhere>;
  /** @deprecated Use `reactedToLessons_NONE` instead. */
  reactedToLessons_NOT?: InputMaybe<LessonWhere>;
  /** Return Users where all of the related Lessons match this filter */
  reactedToLessons_ALL?: InputMaybe<LessonWhere>;
  /** Return Users where none of the related Lessons match this filter */
  reactedToLessons_NONE?: InputMaybe<LessonWhere>;
  /** Return Users where one of the related Lessons match this filter */
  reactedToLessons_SINGLE?: InputMaybe<LessonWhere>;
  /** Return Users where some of the related Lessons match this filter */
  reactedToLessons_SOME?: InputMaybe<LessonWhere>;
  /** @deprecated Use `reactedToLessonsConnection_SOME` instead. */
  reactedToLessonsConnection?: InputMaybe<UserReactedToLessonsConnectionWhere>;
  /** @deprecated Use `reactedToLessonsConnection_NONE` instead. */
  reactedToLessonsConnection_NOT?: InputMaybe<UserReactedToLessonsConnectionWhere>;
  /** Return Users where all of the related UserReactedToLessonsConnections match this filter */
  reactedToLessonsConnection_ALL?: InputMaybe<UserReactedToLessonsConnectionWhere>;
  /** Return Users where none of the related UserReactedToLessonsConnections match this filter */
  reactedToLessonsConnection_NONE?: InputMaybe<UserReactedToLessonsConnectionWhere>;
  /** Return Users where one of the related UserReactedToLessonsConnections match this filter */
  reactedToLessonsConnection_SINGLE?: InputMaybe<UserReactedToLessonsConnectionWhere>;
  /** Return Users where some of the related UserReactedToLessonsConnections match this filter */
  reactedToLessonsConnection_SOME?: InputMaybe<UserReactedToLessonsConnectionWhere>;
  reactedToLessonsAggregate?: InputMaybe<UserReactedToLessonsAggregateInput>;
  /** @deprecated Use `reportedActivities_SOME` instead. */
  reportedActivities?: InputMaybe<ActivityWhere>;
  /** @deprecated Use `reportedActivities_NONE` instead. */
  reportedActivities_NOT?: InputMaybe<ActivityWhere>;
  /** Return Users where all of the related Activities match this filter */
  reportedActivities_ALL?: InputMaybe<ActivityWhere>;
  /** Return Users where none of the related Activities match this filter */
  reportedActivities_NONE?: InputMaybe<ActivityWhere>;
  /** Return Users where one of the related Activities match this filter */
  reportedActivities_SINGLE?: InputMaybe<ActivityWhere>;
  /** Return Users where some of the related Activities match this filter */
  reportedActivities_SOME?: InputMaybe<ActivityWhere>;
  /** @deprecated Use `reportedActivitiesConnection_SOME` instead. */
  reportedActivitiesConnection?: InputMaybe<UserReportedActivitiesConnectionWhere>;
  /** @deprecated Use `reportedActivitiesConnection_NONE` instead. */
  reportedActivitiesConnection_NOT?: InputMaybe<UserReportedActivitiesConnectionWhere>;
  /** Return Users where all of the related UserReportedActivitiesConnections match this filter */
  reportedActivitiesConnection_ALL?: InputMaybe<UserReportedActivitiesConnectionWhere>;
  /** Return Users where none of the related UserReportedActivitiesConnections match this filter */
  reportedActivitiesConnection_NONE?: InputMaybe<UserReportedActivitiesConnectionWhere>;
  /** Return Users where one of the related UserReportedActivitiesConnections match this filter */
  reportedActivitiesConnection_SINGLE?: InputMaybe<UserReportedActivitiesConnectionWhere>;
  /** Return Users where some of the related UserReportedActivitiesConnections match this filter */
  reportedActivitiesConnection_SOME?: InputMaybe<UserReportedActivitiesConnectionWhere>;
  reportedActivitiesAggregate?: InputMaybe<UserReportedActivitiesAggregateInput>;
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

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateTopicsMutationResponse>;
  public delete(args: {
    where?: TopicWhere;

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

export interface LessonAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  title?: boolean;
}

export declare class LessonModel {
  public find(args?: {
    where?: LessonWhere;

    options?: LessonOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Lesson[]>;
  public create(args: {
    input: LessonCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateLessonsMutationResponse>;
  public update(args: {
    where?: LessonWhere;
    update?: LessonUpdateInput;
    connect?: LessonConnectInput;
    disconnect?: LessonDisconnectInput;
    create?: LessonCreateInput;
    connectOrCreate?: LessonConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateLessonsMutationResponse>;
  public delete(args: {
    where?: LessonWhere;
    delete?: LessonDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: LessonWhere;

    aggregate: LessonAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<LessonAggregateSelection>;
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
  Lesson: LessonModel;
  Activity: ActivityModel;
  User: UserModel;
}
