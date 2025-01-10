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
  /** A date and time, represented as an ISO-8601 string */
  DateTime: { input: any; output: any };
};

export type Query = {
  __typename?: "Query";
  topics: Array<Topic>;
  topicsConnection: TopicsConnection;
  topicsAggregate: TopicAggregateSelection;
  lessons: Array<Lesson>;
  lessonsConnection: LessonsConnection;
  lessonsAggregate: LessonAggregateSelection;
  keywords: Array<Keyword>;
  keywordsConnection: KeywordsConnection;
  keywordsAggregate: KeywordAggregateSelection;
  collections: Array<Collection>;
  collectionsConnection: CollectionsConnection;
  collectionsAggregate: CollectionAggregateSelection;
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

export type QueryKeywordsArgs = {
  where?: InputMaybe<KeywordWhere>;
  options?: InputMaybe<KeywordOptions>;
};

export type QueryKeywordsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<KeywordWhere>;
  sort?: InputMaybe<Array<InputMaybe<KeywordSort>>>;
};

export type QueryKeywordsAggregateArgs = {
  where?: InputMaybe<KeywordWhere>;
};

export type QueryCollectionsArgs = {
  where?: InputMaybe<CollectionWhere>;
  options?: InputMaybe<CollectionOptions>;
};

export type QueryCollectionsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<CollectionWhere>;
  sort?: InputMaybe<Array<InputMaybe<CollectionSort>>>;
};

export type QueryCollectionsAggregateArgs = {
  where?: InputMaybe<CollectionWhere>;
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
  createKeywords: CreateKeywordsMutationResponse;
  deleteKeywords: DeleteInfo;
  updateKeywords: UpdateKeywordsMutationResponse;
  createCollections: CreateCollectionsMutationResponse;
  deleteCollections: DeleteInfo;
  updateCollections: UpdateCollectionsMutationResponse;
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

export type MutationCreateKeywordsArgs = {
  input: Array<KeywordCreateInput>;
};

export type MutationDeleteKeywordsArgs = {
  where?: InputMaybe<KeywordWhere>;
};

export type MutationUpdateKeywordsArgs = {
  where?: InputMaybe<KeywordWhere>;
  update?: InputMaybe<KeywordUpdateInput>;
};

export type MutationCreateCollectionsArgs = {
  input: Array<CollectionCreateInput>;
};

export type MutationDeleteCollectionsArgs = {
  where?: InputMaybe<CollectionWhere>;
  delete?: InputMaybe<CollectionDeleteInput>;
};

export type MutationUpdateCollectionsArgs = {
  where?: InputMaybe<CollectionWhere>;
  update?: InputMaybe<CollectionUpdateInput>;
  connect?: InputMaybe<CollectionConnectInput>;
  disconnect?: InputMaybe<CollectionDisconnectInput>;
  create?: InputMaybe<CollectionRelationInput>;
  delete?: InputMaybe<CollectionDeleteInput>;
  connectOrCreate?: InputMaybe<CollectionConnectOrCreateInput>;
};

export type MutationCreateActivitiesArgs = {
  input: Array<ActivityCreateInput>;
};

export type MutationDeleteActivitiesArgs = {
  where?: InputMaybe<ActivityWhere>;
  delete?: InputMaybe<ActivityDeleteInput>;
};

export type MutationUpdateActivitiesArgs = {
  where?: InputMaybe<ActivityWhere>;
  update?: InputMaybe<ActivityUpdateInput>;
  connect?: InputMaybe<ActivityConnectInput>;
  disconnect?: InputMaybe<ActivityDisconnectInput>;
  create?: InputMaybe<ActivityRelationInput>;
  delete?: InputMaybe<ActivityDeleteInput>;
  connectOrCreate?: InputMaybe<ActivityConnectOrCreateInput>;
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
  order: Scalars["Int"]["output"];
  description: Scalars["String"]["output"];
  options: Array<Scalars["String"]["output"]>;
  answer: Scalars["String"]["output"];
  comment: Scalars["String"]["output"];
  reportCount?: Maybe<Scalars["Int"]["output"]>;
  wasAttemptedAggregate?: Maybe<ActivityUserWasAttemptedAggregationSelection>;
  wasAttempted: Array<User>;
  wasAttemptedConnection: ActivityWasAttemptedConnection;
};

export type ActivityWasAttemptedAggregateArgs = {
  where?: InputMaybe<UserWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ActivityWasAttemptedArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ActivityWasAttemptedConnectionArgs = {
  where?: InputMaybe<ActivityWasAttemptedConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<ActivityWasAttemptedConnectionSort>>;
};

export type ActivityAggregateSelection = {
  __typename?: "ActivityAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  order: IntAggregateSelection;
  description: StringAggregateSelection;
  answer: StringAggregateSelection;
  comment: StringAggregateSelection;
  reportCount: IntAggregateSelection;
};

/**
 * The edge properties for the following fields:
 * * Activity.wasAttempted
 * * User.attemptedActivities
 */
export type ActivityAttempt = {
  __typename?: "ActivityAttempt";
  attemptedAt: Scalars["DateTime"]["output"];
  isCorrect: Scalars["Boolean"]["output"];
  timeTaken?: Maybe<Scalars["Int"]["output"]>;
};

export type ActivityEdge = {
  __typename?: "ActivityEdge";
  cursor: Scalars["String"]["output"];
  node: Activity;
};

export type ActivityUserWasAttemptedAggregationSelection = {
  __typename?: "ActivityUserWasAttemptedAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ActivityUserWasAttemptedNodeAggregateSelection>;
  edge?: Maybe<ActivityUserWasAttemptedEdgeAggregateSelection>;
};

export type ActivityUserWasAttemptedEdgeAggregateSelection = {
  __typename?: "ActivityUserWasAttemptedEdgeAggregateSelection";
  attemptedAt: DateTimeAggregateSelection;
  timeTaken: IntAggregateSelection;
};

export type ActivityUserWasAttemptedNodeAggregateSelection = {
  __typename?: "ActivityUserWasAttemptedNodeAggregateSelection";
  id: IdAggregateSelection;
  clerkId: StringAggregateSelection;
  email: StringAggregateSelection;
};

export type ActivityWasAttemptedConnection = {
  __typename?: "ActivityWasAttemptedConnection";
  edges: Array<ActivityWasAttemptedRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type ActivityWasAttemptedRelationship = {
  __typename?: "ActivityWasAttemptedRelationship";
  cursor: Scalars["String"]["output"];
  node: User;
  properties: ActivityAttempt;
};

export type Collection = {
  __typename?: "Collection";
  id?: Maybe<Scalars["ID"]["output"]>;
  title: Scalars["String"]["output"];
  icon: Scalars["String"]["output"];
  color: Scalars["String"]["output"];
  parentAggregate?: Maybe<CollectionCollectionParentAggregationSelection>;
  parent?: Maybe<Collection>;
  parentConnection: CollectionParentConnection;
  hasLessonsAggregate?: Maybe<CollectionLessonHasLessonsAggregationSelection>;
  hasLessons: Array<Lesson>;
  hasLessonsConnection: CollectionHasLessonsConnection;
};

export type CollectionParentAggregateArgs = {
  where?: InputMaybe<CollectionWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CollectionParentArgs = {
  where?: InputMaybe<CollectionWhere>;
  options?: InputMaybe<CollectionOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CollectionParentConnectionArgs = {
  where?: InputMaybe<CollectionParentConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<CollectionParentConnectionSort>>;
};

export type CollectionHasLessonsAggregateArgs = {
  where?: InputMaybe<LessonWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CollectionHasLessonsArgs = {
  where?: InputMaybe<LessonWhere>;
  options?: InputMaybe<LessonOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CollectionHasLessonsConnectionArgs = {
  where?: InputMaybe<CollectionHasLessonsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<CollectionHasLessonsConnectionSort>>;
};

export type CollectionAggregateSelection = {
  __typename?: "CollectionAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  title: StringAggregateSelection;
  icon: StringAggregateSelection;
  color: StringAggregateSelection;
};

export type CollectionCollectionParentAggregationSelection = {
  __typename?: "CollectionCollectionParentAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<CollectionCollectionParentNodeAggregateSelection>;
};

export type CollectionCollectionParentNodeAggregateSelection = {
  __typename?: "CollectionCollectionParentNodeAggregateSelection";
  id: IdAggregateSelection;
  title: StringAggregateSelection;
  icon: StringAggregateSelection;
  color: StringAggregateSelection;
};

export type CollectionEdge = {
  __typename?: "CollectionEdge";
  cursor: Scalars["String"]["output"];
  node: Collection;
};

export type CollectionHasLessonsConnection = {
  __typename?: "CollectionHasLessonsConnection";
  edges: Array<CollectionHasLessonsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type CollectionHasLessonsRelationship = {
  __typename?: "CollectionHasLessonsRelationship";
  cursor: Scalars["String"]["output"];
  node: Lesson;
};

export type CollectionLessonHasLessonsAggregationSelection = {
  __typename?: "CollectionLessonHasLessonsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<CollectionLessonHasLessonsNodeAggregateSelection>;
};

export type CollectionLessonHasLessonsNodeAggregateSelection = {
  __typename?: "CollectionLessonHasLessonsNodeAggregateSelection";
  id: IdAggregateSelection;
  title: StringAggregateSelection;
  level: IntAggregateSelection;
  createdAt: DateTimeAggregateSelection;
};

export type CollectionParentConnection = {
  __typename?: "CollectionParentConnection";
  edges: Array<CollectionParentRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type CollectionParentRelationship = {
  __typename?: "CollectionParentRelationship";
  cursor: Scalars["String"]["output"];
  node: Collection;
};

export type CollectionsConnection = {
  __typename?: "CollectionsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<CollectionEdge>;
};

export type CreateActivitiesMutationResponse = {
  __typename?: "CreateActivitiesMutationResponse";
  info: CreateInfo;
  activities: Array<Activity>;
};

export type CreateCollectionsMutationResponse = {
  __typename?: "CreateCollectionsMutationResponse";
  info: CreateInfo;
  collections: Array<Collection>;
};

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: "CreateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
};

export type CreateKeywordsMutationResponse = {
  __typename?: "CreateKeywordsMutationResponse";
  info: CreateInfo;
  keywords: Array<Keyword>;
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

export type DateTimeAggregateSelection = {
  __typename?: "DateTimeAggregateSelection";
  min?: Maybe<Scalars["DateTime"]["output"]>;
  max?: Maybe<Scalars["DateTime"]["output"]>;
};

/** Information about the number of nodes and relationships deleted during a delete mutation */
export type DeleteInfo = {
  __typename?: "DeleteInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type FloatAggregateSelection = {
  __typename?: "FloatAggregateSelection";
  max?: Maybe<Scalars["Float"]["output"]>;
  min?: Maybe<Scalars["Float"]["output"]>;
  average?: Maybe<Scalars["Float"]["output"]>;
  sum?: Maybe<Scalars["Float"]["output"]>;
};

/**
 * The edge properties for the following fields:
 * * User.hasLessons
 */
export type HasLesson = {
  __typename?: "HasLesson";
  type: Scalars["String"]["output"];
  hasAt: Scalars["DateTime"]["output"];
};

export type IdAggregateSelection = {
  __typename?: "IDAggregateSelection";
  shortest?: Maybe<Scalars["ID"]["output"]>;
  longest?: Maybe<Scalars["ID"]["output"]>;
};

export type IntAggregateSelection = {
  __typename?: "IntAggregateSelection";
  max?: Maybe<Scalars["Int"]["output"]>;
  min?: Maybe<Scalars["Int"]["output"]>;
  average?: Maybe<Scalars["Float"]["output"]>;
  sum?: Maybe<Scalars["Int"]["output"]>;
};

export type Keyword = {
  __typename?: "Keyword";
  id?: Maybe<Scalars["ID"]["output"]>;
  name: Scalars["String"]["output"];
};

export type KeywordAggregateSelection = {
  __typename?: "KeywordAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type KeywordEdge = {
  __typename?: "KeywordEdge";
  cursor: Scalars["String"]["output"];
  node: Keyword;
};

export type KeywordsConnection = {
  __typename?: "KeywordsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<KeywordEdge>;
};

export type Lesson = {
  __typename?: "Lesson";
  id?: Maybe<Scalars["ID"]["output"]>;
  title: Scalars["String"]["output"];
  level: Scalars["Int"]["output"];
  isPublic: Scalars["Boolean"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  wasReactedCount: Scalars["Int"]["output"];
  hasTopicAggregate?: Maybe<LessonTopicHasTopicAggregationSelection>;
  hasTopic: Topic;
  hasTopicConnection: LessonHasTopicConnection;
  hasSubtopicAggregate?: Maybe<LessonTopicHasSubtopicAggregationSelection>;
  hasSubtopic: Topic;
  hasSubtopicConnection: LessonHasSubtopicConnection;
  hasKeywordsAggregate?: Maybe<LessonKeywordHasKeywordsAggregationSelection>;
  hasKeywords: Array<Keyword>;
  hasKeywordsConnection: LessonHasKeywordsConnection;
  hasActivitiesAggregate?: Maybe<LessonActivityHasActivitiesAggregationSelection>;
  hasActivities: Array<Activity>;
  hasActivitiesConnection: LessonHasActivitiesConnection;
  wasReactedAggregate?: Maybe<LessonUserWasReactedAggregationSelection>;
  wasReacted: Array<User>;
  wasReactedConnection: LessonWasReactedConnection;
  wasCompletedAggregate?: Maybe<LessonUserWasCompletedAggregationSelection>;
  wasCompleted: Array<User>;
  wasCompletedConnection: LessonWasCompletedConnection;
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

export type LessonHasKeywordsAggregateArgs = {
  where?: InputMaybe<KeywordWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type LessonHasKeywordsArgs = {
  where?: InputMaybe<KeywordWhere>;
  options?: InputMaybe<KeywordOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type LessonHasKeywordsConnectionArgs = {
  where?: InputMaybe<LessonHasKeywordsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<LessonHasKeywordsConnectionSort>>;
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

export type LessonWasCompletedAggregateArgs = {
  where?: InputMaybe<UserWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type LessonWasCompletedArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type LessonWasCompletedConnectionArgs = {
  where?: InputMaybe<LessonWasCompletedConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<LessonWasCompletedConnectionSort>>;
};

export type LessonActivityHasActivitiesAggregationSelection = {
  __typename?: "LessonActivityHasActivitiesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<LessonActivityHasActivitiesNodeAggregateSelection>;
};

export type LessonActivityHasActivitiesNodeAggregateSelection = {
  __typename?: "LessonActivityHasActivitiesNodeAggregateSelection";
  id: IdAggregateSelection;
  order: IntAggregateSelection;
  description: StringAggregateSelection;
  answer: StringAggregateSelection;
  comment: StringAggregateSelection;
  reportCount: IntAggregateSelection;
};

export type LessonAggregateSelection = {
  __typename?: "LessonAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  title: StringAggregateSelection;
  level: IntAggregateSelection;
  createdAt: DateTimeAggregateSelection;
};

/**
 * The edge properties for the following fields:
 * * Lesson.wasCompleted
 * * User.completedLessons
 */
export type LessonCompletion = {
  __typename?: "LessonCompletion";
  completedAt: Scalars["DateTime"]["output"];
  score: Scalars["Float"]["output"];
  timeTaken: Scalars["Int"]["output"];
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

export type LessonHasKeywordsConnection = {
  __typename?: "LessonHasKeywordsConnection";
  edges: Array<LessonHasKeywordsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type LessonHasKeywordsRelationship = {
  __typename?: "LessonHasKeywordsRelationship";
  cursor: Scalars["String"]["output"];
  node: Keyword;
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

export type LessonKeywordHasKeywordsAggregationSelection = {
  __typename?: "LessonKeywordHasKeywordsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<LessonKeywordHasKeywordsNodeAggregateSelection>;
};

export type LessonKeywordHasKeywordsNodeAggregateSelection = {
  __typename?: "LessonKeywordHasKeywordsNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
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

export type LessonUserWasCompletedAggregationSelection = {
  __typename?: "LessonUserWasCompletedAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<LessonUserWasCompletedNodeAggregateSelection>;
  edge?: Maybe<LessonUserWasCompletedEdgeAggregateSelection>;
};

export type LessonUserWasCompletedEdgeAggregateSelection = {
  __typename?: "LessonUserWasCompletedEdgeAggregateSelection";
  completedAt: DateTimeAggregateSelection;
  score: FloatAggregateSelection;
  timeTaken: IntAggregateSelection;
};

export type LessonUserWasCompletedNodeAggregateSelection = {
  __typename?: "LessonUserWasCompletedNodeAggregateSelection";
  id: IdAggregateSelection;
  clerkId: StringAggregateSelection;
  email: StringAggregateSelection;
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
  reactedAt: DateTimeAggregateSelection;
};

export type LessonUserWasReactedNodeAggregateSelection = {
  __typename?: "LessonUserWasReactedNodeAggregateSelection";
  id: IdAggregateSelection;
  clerkId: StringAggregateSelection;
  email: StringAggregateSelection;
};

export type LessonWasCompletedConnection = {
  __typename?: "LessonWasCompletedConnection";
  edges: Array<LessonWasCompletedRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type LessonWasCompletedRelationship = {
  __typename?: "LessonWasCompletedRelationship";
  cursor: Scalars["String"]["output"];
  node: User;
  properties: LessonCompletion;
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
  reactedAt: Scalars["DateTime"]["output"];
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

export type UpdateCollectionsMutationResponse = {
  __typename?: "UpdateCollectionsMutationResponse";
  info: UpdateInfo;
  collections: Array<Collection>;
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

export type UpdateKeywordsMutationResponse = {
  __typename?: "UpdateKeywordsMutationResponse";
  info: UpdateInfo;
  keywords: Array<Keyword>;
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
  dailyActivityCount: Scalars["Int"]["output"];
  weeklyCorrectAnswers: Scalars["Int"]["output"];
  hasLessonsAggregate?: Maybe<UserLessonHasLessonsAggregationSelection>;
  hasLessons: Array<Lesson>;
  hasLessonsConnection: UserHasLessonsConnection;
  hasCollectionsAggregate?: Maybe<UserCollectionHasCollectionsAggregationSelection>;
  hasCollections: Array<Collection>;
  hasCollectionsConnection: UserHasCollectionsConnection;
  reactedToLessonsAggregate?: Maybe<UserLessonReactedToLessonsAggregationSelection>;
  reactedToLessons: Array<Lesson>;
  reactedToLessonsConnection: UserReactedToLessonsConnection;
  reportedActivitiesAggregate?: Maybe<UserActivityReportedActivitiesAggregationSelection>;
  reportedActivities: Array<Activity>;
  reportedActivitiesConnection: UserReportedActivitiesConnection;
  attemptedActivitiesAggregate?: Maybe<UserActivityAttemptedActivitiesAggregationSelection>;
  attemptedActivities: Array<Activity>;
  attemptedActivitiesConnection: UserAttemptedActivitiesConnection;
  completedLessonsAggregate?: Maybe<UserLessonCompletedLessonsAggregationSelection>;
  completedLessons: Array<Lesson>;
  completedLessonsConnection: UserCompletedLessonsConnection;
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

export type UserHasCollectionsAggregateArgs = {
  where?: InputMaybe<CollectionWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserHasCollectionsArgs = {
  where?: InputMaybe<CollectionWhere>;
  options?: InputMaybe<CollectionOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserHasCollectionsConnectionArgs = {
  where?: InputMaybe<UserHasCollectionsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<UserHasCollectionsConnectionSort>>;
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

export type UserAttemptedActivitiesAggregateArgs = {
  where?: InputMaybe<ActivityWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserAttemptedActivitiesArgs = {
  where?: InputMaybe<ActivityWhere>;
  options?: InputMaybe<ActivityOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserAttemptedActivitiesConnectionArgs = {
  where?: InputMaybe<UserAttemptedActivitiesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<UserAttemptedActivitiesConnectionSort>>;
};

export type UserCompletedLessonsAggregateArgs = {
  where?: InputMaybe<LessonWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserCompletedLessonsArgs = {
  where?: InputMaybe<LessonWhere>;
  options?: InputMaybe<LessonOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserCompletedLessonsConnectionArgs = {
  where?: InputMaybe<UserCompletedLessonsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<UserCompletedLessonsConnectionSort>>;
};

export type UserActivityAttemptedActivitiesAggregationSelection = {
  __typename?: "UserActivityAttemptedActivitiesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserActivityAttemptedActivitiesNodeAggregateSelection>;
  edge?: Maybe<UserActivityAttemptedActivitiesEdgeAggregateSelection>;
};

export type UserActivityAttemptedActivitiesEdgeAggregateSelection = {
  __typename?: "UserActivityAttemptedActivitiesEdgeAggregateSelection";
  attemptedAt: DateTimeAggregateSelection;
  timeTaken: IntAggregateSelection;
};

export type UserActivityAttemptedActivitiesNodeAggregateSelection = {
  __typename?: "UserActivityAttemptedActivitiesNodeAggregateSelection";
  id: IdAggregateSelection;
  order: IntAggregateSelection;
  description: StringAggregateSelection;
  answer: StringAggregateSelection;
  comment: StringAggregateSelection;
  reportCount: IntAggregateSelection;
};

export type UserActivityReportedActivitiesAggregationSelection = {
  __typename?: "UserActivityReportedActivitiesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserActivityReportedActivitiesNodeAggregateSelection>;
};

export type UserActivityReportedActivitiesNodeAggregateSelection = {
  __typename?: "UserActivityReportedActivitiesNodeAggregateSelection";
  id: IdAggregateSelection;
  order: IntAggregateSelection;
  description: StringAggregateSelection;
  answer: StringAggregateSelection;
  comment: StringAggregateSelection;
  reportCount: IntAggregateSelection;
};

export type UserAggregateSelection = {
  __typename?: "UserAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  clerkId: StringAggregateSelection;
  email: StringAggregateSelection;
};

export type UserAttemptedActivitiesConnection = {
  __typename?: "UserAttemptedActivitiesConnection";
  edges: Array<UserAttemptedActivitiesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type UserAttemptedActivitiesRelationship = {
  __typename?: "UserAttemptedActivitiesRelationship";
  cursor: Scalars["String"]["output"];
  node: Activity;
  properties: ActivityAttempt;
};

export type UserCollectionHasCollectionsAggregationSelection = {
  __typename?: "UserCollectionHasCollectionsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserCollectionHasCollectionsNodeAggregateSelection>;
};

export type UserCollectionHasCollectionsNodeAggregateSelection = {
  __typename?: "UserCollectionHasCollectionsNodeAggregateSelection";
  id: IdAggregateSelection;
  title: StringAggregateSelection;
  icon: StringAggregateSelection;
  color: StringAggregateSelection;
};

export type UserCompletedLessonsConnection = {
  __typename?: "UserCompletedLessonsConnection";
  edges: Array<UserCompletedLessonsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type UserCompletedLessonsRelationship = {
  __typename?: "UserCompletedLessonsRelationship";
  cursor: Scalars["String"]["output"];
  node: Lesson;
  properties: LessonCompletion;
};

export type UserEdge = {
  __typename?: "UserEdge";
  cursor: Scalars["String"]["output"];
  node: User;
};

export type UserHasCollectionsConnection = {
  __typename?: "UserHasCollectionsConnection";
  edges: Array<UserHasCollectionsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type UserHasCollectionsRelationship = {
  __typename?: "UserHasCollectionsRelationship";
  cursor: Scalars["String"]["output"];
  node: Collection;
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
  properties: HasLesson;
};

export type UserLessonCompletedLessonsAggregationSelection = {
  __typename?: "UserLessonCompletedLessonsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserLessonCompletedLessonsNodeAggregateSelection>;
  edge?: Maybe<UserLessonCompletedLessonsEdgeAggregateSelection>;
};

export type UserLessonCompletedLessonsEdgeAggregateSelection = {
  __typename?: "UserLessonCompletedLessonsEdgeAggregateSelection";
  completedAt: DateTimeAggregateSelection;
  score: FloatAggregateSelection;
  timeTaken: IntAggregateSelection;
};

export type UserLessonCompletedLessonsNodeAggregateSelection = {
  __typename?: "UserLessonCompletedLessonsNodeAggregateSelection";
  id: IdAggregateSelection;
  title: StringAggregateSelection;
  level: IntAggregateSelection;
  createdAt: DateTimeAggregateSelection;
};

export type UserLessonHasLessonsAggregationSelection = {
  __typename?: "UserLessonHasLessonsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserLessonHasLessonsNodeAggregateSelection>;
  edge?: Maybe<UserLessonHasLessonsEdgeAggregateSelection>;
};

export type UserLessonHasLessonsEdgeAggregateSelection = {
  __typename?: "UserLessonHasLessonsEdgeAggregateSelection";
  type: StringAggregateSelection;
  hasAt: DateTimeAggregateSelection;
};

export type UserLessonHasLessonsNodeAggregateSelection = {
  __typename?: "UserLessonHasLessonsNodeAggregateSelection";
  id: IdAggregateSelection;
  title: StringAggregateSelection;
  level: IntAggregateSelection;
  createdAt: DateTimeAggregateSelection;
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
  reactedAt: DateTimeAggregateSelection;
};

export type UserLessonReactedToLessonsNodeAggregateSelection = {
  __typename?: "UserLessonReactedToLessonsNodeAggregateSelection";
  id: IdAggregateSelection;
  title: StringAggregateSelection;
  level: IntAggregateSelection;
  createdAt: DateTimeAggregateSelection;
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

export type ActivityAttemptAggregationWhereInput = {
  AND?: InputMaybe<Array<ActivityAttemptAggregationWhereInput>>;
  OR?: InputMaybe<Array<ActivityAttemptAggregationWhereInput>>;
  NOT?: InputMaybe<ActivityAttemptAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  attemptedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  attemptedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  attemptedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  attemptedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  attemptedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  attemptedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  attemptedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  attemptedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  attemptedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  attemptedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  attemptedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  attemptedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  attemptedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  attemptedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  attemptedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timeTaken_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timeTaken_GT?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timeTaken_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timeTaken_LT?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timeTaken_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type ActivityAttemptCreateInput = {
  attemptedAt: Scalars["DateTime"]["input"];
  isCorrect: Scalars["Boolean"]["input"];
  timeTaken?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ActivityAttemptSort = {
  attemptedAt?: InputMaybe<SortDirection>;
  isCorrect?: InputMaybe<SortDirection>;
  timeTaken?: InputMaybe<SortDirection>;
};

export type ActivityAttemptUpdateInput = {
  attemptedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  isCorrect?: InputMaybe<Scalars["Boolean"]["input"]>;
  timeTaken?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ActivityAttemptWhere = {
  attemptedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  attemptedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  attemptedAt_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  attemptedAt_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  attemptedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  attemptedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  attemptedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  attemptedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  isCorrect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  isCorrect_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  timeTaken?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  timeTaken_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  timeTaken_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  timeTaken_LT?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_GT?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  OR?: InputMaybe<Array<ActivityAttemptWhere>>;
  AND?: InputMaybe<Array<ActivityAttemptWhere>>;
  NOT?: InputMaybe<ActivityAttemptWhere>;
};

export type ActivityConnectInput = {
  wasAttempted?: InputMaybe<Array<ActivityWasAttemptedConnectFieldInput>>;
};

export type ActivityConnectOrCreateInput = {
  wasAttempted?: InputMaybe<
    Array<ActivityWasAttemptedConnectOrCreateFieldInput>
  >;
};

export type ActivityConnectWhere = {
  node: ActivityWhere;
};

export type ActivityCreateInput = {
  order: Scalars["Int"]["input"];
  description: Scalars["String"]["input"];
  options: Array<Scalars["String"]["input"]>;
  answer: Scalars["String"]["input"];
  comment: Scalars["String"]["input"];
  reportCount?: InputMaybe<Scalars["Int"]["input"]>;
  wasAttempted?: InputMaybe<ActivityWasAttemptedFieldInput>;
};

export type ActivityDeleteInput = {
  wasAttempted?: InputMaybe<Array<ActivityWasAttemptedDeleteFieldInput>>;
};

export type ActivityDisconnectInput = {
  wasAttempted?: InputMaybe<Array<ActivityWasAttemptedDisconnectFieldInput>>;
};

export type ActivityOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more ActivitySort objects to sort Activities by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ActivitySort>>;
};

export type ActivityRelationInput = {
  wasAttempted?: InputMaybe<Array<ActivityWasAttemptedCreateFieldInput>>;
};

/** Fields to sort Activities by. The order in which sorts are applied is not guaranteed when specifying many fields in one ActivitySort object. */
export type ActivitySort = {
  id?: InputMaybe<SortDirection>;
  order?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  answer?: InputMaybe<SortDirection>;
  comment?: InputMaybe<SortDirection>;
  reportCount?: InputMaybe<SortDirection>;
};

export type ActivityUpdateInput = {
  order?: InputMaybe<Scalars["Int"]["input"]>;
  order_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  order_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  options?: InputMaybe<Array<Scalars["String"]["input"]>>;
  options_POP?: InputMaybe<Scalars["Int"]["input"]>;
  options_PUSH?: InputMaybe<Array<Scalars["String"]["input"]>>;
  answer?: InputMaybe<Scalars["String"]["input"]>;
  comment?: InputMaybe<Scalars["String"]["input"]>;
  reportCount?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  wasAttempted?: InputMaybe<Array<ActivityWasAttemptedUpdateFieldInput>>;
};

export type ActivityWasAttemptedAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<ActivityWasAttemptedAggregateInput>>;
  OR?: InputMaybe<Array<ActivityWasAttemptedAggregateInput>>;
  NOT?: InputMaybe<ActivityWasAttemptedAggregateInput>;
  node?: InputMaybe<ActivityWasAttemptedNodeAggregationWhereInput>;
  edge?: InputMaybe<ActivityAttemptAggregationWhereInput>;
};

export type ActivityWasAttemptedConnectFieldInput = {
  edge: ActivityAttemptCreateInput;
  where?: InputMaybe<UserConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<UserConnectInput>>;
};

export type ActivityWasAttemptedConnectionSort = {
  node?: InputMaybe<UserSort>;
  edge?: InputMaybe<ActivityAttemptSort>;
};

export type ActivityWasAttemptedConnectionWhere = {
  AND?: InputMaybe<Array<ActivityWasAttemptedConnectionWhere>>;
  OR?: InputMaybe<Array<ActivityWasAttemptedConnectionWhere>>;
  NOT?: InputMaybe<ActivityWasAttemptedConnectionWhere>;
  node?: InputMaybe<UserWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<UserWhere>;
  edge?: InputMaybe<ActivityAttemptWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ActivityAttemptWhere>;
};

export type ActivityWasAttemptedConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: ActivityWasAttemptedConnectOrCreateFieldInputOnCreate;
};

export type ActivityWasAttemptedConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
  edge: ActivityAttemptCreateInput;
};

export type ActivityWasAttemptedCreateFieldInput = {
  edge: ActivityAttemptCreateInput;
  node: UserCreateInput;
};

export type ActivityWasAttemptedDeleteFieldInput = {
  where?: InputMaybe<ActivityWasAttemptedConnectionWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type ActivityWasAttemptedDisconnectFieldInput = {
  where?: InputMaybe<ActivityWasAttemptedConnectionWhere>;
  disconnect?: InputMaybe<UserDisconnectInput>;
};

export type ActivityWasAttemptedFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<ActivityWasAttemptedConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<ActivityWasAttemptedConnectFieldInput>>;
  create?: InputMaybe<Array<ActivityWasAttemptedCreateFieldInput>>;
};

export type ActivityWasAttemptedNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ActivityWasAttemptedNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ActivityWasAttemptedNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ActivityWasAttemptedNodeAggregationWhereInput>;
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

export type ActivityWasAttemptedUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
  edge?: InputMaybe<ActivityAttemptUpdateInput>;
};

export type ActivityWasAttemptedUpdateFieldInput = {
  where?: InputMaybe<ActivityWasAttemptedConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<ActivityWasAttemptedConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<ActivityWasAttemptedConnectFieldInput>>;
  disconnect?: InputMaybe<Array<ActivityWasAttemptedDisconnectFieldInput>>;
  create?: InputMaybe<Array<ActivityWasAttemptedCreateFieldInput>>;
  update?: InputMaybe<ActivityWasAttemptedUpdateConnectionInput>;
  delete?: InputMaybe<Array<ActivityWasAttemptedDeleteFieldInput>>;
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
  order?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  order_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  order_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  order_NOT_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  order_LT?: InputMaybe<Scalars["Int"]["input"]>;
  order_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  order_GT?: InputMaybe<Scalars["Int"]["input"]>;
  order_GTE?: InputMaybe<Scalars["Int"]["input"]>;
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
  reportCount?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  reportCount_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  reportCount_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  reportCount_LT?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_GT?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  OR?: InputMaybe<Array<ActivityWhere>>;
  AND?: InputMaybe<Array<ActivityWhere>>;
  NOT?: InputMaybe<ActivityWhere>;
  /** @deprecated Use `wasAttempted_SOME` instead. */
  wasAttempted?: InputMaybe<UserWhere>;
  /** @deprecated Use `wasAttempted_NONE` instead. */
  wasAttempted_NOT?: InputMaybe<UserWhere>;
  /** Return Activities where all of the related Users match this filter */
  wasAttempted_ALL?: InputMaybe<UserWhere>;
  /** Return Activities where none of the related Users match this filter */
  wasAttempted_NONE?: InputMaybe<UserWhere>;
  /** Return Activities where one of the related Users match this filter */
  wasAttempted_SINGLE?: InputMaybe<UserWhere>;
  /** Return Activities where some of the related Users match this filter */
  wasAttempted_SOME?: InputMaybe<UserWhere>;
  /** @deprecated Use `wasAttemptedConnection_SOME` instead. */
  wasAttemptedConnection?: InputMaybe<ActivityWasAttemptedConnectionWhere>;
  /** @deprecated Use `wasAttemptedConnection_NONE` instead. */
  wasAttemptedConnection_NOT?: InputMaybe<ActivityWasAttemptedConnectionWhere>;
  /** Return Activities where all of the related ActivityWasAttemptedConnections match this filter */
  wasAttemptedConnection_ALL?: InputMaybe<ActivityWasAttemptedConnectionWhere>;
  /** Return Activities where none of the related ActivityWasAttemptedConnections match this filter */
  wasAttemptedConnection_NONE?: InputMaybe<ActivityWasAttemptedConnectionWhere>;
  /** Return Activities where one of the related ActivityWasAttemptedConnections match this filter */
  wasAttemptedConnection_SINGLE?: InputMaybe<ActivityWasAttemptedConnectionWhere>;
  /** Return Activities where some of the related ActivityWasAttemptedConnections match this filter */
  wasAttemptedConnection_SOME?: InputMaybe<ActivityWasAttemptedConnectionWhere>;
  wasAttemptedAggregate?: InputMaybe<ActivityWasAttemptedAggregateInput>;
};

export type CollectionConnectInput = {
  parent?: InputMaybe<CollectionParentConnectFieldInput>;
  hasLessons?: InputMaybe<Array<CollectionHasLessonsConnectFieldInput>>;
};

export type CollectionConnectOrCreateInput = {
  hasLessons?: InputMaybe<Array<CollectionHasLessonsConnectOrCreateFieldInput>>;
};

export type CollectionConnectWhere = {
  node: CollectionWhere;
};

export type CollectionCreateInput = {
  title: Scalars["String"]["input"];
  icon: Scalars["String"]["input"];
  color: Scalars["String"]["input"];
  parent?: InputMaybe<CollectionParentFieldInput>;
  hasLessons?: InputMaybe<CollectionHasLessonsFieldInput>;
};

export type CollectionDeleteInput = {
  parent?: InputMaybe<CollectionParentDeleteFieldInput>;
  hasLessons?: InputMaybe<Array<CollectionHasLessonsDeleteFieldInput>>;
};

export type CollectionDisconnectInput = {
  parent?: InputMaybe<CollectionParentDisconnectFieldInput>;
  hasLessons?: InputMaybe<Array<CollectionHasLessonsDisconnectFieldInput>>;
};

export type CollectionHasLessonsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<CollectionHasLessonsAggregateInput>>;
  OR?: InputMaybe<Array<CollectionHasLessonsAggregateInput>>;
  NOT?: InputMaybe<CollectionHasLessonsAggregateInput>;
  node?: InputMaybe<CollectionHasLessonsNodeAggregationWhereInput>;
};

export type CollectionHasLessonsConnectFieldInput = {
  where?: InputMaybe<LessonConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<LessonConnectInput>>;
};

export type CollectionHasLessonsConnectionSort = {
  node?: InputMaybe<LessonSort>;
};

export type CollectionHasLessonsConnectionWhere = {
  AND?: InputMaybe<Array<CollectionHasLessonsConnectionWhere>>;
  OR?: InputMaybe<Array<CollectionHasLessonsConnectionWhere>>;
  NOT?: InputMaybe<CollectionHasLessonsConnectionWhere>;
  node?: InputMaybe<LessonWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<LessonWhere>;
};

export type CollectionHasLessonsConnectOrCreateFieldInput = {
  where: LessonConnectOrCreateWhere;
  onCreate: CollectionHasLessonsConnectOrCreateFieldInputOnCreate;
};

export type CollectionHasLessonsConnectOrCreateFieldInputOnCreate = {
  node: LessonOnCreateInput;
};

export type CollectionHasLessonsCreateFieldInput = {
  node: LessonCreateInput;
};

export type CollectionHasLessonsDeleteFieldInput = {
  where?: InputMaybe<CollectionHasLessonsConnectionWhere>;
  delete?: InputMaybe<LessonDeleteInput>;
};

export type CollectionHasLessonsDisconnectFieldInput = {
  where?: InputMaybe<CollectionHasLessonsConnectionWhere>;
  disconnect?: InputMaybe<LessonDisconnectInput>;
};

export type CollectionHasLessonsFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<CollectionHasLessonsConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<CollectionHasLessonsConnectFieldInput>>;
  create?: InputMaybe<Array<CollectionHasLessonsCreateFieldInput>>;
};

export type CollectionHasLessonsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CollectionHasLessonsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CollectionHasLessonsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CollectionHasLessonsNodeAggregationWhereInput>;
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
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  level_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  level_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  level_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  level_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  level_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  level_GT?: InputMaybe<Scalars["Int"]["input"]>;
  level_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  level_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  level_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  level_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  level_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  level_LT?: InputMaybe<Scalars["Int"]["input"]>;
  level_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  level_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  level_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  level_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  level_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type CollectionHasLessonsUpdateConnectionInput = {
  node?: InputMaybe<LessonUpdateInput>;
};

export type CollectionHasLessonsUpdateFieldInput = {
  where?: InputMaybe<CollectionHasLessonsConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<CollectionHasLessonsConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<CollectionHasLessonsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<CollectionHasLessonsDisconnectFieldInput>>;
  create?: InputMaybe<Array<CollectionHasLessonsCreateFieldInput>>;
  update?: InputMaybe<CollectionHasLessonsUpdateConnectionInput>;
  delete?: InputMaybe<Array<CollectionHasLessonsDeleteFieldInput>>;
};

export type CollectionOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more CollectionSort objects to sort Collections by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CollectionSort>>;
};

export type CollectionParentAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<CollectionParentAggregateInput>>;
  OR?: InputMaybe<Array<CollectionParentAggregateInput>>;
  NOT?: InputMaybe<CollectionParentAggregateInput>;
  node?: InputMaybe<CollectionParentNodeAggregationWhereInput>;
};

export type CollectionParentConnectFieldInput = {
  where?: InputMaybe<CollectionConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<CollectionConnectInput>;
};

export type CollectionParentConnectionSort = {
  node?: InputMaybe<CollectionSort>;
};

export type CollectionParentConnectionWhere = {
  AND?: InputMaybe<Array<CollectionParentConnectionWhere>>;
  OR?: InputMaybe<Array<CollectionParentConnectionWhere>>;
  NOT?: InputMaybe<CollectionParentConnectionWhere>;
  node?: InputMaybe<CollectionWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CollectionWhere>;
};

export type CollectionParentCreateFieldInput = {
  node: CollectionCreateInput;
};

export type CollectionParentDeleteFieldInput = {
  where?: InputMaybe<CollectionParentConnectionWhere>;
  delete?: InputMaybe<CollectionDeleteInput>;
};

export type CollectionParentDisconnectFieldInput = {
  where?: InputMaybe<CollectionParentConnectionWhere>;
  disconnect?: InputMaybe<CollectionDisconnectInput>;
};

export type CollectionParentFieldInput = {
  connect?: InputMaybe<CollectionParentConnectFieldInput>;
  create?: InputMaybe<CollectionParentCreateFieldInput>;
};

export type CollectionParentNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CollectionParentNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CollectionParentNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CollectionParentNodeAggregationWhereInput>;
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
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  icon_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  icon_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  icon_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  icon_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  icon_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  icon_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  icon_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  icon_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  icon_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  icon_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  icon_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  icon_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  icon_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  icon_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  icon_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  icon_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  icon_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  icon_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  icon_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  icon_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  color_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  color_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  color_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  color_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  color_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  color_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  color_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  color_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  color_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  color_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  color_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  color_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  color_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  color_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  color_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  color_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  color_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  color_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  color_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  color_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CollectionParentUpdateConnectionInput = {
  node?: InputMaybe<CollectionUpdateInput>;
};

export type CollectionParentUpdateFieldInput = {
  where?: InputMaybe<CollectionParentConnectionWhere>;
  connect?: InputMaybe<CollectionParentConnectFieldInput>;
  disconnect?: InputMaybe<CollectionParentDisconnectFieldInput>;
  create?: InputMaybe<CollectionParentCreateFieldInput>;
  update?: InputMaybe<CollectionParentUpdateConnectionInput>;
  delete?: InputMaybe<CollectionParentDeleteFieldInput>;
};

export type CollectionRelationInput = {
  parent?: InputMaybe<CollectionParentCreateFieldInput>;
  hasLessons?: InputMaybe<Array<CollectionHasLessonsCreateFieldInput>>;
};

/** Fields to sort Collections by. The order in which sorts are applied is not guaranteed when specifying many fields in one CollectionSort object. */
export type CollectionSort = {
  id?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  icon?: InputMaybe<SortDirection>;
  color?: InputMaybe<SortDirection>;
};

export type CollectionUpdateInput = {
  title?: InputMaybe<Scalars["String"]["input"]>;
  icon?: InputMaybe<Scalars["String"]["input"]>;
  color?: InputMaybe<Scalars["String"]["input"]>;
  parent?: InputMaybe<CollectionParentUpdateFieldInput>;
  hasLessons?: InputMaybe<Array<CollectionHasLessonsUpdateFieldInput>>;
};

export type CollectionWhere = {
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
  icon?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  icon_NOT?: InputMaybe<Scalars["String"]["input"]>;
  icon_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  icon_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  icon_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  icon_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  icon_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  icon_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  icon_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  icon_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  color?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  color_NOT?: InputMaybe<Scalars["String"]["input"]>;
  color_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  color_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  color_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  color_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  color_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  color_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  color_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  color_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<CollectionWhere>>;
  AND?: InputMaybe<Array<CollectionWhere>>;
  NOT?: InputMaybe<CollectionWhere>;
  parent?: InputMaybe<CollectionWhere>;
  parent_NOT?: InputMaybe<CollectionWhere>;
  parentConnection?: InputMaybe<CollectionParentConnectionWhere>;
  parentConnection_NOT?: InputMaybe<CollectionParentConnectionWhere>;
  parentAggregate?: InputMaybe<CollectionParentAggregateInput>;
  /** @deprecated Use `hasLessons_SOME` instead. */
  hasLessons?: InputMaybe<LessonWhere>;
  /** @deprecated Use `hasLessons_NONE` instead. */
  hasLessons_NOT?: InputMaybe<LessonWhere>;
  /** Return Collections where all of the related Lessons match this filter */
  hasLessons_ALL?: InputMaybe<LessonWhere>;
  /** Return Collections where none of the related Lessons match this filter */
  hasLessons_NONE?: InputMaybe<LessonWhere>;
  /** Return Collections where one of the related Lessons match this filter */
  hasLessons_SINGLE?: InputMaybe<LessonWhere>;
  /** Return Collections where some of the related Lessons match this filter */
  hasLessons_SOME?: InputMaybe<LessonWhere>;
  /** @deprecated Use `hasLessonsConnection_SOME` instead. */
  hasLessonsConnection?: InputMaybe<CollectionHasLessonsConnectionWhere>;
  /** @deprecated Use `hasLessonsConnection_NONE` instead. */
  hasLessonsConnection_NOT?: InputMaybe<CollectionHasLessonsConnectionWhere>;
  /** Return Collections where all of the related CollectionHasLessonsConnections match this filter */
  hasLessonsConnection_ALL?: InputMaybe<CollectionHasLessonsConnectionWhere>;
  /** Return Collections where none of the related CollectionHasLessonsConnections match this filter */
  hasLessonsConnection_NONE?: InputMaybe<CollectionHasLessonsConnectionWhere>;
  /** Return Collections where one of the related CollectionHasLessonsConnections match this filter */
  hasLessonsConnection_SINGLE?: InputMaybe<CollectionHasLessonsConnectionWhere>;
  /** Return Collections where some of the related CollectionHasLessonsConnections match this filter */
  hasLessonsConnection_SOME?: InputMaybe<CollectionHasLessonsConnectionWhere>;
  hasLessonsAggregate?: InputMaybe<CollectionHasLessonsAggregateInput>;
};

export type HasLessonAggregationWhereInput = {
  AND?: InputMaybe<Array<HasLessonAggregationWhereInput>>;
  OR?: InputMaybe<Array<HasLessonAggregationWhereInput>>;
  NOT?: InputMaybe<HasLessonAggregationWhereInput>;
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
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hasAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  hasAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  hasAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hasAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  hasAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  hasAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hasAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  hasAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  hasAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hasAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  hasAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  hasAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hasAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  hasAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  hasAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type HasLessonCreateInput = {
  type: Scalars["String"]["input"];
  hasAt: Scalars["DateTime"]["input"];
};

export type HasLessonSort = {
  type?: InputMaybe<SortDirection>;
  hasAt?: InputMaybe<SortDirection>;
};

export type HasLessonUpdateInput = {
  type?: InputMaybe<Scalars["String"]["input"]>;
  hasAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type HasLessonWhere = {
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
  hasAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  hasAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  hasAt_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  hasAt_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  hasAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  hasAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  hasAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  hasAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  OR?: InputMaybe<Array<HasLessonWhere>>;
  AND?: InputMaybe<Array<HasLessonWhere>>;
  NOT?: InputMaybe<HasLessonWhere>;
};

export type KeywordConnectOrCreateWhere = {
  node: KeywordUniqueWhere;
};

export type KeywordConnectWhere = {
  node: KeywordWhere;
};

export type KeywordCreateInput = {
  name: Scalars["String"]["input"];
};

export type KeywordOnCreateInput = {
  name: Scalars["String"]["input"];
};

export type KeywordOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more KeywordSort objects to sort Keywords by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<KeywordSort>>;
};

/** Fields to sort Keywords by. The order in which sorts are applied is not guaranteed when specifying many fields in one KeywordSort object. */
export type KeywordSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type KeywordUniqueWhere = {
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type KeywordUpdateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type KeywordWhere = {
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
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<KeywordWhere>>;
  AND?: InputMaybe<Array<KeywordWhere>>;
  NOT?: InputMaybe<KeywordWhere>;
};

export type LessonCompletionAggregationWhereInput = {
  AND?: InputMaybe<Array<LessonCompletionAggregationWhereInput>>;
  OR?: InputMaybe<Array<LessonCompletionAggregationWhereInput>>;
  NOT?: InputMaybe<LessonCompletionAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  completedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  completedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  completedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  completedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  completedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  completedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  completedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  completedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  completedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  completedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  completedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  completedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  completedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  completedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  completedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_GT?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_LT?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timeTaken_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timeTaken_GT?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timeTaken_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timeTaken_LT?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timeTaken_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type LessonCompletionCreateInput = {
  completedAt: Scalars["DateTime"]["input"];
  score: Scalars["Float"]["input"];
  timeTaken: Scalars["Int"]["input"];
};

export type LessonCompletionSort = {
  completedAt?: InputMaybe<SortDirection>;
  score?: InputMaybe<SortDirection>;
  timeTaken?: InputMaybe<SortDirection>;
};

export type LessonCompletionUpdateInput = {
  completedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  score?: InputMaybe<Scalars["Float"]["input"]>;
  score_ADD?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUBTRACT?: InputMaybe<Scalars["Float"]["input"]>;
  score_MULTIPLY?: InputMaybe<Scalars["Float"]["input"]>;
  score_DIVIDE?: InputMaybe<Scalars["Float"]["input"]>;
  timeTaken?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LessonCompletionWhere = {
  completedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  completedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  completedAt_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  completedAt_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  completedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  completedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  completedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  completedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  score?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  score_NOT?: InputMaybe<Scalars["Float"]["input"]>;
  score_IN?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  score_NOT_IN?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  score_LT?: InputMaybe<Scalars["Float"]["input"]>;
  score_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_GT?: InputMaybe<Scalars["Float"]["input"]>;
  score_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  timeTaken?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  timeTaken_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  timeTaken_NOT_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  timeTaken_LT?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_GT?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  OR?: InputMaybe<Array<LessonCompletionWhere>>;
  AND?: InputMaybe<Array<LessonCompletionWhere>>;
  NOT?: InputMaybe<LessonCompletionWhere>;
};

export type LessonConnectInput = {
  hasTopic?: InputMaybe<LessonHasTopicConnectFieldInput>;
  hasSubtopic?: InputMaybe<LessonHasSubtopicConnectFieldInput>;
  hasKeywords?: InputMaybe<Array<LessonHasKeywordsConnectFieldInput>>;
  hasActivities?: InputMaybe<Array<LessonHasActivitiesConnectFieldInput>>;
  wasReacted?: InputMaybe<Array<LessonWasReactedConnectFieldInput>>;
  wasCompleted?: InputMaybe<Array<LessonWasCompletedConnectFieldInput>>;
};

export type LessonConnectOrCreateInput = {
  hasTopic?: InputMaybe<LessonHasTopicConnectOrCreateFieldInput>;
  hasSubtopic?: InputMaybe<LessonHasSubtopicConnectOrCreateFieldInput>;
  hasKeywords?: InputMaybe<Array<LessonHasKeywordsConnectOrCreateFieldInput>>;
  wasReacted?: InputMaybe<Array<LessonWasReactedConnectOrCreateFieldInput>>;
  wasCompleted?: InputMaybe<Array<LessonWasCompletedConnectOrCreateFieldInput>>;
};

export type LessonConnectOrCreateWhere = {
  node: LessonUniqueWhere;
};

export type LessonConnectWhere = {
  node: LessonWhere;
};

export type LessonCreateInput = {
  title: Scalars["String"]["input"];
  level: Scalars["Int"]["input"];
  isPublic: Scalars["Boolean"]["input"];
  createdAt: Scalars["DateTime"]["input"];
  hasTopic?: InputMaybe<LessonHasTopicFieldInput>;
  hasSubtopic?: InputMaybe<LessonHasSubtopicFieldInput>;
  hasKeywords?: InputMaybe<LessonHasKeywordsFieldInput>;
  hasActivities?: InputMaybe<LessonHasActivitiesFieldInput>;
  wasReacted?: InputMaybe<LessonWasReactedFieldInput>;
  wasCompleted?: InputMaybe<LessonWasCompletedFieldInput>;
};

export type LessonDeleteInput = {
  hasTopic?: InputMaybe<LessonHasTopicDeleteFieldInput>;
  hasSubtopic?: InputMaybe<LessonHasSubtopicDeleteFieldInput>;
  hasKeywords?: InputMaybe<Array<LessonHasKeywordsDeleteFieldInput>>;
  hasActivities?: InputMaybe<Array<LessonHasActivitiesDeleteFieldInput>>;
  wasReacted?: InputMaybe<Array<LessonWasReactedDeleteFieldInput>>;
  wasCompleted?: InputMaybe<Array<LessonWasCompletedDeleteFieldInput>>;
};

export type LessonDisconnectInput = {
  hasTopic?: InputMaybe<LessonHasTopicDisconnectFieldInput>;
  hasSubtopic?: InputMaybe<LessonHasSubtopicDisconnectFieldInput>;
  hasKeywords?: InputMaybe<Array<LessonHasKeywordsDisconnectFieldInput>>;
  hasActivities?: InputMaybe<Array<LessonHasActivitiesDisconnectFieldInput>>;
  wasReacted?: InputMaybe<Array<LessonWasReactedDisconnectFieldInput>>;
  wasCompleted?: InputMaybe<Array<LessonWasCompletedDisconnectFieldInput>>;
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
  connect?: InputMaybe<Array<ActivityConnectInput>>;
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
  delete?: InputMaybe<ActivityDeleteInput>;
};

export type LessonHasActivitiesDisconnectFieldInput = {
  where?: InputMaybe<LessonHasActivitiesConnectionWhere>;
  disconnect?: InputMaybe<ActivityDisconnectInput>;
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
  order_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  order_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  order_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  order_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  order_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  order_GT?: InputMaybe<Scalars["Int"]["input"]>;
  order_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  order_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  order_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  order_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  order_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  order_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  order_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  order_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  order_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  order_LT?: InputMaybe<Scalars["Int"]["input"]>;
  order_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  order_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  order_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  order_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  order_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  order_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  order_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  order_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  order_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
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
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reportCount_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reportCount_GT?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reportCount_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reportCount_LT?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reportCount_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
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

export type LessonHasKeywordsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<LessonHasKeywordsAggregateInput>>;
  OR?: InputMaybe<Array<LessonHasKeywordsAggregateInput>>;
  NOT?: InputMaybe<LessonHasKeywordsAggregateInput>;
  node?: InputMaybe<LessonHasKeywordsNodeAggregationWhereInput>;
};

export type LessonHasKeywordsConnectFieldInput = {
  where?: InputMaybe<KeywordConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type LessonHasKeywordsConnectionSort = {
  node?: InputMaybe<KeywordSort>;
};

export type LessonHasKeywordsConnectionWhere = {
  AND?: InputMaybe<Array<LessonHasKeywordsConnectionWhere>>;
  OR?: InputMaybe<Array<LessonHasKeywordsConnectionWhere>>;
  NOT?: InputMaybe<LessonHasKeywordsConnectionWhere>;
  node?: InputMaybe<KeywordWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<KeywordWhere>;
};

export type LessonHasKeywordsConnectOrCreateFieldInput = {
  where: KeywordConnectOrCreateWhere;
  onCreate: LessonHasKeywordsConnectOrCreateFieldInputOnCreate;
};

export type LessonHasKeywordsConnectOrCreateFieldInputOnCreate = {
  node: KeywordOnCreateInput;
};

export type LessonHasKeywordsCreateFieldInput = {
  node: KeywordCreateInput;
};

export type LessonHasKeywordsDeleteFieldInput = {
  where?: InputMaybe<LessonHasKeywordsConnectionWhere>;
};

export type LessonHasKeywordsDisconnectFieldInput = {
  where?: InputMaybe<LessonHasKeywordsConnectionWhere>;
};

export type LessonHasKeywordsFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<LessonHasKeywordsConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<LessonHasKeywordsConnectFieldInput>>;
  create?: InputMaybe<Array<LessonHasKeywordsCreateFieldInput>>;
};

export type LessonHasKeywordsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<LessonHasKeywordsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<LessonHasKeywordsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<LessonHasKeywordsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LessonHasKeywordsUpdateConnectionInput = {
  node?: InputMaybe<KeywordUpdateInput>;
};

export type LessonHasKeywordsUpdateFieldInput = {
  where?: InputMaybe<LessonHasKeywordsConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<LessonHasKeywordsConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<LessonHasKeywordsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<LessonHasKeywordsDisconnectFieldInput>>;
  create?: InputMaybe<Array<LessonHasKeywordsCreateFieldInput>>;
  update?: InputMaybe<LessonHasKeywordsUpdateConnectionInput>;
  delete?: InputMaybe<Array<LessonHasKeywordsDeleteFieldInput>>;
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
  level: Scalars["Int"]["input"];
  isPublic: Scalars["Boolean"]["input"];
  createdAt: Scalars["DateTime"]["input"];
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
  hasKeywords?: InputMaybe<Array<LessonHasKeywordsCreateFieldInput>>;
  hasActivities?: InputMaybe<Array<LessonHasActivitiesCreateFieldInput>>;
  wasReacted?: InputMaybe<Array<LessonWasReactedCreateFieldInput>>;
  wasCompleted?: InputMaybe<Array<LessonWasCompletedCreateFieldInput>>;
};

/** Fields to sort Lessons by. The order in which sorts are applied is not guaranteed when specifying many fields in one LessonSort object. */
export type LessonSort = {
  id?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  level?: InputMaybe<SortDirection>;
  isPublic?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  wasReactedCount?: InputMaybe<SortDirection>;
};

export type LessonUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type LessonUpdateInput = {
  title?: InputMaybe<Scalars["String"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  level_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  level_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  isPublic?: InputMaybe<Scalars["Boolean"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  hasTopic?: InputMaybe<LessonHasTopicUpdateFieldInput>;
  hasSubtopic?: InputMaybe<LessonHasSubtopicUpdateFieldInput>;
  hasKeywords?: InputMaybe<Array<LessonHasKeywordsUpdateFieldInput>>;
  hasActivities?: InputMaybe<Array<LessonHasActivitiesUpdateFieldInput>>;
  wasReacted?: InputMaybe<Array<LessonWasReactedUpdateFieldInput>>;
  wasCompleted?: InputMaybe<Array<LessonWasCompletedUpdateFieldInput>>;
};

export type LessonWasCompletedAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<LessonWasCompletedAggregateInput>>;
  OR?: InputMaybe<Array<LessonWasCompletedAggregateInput>>;
  NOT?: InputMaybe<LessonWasCompletedAggregateInput>;
  node?: InputMaybe<LessonWasCompletedNodeAggregationWhereInput>;
  edge?: InputMaybe<LessonCompletionAggregationWhereInput>;
};

export type LessonWasCompletedConnectFieldInput = {
  edge: LessonCompletionCreateInput;
  where?: InputMaybe<UserConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<UserConnectInput>>;
};

export type LessonWasCompletedConnectionSort = {
  node?: InputMaybe<UserSort>;
  edge?: InputMaybe<LessonCompletionSort>;
};

export type LessonWasCompletedConnectionWhere = {
  AND?: InputMaybe<Array<LessonWasCompletedConnectionWhere>>;
  OR?: InputMaybe<Array<LessonWasCompletedConnectionWhere>>;
  NOT?: InputMaybe<LessonWasCompletedConnectionWhere>;
  node?: InputMaybe<UserWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<UserWhere>;
  edge?: InputMaybe<LessonCompletionWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<LessonCompletionWhere>;
};

export type LessonWasCompletedConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: LessonWasCompletedConnectOrCreateFieldInputOnCreate;
};

export type LessonWasCompletedConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
  edge: LessonCompletionCreateInput;
};

export type LessonWasCompletedCreateFieldInput = {
  edge: LessonCompletionCreateInput;
  node: UserCreateInput;
};

export type LessonWasCompletedDeleteFieldInput = {
  where?: InputMaybe<LessonWasCompletedConnectionWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type LessonWasCompletedDisconnectFieldInput = {
  where?: InputMaybe<LessonWasCompletedConnectionWhere>;
  disconnect?: InputMaybe<UserDisconnectInput>;
};

export type LessonWasCompletedFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<LessonWasCompletedConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<LessonWasCompletedConnectFieldInput>>;
  create?: InputMaybe<Array<LessonWasCompletedCreateFieldInput>>;
};

export type LessonWasCompletedNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<LessonWasCompletedNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<LessonWasCompletedNodeAggregationWhereInput>>;
  NOT?: InputMaybe<LessonWasCompletedNodeAggregationWhereInput>;
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

export type LessonWasCompletedUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
  edge?: InputMaybe<LessonCompletionUpdateInput>;
};

export type LessonWasCompletedUpdateFieldInput = {
  where?: InputMaybe<LessonWasCompletedConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<LessonWasCompletedConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<LessonWasCompletedConnectFieldInput>>;
  disconnect?: InputMaybe<Array<LessonWasCompletedDisconnectFieldInput>>;
  create?: InputMaybe<Array<LessonWasCompletedCreateFieldInput>>;
  update?: InputMaybe<LessonWasCompletedUpdateConnectionInput>;
  delete?: InputMaybe<Array<LessonWasCompletedDeleteFieldInput>>;
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
  level?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  level_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  level_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  level_NOT_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  level_LT?: InputMaybe<Scalars["Int"]["input"]>;
  level_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_GT?: InputMaybe<Scalars["Int"]["input"]>;
  level_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  isPublic?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  isPublic_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  wasReactedCount?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  wasReactedCount_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  wasReactedCount_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  wasReactedCount_NOT_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  wasReactedCount_LT?: InputMaybe<Scalars["Int"]["input"]>;
  wasReactedCount_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  wasReactedCount_GT?: InputMaybe<Scalars["Int"]["input"]>;
  wasReactedCount_GTE?: InputMaybe<Scalars["Int"]["input"]>;
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
  /** @deprecated Use `hasKeywords_SOME` instead. */
  hasKeywords?: InputMaybe<KeywordWhere>;
  /** @deprecated Use `hasKeywords_NONE` instead. */
  hasKeywords_NOT?: InputMaybe<KeywordWhere>;
  /** Return Lessons where all of the related Keywords match this filter */
  hasKeywords_ALL?: InputMaybe<KeywordWhere>;
  /** Return Lessons where none of the related Keywords match this filter */
  hasKeywords_NONE?: InputMaybe<KeywordWhere>;
  /** Return Lessons where one of the related Keywords match this filter */
  hasKeywords_SINGLE?: InputMaybe<KeywordWhere>;
  /** Return Lessons where some of the related Keywords match this filter */
  hasKeywords_SOME?: InputMaybe<KeywordWhere>;
  /** @deprecated Use `hasKeywordsConnection_SOME` instead. */
  hasKeywordsConnection?: InputMaybe<LessonHasKeywordsConnectionWhere>;
  /** @deprecated Use `hasKeywordsConnection_NONE` instead. */
  hasKeywordsConnection_NOT?: InputMaybe<LessonHasKeywordsConnectionWhere>;
  /** Return Lessons where all of the related LessonHasKeywordsConnections match this filter */
  hasKeywordsConnection_ALL?: InputMaybe<LessonHasKeywordsConnectionWhere>;
  /** Return Lessons where none of the related LessonHasKeywordsConnections match this filter */
  hasKeywordsConnection_NONE?: InputMaybe<LessonHasKeywordsConnectionWhere>;
  /** Return Lessons where one of the related LessonHasKeywordsConnections match this filter */
  hasKeywordsConnection_SINGLE?: InputMaybe<LessonHasKeywordsConnectionWhere>;
  /** Return Lessons where some of the related LessonHasKeywordsConnections match this filter */
  hasKeywordsConnection_SOME?: InputMaybe<LessonHasKeywordsConnectionWhere>;
  hasKeywordsAggregate?: InputMaybe<LessonHasKeywordsAggregateInput>;
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
  /** @deprecated Use `wasCompleted_SOME` instead. */
  wasCompleted?: InputMaybe<UserWhere>;
  /** @deprecated Use `wasCompleted_NONE` instead. */
  wasCompleted_NOT?: InputMaybe<UserWhere>;
  /** Return Lessons where all of the related Users match this filter */
  wasCompleted_ALL?: InputMaybe<UserWhere>;
  /** Return Lessons where none of the related Users match this filter */
  wasCompleted_NONE?: InputMaybe<UserWhere>;
  /** Return Lessons where one of the related Users match this filter */
  wasCompleted_SINGLE?: InputMaybe<UserWhere>;
  /** Return Lessons where some of the related Users match this filter */
  wasCompleted_SOME?: InputMaybe<UserWhere>;
  /** @deprecated Use `wasCompletedConnection_SOME` instead. */
  wasCompletedConnection?: InputMaybe<LessonWasCompletedConnectionWhere>;
  /** @deprecated Use `wasCompletedConnection_NONE` instead. */
  wasCompletedConnection_NOT?: InputMaybe<LessonWasCompletedConnectionWhere>;
  /** Return Lessons where all of the related LessonWasCompletedConnections match this filter */
  wasCompletedConnection_ALL?: InputMaybe<LessonWasCompletedConnectionWhere>;
  /** Return Lessons where none of the related LessonWasCompletedConnections match this filter */
  wasCompletedConnection_NONE?: InputMaybe<LessonWasCompletedConnectionWhere>;
  /** Return Lessons where one of the related LessonWasCompletedConnections match this filter */
  wasCompletedConnection_SINGLE?: InputMaybe<LessonWasCompletedConnectionWhere>;
  /** Return Lessons where some of the related LessonWasCompletedConnections match this filter */
  wasCompletedConnection_SOME?: InputMaybe<LessonWasCompletedConnectionWhere>;
  wasCompletedAggregate?: InputMaybe<LessonWasCompletedAggregateInput>;
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
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reactedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  reactedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  reactedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reactedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  reactedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  reactedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reactedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  reactedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  reactedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reactedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  reactedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  reactedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reactedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  reactedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  reactedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ReactedCreateInput = {
  type: Scalars["String"]["input"];
  reactedAt: Scalars["DateTime"]["input"];
};

export type ReactedSort = {
  type?: InputMaybe<SortDirection>;
  reactedAt?: InputMaybe<SortDirection>;
};

export type ReactedUpdateInput = {
  type?: InputMaybe<Scalars["String"]["input"]>;
  reactedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
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
  reactedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  reactedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  reactedAt_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  reactedAt_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  reactedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  reactedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  reactedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  reactedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
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

export type UserAttemptedActivitiesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<UserAttemptedActivitiesAggregateInput>>;
  OR?: InputMaybe<Array<UserAttemptedActivitiesAggregateInput>>;
  NOT?: InputMaybe<UserAttemptedActivitiesAggregateInput>;
  node?: InputMaybe<UserAttemptedActivitiesNodeAggregationWhereInput>;
  edge?: InputMaybe<ActivityAttemptAggregationWhereInput>;
};

export type UserAttemptedActivitiesConnectFieldInput = {
  edge: ActivityAttemptCreateInput;
  where?: InputMaybe<ActivityConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<ActivityConnectInput>>;
};

export type UserAttemptedActivitiesConnectionSort = {
  node?: InputMaybe<ActivitySort>;
  edge?: InputMaybe<ActivityAttemptSort>;
};

export type UserAttemptedActivitiesConnectionWhere = {
  AND?: InputMaybe<Array<UserAttemptedActivitiesConnectionWhere>>;
  OR?: InputMaybe<Array<UserAttemptedActivitiesConnectionWhere>>;
  NOT?: InputMaybe<UserAttemptedActivitiesConnectionWhere>;
  node?: InputMaybe<ActivityWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ActivityWhere>;
  edge?: InputMaybe<ActivityAttemptWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ActivityAttemptWhere>;
};

export type UserAttemptedActivitiesCreateFieldInput = {
  edge: ActivityAttemptCreateInput;
  node: ActivityCreateInput;
};

export type UserAttemptedActivitiesDeleteFieldInput = {
  where?: InputMaybe<UserAttemptedActivitiesConnectionWhere>;
  delete?: InputMaybe<ActivityDeleteInput>;
};

export type UserAttemptedActivitiesDisconnectFieldInput = {
  where?: InputMaybe<UserAttemptedActivitiesConnectionWhere>;
  disconnect?: InputMaybe<ActivityDisconnectInput>;
};

export type UserAttemptedActivitiesFieldInput = {
  connect?: InputMaybe<Array<UserAttemptedActivitiesConnectFieldInput>>;
  create?: InputMaybe<Array<UserAttemptedActivitiesCreateFieldInput>>;
};

export type UserAttemptedActivitiesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserAttemptedActivitiesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserAttemptedActivitiesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserAttemptedActivitiesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  order_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  order_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  order_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  order_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  order_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  order_GT?: InputMaybe<Scalars["Int"]["input"]>;
  order_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  order_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  order_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  order_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  order_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  order_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  order_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  order_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  order_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  order_LT?: InputMaybe<Scalars["Int"]["input"]>;
  order_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  order_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  order_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  order_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  order_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  order_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  order_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  order_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  order_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
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
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reportCount_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reportCount_GT?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reportCount_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reportCount_LT?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reportCount_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type UserAttemptedActivitiesUpdateConnectionInput = {
  node?: InputMaybe<ActivityUpdateInput>;
  edge?: InputMaybe<ActivityAttemptUpdateInput>;
};

export type UserAttemptedActivitiesUpdateFieldInput = {
  where?: InputMaybe<UserAttemptedActivitiesConnectionWhere>;
  connect?: InputMaybe<Array<UserAttemptedActivitiesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserAttemptedActivitiesDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserAttemptedActivitiesCreateFieldInput>>;
  update?: InputMaybe<UserAttemptedActivitiesUpdateConnectionInput>;
  delete?: InputMaybe<Array<UserAttemptedActivitiesDeleteFieldInput>>;
};

export type UserCompletedLessonsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<UserCompletedLessonsAggregateInput>>;
  OR?: InputMaybe<Array<UserCompletedLessonsAggregateInput>>;
  NOT?: InputMaybe<UserCompletedLessonsAggregateInput>;
  node?: InputMaybe<UserCompletedLessonsNodeAggregationWhereInput>;
  edge?: InputMaybe<LessonCompletionAggregationWhereInput>;
};

export type UserCompletedLessonsConnectFieldInput = {
  edge: LessonCompletionCreateInput;
  where?: InputMaybe<LessonConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<LessonConnectInput>>;
};

export type UserCompletedLessonsConnectionSort = {
  node?: InputMaybe<LessonSort>;
  edge?: InputMaybe<LessonCompletionSort>;
};

export type UserCompletedLessonsConnectionWhere = {
  AND?: InputMaybe<Array<UserCompletedLessonsConnectionWhere>>;
  OR?: InputMaybe<Array<UserCompletedLessonsConnectionWhere>>;
  NOT?: InputMaybe<UserCompletedLessonsConnectionWhere>;
  node?: InputMaybe<LessonWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<LessonWhere>;
  edge?: InputMaybe<LessonCompletionWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<LessonCompletionWhere>;
};

export type UserCompletedLessonsConnectOrCreateFieldInput = {
  where: LessonConnectOrCreateWhere;
  onCreate: UserCompletedLessonsConnectOrCreateFieldInputOnCreate;
};

export type UserCompletedLessonsConnectOrCreateFieldInputOnCreate = {
  node: LessonOnCreateInput;
  edge: LessonCompletionCreateInput;
};

export type UserCompletedLessonsCreateFieldInput = {
  edge: LessonCompletionCreateInput;
  node: LessonCreateInput;
};

export type UserCompletedLessonsDeleteFieldInput = {
  where?: InputMaybe<UserCompletedLessonsConnectionWhere>;
  delete?: InputMaybe<LessonDeleteInput>;
};

export type UserCompletedLessonsDisconnectFieldInput = {
  where?: InputMaybe<UserCompletedLessonsConnectionWhere>;
  disconnect?: InputMaybe<LessonDisconnectInput>;
};

export type UserCompletedLessonsFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<UserCompletedLessonsConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<UserCompletedLessonsConnectFieldInput>>;
  create?: InputMaybe<Array<UserCompletedLessonsCreateFieldInput>>;
};

export type UserCompletedLessonsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserCompletedLessonsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserCompletedLessonsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserCompletedLessonsNodeAggregationWhereInput>;
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
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  level_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  level_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  level_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  level_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  level_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  level_GT?: InputMaybe<Scalars["Int"]["input"]>;
  level_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  level_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  level_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  level_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  level_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  level_LT?: InputMaybe<Scalars["Int"]["input"]>;
  level_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  level_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  level_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  level_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  level_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserCompletedLessonsUpdateConnectionInput = {
  node?: InputMaybe<LessonUpdateInput>;
  edge?: InputMaybe<LessonCompletionUpdateInput>;
};

export type UserCompletedLessonsUpdateFieldInput = {
  where?: InputMaybe<UserCompletedLessonsConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<UserCompletedLessonsConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<UserCompletedLessonsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserCompletedLessonsDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserCompletedLessonsCreateFieldInput>>;
  update?: InputMaybe<UserCompletedLessonsUpdateConnectionInput>;
  delete?: InputMaybe<Array<UserCompletedLessonsDeleteFieldInput>>;
};

export type UserConnectInput = {
  hasLessons?: InputMaybe<Array<UserHasLessonsConnectFieldInput>>;
  hasCollections?: InputMaybe<Array<UserHasCollectionsConnectFieldInput>>;
  reactedToLessons?: InputMaybe<Array<UserReactedToLessonsConnectFieldInput>>;
  reportedActivities?: InputMaybe<
    Array<UserReportedActivitiesConnectFieldInput>
  >;
  attemptedActivities?: InputMaybe<
    Array<UserAttemptedActivitiesConnectFieldInput>
  >;
  completedLessons?: InputMaybe<Array<UserCompletedLessonsConnectFieldInput>>;
};

export type UserConnectOrCreateInput = {
  hasLessons?: InputMaybe<Array<UserHasLessonsConnectOrCreateFieldInput>>;
  reactedToLessons?: InputMaybe<
    Array<UserReactedToLessonsConnectOrCreateFieldInput>
  >;
  completedLessons?: InputMaybe<
    Array<UserCompletedLessonsConnectOrCreateFieldInput>
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
  hasCollections?: InputMaybe<UserHasCollectionsFieldInput>;
  reactedToLessons?: InputMaybe<UserReactedToLessonsFieldInput>;
  reportedActivities?: InputMaybe<UserReportedActivitiesFieldInput>;
  attemptedActivities?: InputMaybe<UserAttemptedActivitiesFieldInput>;
  completedLessons?: InputMaybe<UserCompletedLessonsFieldInput>;
};

export type UserDeleteInput = {
  hasLessons?: InputMaybe<Array<UserHasLessonsDeleteFieldInput>>;
  hasCollections?: InputMaybe<Array<UserHasCollectionsDeleteFieldInput>>;
  reactedToLessons?: InputMaybe<Array<UserReactedToLessonsDeleteFieldInput>>;
  reportedActivities?: InputMaybe<
    Array<UserReportedActivitiesDeleteFieldInput>
  >;
  attemptedActivities?: InputMaybe<
    Array<UserAttemptedActivitiesDeleteFieldInput>
  >;
  completedLessons?: InputMaybe<Array<UserCompletedLessonsDeleteFieldInput>>;
};

export type UserDisconnectInput = {
  hasLessons?: InputMaybe<Array<UserHasLessonsDisconnectFieldInput>>;
  hasCollections?: InputMaybe<Array<UserHasCollectionsDisconnectFieldInput>>;
  reactedToLessons?: InputMaybe<
    Array<UserReactedToLessonsDisconnectFieldInput>
  >;
  reportedActivities?: InputMaybe<
    Array<UserReportedActivitiesDisconnectFieldInput>
  >;
  attemptedActivities?: InputMaybe<
    Array<UserAttemptedActivitiesDisconnectFieldInput>
  >;
  completedLessons?: InputMaybe<
    Array<UserCompletedLessonsDisconnectFieldInput>
  >;
};

export type UserHasCollectionsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<UserHasCollectionsAggregateInput>>;
  OR?: InputMaybe<Array<UserHasCollectionsAggregateInput>>;
  NOT?: InputMaybe<UserHasCollectionsAggregateInput>;
  node?: InputMaybe<UserHasCollectionsNodeAggregationWhereInput>;
};

export type UserHasCollectionsConnectFieldInput = {
  where?: InputMaybe<CollectionConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<CollectionConnectInput>>;
};

export type UserHasCollectionsConnectionSort = {
  node?: InputMaybe<CollectionSort>;
};

export type UserHasCollectionsConnectionWhere = {
  AND?: InputMaybe<Array<UserHasCollectionsConnectionWhere>>;
  OR?: InputMaybe<Array<UserHasCollectionsConnectionWhere>>;
  NOT?: InputMaybe<UserHasCollectionsConnectionWhere>;
  node?: InputMaybe<CollectionWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CollectionWhere>;
};

export type UserHasCollectionsCreateFieldInput = {
  node: CollectionCreateInput;
};

export type UserHasCollectionsDeleteFieldInput = {
  where?: InputMaybe<UserHasCollectionsConnectionWhere>;
  delete?: InputMaybe<CollectionDeleteInput>;
};

export type UserHasCollectionsDisconnectFieldInput = {
  where?: InputMaybe<UserHasCollectionsConnectionWhere>;
  disconnect?: InputMaybe<CollectionDisconnectInput>;
};

export type UserHasCollectionsFieldInput = {
  connect?: InputMaybe<Array<UserHasCollectionsConnectFieldInput>>;
  create?: InputMaybe<Array<UserHasCollectionsCreateFieldInput>>;
};

export type UserHasCollectionsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserHasCollectionsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserHasCollectionsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserHasCollectionsNodeAggregationWhereInput>;
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
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  icon_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  icon_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  icon_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  icon_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  icon_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  icon_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  icon_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  icon_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  icon_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  icon_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  icon_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  icon_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  icon_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  icon_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  icon_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  icon_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  icon_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  icon_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  icon_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  icon_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  icon_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  color_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  color_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  color_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  color_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  color_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  color_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  color_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  color_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  color_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  color_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  color_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  color_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  color_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  color_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  color_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  color_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  color_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  color_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  color_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  color_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserHasCollectionsUpdateConnectionInput = {
  node?: InputMaybe<CollectionUpdateInput>;
};

export type UserHasCollectionsUpdateFieldInput = {
  where?: InputMaybe<UserHasCollectionsConnectionWhere>;
  connect?: InputMaybe<Array<UserHasCollectionsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserHasCollectionsDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserHasCollectionsCreateFieldInput>>;
  update?: InputMaybe<UserHasCollectionsUpdateConnectionInput>;
  delete?: InputMaybe<Array<UserHasCollectionsDeleteFieldInput>>;
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
  edge?: InputMaybe<HasLessonAggregationWhereInput>;
};

export type UserHasLessonsConnectFieldInput = {
  edge: HasLessonCreateInput;
  where?: InputMaybe<LessonConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<LessonConnectInput>>;
};

export type UserHasLessonsConnectionSort = {
  node?: InputMaybe<LessonSort>;
  edge?: InputMaybe<HasLessonSort>;
};

export type UserHasLessonsConnectionWhere = {
  AND?: InputMaybe<Array<UserHasLessonsConnectionWhere>>;
  OR?: InputMaybe<Array<UserHasLessonsConnectionWhere>>;
  NOT?: InputMaybe<UserHasLessonsConnectionWhere>;
  node?: InputMaybe<LessonWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<LessonWhere>;
  edge?: InputMaybe<HasLessonWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<HasLessonWhere>;
};

export type UserHasLessonsConnectOrCreateFieldInput = {
  where: LessonConnectOrCreateWhere;
  onCreate: UserHasLessonsConnectOrCreateFieldInputOnCreate;
};

export type UserHasLessonsConnectOrCreateFieldInputOnCreate = {
  node: LessonOnCreateInput;
  edge: HasLessonCreateInput;
};

export type UserHasLessonsCreateFieldInput = {
  edge: HasLessonCreateInput;
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
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  level_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  level_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  level_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  level_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  level_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  level_GT?: InputMaybe<Scalars["Int"]["input"]>;
  level_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  level_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  level_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  level_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  level_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  level_LT?: InputMaybe<Scalars["Int"]["input"]>;
  level_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  level_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  level_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  level_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  level_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserHasLessonsUpdateConnectionInput = {
  node?: InputMaybe<LessonUpdateInput>;
  edge?: InputMaybe<HasLessonUpdateInput>;
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
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  level_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  level_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  level_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  level_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  level_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  level_GT?: InputMaybe<Scalars["Int"]["input"]>;
  level_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  level_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  level_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  level_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  level_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  level_LT?: InputMaybe<Scalars["Int"]["input"]>;
  level_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  level_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  level_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  level_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  level_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  level_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
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
  hasCollections?: InputMaybe<Array<UserHasCollectionsCreateFieldInput>>;
  reactedToLessons?: InputMaybe<Array<UserReactedToLessonsCreateFieldInput>>;
  reportedActivities?: InputMaybe<
    Array<UserReportedActivitiesCreateFieldInput>
  >;
  attemptedActivities?: InputMaybe<
    Array<UserAttemptedActivitiesCreateFieldInput>
  >;
  completedLessons?: InputMaybe<Array<UserCompletedLessonsCreateFieldInput>>;
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
  connect?: InputMaybe<Array<ActivityConnectInput>>;
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
  delete?: InputMaybe<ActivityDeleteInput>;
};

export type UserReportedActivitiesDisconnectFieldInput = {
  where?: InputMaybe<UserReportedActivitiesConnectionWhere>;
  disconnect?: InputMaybe<ActivityDisconnectInput>;
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
  order_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  order_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  order_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  order_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  order_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  order_GT?: InputMaybe<Scalars["Int"]["input"]>;
  order_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  order_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  order_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  order_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  order_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  order_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  order_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  order_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  order_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  order_LT?: InputMaybe<Scalars["Int"]["input"]>;
  order_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  order_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  order_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  order_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  order_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  order_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  order_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  order_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  order_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
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
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reportCount_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reportCount_GT?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reportCount_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reportCount_LT?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reportCount_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
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
  dailyActivityCount?: InputMaybe<SortDirection>;
  weeklyCorrectAnswers?: InputMaybe<SortDirection>;
};

export type UserUniqueWhere = {
  clerkId?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserUpdateInput = {
  clerkId?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  hasLessons?: InputMaybe<Array<UserHasLessonsUpdateFieldInput>>;
  hasCollections?: InputMaybe<Array<UserHasCollectionsUpdateFieldInput>>;
  reactedToLessons?: InputMaybe<Array<UserReactedToLessonsUpdateFieldInput>>;
  reportedActivities?: InputMaybe<
    Array<UserReportedActivitiesUpdateFieldInput>
  >;
  attemptedActivities?: InputMaybe<
    Array<UserAttemptedActivitiesUpdateFieldInput>
  >;
  completedLessons?: InputMaybe<Array<UserCompletedLessonsUpdateFieldInput>>;
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
  dailyActivityCount?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  dailyActivityCount_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  dailyActivityCount_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  dailyActivityCount_NOT_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  dailyActivityCount_LT?: InputMaybe<Scalars["Int"]["input"]>;
  dailyActivityCount_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  dailyActivityCount_GT?: InputMaybe<Scalars["Int"]["input"]>;
  dailyActivityCount_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  weeklyCorrectAnswers?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  weeklyCorrectAnswers_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  weeklyCorrectAnswers_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  weeklyCorrectAnswers_NOT_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  weeklyCorrectAnswers_LT?: InputMaybe<Scalars["Int"]["input"]>;
  weeklyCorrectAnswers_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  weeklyCorrectAnswers_GT?: InputMaybe<Scalars["Int"]["input"]>;
  weeklyCorrectAnswers_GTE?: InputMaybe<Scalars["Int"]["input"]>;
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
  /** @deprecated Use `hasCollections_SOME` instead. */
  hasCollections?: InputMaybe<CollectionWhere>;
  /** @deprecated Use `hasCollections_NONE` instead. */
  hasCollections_NOT?: InputMaybe<CollectionWhere>;
  /** Return Users where all of the related Collections match this filter */
  hasCollections_ALL?: InputMaybe<CollectionWhere>;
  /** Return Users where none of the related Collections match this filter */
  hasCollections_NONE?: InputMaybe<CollectionWhere>;
  /** Return Users where one of the related Collections match this filter */
  hasCollections_SINGLE?: InputMaybe<CollectionWhere>;
  /** Return Users where some of the related Collections match this filter */
  hasCollections_SOME?: InputMaybe<CollectionWhere>;
  /** @deprecated Use `hasCollectionsConnection_SOME` instead. */
  hasCollectionsConnection?: InputMaybe<UserHasCollectionsConnectionWhere>;
  /** @deprecated Use `hasCollectionsConnection_NONE` instead. */
  hasCollectionsConnection_NOT?: InputMaybe<UserHasCollectionsConnectionWhere>;
  /** Return Users where all of the related UserHasCollectionsConnections match this filter */
  hasCollectionsConnection_ALL?: InputMaybe<UserHasCollectionsConnectionWhere>;
  /** Return Users where none of the related UserHasCollectionsConnections match this filter */
  hasCollectionsConnection_NONE?: InputMaybe<UserHasCollectionsConnectionWhere>;
  /** Return Users where one of the related UserHasCollectionsConnections match this filter */
  hasCollectionsConnection_SINGLE?: InputMaybe<UserHasCollectionsConnectionWhere>;
  /** Return Users where some of the related UserHasCollectionsConnections match this filter */
  hasCollectionsConnection_SOME?: InputMaybe<UserHasCollectionsConnectionWhere>;
  hasCollectionsAggregate?: InputMaybe<UserHasCollectionsAggregateInput>;
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
  /** @deprecated Use `attemptedActivities_SOME` instead. */
  attemptedActivities?: InputMaybe<ActivityWhere>;
  /** @deprecated Use `attemptedActivities_NONE` instead. */
  attemptedActivities_NOT?: InputMaybe<ActivityWhere>;
  /** Return Users where all of the related Activities match this filter */
  attemptedActivities_ALL?: InputMaybe<ActivityWhere>;
  /** Return Users where none of the related Activities match this filter */
  attemptedActivities_NONE?: InputMaybe<ActivityWhere>;
  /** Return Users where one of the related Activities match this filter */
  attemptedActivities_SINGLE?: InputMaybe<ActivityWhere>;
  /** Return Users where some of the related Activities match this filter */
  attemptedActivities_SOME?: InputMaybe<ActivityWhere>;
  /** @deprecated Use `attemptedActivitiesConnection_SOME` instead. */
  attemptedActivitiesConnection?: InputMaybe<UserAttemptedActivitiesConnectionWhere>;
  /** @deprecated Use `attemptedActivitiesConnection_NONE` instead. */
  attemptedActivitiesConnection_NOT?: InputMaybe<UserAttemptedActivitiesConnectionWhere>;
  /** Return Users where all of the related UserAttemptedActivitiesConnections match this filter */
  attemptedActivitiesConnection_ALL?: InputMaybe<UserAttemptedActivitiesConnectionWhere>;
  /** Return Users where none of the related UserAttemptedActivitiesConnections match this filter */
  attemptedActivitiesConnection_NONE?: InputMaybe<UserAttemptedActivitiesConnectionWhere>;
  /** Return Users where one of the related UserAttemptedActivitiesConnections match this filter */
  attemptedActivitiesConnection_SINGLE?: InputMaybe<UserAttemptedActivitiesConnectionWhere>;
  /** Return Users where some of the related UserAttemptedActivitiesConnections match this filter */
  attemptedActivitiesConnection_SOME?: InputMaybe<UserAttemptedActivitiesConnectionWhere>;
  attemptedActivitiesAggregate?: InputMaybe<UserAttemptedActivitiesAggregateInput>;
  /** @deprecated Use `completedLessons_SOME` instead. */
  completedLessons?: InputMaybe<LessonWhere>;
  /** @deprecated Use `completedLessons_NONE` instead. */
  completedLessons_NOT?: InputMaybe<LessonWhere>;
  /** Return Users where all of the related Lessons match this filter */
  completedLessons_ALL?: InputMaybe<LessonWhere>;
  /** Return Users where none of the related Lessons match this filter */
  completedLessons_NONE?: InputMaybe<LessonWhere>;
  /** Return Users where one of the related Lessons match this filter */
  completedLessons_SINGLE?: InputMaybe<LessonWhere>;
  /** Return Users where some of the related Lessons match this filter */
  completedLessons_SOME?: InputMaybe<LessonWhere>;
  /** @deprecated Use `completedLessonsConnection_SOME` instead. */
  completedLessonsConnection?: InputMaybe<UserCompletedLessonsConnectionWhere>;
  /** @deprecated Use `completedLessonsConnection_NONE` instead. */
  completedLessonsConnection_NOT?: InputMaybe<UserCompletedLessonsConnectionWhere>;
  /** Return Users where all of the related UserCompletedLessonsConnections match this filter */
  completedLessonsConnection_ALL?: InputMaybe<UserCompletedLessonsConnectionWhere>;
  /** Return Users where none of the related UserCompletedLessonsConnections match this filter */
  completedLessonsConnection_NONE?: InputMaybe<UserCompletedLessonsConnectionWhere>;
  /** Return Users where one of the related UserCompletedLessonsConnections match this filter */
  completedLessonsConnection_SINGLE?: InputMaybe<UserCompletedLessonsConnectionWhere>;
  /** Return Users where some of the related UserCompletedLessonsConnections match this filter */
  completedLessonsConnection_SOME?: InputMaybe<UserCompletedLessonsConnectionWhere>;
  completedLessonsAggregate?: InputMaybe<UserCompletedLessonsAggregateInput>;
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
  level?: boolean;
  createdAt?: boolean;
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

export interface KeywordAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  name?: boolean;
}

export declare class KeywordModel {
  public find(args?: {
    where?: KeywordWhere;

    options?: KeywordOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Keyword[]>;
  public create(args: {
    input: KeywordCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateKeywordsMutationResponse>;
  public update(args: {
    where?: KeywordWhere;
    update?: KeywordUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateKeywordsMutationResponse>;
  public delete(args: {
    where?: KeywordWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: KeywordWhere;

    aggregate: KeywordAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<KeywordAggregateSelection>;
}

export interface CollectionAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  title?: boolean;
  icon?: boolean;
  color?: boolean;
}

export declare class CollectionModel {
  public find(args?: {
    where?: CollectionWhere;

    options?: CollectionOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Collection[]>;
  public create(args: {
    input: CollectionCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateCollectionsMutationResponse>;
  public update(args: {
    where?: CollectionWhere;
    update?: CollectionUpdateInput;
    connect?: CollectionConnectInput;
    disconnect?: CollectionDisconnectInput;
    create?: CollectionCreateInput;
    connectOrCreate?: CollectionConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateCollectionsMutationResponse>;
  public delete(args: {
    where?: CollectionWhere;
    delete?: CollectionDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: CollectionWhere;

    aggregate: CollectionAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<CollectionAggregateSelection>;
}

export interface ActivityAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  order?: boolean;
  description?: boolean;
  answer?: boolean;
  comment?: boolean;
  reportCount?: boolean;
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
    connect?: ActivityConnectInput;
    disconnect?: ActivityDisconnectInput;
    create?: ActivityCreateInput;
    connectOrCreate?: ActivityConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateActivitiesMutationResponse>;
  public delete(args: {
    where?: ActivityWhere;
    delete?: ActivityDeleteInput;
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
  Keyword: KeywordModel;
  Collection: CollectionModel;
  Activity: ActivityModel;
  User: UserModel;
}
