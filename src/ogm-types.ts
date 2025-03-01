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
  activityInterfaces: Array<ActivityInterface>;
  activityInterfacesConnection: ActivityInterfacesConnection;
  activityInterfacesAggregate: ActivityInterfaceAggregateSelection;
  topics: Array<Topic>;
  topicsConnection: TopicsConnection;
  topicsAggregate: TopicAggregateSelection;
  /** Query a full-text index. This query returns the query score, but does not allow for aggregations. Use the `fulltext` argument under other queries for this functionality. */
  lessonsFulltextLessonTitle: Array<LessonFulltextResult>;
  lessons: Array<Lesson>;
  lessonsConnection: LessonsConnection;
  lessonsAggregate: LessonAggregateSelection;
  keywords: Array<Keyword>;
  keywordsConnection: KeywordsConnection;
  keywordsAggregate: KeywordAggregateSelection;
  activities: Array<Activity>;
  activitiesConnection: ActivitiesConnection;
  activitiesAggregate: ActivityAggregateSelection;
  streaks: Array<Streak>;
  streaksConnection: StreaksConnection;
  streaksAggregate: StreakAggregateSelection;
  sessions: Array<Session>;
  sessionsConnection: SessionsConnection;
  sessionsAggregate: SessionAggregateSelection;
  verificationTokens: Array<VerificationToken>;
  verificationTokensConnection: VerificationTokensConnection;
  verificationTokensAggregate: VerificationTokenAggregateSelection;
  accounts: Array<Account>;
  accountsConnection: AccountsConnection;
  accountsAggregate: AccountAggregateSelection;
  users: Array<User>;
  usersConnection: UsersConnection;
  usersAggregate: UserAggregateSelection;
  mistakenActivities: Array<MistakenActivity>;
  mistakenActivitiesConnection: MistakenActivitiesConnection;
  mistakenActivitiesAggregate: MistakenActivityAggregateSelection;
  sessionCompletionRecords: Array<SessionCompletionRecord>;
  sessionCompletionRecordsConnection: SessionCompletionRecordsConnection;
  sessionCompletionRecordsAggregate: SessionCompletionRecordAggregateSelection;
  dailyActivities: Array<DailyActivity>;
  dailyActivitiesConnection: DailyActivitiesConnection;
  dailyActivitiesAggregate: DailyActivityAggregateSelection;
  paths: Array<Path>;
  pathsConnection: PathsConnection;
  pathsAggregate: PathAggregateSelection;
};

export type QueryActivityInterfacesArgs = {
  where?: InputMaybe<ActivityInterfaceWhere>;
  options?: InputMaybe<ActivityInterfaceOptions>;
};

export type QueryActivityInterfacesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<ActivityInterfaceWhere>;
  sort?: InputMaybe<Array<InputMaybe<ActivityInterfaceSort>>>;
};

export type QueryActivityInterfacesAggregateArgs = {
  where?: InputMaybe<ActivityInterfaceWhere>;
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

export type QueryLessonsFulltextLessonTitleArgs = {
  phrase: Scalars["String"]["input"];
  where?: InputMaybe<LessonFulltextWhere>;
  sort?: InputMaybe<Array<LessonFulltextSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryLessonsArgs = {
  where?: InputMaybe<LessonWhere>;
  options?: InputMaybe<LessonOptions>;
  fulltext?: InputMaybe<LessonFulltext>;
};

export type QueryLessonsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<LessonWhere>;
  sort?: InputMaybe<Array<InputMaybe<LessonSort>>>;
  fulltext?: InputMaybe<LessonFulltext>;
};

export type QueryLessonsAggregateArgs = {
  where?: InputMaybe<LessonWhere>;
  fulltext?: InputMaybe<LessonFulltext>;
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

export type QueryStreaksArgs = {
  where?: InputMaybe<StreakWhere>;
  options?: InputMaybe<StreakOptions>;
};

export type QueryStreaksConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<StreakWhere>;
  sort?: InputMaybe<Array<InputMaybe<StreakSort>>>;
};

export type QueryStreaksAggregateArgs = {
  where?: InputMaybe<StreakWhere>;
};

export type QuerySessionsArgs = {
  where?: InputMaybe<SessionWhere>;
  options?: InputMaybe<SessionOptions>;
};

export type QuerySessionsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<SessionWhere>;
  sort?: InputMaybe<Array<InputMaybe<SessionSort>>>;
};

export type QuerySessionsAggregateArgs = {
  where?: InputMaybe<SessionWhere>;
};

export type QueryVerificationTokensArgs = {
  where?: InputMaybe<VerificationTokenWhere>;
  options?: InputMaybe<VerificationTokenOptions>;
};

export type QueryVerificationTokensConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<VerificationTokenWhere>;
  sort?: InputMaybe<Array<InputMaybe<VerificationTokenSort>>>;
};

export type QueryVerificationTokensAggregateArgs = {
  where?: InputMaybe<VerificationTokenWhere>;
};

export type QueryAccountsArgs = {
  where?: InputMaybe<AccountWhere>;
  options?: InputMaybe<AccountOptions>;
};

export type QueryAccountsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<AccountWhere>;
  sort?: InputMaybe<Array<InputMaybe<AccountSort>>>;
};

export type QueryAccountsAggregateArgs = {
  where?: InputMaybe<AccountWhere>;
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

export type QueryMistakenActivitiesArgs = {
  where?: InputMaybe<MistakenActivityWhere>;
  options?: InputMaybe<MistakenActivityOptions>;
};

export type QueryMistakenActivitiesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<MistakenActivityWhere>;
  sort?: InputMaybe<Array<InputMaybe<MistakenActivitySort>>>;
};

export type QueryMistakenActivitiesAggregateArgs = {
  where?: InputMaybe<MistakenActivityWhere>;
};

export type QuerySessionCompletionRecordsArgs = {
  where?: InputMaybe<SessionCompletionRecordWhere>;
  options?: InputMaybe<SessionCompletionRecordOptions>;
};

export type QuerySessionCompletionRecordsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<SessionCompletionRecordWhere>;
  sort?: InputMaybe<Array<InputMaybe<SessionCompletionRecordSort>>>;
};

export type QuerySessionCompletionRecordsAggregateArgs = {
  where?: InputMaybe<SessionCompletionRecordWhere>;
};

export type QueryDailyActivitiesArgs = {
  where?: InputMaybe<DailyActivityWhere>;
  options?: InputMaybe<DailyActivityOptions>;
};

export type QueryDailyActivitiesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<DailyActivityWhere>;
  sort?: InputMaybe<Array<InputMaybe<DailyActivitySort>>>;
};

export type QueryDailyActivitiesAggregateArgs = {
  where?: InputMaybe<DailyActivityWhere>;
};

export type QueryPathsArgs = {
  where?: InputMaybe<PathWhere>;
  options?: InputMaybe<PathOptions>;
};

export type QueryPathsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<PathWhere>;
  sort?: InputMaybe<Array<InputMaybe<PathSort>>>;
};

export type QueryPathsAggregateArgs = {
  where?: InputMaybe<PathWhere>;
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
  createActivities: CreateActivitiesMutationResponse;
  deleteActivities: DeleteInfo;
  updateActivities: UpdateActivitiesMutationResponse;
  createStreaks: CreateStreaksMutationResponse;
  deleteStreaks: DeleteInfo;
  updateStreaks: UpdateStreaksMutationResponse;
  createSessions: CreateSessionsMutationResponse;
  deleteSessions: DeleteInfo;
  updateSessions: UpdateSessionsMutationResponse;
  createVerificationTokens: CreateVerificationTokensMutationResponse;
  deleteVerificationTokens: DeleteInfo;
  updateVerificationTokens: UpdateVerificationTokensMutationResponse;
  createAccounts: CreateAccountsMutationResponse;
  deleteAccounts: DeleteInfo;
  updateAccounts: UpdateAccountsMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteUsers: DeleteInfo;
  updateUsers: UpdateUsersMutationResponse;
  createMistakenActivities: CreateMistakenActivitiesMutationResponse;
  deleteMistakenActivities: DeleteInfo;
  updateMistakenActivities: UpdateMistakenActivitiesMutationResponse;
  createSessionCompletionRecords: CreateSessionCompletionRecordsMutationResponse;
  deleteSessionCompletionRecords: DeleteInfo;
  updateSessionCompletionRecords: UpdateSessionCompletionRecordsMutationResponse;
  createDailyActivities: CreateDailyActivitiesMutationResponse;
  deleteDailyActivities: DeleteInfo;
  updateDailyActivities: UpdateDailyActivitiesMutationResponse;
  createPaths: CreatePathsMutationResponse;
  deletePaths: DeleteInfo;
  updatePaths: UpdatePathsMutationResponse;
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

export type MutationCreateStreaksArgs = {
  input: Array<StreakCreateInput>;
};

export type MutationDeleteStreaksArgs = {
  where?: InputMaybe<StreakWhere>;
};

export type MutationUpdateStreaksArgs = {
  where?: InputMaybe<StreakWhere>;
  update?: InputMaybe<StreakUpdateInput>;
};

export type MutationCreateSessionsArgs = {
  input: Array<SessionCreateInput>;
};

export type MutationDeleteSessionsArgs = {
  where?: InputMaybe<SessionWhere>;
};

export type MutationUpdateSessionsArgs = {
  where?: InputMaybe<SessionWhere>;
  update?: InputMaybe<SessionUpdateInput>;
};

export type MutationCreateVerificationTokensArgs = {
  input: Array<VerificationTokenCreateInput>;
};

export type MutationDeleteVerificationTokensArgs = {
  where?: InputMaybe<VerificationTokenWhere>;
};

export type MutationUpdateVerificationTokensArgs = {
  where?: InputMaybe<VerificationTokenWhere>;
  update?: InputMaybe<VerificationTokenUpdateInput>;
};

export type MutationCreateAccountsArgs = {
  input: Array<AccountCreateInput>;
};

export type MutationDeleteAccountsArgs = {
  where?: InputMaybe<AccountWhere>;
};

export type MutationUpdateAccountsArgs = {
  where?: InputMaybe<AccountWhere>;
  update?: InputMaybe<AccountUpdateInput>;
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
};

export type MutationCreateMistakenActivitiesArgs = {
  input: Array<MistakenActivityCreateInput>;
};

export type MutationDeleteMistakenActivitiesArgs = {
  where?: InputMaybe<MistakenActivityWhere>;
};

export type MutationUpdateMistakenActivitiesArgs = {
  where?: InputMaybe<MistakenActivityWhere>;
  update?: InputMaybe<MistakenActivityUpdateInput>;
};

export type MutationCreateSessionCompletionRecordsArgs = {
  input: Array<SessionCompletionRecordCreateInput>;
};

export type MutationDeleteSessionCompletionRecordsArgs = {
  where?: InputMaybe<SessionCompletionRecordWhere>;
  delete?: InputMaybe<SessionCompletionRecordDeleteInput>;
};

export type MutationUpdateSessionCompletionRecordsArgs = {
  where?: InputMaybe<SessionCompletionRecordWhere>;
  update?: InputMaybe<SessionCompletionRecordUpdateInput>;
  connect?: InputMaybe<SessionCompletionRecordConnectInput>;
  disconnect?: InputMaybe<SessionCompletionRecordDisconnectInput>;
  create?: InputMaybe<SessionCompletionRecordRelationInput>;
  delete?: InputMaybe<SessionCompletionRecordDeleteInput>;
  connectOrCreate?: InputMaybe<SessionCompletionRecordConnectOrCreateInput>;
};

export type MutationCreateDailyActivitiesArgs = {
  input: Array<DailyActivityCreateInput>;
};

export type MutationDeleteDailyActivitiesArgs = {
  where?: InputMaybe<DailyActivityWhere>;
};

export type MutationUpdateDailyActivitiesArgs = {
  where?: InputMaybe<DailyActivityWhere>;
  update?: InputMaybe<DailyActivityUpdateInput>;
};

export type MutationCreatePathsArgs = {
  input: Array<PathCreateInput>;
};

export type MutationDeletePathsArgs = {
  where?: InputMaybe<PathWhere>;
  delete?: InputMaybe<PathDeleteInput>;
};

export type MutationUpdatePathsArgs = {
  where?: InputMaybe<PathWhere>;
  update?: InputMaybe<PathUpdateInput>;
  connect?: InputMaybe<PathConnectInput>;
  disconnect?: InputMaybe<PathDisconnectInput>;
  create?: InputMaybe<PathRelationInput>;
  delete?: InputMaybe<PathDeleteInput>;
};

export enum ActivityInterfaceImplementation {
  Activity = "Activity",
  MistakenActivity = "MistakenActivity",
}

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export type ActivityInterface = {
  description: Scalars["String"]["output"];
  options: Array<Scalars["String"]["output"]>;
  answer: Scalars["String"]["output"];
  comment: Scalars["String"]["output"];
  mermaid?: Maybe<Scalars["String"]["output"]>;
};

export type Account = {
  __typename?: "Account";
  id: Scalars["ID"]["output"];
  userId: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
  provider: Scalars["String"]["output"];
  providerAccountId: Scalars["String"]["output"];
  refresh_token?: Maybe<Scalars["String"]["output"]>;
  access_token?: Maybe<Scalars["String"]["output"]>;
  expires_at?: Maybe<Scalars["Int"]["output"]>;
  token_type?: Maybe<Scalars["String"]["output"]>;
  scope?: Maybe<Scalars["String"]["output"]>;
  id_token?: Maybe<Scalars["String"]["output"]>;
  session_state?: Maybe<Scalars["String"]["output"]>;
};

export type AccountAggregateSelection = {
  __typename?: "AccountAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  userId: StringAggregateSelection;
  type: StringAggregateSelection;
  provider: StringAggregateSelection;
  providerAccountId: StringAggregateSelection;
  refresh_token: StringAggregateSelection;
  access_token: StringAggregateSelection;
  expires_at: IntAggregateSelection;
  token_type: StringAggregateSelection;
  scope: StringAggregateSelection;
  id_token: StringAggregateSelection;
  session_state: StringAggregateSelection;
};

export type AccountEdge = {
  __typename?: "AccountEdge";
  cursor: Scalars["String"]["output"];
  node: Account;
};

export type AccountsConnection = {
  __typename?: "AccountsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<AccountEdge>;
};

export type ActivitiesConnection = {
  __typename?: "ActivitiesConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<ActivityEdge>;
};

export type Activity = ActivityInterface & {
  __typename?: "Activity";
  id?: Maybe<Scalars["ID"]["output"]>;
  order: Scalars["Int"]["output"];
  description: Scalars["String"]["output"];
  options: Array<Scalars["String"]["output"]>;
  answer: Scalars["String"]["output"];
  comment: Scalars["String"]["output"];
  mermaid?: Maybe<Scalars["String"]["output"]>;
  reportCount?: Maybe<Scalars["Int"]["output"]>;
};

export type ActivityAggregateSelection = {
  __typename?: "ActivityAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  order: IntAggregateSelection;
  description: StringAggregateSelection;
  answer: StringAggregateSelection;
  comment: StringAggregateSelection;
  mermaid: StringAggregateSelection;
  reportCount: IntAggregateSelection;
};

export type ActivityEdge = {
  __typename?: "ActivityEdge";
  cursor: Scalars["String"]["output"];
  node: Activity;
};

export type ActivityInterfaceAggregateSelection = {
  __typename?: "ActivityInterfaceAggregateSelection";
  count: Scalars["Int"]["output"];
  description: StringAggregateSelection;
  answer: StringAggregateSelection;
  comment: StringAggregateSelection;
  mermaid: StringAggregateSelection;
};

export type ActivityInterfaceEdge = {
  __typename?: "ActivityInterfaceEdge";
  cursor: Scalars["String"]["output"];
  node: ActivityInterface;
};

export type ActivityInterfacesConnection = {
  __typename?: "ActivityInterfacesConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<ActivityInterfaceEdge>;
};

/**
 * The edge properties for the following fields:
 * * SessionCompletionRecord.attemptedActivities
 */
export type AttemptActivity = {
  __typename?: "AttemptActivity";
  attemptedAt: Scalars["DateTime"]["output"];
  isCorrect: Scalars["Boolean"]["output"];
  timeTaken?: Maybe<Scalars["Int"]["output"]>;
  correctedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type CreateAccountsMutationResponse = {
  __typename?: "CreateAccountsMutationResponse";
  info: CreateInfo;
  accounts: Array<Account>;
};

export type CreateActivitiesMutationResponse = {
  __typename?: "CreateActivitiesMutationResponse";
  info: CreateInfo;
  activities: Array<Activity>;
};

export type CreateDailyActivitiesMutationResponse = {
  __typename?: "CreateDailyActivitiesMutationResponse";
  info: CreateInfo;
  dailyActivities: Array<DailyActivity>;
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

export type CreateMistakenActivitiesMutationResponse = {
  __typename?: "CreateMistakenActivitiesMutationResponse";
  info: CreateInfo;
  mistakenActivities: Array<MistakenActivity>;
};

export type CreatePathsMutationResponse = {
  __typename?: "CreatePathsMutationResponse";
  info: CreateInfo;
  paths: Array<Path>;
};

export type CreateSessionCompletionRecordsMutationResponse = {
  __typename?: "CreateSessionCompletionRecordsMutationResponse";
  info: CreateInfo;
  sessionCompletionRecords: Array<SessionCompletionRecord>;
};

export type CreateSessionsMutationResponse = {
  __typename?: "CreateSessionsMutationResponse";
  info: CreateInfo;
  sessions: Array<Session>;
};

export type CreateStreaksMutationResponse = {
  __typename?: "CreateStreaksMutationResponse";
  info: CreateInfo;
  streaks: Array<Streak>;
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

export type CreateVerificationTokensMutationResponse = {
  __typename?: "CreateVerificationTokensMutationResponse";
  info: CreateInfo;
  verificationTokens: Array<VerificationToken>;
};

export type DailyActivitiesConnection = {
  __typename?: "DailyActivitiesConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<DailyActivityEdge>;
};

export type DailyActivity = {
  __typename?: "DailyActivity";
  date: Scalars["String"]["output"];
  count: Scalars["Int"]["output"];
};

export type DailyActivityAggregateSelection = {
  __typename?: "DailyActivityAggregateSelection";
  count: IntAggregateSelection;
  date: StringAggregateSelection;
};

export type DailyActivityEdge = {
  __typename?: "DailyActivityEdge";
  cursor: Scalars["String"]["output"];
  node: DailyActivity;
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
  language: Scalars["String"]["output"];
  wasReactedCount: Scalars["Int"]["output"];
  attempts?: Maybe<Scalars["Float"]["output"]>;
  completionPercentage?: Maybe<Scalars["Float"]["output"]>;
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
  hasSessionCompletionsAggregate?: Maybe<LessonSessionCompletionRecordHasSessionCompletionsAggregationSelection>;
  hasSessionCompletions: Array<SessionCompletionRecord>;
  hasSessionCompletionsConnection: LessonHasSessionCompletionsConnection;
};

export type LessonAttemptsArgs = {
  email: Scalars["String"]["input"];
};

export type LessonCompletionPercentageArgs = {
  email: Scalars["String"]["input"];
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

export type LessonHasSessionCompletionsAggregateArgs = {
  where?: InputMaybe<SessionCompletionRecordWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type LessonHasSessionCompletionsArgs = {
  where?: InputMaybe<SessionCompletionRecordWhere>;
  options?: InputMaybe<SessionCompletionRecordOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type LessonHasSessionCompletionsConnectionArgs = {
  where?: InputMaybe<LessonHasSessionCompletionsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<LessonHasSessionCompletionsConnectionSort>>;
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
  mermaid: StringAggregateSelection;
  reportCount: IntAggregateSelection;
};

export type LessonAggregateSelection = {
  __typename?: "LessonAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  title: StringAggregateSelection;
  level: IntAggregateSelection;
  createdAt: DateTimeAggregateSelection;
  language: StringAggregateSelection;
};

export type LessonEdge = {
  __typename?: "LessonEdge";
  cursor: Scalars["String"]["output"];
  node: Lesson;
};

/** The result of a fulltext search on an index of Lesson */
export type LessonFulltextResult = {
  __typename?: "LessonFulltextResult";
  score: Scalars["Float"]["output"];
  lesson: Lesson;
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

export type LessonHasSessionCompletionsConnection = {
  __typename?: "LessonHasSessionCompletionsConnection";
  edges: Array<LessonHasSessionCompletionsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type LessonHasSessionCompletionsRelationship = {
  __typename?: "LessonHasSessionCompletionsRelationship";
  cursor: Scalars["String"]["output"];
  node: SessionCompletionRecord;
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

export type LessonSessionCompletionRecordHasSessionCompletionsAggregationSelection =
  {
    __typename?: "LessonSessionCompletionRecordHasSessionCompletionsAggregationSelection";
    count: Scalars["Int"]["output"];
    node?: Maybe<LessonSessionCompletionRecordHasSessionCompletionsNodeAggregateSelection>;
  };

export type LessonSessionCompletionRecordHasSessionCompletionsNodeAggregateSelection =
  {
    __typename?: "LessonSessionCompletionRecordHasSessionCompletionsNodeAggregateSelection";
    id: IdAggregateSelection;
    completedAt: DateTimeAggregateSelection;
    score: FloatAggregateSelection;
    timeTaken: IntAggregateSelection;
    type: StringAggregateSelection;
    mode: StringAggregateSelection;
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
  reactedAt: DateTimeAggregateSelection;
};

export type LessonUserWasReactedNodeAggregateSelection = {
  __typename?: "LessonUserWasReactedNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  email: StringAggregateSelection;
  termsAcceptedAt: DateTimeAggregateSelection;
  image: StringAggregateSelection;
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

export type MistakenActivitiesConnection = {
  __typename?: "MistakenActivitiesConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<MistakenActivityEdge>;
};

export type MistakenActivity = ActivityInterface & {
  __typename?: "MistakenActivity";
  id?: Maybe<Scalars["ID"]["output"]>;
  description: Scalars["String"]["output"];
  options: Array<Scalars["String"]["output"]>;
  answer: Scalars["String"]["output"];
  comment: Scalars["String"]["output"];
  mermaid?: Maybe<Scalars["String"]["output"]>;
  sessionCompletionRecordId: Scalars["String"]["output"];
};

export type MistakenActivityAggregateSelection = {
  __typename?: "MistakenActivityAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  description: StringAggregateSelection;
  answer: StringAggregateSelection;
  comment: StringAggregateSelection;
  mermaid: StringAggregateSelection;
  sessionCompletionRecordId: StringAggregateSelection;
};

export type MistakenActivityEdge = {
  __typename?: "MistakenActivityEdge";
  cursor: Scalars["String"]["output"];
  node: MistakenActivity;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor?: Maybe<Scalars["String"]["output"]>;
  endCursor?: Maybe<Scalars["String"]["output"]>;
};

export type Path = {
  __typename?: "Path";
  id: Scalars["ID"]["output"];
  title?: Maybe<Scalars["String"]["output"]>;
  color?: Maybe<Scalars["String"]["output"]>;
  icon?: Maybe<Scalars["String"]["output"]>;
  randomActivities: Array<Activity>;
  withLessonsAggregate?: Maybe<PathLessonWithLessonsAggregationSelection>;
  withLessons: Array<Lesson>;
  withLessonsConnection: PathWithLessonsConnection;
};

export type PathRandomActivitiesArgs = {
  count: Scalars["Int"]["input"];
};

export type PathWithLessonsAggregateArgs = {
  where?: InputMaybe<LessonWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PathWithLessonsArgs = {
  where?: InputMaybe<LessonWhere>;
  options?: InputMaybe<LessonOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PathWithLessonsConnectionArgs = {
  where?: InputMaybe<PathWithLessonsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<PathWithLessonsConnectionSort>>;
};

export type PathAggregateSelection = {
  __typename?: "PathAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  title: StringAggregateSelection;
  color: StringAggregateSelection;
  icon: StringAggregateSelection;
};

export type PathEdge = {
  __typename?: "PathEdge";
  cursor: Scalars["String"]["output"];
  node: Path;
};

export type PathLessonWithLessonsAggregationSelection = {
  __typename?: "PathLessonWithLessonsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PathLessonWithLessonsNodeAggregateSelection>;
};

export type PathLessonWithLessonsNodeAggregateSelection = {
  __typename?: "PathLessonWithLessonsNodeAggregateSelection";
  id: IdAggregateSelection;
  title: StringAggregateSelection;
  level: IntAggregateSelection;
  createdAt: DateTimeAggregateSelection;
  language: StringAggregateSelection;
};

export type PathsConnection = {
  __typename?: "PathsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<PathEdge>;
};

export type PathWithLessonsConnection = {
  __typename?: "PathWithLessonsConnection";
  edges: Array<PathWithLessonsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type PathWithLessonsRelationship = {
  __typename?: "PathWithLessonsRelationship";
  cursor: Scalars["String"]["output"];
  node: Lesson;
};

/**
 * The edge properties for the following fields:
 * * Lesson.wasReacted
 * * User.reactedToPaths
 * * User.reactedToLessons
 */
export type Reacted = {
  __typename?: "Reacted";
  type: Scalars["String"]["output"];
  reactedAt: Scalars["DateTime"]["output"];
};

export type Session = {
  __typename?: "Session";
  id: Scalars["ID"]["output"];
  expires: Scalars["DateTime"]["output"];
  sessionToken: Scalars["String"]["output"];
  userId: Scalars["String"]["output"];
};

export type SessionAggregateSelection = {
  __typename?: "SessionAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  expires: DateTimeAggregateSelection;
  sessionToken: StringAggregateSelection;
  userId: StringAggregateSelection;
};

export type SessionCompletionRecord = {
  __typename?: "SessionCompletionRecord";
  id: Scalars["ID"]["output"];
  completedAt: Scalars["DateTime"]["output"];
  score?: Maybe<Scalars["Float"]["output"]>;
  timeTaken?: Maybe<Scalars["Int"]["output"]>;
  type: Scalars["String"]["output"];
  mode: Scalars["String"]["output"];
  byUserAggregate?: Maybe<SessionCompletionRecordUserByUserAggregationSelection>;
  byUser: User;
  byUserConnection: SessionCompletionRecordByUserConnection;
  forLessonAggregate?: Maybe<SessionCompletionRecordLessonForLessonAggregationSelection>;
  forLesson?: Maybe<Lesson>;
  forLessonConnection: SessionCompletionRecordForLessonConnection;
  forPathAggregate?: Maybe<SessionCompletionRecordPathForPathAggregationSelection>;
  forPath?: Maybe<Path>;
  forPathConnection: SessionCompletionRecordForPathConnection;
  attemptedActivitiesAggregate?: Maybe<SessionCompletionRecordActivityAttemptedActivitiesAggregationSelection>;
  attemptedActivities: Array<Activity>;
  attemptedActivitiesConnection: SessionCompletionRecordAttemptedActivitiesConnection;
};

export type SessionCompletionRecordByUserAggregateArgs = {
  where?: InputMaybe<UserWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SessionCompletionRecordByUserArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SessionCompletionRecordByUserConnectionArgs = {
  where?: InputMaybe<SessionCompletionRecordByUserConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<SessionCompletionRecordByUserConnectionSort>>;
};

export type SessionCompletionRecordForLessonAggregateArgs = {
  where?: InputMaybe<LessonWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SessionCompletionRecordForLessonArgs = {
  where?: InputMaybe<LessonWhere>;
  options?: InputMaybe<LessonOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SessionCompletionRecordForLessonConnectionArgs = {
  where?: InputMaybe<SessionCompletionRecordForLessonConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<SessionCompletionRecordForLessonConnectionSort>>;
};

export type SessionCompletionRecordForPathAggregateArgs = {
  where?: InputMaybe<PathWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SessionCompletionRecordForPathArgs = {
  where?: InputMaybe<PathWhere>;
  options?: InputMaybe<PathOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SessionCompletionRecordForPathConnectionArgs = {
  where?: InputMaybe<SessionCompletionRecordForPathConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<SessionCompletionRecordForPathConnectionSort>>;
};

export type SessionCompletionRecordAttemptedActivitiesAggregateArgs = {
  where?: InputMaybe<ActivityWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SessionCompletionRecordAttemptedActivitiesArgs = {
  where?: InputMaybe<ActivityWhere>;
  options?: InputMaybe<ActivityOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SessionCompletionRecordAttemptedActivitiesConnectionArgs = {
  where?: InputMaybe<SessionCompletionRecordAttemptedActivitiesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<
    Array<SessionCompletionRecordAttemptedActivitiesConnectionSort>
  >;
};

export type SessionCompletionRecordActivityAttemptedActivitiesAggregationSelection =
  {
    __typename?: "SessionCompletionRecordActivityAttemptedActivitiesAggregationSelection";
    count: Scalars["Int"]["output"];
    node?: Maybe<SessionCompletionRecordActivityAttemptedActivitiesNodeAggregateSelection>;
    edge?: Maybe<SessionCompletionRecordActivityAttemptedActivitiesEdgeAggregateSelection>;
  };

export type SessionCompletionRecordActivityAttemptedActivitiesEdgeAggregateSelection =
  {
    __typename?: "SessionCompletionRecordActivityAttemptedActivitiesEdgeAggregateSelection";
    attemptedAt: DateTimeAggregateSelection;
    timeTaken: IntAggregateSelection;
    correctedAt: DateTimeAggregateSelection;
  };

export type SessionCompletionRecordActivityAttemptedActivitiesNodeAggregateSelection =
  {
    __typename?: "SessionCompletionRecordActivityAttemptedActivitiesNodeAggregateSelection";
    id: IdAggregateSelection;
    order: IntAggregateSelection;
    description: StringAggregateSelection;
    answer: StringAggregateSelection;
    comment: StringAggregateSelection;
    mermaid: StringAggregateSelection;
    reportCount: IntAggregateSelection;
  };

export type SessionCompletionRecordAggregateSelection = {
  __typename?: "SessionCompletionRecordAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  completedAt: DateTimeAggregateSelection;
  score: FloatAggregateSelection;
  timeTaken: IntAggregateSelection;
  type: StringAggregateSelection;
  mode: StringAggregateSelection;
};

export type SessionCompletionRecordAttemptedActivitiesConnection = {
  __typename?: "SessionCompletionRecordAttemptedActivitiesConnection";
  edges: Array<SessionCompletionRecordAttemptedActivitiesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type SessionCompletionRecordAttemptedActivitiesRelationship = {
  __typename?: "SessionCompletionRecordAttemptedActivitiesRelationship";
  cursor: Scalars["String"]["output"];
  node: Activity;
  properties: AttemptActivity;
};

export type SessionCompletionRecordByUserConnection = {
  __typename?: "SessionCompletionRecordByUserConnection";
  edges: Array<SessionCompletionRecordByUserRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type SessionCompletionRecordByUserRelationship = {
  __typename?: "SessionCompletionRecordByUserRelationship";
  cursor: Scalars["String"]["output"];
  node: User;
};

export type SessionCompletionRecordEdge = {
  __typename?: "SessionCompletionRecordEdge";
  cursor: Scalars["String"]["output"];
  node: SessionCompletionRecord;
};

export type SessionCompletionRecordForLessonConnection = {
  __typename?: "SessionCompletionRecordForLessonConnection";
  edges: Array<SessionCompletionRecordForLessonRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type SessionCompletionRecordForLessonRelationship = {
  __typename?: "SessionCompletionRecordForLessonRelationship";
  cursor: Scalars["String"]["output"];
  node: Lesson;
};

export type SessionCompletionRecordForPathConnection = {
  __typename?: "SessionCompletionRecordForPathConnection";
  edges: Array<SessionCompletionRecordForPathRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type SessionCompletionRecordForPathRelationship = {
  __typename?: "SessionCompletionRecordForPathRelationship";
  cursor: Scalars["String"]["output"];
  node: Path;
};

export type SessionCompletionRecordLessonForLessonAggregationSelection = {
  __typename?: "SessionCompletionRecordLessonForLessonAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SessionCompletionRecordLessonForLessonNodeAggregateSelection>;
};

export type SessionCompletionRecordLessonForLessonNodeAggregateSelection = {
  __typename?: "SessionCompletionRecordLessonForLessonNodeAggregateSelection";
  id: IdAggregateSelection;
  title: StringAggregateSelection;
  level: IntAggregateSelection;
  createdAt: DateTimeAggregateSelection;
  language: StringAggregateSelection;
};

export type SessionCompletionRecordPathForPathAggregationSelection = {
  __typename?: "SessionCompletionRecordPathForPathAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SessionCompletionRecordPathForPathNodeAggregateSelection>;
};

export type SessionCompletionRecordPathForPathNodeAggregateSelection = {
  __typename?: "SessionCompletionRecordPathForPathNodeAggregateSelection";
  id: IdAggregateSelection;
  title: StringAggregateSelection;
  color: StringAggregateSelection;
  icon: StringAggregateSelection;
};

export type SessionCompletionRecordsConnection = {
  __typename?: "SessionCompletionRecordsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<SessionCompletionRecordEdge>;
};

export type SessionCompletionRecordUserByUserAggregationSelection = {
  __typename?: "SessionCompletionRecordUserByUserAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SessionCompletionRecordUserByUserNodeAggregateSelection>;
};

export type SessionCompletionRecordUserByUserNodeAggregateSelection = {
  __typename?: "SessionCompletionRecordUserByUserNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  email: StringAggregateSelection;
  termsAcceptedAt: DateTimeAggregateSelection;
  image: StringAggregateSelection;
};

export type SessionEdge = {
  __typename?: "SessionEdge";
  cursor: Scalars["String"]["output"];
  node: Session;
};

export type SessionsConnection = {
  __typename?: "SessionsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<SessionEdge>;
};

export type Streak = {
  __typename?: "Streak";
  id: Scalars["ID"]["output"];
  streakCount: Scalars["Int"]["output"];
  lastActivityDate: Scalars["DateTime"]["output"];
};

export type StreakAggregateSelection = {
  __typename?: "StreakAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  streakCount: IntAggregateSelection;
  lastActivityDate: DateTimeAggregateSelection;
};

export type StreakEdge = {
  __typename?: "StreakEdge";
  cursor: Scalars["String"]["output"];
  node: Streak;
};

export type StreaksConnection = {
  __typename?: "StreaksConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<StreakEdge>;
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

export type UpdateAccountsMutationResponse = {
  __typename?: "UpdateAccountsMutationResponse";
  info: UpdateInfo;
  accounts: Array<Account>;
};

export type UpdateActivitiesMutationResponse = {
  __typename?: "UpdateActivitiesMutationResponse";
  info: UpdateInfo;
  activities: Array<Activity>;
};

export type UpdateDailyActivitiesMutationResponse = {
  __typename?: "UpdateDailyActivitiesMutationResponse";
  info: UpdateInfo;
  dailyActivities: Array<DailyActivity>;
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

export type UpdateMistakenActivitiesMutationResponse = {
  __typename?: "UpdateMistakenActivitiesMutationResponse";
  info: UpdateInfo;
  mistakenActivities: Array<MistakenActivity>;
};

export type UpdatePathsMutationResponse = {
  __typename?: "UpdatePathsMutationResponse";
  info: UpdateInfo;
  paths: Array<Path>;
};

export type UpdateSessionCompletionRecordsMutationResponse = {
  __typename?: "UpdateSessionCompletionRecordsMutationResponse";
  info: UpdateInfo;
  sessionCompletionRecords: Array<SessionCompletionRecord>;
};

export type UpdateSessionsMutationResponse = {
  __typename?: "UpdateSessionsMutationResponse";
  info: UpdateInfo;
  sessions: Array<Session>;
};

export type UpdateStreaksMutationResponse = {
  __typename?: "UpdateStreaksMutationResponse";
  info: UpdateInfo;
  streaks: Array<Streak>;
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

export type UpdateVerificationTokensMutationResponse = {
  __typename?: "UpdateVerificationTokensMutationResponse";
  info: UpdateInfo;
  verificationTokens: Array<VerificationToken>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  email: Scalars["String"]["output"];
  emailVerified: Scalars["Boolean"]["output"];
  termsAcceptedAt?: Maybe<Scalars["DateTime"]["output"]>;
  completedOnboarding: Scalars["Boolean"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  mistakenActivitiesCount: Scalars["Int"]["output"];
  mistakenActivities: Array<MistakenActivity>;
  createdLessonsInteractionsCount: Scalars["Int"]["output"];
  dailyActivity: Array<DailyActivity>;
  hasAccountAggregate?: Maybe<UserAccountHasAccountAggregationSelection>;
  hasAccount: Account;
  hasAccountConnection: UserHasAccountConnection;
  hasSessionAggregate?: Maybe<UserSessionHasSessionAggregationSelection>;
  hasSession?: Maybe<Session>;
  hasSessionConnection: UserHasSessionConnection;
  hasLessonsAggregate?: Maybe<UserLessonHasLessonsAggregationSelection>;
  hasLessons: Array<Lesson>;
  hasLessonsConnection: UserHasLessonsConnection;
  reactedToPathsAggregate?: Maybe<UserPathReactedToPathsAggregationSelection>;
  reactedToPaths: Array<Path>;
  reactedToPathsConnection: UserReactedToPathsConnection;
  reactedToLessonsAggregate?: Maybe<UserLessonReactedToLessonsAggregationSelection>;
  reactedToLessons: Array<Lesson>;
  reactedToLessonsConnection: UserReactedToLessonsConnection;
  reportedActivitiesAggregate?: Maybe<UserActivityReportedActivitiesAggregationSelection>;
  reportedActivities: Array<Activity>;
  reportedActivitiesConnection: UserReportedActivitiesConnection;
  completedSessionsAggregate?: Maybe<UserSessionCompletionRecordCompletedSessionsAggregationSelection>;
  completedSessions: Array<SessionCompletionRecord>;
  completedSessionsConnection: UserCompletedSessionsConnection;
  hasStreakAggregate?: Maybe<UserStreakHasStreakAggregationSelection>;
  hasStreak: Array<Streak>;
  hasStreakConnection: UserHasStreakConnection;
  hasPathsAggregate?: Maybe<UserPathHasPathsAggregationSelection>;
  hasPaths: Array<Path>;
  hasPathsConnection: UserHasPathsConnection;
};

export type UserHasAccountAggregateArgs = {
  where?: InputMaybe<AccountWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserHasAccountArgs = {
  where?: InputMaybe<AccountWhere>;
  options?: InputMaybe<AccountOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserHasAccountConnectionArgs = {
  where?: InputMaybe<UserHasAccountConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<UserHasAccountConnectionSort>>;
};

export type UserHasSessionAggregateArgs = {
  where?: InputMaybe<SessionWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserHasSessionArgs = {
  where?: InputMaybe<SessionWhere>;
  options?: InputMaybe<SessionOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserHasSessionConnectionArgs = {
  where?: InputMaybe<UserHasSessionConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<UserHasSessionConnectionSort>>;
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

export type UserReactedToPathsAggregateArgs = {
  where?: InputMaybe<PathWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserReactedToPathsArgs = {
  where?: InputMaybe<PathWhere>;
  options?: InputMaybe<PathOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserReactedToPathsConnectionArgs = {
  where?: InputMaybe<UserReactedToPathsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<UserReactedToPathsConnectionSort>>;
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

export type UserCompletedSessionsAggregateArgs = {
  where?: InputMaybe<SessionCompletionRecordWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserCompletedSessionsArgs = {
  where?: InputMaybe<SessionCompletionRecordWhere>;
  options?: InputMaybe<SessionCompletionRecordOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserCompletedSessionsConnectionArgs = {
  where?: InputMaybe<UserCompletedSessionsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<UserCompletedSessionsConnectionSort>>;
};

export type UserHasStreakAggregateArgs = {
  where?: InputMaybe<StreakWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserHasStreakArgs = {
  where?: InputMaybe<StreakWhere>;
  options?: InputMaybe<StreakOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserHasStreakConnectionArgs = {
  where?: InputMaybe<UserHasStreakConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<UserHasStreakConnectionSort>>;
};

export type UserHasPathsAggregateArgs = {
  where?: InputMaybe<PathWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserHasPathsArgs = {
  where?: InputMaybe<PathWhere>;
  options?: InputMaybe<PathOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserHasPathsConnectionArgs = {
  where?: InputMaybe<UserHasPathsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<UserHasPathsConnectionSort>>;
};

export type UserAccountHasAccountAggregationSelection = {
  __typename?: "UserAccountHasAccountAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserAccountHasAccountNodeAggregateSelection>;
};

export type UserAccountHasAccountNodeAggregateSelection = {
  __typename?: "UserAccountHasAccountNodeAggregateSelection";
  id: IdAggregateSelection;
  userId: StringAggregateSelection;
  type: StringAggregateSelection;
  provider: StringAggregateSelection;
  providerAccountId: StringAggregateSelection;
  refresh_token: StringAggregateSelection;
  access_token: StringAggregateSelection;
  expires_at: IntAggregateSelection;
  token_type: StringAggregateSelection;
  scope: StringAggregateSelection;
  id_token: StringAggregateSelection;
  session_state: StringAggregateSelection;
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
  mermaid: StringAggregateSelection;
  reportCount: IntAggregateSelection;
};

export type UserAggregateSelection = {
  __typename?: "UserAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  email: StringAggregateSelection;
  termsAcceptedAt: DateTimeAggregateSelection;
  image: StringAggregateSelection;
};

export type UserCompletedSessionsConnection = {
  __typename?: "UserCompletedSessionsConnection";
  edges: Array<UserCompletedSessionsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type UserCompletedSessionsRelationship = {
  __typename?: "UserCompletedSessionsRelationship";
  cursor: Scalars["String"]["output"];
  node: SessionCompletionRecord;
};

export type UserEdge = {
  __typename?: "UserEdge";
  cursor: Scalars["String"]["output"];
  node: User;
};

export type UserHasAccountConnection = {
  __typename?: "UserHasAccountConnection";
  edges: Array<UserHasAccountRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type UserHasAccountRelationship = {
  __typename?: "UserHasAccountRelationship";
  cursor: Scalars["String"]["output"];
  node: Account;
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

export type UserHasPathsConnection = {
  __typename?: "UserHasPathsConnection";
  edges: Array<UserHasPathsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type UserHasPathsRelationship = {
  __typename?: "UserHasPathsRelationship";
  cursor: Scalars["String"]["output"];
  node: Path;
};

export type UserHasSessionConnection = {
  __typename?: "UserHasSessionConnection";
  edges: Array<UserHasSessionRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type UserHasSessionRelationship = {
  __typename?: "UserHasSessionRelationship";
  cursor: Scalars["String"]["output"];
  node: Session;
};

export type UserHasStreakConnection = {
  __typename?: "UserHasStreakConnection";
  edges: Array<UserHasStreakRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type UserHasStreakRelationship = {
  __typename?: "UserHasStreakRelationship";
  cursor: Scalars["String"]["output"];
  node: Streak;
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
  language: StringAggregateSelection;
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
  language: StringAggregateSelection;
};

export type UserPathHasPathsAggregationSelection = {
  __typename?: "UserPathHasPathsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserPathHasPathsNodeAggregateSelection>;
};

export type UserPathHasPathsNodeAggregateSelection = {
  __typename?: "UserPathHasPathsNodeAggregateSelection";
  id: IdAggregateSelection;
  title: StringAggregateSelection;
  color: StringAggregateSelection;
  icon: StringAggregateSelection;
};

export type UserPathReactedToPathsAggregationSelection = {
  __typename?: "UserPathReactedToPathsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserPathReactedToPathsNodeAggregateSelection>;
  edge?: Maybe<UserPathReactedToPathsEdgeAggregateSelection>;
};

export type UserPathReactedToPathsEdgeAggregateSelection = {
  __typename?: "UserPathReactedToPathsEdgeAggregateSelection";
  type: StringAggregateSelection;
  reactedAt: DateTimeAggregateSelection;
};

export type UserPathReactedToPathsNodeAggregateSelection = {
  __typename?: "UserPathReactedToPathsNodeAggregateSelection";
  id: IdAggregateSelection;
  title: StringAggregateSelection;
  color: StringAggregateSelection;
  icon: StringAggregateSelection;
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

export type UserReactedToPathsConnection = {
  __typename?: "UserReactedToPathsConnection";
  edges: Array<UserReactedToPathsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type UserReactedToPathsRelationship = {
  __typename?: "UserReactedToPathsRelationship";
  cursor: Scalars["String"]["output"];
  node: Path;
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

export type UserSessionCompletionRecordCompletedSessionsAggregationSelection = {
  __typename?: "UserSessionCompletionRecordCompletedSessionsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserSessionCompletionRecordCompletedSessionsNodeAggregateSelection>;
};

export type UserSessionCompletionRecordCompletedSessionsNodeAggregateSelection =
  {
    __typename?: "UserSessionCompletionRecordCompletedSessionsNodeAggregateSelection";
    id: IdAggregateSelection;
    completedAt: DateTimeAggregateSelection;
    score: FloatAggregateSelection;
    timeTaken: IntAggregateSelection;
    type: StringAggregateSelection;
    mode: StringAggregateSelection;
  };

export type UserSessionHasSessionAggregationSelection = {
  __typename?: "UserSessionHasSessionAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserSessionHasSessionNodeAggregateSelection>;
};

export type UserSessionHasSessionNodeAggregateSelection = {
  __typename?: "UserSessionHasSessionNodeAggregateSelection";
  id: IdAggregateSelection;
  expires: DateTimeAggregateSelection;
  sessionToken: StringAggregateSelection;
  userId: StringAggregateSelection;
};

export type UserStreakHasStreakAggregationSelection = {
  __typename?: "UserStreakHasStreakAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserStreakHasStreakNodeAggregateSelection>;
};

export type UserStreakHasStreakNodeAggregateSelection = {
  __typename?: "UserStreakHasStreakNodeAggregateSelection";
  id: IdAggregateSelection;
  streakCount: IntAggregateSelection;
  lastActivityDate: DateTimeAggregateSelection;
};

export type VerificationToken = {
  __typename?: "VerificationToken";
  identifier: Scalars["String"]["output"];
  token: Scalars["String"]["output"];
  expires: Scalars["DateTime"]["output"];
};

export type VerificationTokenAggregateSelection = {
  __typename?: "VerificationTokenAggregateSelection";
  count: Scalars["Int"]["output"];
  identifier: StringAggregateSelection;
  token: StringAggregateSelection;
  expires: DateTimeAggregateSelection;
};

export type VerificationTokenEdge = {
  __typename?: "VerificationTokenEdge";
  cursor: Scalars["String"]["output"];
  node: VerificationToken;
};

export type VerificationTokensConnection = {
  __typename?: "VerificationTokensConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<VerificationTokenEdge>;
};

export type AccountConnectWhere = {
  node: AccountWhere;
};

export type AccountCreateInput = {
  userId: Scalars["String"]["input"];
  type: Scalars["String"]["input"];
  provider: Scalars["String"]["input"];
  providerAccountId: Scalars["String"]["input"];
  refresh_token?: InputMaybe<Scalars["String"]["input"]>;
  access_token?: InputMaybe<Scalars["String"]["input"]>;
  expires_at?: InputMaybe<Scalars["Int"]["input"]>;
  token_type?: InputMaybe<Scalars["String"]["input"]>;
  scope?: InputMaybe<Scalars["String"]["input"]>;
  id_token?: InputMaybe<Scalars["String"]["input"]>;
  session_state?: InputMaybe<Scalars["String"]["input"]>;
};

export type AccountOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more AccountSort objects to sort Accounts by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<AccountSort>>;
};

/** Fields to sort Accounts by. The order in which sorts are applied is not guaranteed when specifying many fields in one AccountSort object. */
export type AccountSort = {
  id?: InputMaybe<SortDirection>;
  userId?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
  provider?: InputMaybe<SortDirection>;
  providerAccountId?: InputMaybe<SortDirection>;
  refresh_token?: InputMaybe<SortDirection>;
  access_token?: InputMaybe<SortDirection>;
  expires_at?: InputMaybe<SortDirection>;
  token_type?: InputMaybe<SortDirection>;
  scope?: InputMaybe<SortDirection>;
  id_token?: InputMaybe<SortDirection>;
  session_state?: InputMaybe<SortDirection>;
};

export type AccountUpdateInput = {
  userId?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  provider?: InputMaybe<Scalars["String"]["input"]>;
  providerAccountId?: InputMaybe<Scalars["String"]["input"]>;
  refresh_token?: InputMaybe<Scalars["String"]["input"]>;
  access_token?: InputMaybe<Scalars["String"]["input"]>;
  expires_at?: InputMaybe<Scalars["Int"]["input"]>;
  expires_at_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  expires_at_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  token_type?: InputMaybe<Scalars["String"]["input"]>;
  scope?: InputMaybe<Scalars["String"]["input"]>;
  id_token?: InputMaybe<Scalars["String"]["input"]>;
  session_state?: InputMaybe<Scalars["String"]["input"]>;
};

export type AccountWhere = {
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
  userId?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  userId_NOT?: InputMaybe<Scalars["String"]["input"]>;
  userId_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  userId_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  userId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  userId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  userId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  userId_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  userId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  userId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
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
  provider?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  provider_NOT?: InputMaybe<Scalars["String"]["input"]>;
  provider_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  provider_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  provider_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  provider_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  provider_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  provider_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  provider_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  provider_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  providerAccountId?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  providerAccountId_NOT?: InputMaybe<Scalars["String"]["input"]>;
  providerAccountId_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  providerAccountId_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  providerAccountId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  providerAccountId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  providerAccountId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  providerAccountId_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  providerAccountId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  providerAccountId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  refresh_token?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  refresh_token_NOT?: InputMaybe<Scalars["String"]["input"]>;
  refresh_token_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  refresh_token_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  refresh_token_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  refresh_token_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  refresh_token_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  refresh_token_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  refresh_token_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  refresh_token_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  access_token?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  access_token_NOT?: InputMaybe<Scalars["String"]["input"]>;
  access_token_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  access_token_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  access_token_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  access_token_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  access_token_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  access_token_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  access_token_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  access_token_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  expires_at?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  expires_at_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  expires_at_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  expires_at_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  expires_at_LT?: InputMaybe<Scalars["Int"]["input"]>;
  expires_at_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  expires_at_GT?: InputMaybe<Scalars["Int"]["input"]>;
  expires_at_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  token_type?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  token_type_NOT?: InputMaybe<Scalars["String"]["input"]>;
  token_type_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  token_type_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  token_type_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  token_type_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  token_type_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  token_type_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  token_type_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  token_type_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  scope?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  scope_NOT?: InputMaybe<Scalars["String"]["input"]>;
  scope_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  scope_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  scope_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  scope_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  scope_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  scope_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  scope_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  scope_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  id_token?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_token_NOT?: InputMaybe<Scalars["String"]["input"]>;
  id_token_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_token_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_token_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  id_token_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  id_token_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_token_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_token_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_token_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  session_state?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  session_state_NOT?: InputMaybe<Scalars["String"]["input"]>;
  session_state_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  session_state_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  session_state_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  session_state_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  session_state_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  session_state_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  session_state_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  session_state_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<AccountWhere>>;
  AND?: InputMaybe<Array<AccountWhere>>;
  NOT?: InputMaybe<AccountWhere>;
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
  mermaid?: InputMaybe<Scalars["String"]["input"]>;
  reportCount?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ActivityInterfaceOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more ActivityInterfaceSort objects to sort ActivityInterfaces by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<ActivityInterfaceSort>>>;
};

/** Fields to sort ActivityInterfaces by. The order in which sorts are applied is not guaranteed when specifying many fields in one ActivityInterfaceSort object. */
export type ActivityInterfaceSort = {
  description?: InputMaybe<SortDirection>;
  answer?: InputMaybe<SortDirection>;
  comment?: InputMaybe<SortDirection>;
  mermaid?: InputMaybe<SortDirection>;
};

export type ActivityInterfaceWhere = {
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
  mermaid?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  mermaid_NOT?: InputMaybe<Scalars["String"]["input"]>;
  mermaid_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  mermaid_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  mermaid_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  mermaid_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  mermaid_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  mermaid_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  mermaid_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  mermaid_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<ActivityInterfaceWhere>>;
  AND?: InputMaybe<Array<ActivityInterfaceWhere>>;
  NOT?: InputMaybe<ActivityInterfaceWhere>;
  typename_IN?: InputMaybe<Array<ActivityInterfaceImplementation>>;
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
  order?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  answer?: InputMaybe<SortDirection>;
  comment?: InputMaybe<SortDirection>;
  mermaid?: InputMaybe<SortDirection>;
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
  mermaid?: InputMaybe<Scalars["String"]["input"]>;
  reportCount?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  reportCount_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
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
  mermaid?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  mermaid_NOT?: InputMaybe<Scalars["String"]["input"]>;
  mermaid_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  mermaid_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  mermaid_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  mermaid_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  mermaid_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  mermaid_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  mermaid_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  mermaid_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
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
};

export type AttemptActivityAggregationWhereInput = {
  AND?: InputMaybe<Array<AttemptActivityAggregationWhereInput>>;
  OR?: InputMaybe<Array<AttemptActivityAggregationWhereInput>>;
  NOT?: InputMaybe<AttemptActivityAggregationWhereInput>;
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
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  correctedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  correctedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  correctedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  correctedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  correctedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  correctedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  correctedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  correctedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  correctedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  correctedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  correctedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  correctedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  correctedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  correctedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  correctedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type AttemptActivityCreateInput = {
  attemptedAt: Scalars["DateTime"]["input"];
  isCorrect: Scalars["Boolean"]["input"];
  timeTaken?: InputMaybe<Scalars["Int"]["input"]>;
  correctedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type AttemptActivitySort = {
  attemptedAt?: InputMaybe<SortDirection>;
  isCorrect?: InputMaybe<SortDirection>;
  timeTaken?: InputMaybe<SortDirection>;
  correctedAt?: InputMaybe<SortDirection>;
};

export type AttemptActivityUpdateInput = {
  attemptedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  isCorrect?: InputMaybe<Scalars["Boolean"]["input"]>;
  timeTaken?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  correctedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type AttemptActivityWhere = {
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
  correctedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  correctedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  correctedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  correctedAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  correctedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  correctedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  correctedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  correctedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  OR?: InputMaybe<Array<AttemptActivityWhere>>;
  AND?: InputMaybe<Array<AttemptActivityWhere>>;
  NOT?: InputMaybe<AttemptActivityWhere>;
};

export type DailyActivityCreateInput = {
  date: Scalars["String"]["input"];
  count: Scalars["Int"]["input"];
};

export type DailyActivityOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more DailyActivitySort objects to sort DailyActivities by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<DailyActivitySort>>;
};

/** Fields to sort DailyActivities by. The order in which sorts are applied is not guaranteed when specifying many fields in one DailyActivitySort object. */
export type DailyActivitySort = {
  date?: InputMaybe<SortDirection>;
  count?: InputMaybe<SortDirection>;
};

export type DailyActivityUpdateInput = {
  date?: InputMaybe<Scalars["String"]["input"]>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  count_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
};

export type DailyActivityWhere = {
  date?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  date_NOT?: InputMaybe<Scalars["String"]["input"]>;
  date_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  date_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  date_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  date_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  date_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  date_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  date_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  count_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  count_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  count_NOT_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  OR?: InputMaybe<Array<DailyActivityWhere>>;
  AND?: InputMaybe<Array<DailyActivityWhere>>;
  NOT?: InputMaybe<DailyActivityWhere>;
};

/** The input for filtering a float */
export type FloatWhere = {
  min?: InputMaybe<Scalars["Float"]["input"]>;
  max?: InputMaybe<Scalars["Float"]["input"]>;
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

export type LessonConnectInput = {
  hasTopic?: InputMaybe<LessonHasTopicConnectFieldInput>;
  hasSubtopic?: InputMaybe<LessonHasSubtopicConnectFieldInput>;
  hasKeywords?: InputMaybe<Array<LessonHasKeywordsConnectFieldInput>>;
  hasActivities?: InputMaybe<Array<LessonHasActivitiesConnectFieldInput>>;
  wasReacted?: InputMaybe<Array<LessonWasReactedConnectFieldInput>>;
  hasSessionCompletions?: InputMaybe<
    Array<LessonHasSessionCompletionsConnectFieldInput>
  >;
};

export type LessonConnectOrCreateInput = {
  hasTopic?: InputMaybe<LessonHasTopicConnectOrCreateFieldInput>;
  hasSubtopic?: InputMaybe<LessonHasSubtopicConnectOrCreateFieldInput>;
  hasKeywords?: InputMaybe<Array<LessonHasKeywordsConnectOrCreateFieldInput>>;
  wasReacted?: InputMaybe<Array<LessonWasReactedConnectOrCreateFieldInput>>;
};

export type LessonConnectWhere = {
  node: LessonWhere;
};

export type LessonCreateInput = {
  title: Scalars["String"]["input"];
  level: Scalars["Int"]["input"];
  isPublic: Scalars["Boolean"]["input"];
  createdAt: Scalars["DateTime"]["input"];
  language: Scalars["String"]["input"];
  hasTopic?: InputMaybe<LessonHasTopicFieldInput>;
  hasSubtopic?: InputMaybe<LessonHasSubtopicFieldInput>;
  hasKeywords?: InputMaybe<LessonHasKeywordsFieldInput>;
  hasActivities?: InputMaybe<LessonHasActivitiesFieldInput>;
  wasReacted?: InputMaybe<LessonWasReactedFieldInput>;
  hasSessionCompletions?: InputMaybe<LessonHasSessionCompletionsFieldInput>;
};

export type LessonDeleteInput = {
  hasTopic?: InputMaybe<LessonHasTopicDeleteFieldInput>;
  hasSubtopic?: InputMaybe<LessonHasSubtopicDeleteFieldInput>;
  hasKeywords?: InputMaybe<Array<LessonHasKeywordsDeleteFieldInput>>;
  hasActivities?: InputMaybe<Array<LessonHasActivitiesDeleteFieldInput>>;
  wasReacted?: InputMaybe<Array<LessonWasReactedDeleteFieldInput>>;
  hasSessionCompletions?: InputMaybe<
    Array<LessonHasSessionCompletionsDeleteFieldInput>
  >;
};

export type LessonDisconnectInput = {
  hasTopic?: InputMaybe<LessonHasTopicDisconnectFieldInput>;
  hasSubtopic?: InputMaybe<LessonHasSubtopicDisconnectFieldInput>;
  hasKeywords?: InputMaybe<Array<LessonHasKeywordsDisconnectFieldInput>>;
  hasActivities?: InputMaybe<Array<LessonHasActivitiesDisconnectFieldInput>>;
  wasReacted?: InputMaybe<Array<LessonWasReactedDisconnectFieldInput>>;
  hasSessionCompletions?: InputMaybe<
    Array<LessonHasSessionCompletionsDisconnectFieldInput>
  >;
};

export type LessonFulltext = {
  LessonTitle?: InputMaybe<LessonLessonTitleFulltext>;
};

/** The input for sorting a fulltext query on an index of Lesson */
export type LessonFulltextSort = {
  score?: InputMaybe<SortDirection>;
  lesson?: InputMaybe<LessonSort>;
};

/** The input for filtering a fulltext query on an index of Lesson */
export type LessonFulltextWhere = {
  score?: InputMaybe<FloatWhere>;
  lesson?: InputMaybe<LessonWhere>;
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
  mermaid_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  mermaid_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  mermaid_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  mermaid_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  mermaid_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  mermaid_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  mermaid_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  mermaid_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  mermaid_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  mermaid_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  mermaid_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  mermaid_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  mermaid_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  mermaid_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  mermaid_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  mermaid_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  mermaid_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  mermaid_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  mermaid_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  mermaid_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
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

export type LessonHasSessionCompletionsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<LessonHasSessionCompletionsAggregateInput>>;
  OR?: InputMaybe<Array<LessonHasSessionCompletionsAggregateInput>>;
  NOT?: InputMaybe<LessonHasSessionCompletionsAggregateInput>;
  node?: InputMaybe<LessonHasSessionCompletionsNodeAggregationWhereInput>;
};

export type LessonHasSessionCompletionsConnectFieldInput = {
  where?: InputMaybe<SessionCompletionRecordConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<SessionCompletionRecordConnectInput>>;
};

export type LessonHasSessionCompletionsConnectionSort = {
  node?: InputMaybe<SessionCompletionRecordSort>;
};

export type LessonHasSessionCompletionsConnectionWhere = {
  AND?: InputMaybe<Array<LessonHasSessionCompletionsConnectionWhere>>;
  OR?: InputMaybe<Array<LessonHasSessionCompletionsConnectionWhere>>;
  NOT?: InputMaybe<LessonHasSessionCompletionsConnectionWhere>;
  node?: InputMaybe<SessionCompletionRecordWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<SessionCompletionRecordWhere>;
};

export type LessonHasSessionCompletionsCreateFieldInput = {
  node: SessionCompletionRecordCreateInput;
};

export type LessonHasSessionCompletionsDeleteFieldInput = {
  where?: InputMaybe<LessonHasSessionCompletionsConnectionWhere>;
  delete?: InputMaybe<SessionCompletionRecordDeleteInput>;
};

export type LessonHasSessionCompletionsDisconnectFieldInput = {
  where?: InputMaybe<LessonHasSessionCompletionsConnectionWhere>;
  disconnect?: InputMaybe<SessionCompletionRecordDisconnectInput>;
};

export type LessonHasSessionCompletionsFieldInput = {
  connect?: InputMaybe<Array<LessonHasSessionCompletionsConnectFieldInput>>;
  create?: InputMaybe<Array<LessonHasSessionCompletionsCreateFieldInput>>;
};

export type LessonHasSessionCompletionsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<LessonHasSessionCompletionsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<LessonHasSessionCompletionsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<LessonHasSessionCompletionsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
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
  mode_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  mode_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  mode_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  mode_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  mode_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  mode_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  mode_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  mode_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  mode_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  mode_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  mode_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  mode_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  mode_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  mode_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  mode_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  mode_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  mode_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  mode_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  mode_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  mode_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LessonHasSessionCompletionsUpdateConnectionInput = {
  node?: InputMaybe<SessionCompletionRecordUpdateInput>;
};

export type LessonHasSessionCompletionsUpdateFieldInput = {
  where?: InputMaybe<LessonHasSessionCompletionsConnectionWhere>;
  connect?: InputMaybe<Array<LessonHasSessionCompletionsConnectFieldInput>>;
  disconnect?: InputMaybe<
    Array<LessonHasSessionCompletionsDisconnectFieldInput>
  >;
  create?: InputMaybe<Array<LessonHasSessionCompletionsCreateFieldInput>>;
  update?: InputMaybe<LessonHasSessionCompletionsUpdateConnectionInput>;
  delete?: InputMaybe<Array<LessonHasSessionCompletionsDeleteFieldInput>>;
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

export type LessonLessonTitleFulltext = {
  phrase: Scalars["String"]["input"];
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
  hasSessionCompletions?: InputMaybe<
    Array<LessonHasSessionCompletionsCreateFieldInput>
  >;
};

/** Fields to sort Lessons by. The order in which sorts are applied is not guaranteed when specifying many fields in one LessonSort object. */
export type LessonSort = {
  id?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  level?: InputMaybe<SortDirection>;
  isPublic?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  language?: InputMaybe<SortDirection>;
  wasReactedCount?: InputMaybe<SortDirection>;
  attempts?: InputMaybe<SortDirection>;
  completionPercentage?: InputMaybe<SortDirection>;
};

export type LessonUpdateInput = {
  title?: InputMaybe<Scalars["String"]["input"]>;
  level?: InputMaybe<Scalars["Int"]["input"]>;
  level_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  level_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  isPublic?: InputMaybe<Scalars["Boolean"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  language?: InputMaybe<Scalars["String"]["input"]>;
  hasTopic?: InputMaybe<LessonHasTopicUpdateFieldInput>;
  hasSubtopic?: InputMaybe<LessonHasSubtopicUpdateFieldInput>;
  hasKeywords?: InputMaybe<Array<LessonHasKeywordsUpdateFieldInput>>;
  hasActivities?: InputMaybe<Array<LessonHasActivitiesUpdateFieldInput>>;
  wasReacted?: InputMaybe<Array<LessonWasReactedUpdateFieldInput>>;
  hasSessionCompletions?: InputMaybe<
    Array<LessonHasSessionCompletionsUpdateFieldInput>
  >;
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
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  termsAcceptedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  termsAcceptedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  termsAcceptedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  termsAcceptedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  termsAcceptedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  termsAcceptedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  termsAcceptedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  termsAcceptedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  termsAcceptedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  termsAcceptedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  termsAcceptedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  termsAcceptedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  termsAcceptedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  termsAcceptedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  termsAcceptedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  image_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  image_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  image_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  image_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  image_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  image_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  image_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  image_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  image_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  image_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  image_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  image_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  image_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  image_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  image_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  image_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  image_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  image_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  image_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  image_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
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
  language?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  language_NOT?: InputMaybe<Scalars["String"]["input"]>;
  language_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  language_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  language_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  language_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  language_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  language_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  language_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  language_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
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
  /** @deprecated Use `hasSessionCompletions_SOME` instead. */
  hasSessionCompletions?: InputMaybe<SessionCompletionRecordWhere>;
  /** @deprecated Use `hasSessionCompletions_NONE` instead. */
  hasSessionCompletions_NOT?: InputMaybe<SessionCompletionRecordWhere>;
  /** Return Lessons where all of the related SessionCompletionRecords match this filter */
  hasSessionCompletions_ALL?: InputMaybe<SessionCompletionRecordWhere>;
  /** Return Lessons where none of the related SessionCompletionRecords match this filter */
  hasSessionCompletions_NONE?: InputMaybe<SessionCompletionRecordWhere>;
  /** Return Lessons where one of the related SessionCompletionRecords match this filter */
  hasSessionCompletions_SINGLE?: InputMaybe<SessionCompletionRecordWhere>;
  /** Return Lessons where some of the related SessionCompletionRecords match this filter */
  hasSessionCompletions_SOME?: InputMaybe<SessionCompletionRecordWhere>;
  /** @deprecated Use `hasSessionCompletionsConnection_SOME` instead. */
  hasSessionCompletionsConnection?: InputMaybe<LessonHasSessionCompletionsConnectionWhere>;
  /** @deprecated Use `hasSessionCompletionsConnection_NONE` instead. */
  hasSessionCompletionsConnection_NOT?: InputMaybe<LessonHasSessionCompletionsConnectionWhere>;
  /** Return Lessons where all of the related LessonHasSessionCompletionsConnections match this filter */
  hasSessionCompletionsConnection_ALL?: InputMaybe<LessonHasSessionCompletionsConnectionWhere>;
  /** Return Lessons where none of the related LessonHasSessionCompletionsConnections match this filter */
  hasSessionCompletionsConnection_NONE?: InputMaybe<LessonHasSessionCompletionsConnectionWhere>;
  /** Return Lessons where one of the related LessonHasSessionCompletionsConnections match this filter */
  hasSessionCompletionsConnection_SINGLE?: InputMaybe<LessonHasSessionCompletionsConnectionWhere>;
  /** Return Lessons where some of the related LessonHasSessionCompletionsConnections match this filter */
  hasSessionCompletionsConnection_SOME?: InputMaybe<LessonHasSessionCompletionsConnectionWhere>;
  hasSessionCompletionsAggregate?: InputMaybe<LessonHasSessionCompletionsAggregateInput>;
};

export type MistakenActivityCreateInput = {
  description: Scalars["String"]["input"];
  options: Array<Scalars["String"]["input"]>;
  answer: Scalars["String"]["input"];
  comment: Scalars["String"]["input"];
  mermaid?: InputMaybe<Scalars["String"]["input"]>;
  sessionCompletionRecordId: Scalars["String"]["input"];
};

export type MistakenActivityOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more MistakenActivitySort objects to sort MistakenActivities by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MistakenActivitySort>>;
};

/** Fields to sort MistakenActivities by. The order in which sorts are applied is not guaranteed when specifying many fields in one MistakenActivitySort object. */
export type MistakenActivitySort = {
  id?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  answer?: InputMaybe<SortDirection>;
  comment?: InputMaybe<SortDirection>;
  mermaid?: InputMaybe<SortDirection>;
  sessionCompletionRecordId?: InputMaybe<SortDirection>;
};

export type MistakenActivityUpdateInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  options?: InputMaybe<Array<Scalars["String"]["input"]>>;
  options_POP?: InputMaybe<Scalars["Int"]["input"]>;
  options_PUSH?: InputMaybe<Array<Scalars["String"]["input"]>>;
  answer?: InputMaybe<Scalars["String"]["input"]>;
  comment?: InputMaybe<Scalars["String"]["input"]>;
  mermaid?: InputMaybe<Scalars["String"]["input"]>;
  sessionCompletionRecordId?: InputMaybe<Scalars["String"]["input"]>;
};

export type MistakenActivityWhere = {
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
  mermaid?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  mermaid_NOT?: InputMaybe<Scalars["String"]["input"]>;
  mermaid_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  mermaid_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  mermaid_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  mermaid_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  mermaid_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  mermaid_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  mermaid_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  mermaid_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  sessionCompletionRecordId?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  sessionCompletionRecordId_NOT?: InputMaybe<Scalars["String"]["input"]>;
  sessionCompletionRecordId_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  sessionCompletionRecordId_NOT_IN?: InputMaybe<
    Array<Scalars["String"]["input"]>
  >;
  sessionCompletionRecordId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  sessionCompletionRecordId_STARTS_WITH?: InputMaybe<
    Scalars["String"]["input"]
  >;
  sessionCompletionRecordId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  sessionCompletionRecordId_NOT_CONTAINS?: InputMaybe<
    Scalars["String"]["input"]
  >;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  sessionCompletionRecordId_NOT_STARTS_WITH?: InputMaybe<
    Scalars["String"]["input"]
  >;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  sessionCompletionRecordId_NOT_ENDS_WITH?: InputMaybe<
    Scalars["String"]["input"]
  >;
  OR?: InputMaybe<Array<MistakenActivityWhere>>;
  AND?: InputMaybe<Array<MistakenActivityWhere>>;
  NOT?: InputMaybe<MistakenActivityWhere>;
};

export type PathConnectInput = {
  withLessons?: InputMaybe<Array<PathWithLessonsConnectFieldInput>>;
};

export type PathConnectWhere = {
  node: PathWhere;
};

export type PathCreateInput = {
  title?: InputMaybe<Scalars["String"]["input"]>;
  color?: InputMaybe<Scalars["String"]["input"]>;
  icon?: InputMaybe<Scalars["String"]["input"]>;
  withLessons?: InputMaybe<PathWithLessonsFieldInput>;
};

export type PathDeleteInput = {
  withLessons?: InputMaybe<Array<PathWithLessonsDeleteFieldInput>>;
};

export type PathDisconnectInput = {
  withLessons?: InputMaybe<Array<PathWithLessonsDisconnectFieldInput>>;
};

export type PathOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more PathSort objects to sort Paths by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PathSort>>;
};

export type PathRelationInput = {
  withLessons?: InputMaybe<Array<PathWithLessonsCreateFieldInput>>;
};

/** Fields to sort Paths by. The order in which sorts are applied is not guaranteed when specifying many fields in one PathSort object. */
export type PathSort = {
  id?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  color?: InputMaybe<SortDirection>;
  icon?: InputMaybe<SortDirection>;
};

export type PathUpdateInput = {
  title?: InputMaybe<Scalars["String"]["input"]>;
  color?: InputMaybe<Scalars["String"]["input"]>;
  icon?: InputMaybe<Scalars["String"]["input"]>;
  withLessons?: InputMaybe<Array<PathWithLessonsUpdateFieldInput>>;
};

export type PathWhere = {
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
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT?: InputMaybe<Scalars["String"]["input"]>;
  title_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  title_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  title_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  color?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  color_NOT?: InputMaybe<Scalars["String"]["input"]>;
  color_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  color_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  color_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  color_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  color_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  color_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  color_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  color_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  icon?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  icon_NOT?: InputMaybe<Scalars["String"]["input"]>;
  icon_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  icon_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  icon_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  icon_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  icon_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  icon_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  icon_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  icon_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<PathWhere>>;
  AND?: InputMaybe<Array<PathWhere>>;
  NOT?: InputMaybe<PathWhere>;
  /** @deprecated Use `withLessons_SOME` instead. */
  withLessons?: InputMaybe<LessonWhere>;
  /** @deprecated Use `withLessons_NONE` instead. */
  withLessons_NOT?: InputMaybe<LessonWhere>;
  /** Return Paths where all of the related Lessons match this filter */
  withLessons_ALL?: InputMaybe<LessonWhere>;
  /** Return Paths where none of the related Lessons match this filter */
  withLessons_NONE?: InputMaybe<LessonWhere>;
  /** Return Paths where one of the related Lessons match this filter */
  withLessons_SINGLE?: InputMaybe<LessonWhere>;
  /** Return Paths where some of the related Lessons match this filter */
  withLessons_SOME?: InputMaybe<LessonWhere>;
  /** @deprecated Use `withLessonsConnection_SOME` instead. */
  withLessonsConnection?: InputMaybe<PathWithLessonsConnectionWhere>;
  /** @deprecated Use `withLessonsConnection_NONE` instead. */
  withLessonsConnection_NOT?: InputMaybe<PathWithLessonsConnectionWhere>;
  /** Return Paths where all of the related PathWithLessonsConnections match this filter */
  withLessonsConnection_ALL?: InputMaybe<PathWithLessonsConnectionWhere>;
  /** Return Paths where none of the related PathWithLessonsConnections match this filter */
  withLessonsConnection_NONE?: InputMaybe<PathWithLessonsConnectionWhere>;
  /** Return Paths where one of the related PathWithLessonsConnections match this filter */
  withLessonsConnection_SINGLE?: InputMaybe<PathWithLessonsConnectionWhere>;
  /** Return Paths where some of the related PathWithLessonsConnections match this filter */
  withLessonsConnection_SOME?: InputMaybe<PathWithLessonsConnectionWhere>;
  withLessonsAggregate?: InputMaybe<PathWithLessonsAggregateInput>;
};

export type PathWithLessonsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PathWithLessonsAggregateInput>>;
  OR?: InputMaybe<Array<PathWithLessonsAggregateInput>>;
  NOT?: InputMaybe<PathWithLessonsAggregateInput>;
  node?: InputMaybe<PathWithLessonsNodeAggregationWhereInput>;
};

export type PathWithLessonsConnectFieldInput = {
  where?: InputMaybe<LessonConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<LessonConnectInput>>;
};

export type PathWithLessonsConnectionSort = {
  node?: InputMaybe<LessonSort>;
};

export type PathWithLessonsConnectionWhere = {
  AND?: InputMaybe<Array<PathWithLessonsConnectionWhere>>;
  OR?: InputMaybe<Array<PathWithLessonsConnectionWhere>>;
  NOT?: InputMaybe<PathWithLessonsConnectionWhere>;
  node?: InputMaybe<LessonWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<LessonWhere>;
};

export type PathWithLessonsCreateFieldInput = {
  node: LessonCreateInput;
};

export type PathWithLessonsDeleteFieldInput = {
  where?: InputMaybe<PathWithLessonsConnectionWhere>;
  delete?: InputMaybe<LessonDeleteInput>;
};

export type PathWithLessonsDisconnectFieldInput = {
  where?: InputMaybe<PathWithLessonsConnectionWhere>;
  disconnect?: InputMaybe<LessonDisconnectInput>;
};

export type PathWithLessonsFieldInput = {
  connect?: InputMaybe<Array<PathWithLessonsConnectFieldInput>>;
  create?: InputMaybe<Array<PathWithLessonsCreateFieldInput>>;
};

export type PathWithLessonsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PathWithLessonsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PathWithLessonsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PathWithLessonsNodeAggregationWhereInput>;
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
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  language_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  language_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  language_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  language_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  language_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  language_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  language_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  language_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  language_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  language_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  language_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  language_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  language_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  language_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  language_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  language_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  language_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  language_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  language_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  language_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PathWithLessonsUpdateConnectionInput = {
  node?: InputMaybe<LessonUpdateInput>;
};

export type PathWithLessonsUpdateFieldInput = {
  where?: InputMaybe<PathWithLessonsConnectionWhere>;
  connect?: InputMaybe<Array<PathWithLessonsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<PathWithLessonsDisconnectFieldInput>>;
  create?: InputMaybe<Array<PathWithLessonsCreateFieldInput>>;
  update?: InputMaybe<PathWithLessonsUpdateConnectionInput>;
  delete?: InputMaybe<Array<PathWithLessonsDeleteFieldInput>>;
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

export type SessionCompletionRecordAttemptedActivitiesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<
    Array<SessionCompletionRecordAttemptedActivitiesAggregateInput>
  >;
  OR?: InputMaybe<
    Array<SessionCompletionRecordAttemptedActivitiesAggregateInput>
  >;
  NOT?: InputMaybe<SessionCompletionRecordAttemptedActivitiesAggregateInput>;
  node?: InputMaybe<SessionCompletionRecordAttemptedActivitiesNodeAggregationWhereInput>;
  edge?: InputMaybe<AttemptActivityAggregationWhereInput>;
};

export type SessionCompletionRecordAttemptedActivitiesConnectFieldInput = {
  edge: AttemptActivityCreateInput;
  where?: InputMaybe<ActivityConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type SessionCompletionRecordAttemptedActivitiesConnectionSort = {
  node?: InputMaybe<ActivitySort>;
  edge?: InputMaybe<AttemptActivitySort>;
};

export type SessionCompletionRecordAttemptedActivitiesConnectionWhere = {
  AND?: InputMaybe<
    Array<SessionCompletionRecordAttemptedActivitiesConnectionWhere>
  >;
  OR?: InputMaybe<
    Array<SessionCompletionRecordAttemptedActivitiesConnectionWhere>
  >;
  NOT?: InputMaybe<SessionCompletionRecordAttemptedActivitiesConnectionWhere>;
  node?: InputMaybe<ActivityWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ActivityWhere>;
  edge?: InputMaybe<AttemptActivityWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<AttemptActivityWhere>;
};

export type SessionCompletionRecordAttemptedActivitiesCreateFieldInput = {
  edge: AttemptActivityCreateInput;
  node: ActivityCreateInput;
};

export type SessionCompletionRecordAttemptedActivitiesDeleteFieldInput = {
  where?: InputMaybe<SessionCompletionRecordAttemptedActivitiesConnectionWhere>;
};

export type SessionCompletionRecordAttemptedActivitiesDisconnectFieldInput = {
  where?: InputMaybe<SessionCompletionRecordAttemptedActivitiesConnectionWhere>;
};

export type SessionCompletionRecordAttemptedActivitiesFieldInput = {
  connect?: InputMaybe<
    Array<SessionCompletionRecordAttemptedActivitiesConnectFieldInput>
  >;
  create?: InputMaybe<
    Array<SessionCompletionRecordAttemptedActivitiesCreateFieldInput>
  >;
};

export type SessionCompletionRecordAttemptedActivitiesNodeAggregationWhereInput =
  {
    AND?: InputMaybe<
      Array<SessionCompletionRecordAttemptedActivitiesNodeAggregationWhereInput>
    >;
    OR?: InputMaybe<
      Array<SessionCompletionRecordAttemptedActivitiesNodeAggregationWhereInput>
    >;
    NOT?: InputMaybe<SessionCompletionRecordAttemptedActivitiesNodeAggregationWhereInput>;
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
    mermaid_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
    /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
    mermaid_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
    /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
    mermaid_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
    /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
    mermaid_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
    mermaid_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
    mermaid_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
    mermaid_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
    /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
    mermaid_GT?: InputMaybe<Scalars["Int"]["input"]>;
    /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
    mermaid_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
    /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
    mermaid_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
    /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
    mermaid_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
    mermaid_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
    mermaid_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
    mermaid_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
    /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
    mermaid_GTE?: InputMaybe<Scalars["Int"]["input"]>;
    /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
    mermaid_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
    /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
    mermaid_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
    /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
    mermaid_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
    mermaid_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
    mermaid_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
    mermaid_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
    /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
    mermaid_LT?: InputMaybe<Scalars["Int"]["input"]>;
    /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
    mermaid_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
    /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
    mermaid_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
    /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
    mermaid_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
    mermaid_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
    mermaid_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
    mermaid_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
    /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
    mermaid_LTE?: InputMaybe<Scalars["Int"]["input"]>;
    /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
    mermaid_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
    /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
    mermaid_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
    /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
    mermaid_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
    mermaid_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
    mermaid_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
    mermaid_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
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

export type SessionCompletionRecordAttemptedActivitiesUpdateConnectionInput = {
  node?: InputMaybe<ActivityUpdateInput>;
  edge?: InputMaybe<AttemptActivityUpdateInput>;
};

export type SessionCompletionRecordAttemptedActivitiesUpdateFieldInput = {
  where?: InputMaybe<SessionCompletionRecordAttemptedActivitiesConnectionWhere>;
  connect?: InputMaybe<
    Array<SessionCompletionRecordAttemptedActivitiesConnectFieldInput>
  >;
  disconnect?: InputMaybe<
    Array<SessionCompletionRecordAttemptedActivitiesDisconnectFieldInput>
  >;
  create?: InputMaybe<
    Array<SessionCompletionRecordAttemptedActivitiesCreateFieldInput>
  >;
  update?: InputMaybe<SessionCompletionRecordAttemptedActivitiesUpdateConnectionInput>;
  delete?: InputMaybe<
    Array<SessionCompletionRecordAttemptedActivitiesDeleteFieldInput>
  >;
};

export type SessionCompletionRecordByUserAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<SessionCompletionRecordByUserAggregateInput>>;
  OR?: InputMaybe<Array<SessionCompletionRecordByUserAggregateInput>>;
  NOT?: InputMaybe<SessionCompletionRecordByUserAggregateInput>;
  node?: InputMaybe<SessionCompletionRecordByUserNodeAggregationWhereInput>;
};

export type SessionCompletionRecordByUserConnectFieldInput = {
  where?: InputMaybe<UserConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<UserConnectInput>;
};

export type SessionCompletionRecordByUserConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type SessionCompletionRecordByUserConnectionWhere = {
  AND?: InputMaybe<Array<SessionCompletionRecordByUserConnectionWhere>>;
  OR?: InputMaybe<Array<SessionCompletionRecordByUserConnectionWhere>>;
  NOT?: InputMaybe<SessionCompletionRecordByUserConnectionWhere>;
  node?: InputMaybe<UserWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<UserWhere>;
};

export type SessionCompletionRecordByUserConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: SessionCompletionRecordByUserConnectOrCreateFieldInputOnCreate;
};

export type SessionCompletionRecordByUserConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type SessionCompletionRecordByUserCreateFieldInput = {
  node: UserCreateInput;
};

export type SessionCompletionRecordByUserDeleteFieldInput = {
  where?: InputMaybe<SessionCompletionRecordByUserConnectionWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type SessionCompletionRecordByUserDisconnectFieldInput = {
  where?: InputMaybe<SessionCompletionRecordByUserConnectionWhere>;
  disconnect?: InputMaybe<UserDisconnectInput>;
};

export type SessionCompletionRecordByUserFieldInput = {
  connectOrCreate?: InputMaybe<SessionCompletionRecordByUserConnectOrCreateFieldInput>;
  connect?: InputMaybe<SessionCompletionRecordByUserConnectFieldInput>;
  create?: InputMaybe<SessionCompletionRecordByUserCreateFieldInput>;
};

export type SessionCompletionRecordByUserNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<SessionCompletionRecordByUserNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<
    Array<SessionCompletionRecordByUserNodeAggregationWhereInput>
  >;
  NOT?: InputMaybe<SessionCompletionRecordByUserNodeAggregationWhereInput>;
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
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  termsAcceptedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  termsAcceptedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  termsAcceptedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  termsAcceptedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  termsAcceptedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  termsAcceptedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  termsAcceptedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  termsAcceptedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  termsAcceptedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  termsAcceptedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  termsAcceptedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  termsAcceptedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  termsAcceptedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  termsAcceptedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  termsAcceptedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  image_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  image_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  image_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  image_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  image_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  image_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  image_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  image_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  image_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  image_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  image_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  image_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  image_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  image_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  image_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  image_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  image_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  image_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  image_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  image_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  image_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SessionCompletionRecordByUserUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type SessionCompletionRecordByUserUpdateFieldInput = {
  where?: InputMaybe<SessionCompletionRecordByUserConnectionWhere>;
  connectOrCreate?: InputMaybe<SessionCompletionRecordByUserConnectOrCreateFieldInput>;
  connect?: InputMaybe<SessionCompletionRecordByUserConnectFieldInput>;
  disconnect?: InputMaybe<SessionCompletionRecordByUserDisconnectFieldInput>;
  create?: InputMaybe<SessionCompletionRecordByUserCreateFieldInput>;
  update?: InputMaybe<SessionCompletionRecordByUserUpdateConnectionInput>;
  delete?: InputMaybe<SessionCompletionRecordByUserDeleteFieldInput>;
};

export type SessionCompletionRecordConnectInput = {
  byUser?: InputMaybe<SessionCompletionRecordByUserConnectFieldInput>;
  forLesson?: InputMaybe<SessionCompletionRecordForLessonConnectFieldInput>;
  forPath?: InputMaybe<SessionCompletionRecordForPathConnectFieldInput>;
  attemptedActivities?: InputMaybe<
    Array<SessionCompletionRecordAttemptedActivitiesConnectFieldInput>
  >;
};

export type SessionCompletionRecordConnectOrCreateInput = {
  byUser?: InputMaybe<SessionCompletionRecordByUserConnectOrCreateFieldInput>;
};

export type SessionCompletionRecordConnectWhere = {
  node: SessionCompletionRecordWhere;
};

export type SessionCompletionRecordCreateInput = {
  completedAt: Scalars["DateTime"]["input"];
  score?: InputMaybe<Scalars["Float"]["input"]>;
  timeTaken?: InputMaybe<Scalars["Int"]["input"]>;
  type: Scalars["String"]["input"];
  mode: Scalars["String"]["input"];
  byUser?: InputMaybe<SessionCompletionRecordByUserFieldInput>;
  forLesson?: InputMaybe<SessionCompletionRecordForLessonFieldInput>;
  forPath?: InputMaybe<SessionCompletionRecordForPathFieldInput>;
  attemptedActivities?: InputMaybe<SessionCompletionRecordAttemptedActivitiesFieldInput>;
};

export type SessionCompletionRecordDeleteInput = {
  byUser?: InputMaybe<SessionCompletionRecordByUserDeleteFieldInput>;
  forLesson?: InputMaybe<SessionCompletionRecordForLessonDeleteFieldInput>;
  forPath?: InputMaybe<SessionCompletionRecordForPathDeleteFieldInput>;
  attemptedActivities?: InputMaybe<
    Array<SessionCompletionRecordAttemptedActivitiesDeleteFieldInput>
  >;
};

export type SessionCompletionRecordDisconnectInput = {
  byUser?: InputMaybe<SessionCompletionRecordByUserDisconnectFieldInput>;
  forLesson?: InputMaybe<SessionCompletionRecordForLessonDisconnectFieldInput>;
  forPath?: InputMaybe<SessionCompletionRecordForPathDisconnectFieldInput>;
  attemptedActivities?: InputMaybe<
    Array<SessionCompletionRecordAttemptedActivitiesDisconnectFieldInput>
  >;
};

export type SessionCompletionRecordForLessonAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<SessionCompletionRecordForLessonAggregateInput>>;
  OR?: InputMaybe<Array<SessionCompletionRecordForLessonAggregateInput>>;
  NOT?: InputMaybe<SessionCompletionRecordForLessonAggregateInput>;
  node?: InputMaybe<SessionCompletionRecordForLessonNodeAggregationWhereInput>;
};

export type SessionCompletionRecordForLessonConnectFieldInput = {
  where?: InputMaybe<LessonConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<LessonConnectInput>;
};

export type SessionCompletionRecordForLessonConnectionSort = {
  node?: InputMaybe<LessonSort>;
};

export type SessionCompletionRecordForLessonConnectionWhere = {
  AND?: InputMaybe<Array<SessionCompletionRecordForLessonConnectionWhere>>;
  OR?: InputMaybe<Array<SessionCompletionRecordForLessonConnectionWhere>>;
  NOT?: InputMaybe<SessionCompletionRecordForLessonConnectionWhere>;
  node?: InputMaybe<LessonWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<LessonWhere>;
};

export type SessionCompletionRecordForLessonCreateFieldInput = {
  node: LessonCreateInput;
};

export type SessionCompletionRecordForLessonDeleteFieldInput = {
  where?: InputMaybe<SessionCompletionRecordForLessonConnectionWhere>;
  delete?: InputMaybe<LessonDeleteInput>;
};

export type SessionCompletionRecordForLessonDisconnectFieldInput = {
  where?: InputMaybe<SessionCompletionRecordForLessonConnectionWhere>;
  disconnect?: InputMaybe<LessonDisconnectInput>;
};

export type SessionCompletionRecordForLessonFieldInput = {
  connect?: InputMaybe<SessionCompletionRecordForLessonConnectFieldInput>;
  create?: InputMaybe<SessionCompletionRecordForLessonCreateFieldInput>;
};

export type SessionCompletionRecordForLessonNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<SessionCompletionRecordForLessonNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<
    Array<SessionCompletionRecordForLessonNodeAggregationWhereInput>
  >;
  NOT?: InputMaybe<SessionCompletionRecordForLessonNodeAggregationWhereInput>;
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
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  language_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  language_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  language_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  language_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  language_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  language_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  language_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  language_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  language_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  language_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  language_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  language_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  language_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  language_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  language_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  language_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  language_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  language_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  language_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  language_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SessionCompletionRecordForLessonUpdateConnectionInput = {
  node?: InputMaybe<LessonUpdateInput>;
};

export type SessionCompletionRecordForLessonUpdateFieldInput = {
  where?: InputMaybe<SessionCompletionRecordForLessonConnectionWhere>;
  connect?: InputMaybe<SessionCompletionRecordForLessonConnectFieldInput>;
  disconnect?: InputMaybe<SessionCompletionRecordForLessonDisconnectFieldInput>;
  create?: InputMaybe<SessionCompletionRecordForLessonCreateFieldInput>;
  update?: InputMaybe<SessionCompletionRecordForLessonUpdateConnectionInput>;
  delete?: InputMaybe<SessionCompletionRecordForLessonDeleteFieldInput>;
};

export type SessionCompletionRecordForPathAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<SessionCompletionRecordForPathAggregateInput>>;
  OR?: InputMaybe<Array<SessionCompletionRecordForPathAggregateInput>>;
  NOT?: InputMaybe<SessionCompletionRecordForPathAggregateInput>;
  node?: InputMaybe<SessionCompletionRecordForPathNodeAggregationWhereInput>;
};

export type SessionCompletionRecordForPathConnectFieldInput = {
  where?: InputMaybe<PathConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<PathConnectInput>;
};

export type SessionCompletionRecordForPathConnectionSort = {
  node?: InputMaybe<PathSort>;
};

export type SessionCompletionRecordForPathConnectionWhere = {
  AND?: InputMaybe<Array<SessionCompletionRecordForPathConnectionWhere>>;
  OR?: InputMaybe<Array<SessionCompletionRecordForPathConnectionWhere>>;
  NOT?: InputMaybe<SessionCompletionRecordForPathConnectionWhere>;
  node?: InputMaybe<PathWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<PathWhere>;
};

export type SessionCompletionRecordForPathCreateFieldInput = {
  node: PathCreateInput;
};

export type SessionCompletionRecordForPathDeleteFieldInput = {
  where?: InputMaybe<SessionCompletionRecordForPathConnectionWhere>;
  delete?: InputMaybe<PathDeleteInput>;
};

export type SessionCompletionRecordForPathDisconnectFieldInput = {
  where?: InputMaybe<SessionCompletionRecordForPathConnectionWhere>;
  disconnect?: InputMaybe<PathDisconnectInput>;
};

export type SessionCompletionRecordForPathFieldInput = {
  connect?: InputMaybe<SessionCompletionRecordForPathConnectFieldInput>;
  create?: InputMaybe<SessionCompletionRecordForPathCreateFieldInput>;
};

export type SessionCompletionRecordForPathNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<SessionCompletionRecordForPathNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<
    Array<SessionCompletionRecordForPathNodeAggregationWhereInput>
  >;
  NOT?: InputMaybe<SessionCompletionRecordForPathNodeAggregationWhereInput>;
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
};

export type SessionCompletionRecordForPathUpdateConnectionInput = {
  node?: InputMaybe<PathUpdateInput>;
};

export type SessionCompletionRecordForPathUpdateFieldInput = {
  where?: InputMaybe<SessionCompletionRecordForPathConnectionWhere>;
  connect?: InputMaybe<SessionCompletionRecordForPathConnectFieldInput>;
  disconnect?: InputMaybe<SessionCompletionRecordForPathDisconnectFieldInput>;
  create?: InputMaybe<SessionCompletionRecordForPathCreateFieldInput>;
  update?: InputMaybe<SessionCompletionRecordForPathUpdateConnectionInput>;
  delete?: InputMaybe<SessionCompletionRecordForPathDeleteFieldInput>;
};

export type SessionCompletionRecordOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more SessionCompletionRecordSort objects to sort SessionCompletionRecords by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<SessionCompletionRecordSort>>;
};

export type SessionCompletionRecordRelationInput = {
  byUser?: InputMaybe<SessionCompletionRecordByUserCreateFieldInput>;
  forLesson?: InputMaybe<SessionCompletionRecordForLessonCreateFieldInput>;
  forPath?: InputMaybe<SessionCompletionRecordForPathCreateFieldInput>;
  attemptedActivities?: InputMaybe<
    Array<SessionCompletionRecordAttemptedActivitiesCreateFieldInput>
  >;
};

/** Fields to sort SessionCompletionRecords by. The order in which sorts are applied is not guaranteed when specifying many fields in one SessionCompletionRecordSort object. */
export type SessionCompletionRecordSort = {
  id?: InputMaybe<SortDirection>;
  completedAt?: InputMaybe<SortDirection>;
  score?: InputMaybe<SortDirection>;
  timeTaken?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
  mode?: InputMaybe<SortDirection>;
};

export type SessionCompletionRecordUpdateInput = {
  completedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  score?: InputMaybe<Scalars["Float"]["input"]>;
  score_ADD?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUBTRACT?: InputMaybe<Scalars["Float"]["input"]>;
  score_MULTIPLY?: InputMaybe<Scalars["Float"]["input"]>;
  score_DIVIDE?: InputMaybe<Scalars["Float"]["input"]>;
  timeTaken?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  timeTaken_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<Scalars["String"]["input"]>;
  byUser?: InputMaybe<SessionCompletionRecordByUserUpdateFieldInput>;
  forLesson?: InputMaybe<SessionCompletionRecordForLessonUpdateFieldInput>;
  forPath?: InputMaybe<SessionCompletionRecordForPathUpdateFieldInput>;
  attemptedActivities?: InputMaybe<
    Array<SessionCompletionRecordAttemptedActivitiesUpdateFieldInput>
  >;
};

export type SessionCompletionRecordWhere = {
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
  score_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  score_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  score_LT?: InputMaybe<Scalars["Float"]["input"]>;
  score_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_GT?: InputMaybe<Scalars["Float"]["input"]>;
  score_GTE?: InputMaybe<Scalars["Float"]["input"]>;
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
  mode?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  mode_NOT?: InputMaybe<Scalars["String"]["input"]>;
  mode_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  mode_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  mode_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  mode_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  mode_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  mode_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  mode_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  mode_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<SessionCompletionRecordWhere>>;
  AND?: InputMaybe<Array<SessionCompletionRecordWhere>>;
  NOT?: InputMaybe<SessionCompletionRecordWhere>;
  byUser?: InputMaybe<UserWhere>;
  byUser_NOT?: InputMaybe<UserWhere>;
  byUserConnection?: InputMaybe<SessionCompletionRecordByUserConnectionWhere>;
  byUserConnection_NOT?: InputMaybe<SessionCompletionRecordByUserConnectionWhere>;
  byUserAggregate?: InputMaybe<SessionCompletionRecordByUserAggregateInput>;
  forLesson?: InputMaybe<LessonWhere>;
  forLesson_NOT?: InputMaybe<LessonWhere>;
  forLessonConnection?: InputMaybe<SessionCompletionRecordForLessonConnectionWhere>;
  forLessonConnection_NOT?: InputMaybe<SessionCompletionRecordForLessonConnectionWhere>;
  forLessonAggregate?: InputMaybe<SessionCompletionRecordForLessonAggregateInput>;
  forPath?: InputMaybe<PathWhere>;
  forPath_NOT?: InputMaybe<PathWhere>;
  forPathConnection?: InputMaybe<SessionCompletionRecordForPathConnectionWhere>;
  forPathConnection_NOT?: InputMaybe<SessionCompletionRecordForPathConnectionWhere>;
  forPathAggregate?: InputMaybe<SessionCompletionRecordForPathAggregateInput>;
  /** @deprecated Use `attemptedActivities_SOME` instead. */
  attemptedActivities?: InputMaybe<ActivityWhere>;
  /** @deprecated Use `attemptedActivities_NONE` instead. */
  attemptedActivities_NOT?: InputMaybe<ActivityWhere>;
  /** Return SessionCompletionRecords where all of the related Activities match this filter */
  attemptedActivities_ALL?: InputMaybe<ActivityWhere>;
  /** Return SessionCompletionRecords where none of the related Activities match this filter */
  attemptedActivities_NONE?: InputMaybe<ActivityWhere>;
  /** Return SessionCompletionRecords where one of the related Activities match this filter */
  attemptedActivities_SINGLE?: InputMaybe<ActivityWhere>;
  /** Return SessionCompletionRecords where some of the related Activities match this filter */
  attemptedActivities_SOME?: InputMaybe<ActivityWhere>;
  /** @deprecated Use `attemptedActivitiesConnection_SOME` instead. */
  attemptedActivitiesConnection?: InputMaybe<SessionCompletionRecordAttemptedActivitiesConnectionWhere>;
  /** @deprecated Use `attemptedActivitiesConnection_NONE` instead. */
  attemptedActivitiesConnection_NOT?: InputMaybe<SessionCompletionRecordAttemptedActivitiesConnectionWhere>;
  /** Return SessionCompletionRecords where all of the related SessionCompletionRecordAttemptedActivitiesConnections match this filter */
  attemptedActivitiesConnection_ALL?: InputMaybe<SessionCompletionRecordAttemptedActivitiesConnectionWhere>;
  /** Return SessionCompletionRecords where none of the related SessionCompletionRecordAttemptedActivitiesConnections match this filter */
  attemptedActivitiesConnection_NONE?: InputMaybe<SessionCompletionRecordAttemptedActivitiesConnectionWhere>;
  /** Return SessionCompletionRecords where one of the related SessionCompletionRecordAttemptedActivitiesConnections match this filter */
  attemptedActivitiesConnection_SINGLE?: InputMaybe<SessionCompletionRecordAttemptedActivitiesConnectionWhere>;
  /** Return SessionCompletionRecords where some of the related SessionCompletionRecordAttemptedActivitiesConnections match this filter */
  attemptedActivitiesConnection_SOME?: InputMaybe<SessionCompletionRecordAttemptedActivitiesConnectionWhere>;
  attemptedActivitiesAggregate?: InputMaybe<SessionCompletionRecordAttemptedActivitiesAggregateInput>;
};

export type SessionConnectWhere = {
  node: SessionWhere;
};

export type SessionCreateInput = {
  expires: Scalars["DateTime"]["input"];
  sessionToken: Scalars["String"]["input"];
  userId: Scalars["String"]["input"];
};

export type SessionOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more SessionSort objects to sort Sessions by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<SessionSort>>;
};

/** Fields to sort Sessions by. The order in which sorts are applied is not guaranteed when specifying many fields in one SessionSort object. */
export type SessionSort = {
  id?: InputMaybe<SortDirection>;
  expires?: InputMaybe<SortDirection>;
  sessionToken?: InputMaybe<SortDirection>;
  userId?: InputMaybe<SortDirection>;
};

export type SessionUpdateInput = {
  expires?: InputMaybe<Scalars["DateTime"]["input"]>;
  sessionToken?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

export type SessionWhere = {
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
  expires?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  expires_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  expires_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  expires_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  expires_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  expires_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  expires_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  expires_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  sessionToken?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  sessionToken_NOT?: InputMaybe<Scalars["String"]["input"]>;
  sessionToken_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  sessionToken_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sessionToken_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  sessionToken_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  sessionToken_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  sessionToken_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  sessionToken_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  sessionToken_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  userId_NOT?: InputMaybe<Scalars["String"]["input"]>;
  userId_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  userId_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  userId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  userId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  userId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  userId_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  userId_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  userId_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<SessionWhere>>;
  AND?: InputMaybe<Array<SessionWhere>>;
  NOT?: InputMaybe<SessionWhere>;
};

export type StreakConnectWhere = {
  node: StreakWhere;
};

export type StreakCreateInput = {
  streakCount: Scalars["Int"]["input"];
  lastActivityDate: Scalars["DateTime"]["input"];
};

export type StreakOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more StreakSort objects to sort Streaks by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<StreakSort>>;
};

/** Fields to sort Streaks by. The order in which sorts are applied is not guaranteed when specifying many fields in one StreakSort object. */
export type StreakSort = {
  id?: InputMaybe<SortDirection>;
  streakCount?: InputMaybe<SortDirection>;
  lastActivityDate?: InputMaybe<SortDirection>;
};

export type StreakUpdateInput = {
  streakCount?: InputMaybe<Scalars["Int"]["input"]>;
  streakCount_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  streakCount_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  lastActivityDate?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type StreakWhere = {
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
  streakCount?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  streakCount_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  streakCount_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  streakCount_NOT_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  streakCount_LT?: InputMaybe<Scalars["Int"]["input"]>;
  streakCount_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  streakCount_GT?: InputMaybe<Scalars["Int"]["input"]>;
  streakCount_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  lastActivityDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  lastActivityDate_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  lastActivityDate_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  lastActivityDate_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  lastActivityDate_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  lastActivityDate_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  lastActivityDate_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  lastActivityDate_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  OR?: InputMaybe<Array<StreakWhere>>;
  AND?: InputMaybe<Array<StreakWhere>>;
  NOT?: InputMaybe<StreakWhere>;
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

export type UserCompletedSessionsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<UserCompletedSessionsAggregateInput>>;
  OR?: InputMaybe<Array<UserCompletedSessionsAggregateInput>>;
  NOT?: InputMaybe<UserCompletedSessionsAggregateInput>;
  node?: InputMaybe<UserCompletedSessionsNodeAggregationWhereInput>;
};

export type UserCompletedSessionsConnectFieldInput = {
  where?: InputMaybe<SessionCompletionRecordConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<SessionCompletionRecordConnectInput>>;
};

export type UserCompletedSessionsConnectionSort = {
  node?: InputMaybe<SessionCompletionRecordSort>;
};

export type UserCompletedSessionsConnectionWhere = {
  AND?: InputMaybe<Array<UserCompletedSessionsConnectionWhere>>;
  OR?: InputMaybe<Array<UserCompletedSessionsConnectionWhere>>;
  NOT?: InputMaybe<UserCompletedSessionsConnectionWhere>;
  node?: InputMaybe<SessionCompletionRecordWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<SessionCompletionRecordWhere>;
};

export type UserCompletedSessionsCreateFieldInput = {
  node: SessionCompletionRecordCreateInput;
};

export type UserCompletedSessionsDeleteFieldInput = {
  where?: InputMaybe<UserCompletedSessionsConnectionWhere>;
  delete?: InputMaybe<SessionCompletionRecordDeleteInput>;
};

export type UserCompletedSessionsDisconnectFieldInput = {
  where?: InputMaybe<UserCompletedSessionsConnectionWhere>;
  disconnect?: InputMaybe<SessionCompletionRecordDisconnectInput>;
};

export type UserCompletedSessionsFieldInput = {
  connect?: InputMaybe<Array<UserCompletedSessionsConnectFieldInput>>;
  create?: InputMaybe<Array<UserCompletedSessionsCreateFieldInput>>;
};

export type UserCompletedSessionsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserCompletedSessionsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserCompletedSessionsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserCompletedSessionsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
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
  mode_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  mode_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  mode_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  mode_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  mode_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  mode_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  mode_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  mode_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  mode_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  mode_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  mode_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  mode_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  mode_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  mode_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  mode_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  mode_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  mode_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mode_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  mode_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  mode_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  mode_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserCompletedSessionsUpdateConnectionInput = {
  node?: InputMaybe<SessionCompletionRecordUpdateInput>;
};

export type UserCompletedSessionsUpdateFieldInput = {
  where?: InputMaybe<UserCompletedSessionsConnectionWhere>;
  connect?: InputMaybe<Array<UserCompletedSessionsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserCompletedSessionsDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserCompletedSessionsCreateFieldInput>>;
  update?: InputMaybe<UserCompletedSessionsUpdateConnectionInput>;
  delete?: InputMaybe<Array<UserCompletedSessionsDeleteFieldInput>>;
};

export type UserConnectInput = {
  hasAccount?: InputMaybe<UserHasAccountConnectFieldInput>;
  hasSession?: InputMaybe<UserHasSessionConnectFieldInput>;
  hasLessons?: InputMaybe<Array<UserHasLessonsConnectFieldInput>>;
  reactedToPaths?: InputMaybe<Array<UserReactedToPathsConnectFieldInput>>;
  reactedToLessons?: InputMaybe<Array<UserReactedToLessonsConnectFieldInput>>;
  reportedActivities?: InputMaybe<
    Array<UserReportedActivitiesConnectFieldInput>
  >;
  completedSessions?: InputMaybe<Array<UserCompletedSessionsConnectFieldInput>>;
  hasStreak?: InputMaybe<Array<UserHasStreakConnectFieldInput>>;
  hasPaths?: InputMaybe<Array<UserHasPathsConnectFieldInput>>;
};

export type UserConnectOrCreateWhere = {
  node: UserUniqueWhere;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  emailVerified: Scalars["Boolean"]["input"];
  termsAcceptedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  completedOnboarding: Scalars["Boolean"]["input"];
  image?: InputMaybe<Scalars["String"]["input"]>;
  hasAccount?: InputMaybe<UserHasAccountFieldInput>;
  hasSession?: InputMaybe<UserHasSessionFieldInput>;
  hasLessons?: InputMaybe<UserHasLessonsFieldInput>;
  reactedToPaths?: InputMaybe<UserReactedToPathsFieldInput>;
  reactedToLessons?: InputMaybe<UserReactedToLessonsFieldInput>;
  reportedActivities?: InputMaybe<UserReportedActivitiesFieldInput>;
  completedSessions?: InputMaybe<UserCompletedSessionsFieldInput>;
  hasStreak?: InputMaybe<UserHasStreakFieldInput>;
  hasPaths?: InputMaybe<UserHasPathsFieldInput>;
};

export type UserDeleteInput = {
  hasAccount?: InputMaybe<UserHasAccountDeleteFieldInput>;
  hasSession?: InputMaybe<UserHasSessionDeleteFieldInput>;
  hasLessons?: InputMaybe<Array<UserHasLessonsDeleteFieldInput>>;
  reactedToPaths?: InputMaybe<Array<UserReactedToPathsDeleteFieldInput>>;
  reactedToLessons?: InputMaybe<Array<UserReactedToLessonsDeleteFieldInput>>;
  reportedActivities?: InputMaybe<
    Array<UserReportedActivitiesDeleteFieldInput>
  >;
  completedSessions?: InputMaybe<Array<UserCompletedSessionsDeleteFieldInput>>;
  hasStreak?: InputMaybe<Array<UserHasStreakDeleteFieldInput>>;
  hasPaths?: InputMaybe<Array<UserHasPathsDeleteFieldInput>>;
};

export type UserDisconnectInput = {
  hasAccount?: InputMaybe<UserHasAccountDisconnectFieldInput>;
  hasSession?: InputMaybe<UserHasSessionDisconnectFieldInput>;
  hasLessons?: InputMaybe<Array<UserHasLessonsDisconnectFieldInput>>;
  reactedToPaths?: InputMaybe<Array<UserReactedToPathsDisconnectFieldInput>>;
  reactedToLessons?: InputMaybe<
    Array<UserReactedToLessonsDisconnectFieldInput>
  >;
  reportedActivities?: InputMaybe<
    Array<UserReportedActivitiesDisconnectFieldInput>
  >;
  completedSessions?: InputMaybe<
    Array<UserCompletedSessionsDisconnectFieldInput>
  >;
  hasStreak?: InputMaybe<Array<UserHasStreakDisconnectFieldInput>>;
  hasPaths?: InputMaybe<Array<UserHasPathsDisconnectFieldInput>>;
};

export type UserHasAccountAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<UserHasAccountAggregateInput>>;
  OR?: InputMaybe<Array<UserHasAccountAggregateInput>>;
  NOT?: InputMaybe<UserHasAccountAggregateInput>;
  node?: InputMaybe<UserHasAccountNodeAggregationWhereInput>;
};

export type UserHasAccountConnectFieldInput = {
  where?: InputMaybe<AccountConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type UserHasAccountConnectionSort = {
  node?: InputMaybe<AccountSort>;
};

export type UserHasAccountConnectionWhere = {
  AND?: InputMaybe<Array<UserHasAccountConnectionWhere>>;
  OR?: InputMaybe<Array<UserHasAccountConnectionWhere>>;
  NOT?: InputMaybe<UserHasAccountConnectionWhere>;
  node?: InputMaybe<AccountWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<AccountWhere>;
};

export type UserHasAccountCreateFieldInput = {
  node: AccountCreateInput;
};

export type UserHasAccountDeleteFieldInput = {
  where?: InputMaybe<UserHasAccountConnectionWhere>;
};

export type UserHasAccountDisconnectFieldInput = {
  where?: InputMaybe<UserHasAccountConnectionWhere>;
};

export type UserHasAccountFieldInput = {
  connect?: InputMaybe<UserHasAccountConnectFieldInput>;
  create?: InputMaybe<UserHasAccountCreateFieldInput>;
};

export type UserHasAccountNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserHasAccountNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserHasAccountNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserHasAccountNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  userId_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  userId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  userId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  userId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  userId_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  userId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  userId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  userId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  userId_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  userId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  userId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  userId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  userId_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  userId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  userId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  userId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  userId_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  userId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  userId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  userId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
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
  provider_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  provider_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  provider_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  provider_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  provider_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  provider_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  provider_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  provider_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  provider_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  provider_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  provider_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  provider_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  provider_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  provider_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  provider_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  provider_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  provider_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  provider_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  provider_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  provider_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  provider_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  provider_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  provider_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  provider_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  provider_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  provider_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  provider_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  provider_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  provider_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  provider_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  provider_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  provider_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  provider_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  provider_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  provider_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  providerAccountId_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  providerAccountId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  providerAccountId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  providerAccountId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  providerAccountId_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars["Float"]["input"]
  >;
  providerAccountId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  providerAccountId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  providerAccountId_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  providerAccountId_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  providerAccountId_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  providerAccountId_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  providerAccountId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  providerAccountId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  providerAccountId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  providerAccountId_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  providerAccountId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  providerAccountId_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  providerAccountId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  providerAccountId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  providerAccountId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  providerAccountId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  providerAccountId_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  providerAccountId_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  providerAccountId_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  providerAccountId_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  providerAccountId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  providerAccountId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  providerAccountId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  providerAccountId_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  providerAccountId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  providerAccountId_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  providerAccountId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  providerAccountId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  providerAccountId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  providerAccountId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refresh_token_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refresh_token_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refresh_token_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refresh_token_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  refresh_token_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  refresh_token_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  refresh_token_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refresh_token_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refresh_token_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refresh_token_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refresh_token_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  refresh_token_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  refresh_token_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  refresh_token_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refresh_token_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refresh_token_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refresh_token_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refresh_token_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  refresh_token_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  refresh_token_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  refresh_token_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refresh_token_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refresh_token_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refresh_token_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refresh_token_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  refresh_token_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  refresh_token_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  refresh_token_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refresh_token_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refresh_token_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refresh_token_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refresh_token_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  refresh_token_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  refresh_token_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  refresh_token_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  access_token_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  access_token_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  access_token_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  access_token_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  access_token_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  access_token_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  access_token_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  access_token_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  access_token_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  access_token_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  access_token_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  access_token_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  access_token_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  access_token_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  access_token_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  access_token_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  access_token_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  access_token_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  access_token_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  access_token_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  access_token_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  access_token_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  access_token_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  access_token_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  access_token_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  access_token_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  access_token_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  access_token_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  access_token_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  access_token_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  access_token_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  access_token_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  access_token_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  access_token_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  access_token_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  expires_at_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  expires_at_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  expires_at_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  expires_at_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  expires_at_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  expires_at_GT?: InputMaybe<Scalars["Int"]["input"]>;
  expires_at_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  expires_at_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  expires_at_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  expires_at_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  expires_at_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  expires_at_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  expires_at_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  expires_at_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  expires_at_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  expires_at_LT?: InputMaybe<Scalars["Int"]["input"]>;
  expires_at_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  expires_at_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  expires_at_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  expires_at_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  expires_at_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  expires_at_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  expires_at_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  expires_at_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  expires_at_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  token_type_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  token_type_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  token_type_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  token_type_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  token_type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  token_type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  token_type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  token_type_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  token_type_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  token_type_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  token_type_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  token_type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  token_type_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  token_type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  token_type_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  token_type_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  token_type_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  token_type_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  token_type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  token_type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  token_type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  token_type_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  token_type_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  token_type_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  token_type_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  token_type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  token_type_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  token_type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  token_type_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  token_type_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  token_type_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  token_type_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  token_type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  token_type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  token_type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  scope_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  scope_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  scope_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  scope_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  scope_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  scope_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  scope_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  scope_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  scope_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  scope_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  scope_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  scope_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  scope_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  scope_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  scope_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  scope_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  scope_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  scope_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  scope_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  scope_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  scope_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  scope_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  scope_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  scope_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  scope_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  scope_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  scope_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  scope_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  scope_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  scope_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  scope_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  scope_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  scope_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  scope_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  scope_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_token_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_token_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_token_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_token_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_token_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  id_token_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_token_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_token_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_token_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_token_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_token_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_token_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  id_token_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_token_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_token_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_token_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_token_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_token_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_token_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  id_token_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_token_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_token_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_token_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_token_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_token_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_token_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  id_token_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_token_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_token_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_token_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_token_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_token_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_token_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  id_token_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_token_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  session_state_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  session_state_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  session_state_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  session_state_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  session_state_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  session_state_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  session_state_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  session_state_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  session_state_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  session_state_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  session_state_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  session_state_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  session_state_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  session_state_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  session_state_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  session_state_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  session_state_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  session_state_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  session_state_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  session_state_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  session_state_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  session_state_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  session_state_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  session_state_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  session_state_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  session_state_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  session_state_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  session_state_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  session_state_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  session_state_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  session_state_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  session_state_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  session_state_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  session_state_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  session_state_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserHasAccountUpdateConnectionInput = {
  node?: InputMaybe<AccountUpdateInput>;
};

export type UserHasAccountUpdateFieldInput = {
  where?: InputMaybe<UserHasAccountConnectionWhere>;
  connect?: InputMaybe<UserHasAccountConnectFieldInput>;
  disconnect?: InputMaybe<UserHasAccountDisconnectFieldInput>;
  create?: InputMaybe<UserHasAccountCreateFieldInput>;
  update?: InputMaybe<UserHasAccountUpdateConnectionInput>;
  delete?: InputMaybe<UserHasAccountDeleteFieldInput>;
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
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  language_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  language_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  language_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  language_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  language_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  language_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  language_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  language_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  language_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  language_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  language_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  language_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  language_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  language_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  language_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  language_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  language_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  language_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  language_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  language_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserHasLessonsUpdateConnectionInput = {
  node?: InputMaybe<LessonUpdateInput>;
  edge?: InputMaybe<HasLessonUpdateInput>;
};

export type UserHasLessonsUpdateFieldInput = {
  where?: InputMaybe<UserHasLessonsConnectionWhere>;
  connect?: InputMaybe<Array<UserHasLessonsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserHasLessonsDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserHasLessonsCreateFieldInput>>;
  update?: InputMaybe<UserHasLessonsUpdateConnectionInput>;
  delete?: InputMaybe<Array<UserHasLessonsDeleteFieldInput>>;
};

export type UserHasPathsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<UserHasPathsAggregateInput>>;
  OR?: InputMaybe<Array<UserHasPathsAggregateInput>>;
  NOT?: InputMaybe<UserHasPathsAggregateInput>;
  node?: InputMaybe<UserHasPathsNodeAggregationWhereInput>;
};

export type UserHasPathsConnectFieldInput = {
  where?: InputMaybe<PathConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<PathConnectInput>>;
};

export type UserHasPathsConnectionSort = {
  node?: InputMaybe<PathSort>;
};

export type UserHasPathsConnectionWhere = {
  AND?: InputMaybe<Array<UserHasPathsConnectionWhere>>;
  OR?: InputMaybe<Array<UserHasPathsConnectionWhere>>;
  NOT?: InputMaybe<UserHasPathsConnectionWhere>;
  node?: InputMaybe<PathWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<PathWhere>;
};

export type UserHasPathsCreateFieldInput = {
  node: PathCreateInput;
};

export type UserHasPathsDeleteFieldInput = {
  where?: InputMaybe<UserHasPathsConnectionWhere>;
  delete?: InputMaybe<PathDeleteInput>;
};

export type UserHasPathsDisconnectFieldInput = {
  where?: InputMaybe<UserHasPathsConnectionWhere>;
  disconnect?: InputMaybe<PathDisconnectInput>;
};

export type UserHasPathsFieldInput = {
  connect?: InputMaybe<Array<UserHasPathsConnectFieldInput>>;
  create?: InputMaybe<Array<UserHasPathsCreateFieldInput>>;
};

export type UserHasPathsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserHasPathsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserHasPathsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserHasPathsNodeAggregationWhereInput>;
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
};

export type UserHasPathsUpdateConnectionInput = {
  node?: InputMaybe<PathUpdateInput>;
};

export type UserHasPathsUpdateFieldInput = {
  where?: InputMaybe<UserHasPathsConnectionWhere>;
  connect?: InputMaybe<Array<UserHasPathsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserHasPathsDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserHasPathsCreateFieldInput>>;
  update?: InputMaybe<UserHasPathsUpdateConnectionInput>;
  delete?: InputMaybe<Array<UserHasPathsDeleteFieldInput>>;
};

export type UserHasSessionAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<UserHasSessionAggregateInput>>;
  OR?: InputMaybe<Array<UserHasSessionAggregateInput>>;
  NOT?: InputMaybe<UserHasSessionAggregateInput>;
  node?: InputMaybe<UserHasSessionNodeAggregationWhereInput>;
};

export type UserHasSessionConnectFieldInput = {
  where?: InputMaybe<SessionConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type UserHasSessionConnectionSort = {
  node?: InputMaybe<SessionSort>;
};

export type UserHasSessionConnectionWhere = {
  AND?: InputMaybe<Array<UserHasSessionConnectionWhere>>;
  OR?: InputMaybe<Array<UserHasSessionConnectionWhere>>;
  NOT?: InputMaybe<UserHasSessionConnectionWhere>;
  node?: InputMaybe<SessionWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<SessionWhere>;
};

export type UserHasSessionCreateFieldInput = {
  node: SessionCreateInput;
};

export type UserHasSessionDeleteFieldInput = {
  where?: InputMaybe<UserHasSessionConnectionWhere>;
};

export type UserHasSessionDisconnectFieldInput = {
  where?: InputMaybe<UserHasSessionConnectionWhere>;
};

export type UserHasSessionFieldInput = {
  connect?: InputMaybe<UserHasSessionConnectFieldInput>;
  create?: InputMaybe<UserHasSessionCreateFieldInput>;
};

export type UserHasSessionNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserHasSessionNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserHasSessionNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserHasSessionNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  expires_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  expires_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  expires_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  expires_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  expires_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  expires_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  expires_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  expires_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  expires_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  expires_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  expires_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  expires_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  expires_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  expires_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  expires_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  sessionToken_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  sessionToken_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  sessionToken_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  sessionToken_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sessionToken_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  sessionToken_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  sessionToken_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  sessionToken_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  sessionToken_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  sessionToken_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  sessionToken_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sessionToken_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  sessionToken_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  sessionToken_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  sessionToken_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  sessionToken_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  sessionToken_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  sessionToken_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sessionToken_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  sessionToken_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  sessionToken_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  sessionToken_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  sessionToken_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  sessionToken_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  sessionToken_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sessionToken_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  sessionToken_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  sessionToken_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  sessionToken_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  sessionToken_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  sessionToken_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  sessionToken_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sessionToken_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  sessionToken_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  sessionToken_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  userId_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  userId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  userId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  userId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  userId_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  userId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  userId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  userId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  userId_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  userId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  userId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  userId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  userId_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  userId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  userId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  userId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  userId_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  userId_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  userId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  userId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  userId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserHasSessionUpdateConnectionInput = {
  node?: InputMaybe<SessionUpdateInput>;
};

export type UserHasSessionUpdateFieldInput = {
  where?: InputMaybe<UserHasSessionConnectionWhere>;
  connect?: InputMaybe<UserHasSessionConnectFieldInput>;
  disconnect?: InputMaybe<UserHasSessionDisconnectFieldInput>;
  create?: InputMaybe<UserHasSessionCreateFieldInput>;
  update?: InputMaybe<UserHasSessionUpdateConnectionInput>;
  delete?: InputMaybe<UserHasSessionDeleteFieldInput>;
};

export type UserHasStreakAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<UserHasStreakAggregateInput>>;
  OR?: InputMaybe<Array<UserHasStreakAggregateInput>>;
  NOT?: InputMaybe<UserHasStreakAggregateInput>;
  node?: InputMaybe<UserHasStreakNodeAggregationWhereInput>;
};

export type UserHasStreakConnectFieldInput = {
  where?: InputMaybe<StreakConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type UserHasStreakConnectionSort = {
  node?: InputMaybe<StreakSort>;
};

export type UserHasStreakConnectionWhere = {
  AND?: InputMaybe<Array<UserHasStreakConnectionWhere>>;
  OR?: InputMaybe<Array<UserHasStreakConnectionWhere>>;
  NOT?: InputMaybe<UserHasStreakConnectionWhere>;
  node?: InputMaybe<StreakWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<StreakWhere>;
};

export type UserHasStreakCreateFieldInput = {
  node: StreakCreateInput;
};

export type UserHasStreakDeleteFieldInput = {
  where?: InputMaybe<UserHasStreakConnectionWhere>;
};

export type UserHasStreakDisconnectFieldInput = {
  where?: InputMaybe<UserHasStreakConnectionWhere>;
};

export type UserHasStreakFieldInput = {
  connect?: InputMaybe<Array<UserHasStreakConnectFieldInput>>;
  create?: InputMaybe<Array<UserHasStreakCreateFieldInput>>;
};

export type UserHasStreakNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserHasStreakNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserHasStreakNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserHasStreakNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  streakCount_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  streakCount_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  streakCount_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  streakCount_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  streakCount_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  streakCount_GT?: InputMaybe<Scalars["Int"]["input"]>;
  streakCount_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  streakCount_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  streakCount_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  streakCount_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  streakCount_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  streakCount_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  streakCount_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  streakCount_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  streakCount_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  streakCount_LT?: InputMaybe<Scalars["Int"]["input"]>;
  streakCount_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  streakCount_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  streakCount_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  streakCount_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  streakCount_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  streakCount_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  streakCount_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  streakCount_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  streakCount_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  lastActivityDate_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  lastActivityDate_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  lastActivityDate_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  lastActivityDate_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  lastActivityDate_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  lastActivityDate_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  lastActivityDate_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  lastActivityDate_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  lastActivityDate_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  lastActivityDate_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  lastActivityDate_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  lastActivityDate_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  lastActivityDate_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  lastActivityDate_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  lastActivityDate_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserHasStreakUpdateConnectionInput = {
  node?: InputMaybe<StreakUpdateInput>;
};

export type UserHasStreakUpdateFieldInput = {
  where?: InputMaybe<UserHasStreakConnectionWhere>;
  connect?: InputMaybe<Array<UserHasStreakConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserHasStreakDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserHasStreakCreateFieldInput>>;
  update?: InputMaybe<UserHasStreakUpdateConnectionInput>;
  delete?: InputMaybe<Array<UserHasStreakDeleteFieldInput>>;
};

export type UserOnCreateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  emailVerified: Scalars["Boolean"]["input"];
  termsAcceptedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  completedOnboarding: Scalars["Boolean"]["input"];
  image?: InputMaybe<Scalars["String"]["input"]>;
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
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  language_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  language_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  language_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  language_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  language_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  language_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  language_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  language_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  language_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  language_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  language_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  language_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  language_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  language_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  language_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  language_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  language_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  language_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  language_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  language_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  language_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserReactedToLessonsUpdateConnectionInput = {
  node?: InputMaybe<LessonUpdateInput>;
  edge?: InputMaybe<ReactedUpdateInput>;
};

export type UserReactedToLessonsUpdateFieldInput = {
  where?: InputMaybe<UserReactedToLessonsConnectionWhere>;
  connect?: InputMaybe<Array<UserReactedToLessonsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserReactedToLessonsDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserReactedToLessonsCreateFieldInput>>;
  update?: InputMaybe<UserReactedToLessonsUpdateConnectionInput>;
  delete?: InputMaybe<Array<UserReactedToLessonsDeleteFieldInput>>;
};

export type UserReactedToPathsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<UserReactedToPathsAggregateInput>>;
  OR?: InputMaybe<Array<UserReactedToPathsAggregateInput>>;
  NOT?: InputMaybe<UserReactedToPathsAggregateInput>;
  node?: InputMaybe<UserReactedToPathsNodeAggregationWhereInput>;
  edge?: InputMaybe<ReactedAggregationWhereInput>;
};

export type UserReactedToPathsConnectFieldInput = {
  edge: ReactedCreateInput;
  where?: InputMaybe<PathConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<PathConnectInput>>;
};

export type UserReactedToPathsConnectionSort = {
  node?: InputMaybe<PathSort>;
  edge?: InputMaybe<ReactedSort>;
};

export type UserReactedToPathsConnectionWhere = {
  AND?: InputMaybe<Array<UserReactedToPathsConnectionWhere>>;
  OR?: InputMaybe<Array<UserReactedToPathsConnectionWhere>>;
  NOT?: InputMaybe<UserReactedToPathsConnectionWhere>;
  node?: InputMaybe<PathWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<PathWhere>;
  edge?: InputMaybe<ReactedWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ReactedWhere>;
};

export type UserReactedToPathsCreateFieldInput = {
  edge: ReactedCreateInput;
  node: PathCreateInput;
};

export type UserReactedToPathsDeleteFieldInput = {
  where?: InputMaybe<UserReactedToPathsConnectionWhere>;
  delete?: InputMaybe<PathDeleteInput>;
};

export type UserReactedToPathsDisconnectFieldInput = {
  where?: InputMaybe<UserReactedToPathsConnectionWhere>;
  disconnect?: InputMaybe<PathDisconnectInput>;
};

export type UserReactedToPathsFieldInput = {
  connect?: InputMaybe<Array<UserReactedToPathsConnectFieldInput>>;
  create?: InputMaybe<Array<UserReactedToPathsCreateFieldInput>>;
};

export type UserReactedToPathsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserReactedToPathsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserReactedToPathsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserReactedToPathsNodeAggregationWhereInput>;
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
};

export type UserReactedToPathsUpdateConnectionInput = {
  node?: InputMaybe<PathUpdateInput>;
  edge?: InputMaybe<ReactedUpdateInput>;
};

export type UserReactedToPathsUpdateFieldInput = {
  where?: InputMaybe<UserReactedToPathsConnectionWhere>;
  connect?: InputMaybe<Array<UserReactedToPathsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserReactedToPathsDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserReactedToPathsCreateFieldInput>>;
  update?: InputMaybe<UserReactedToPathsUpdateConnectionInput>;
  delete?: InputMaybe<Array<UserReactedToPathsDeleteFieldInput>>;
};

export type UserRelationInput = {
  hasAccount?: InputMaybe<UserHasAccountCreateFieldInput>;
  hasSession?: InputMaybe<UserHasSessionCreateFieldInput>;
  hasLessons?: InputMaybe<Array<UserHasLessonsCreateFieldInput>>;
  reactedToPaths?: InputMaybe<Array<UserReactedToPathsCreateFieldInput>>;
  reactedToLessons?: InputMaybe<Array<UserReactedToLessonsCreateFieldInput>>;
  reportedActivities?: InputMaybe<
    Array<UserReportedActivitiesCreateFieldInput>
  >;
  completedSessions?: InputMaybe<Array<UserCompletedSessionsCreateFieldInput>>;
  hasStreak?: InputMaybe<Array<UserHasStreakCreateFieldInput>>;
  hasPaths?: InputMaybe<Array<UserHasPathsCreateFieldInput>>;
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
  mermaid_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  mermaid_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  mermaid_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  mermaid_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  mermaid_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  mermaid_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  mermaid_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  mermaid_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  mermaid_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  mermaid_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  mermaid_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  mermaid_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  mermaid_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  mermaid_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  mermaid_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  mermaid_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  mermaid_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mermaid_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  mermaid_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  mermaid_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  mermaid_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
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
  name?: InputMaybe<SortDirection>;
  email?: InputMaybe<SortDirection>;
  emailVerified?: InputMaybe<SortDirection>;
  termsAcceptedAt?: InputMaybe<SortDirection>;
  completedOnboarding?: InputMaybe<SortDirection>;
  image?: InputMaybe<SortDirection>;
  mistakenActivitiesCount?: InputMaybe<SortDirection>;
  createdLessonsInteractionsCount?: InputMaybe<SortDirection>;
};

export type UserUniqueWhere = {
  email?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserUpdateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  emailVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  termsAcceptedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  completedOnboarding?: InputMaybe<Scalars["Boolean"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  hasAccount?: InputMaybe<UserHasAccountUpdateFieldInput>;
  hasSession?: InputMaybe<UserHasSessionUpdateFieldInput>;
  hasLessons?: InputMaybe<Array<UserHasLessonsUpdateFieldInput>>;
  reactedToPaths?: InputMaybe<Array<UserReactedToPathsUpdateFieldInput>>;
  reactedToLessons?: InputMaybe<Array<UserReactedToLessonsUpdateFieldInput>>;
  reportedActivities?: InputMaybe<
    Array<UserReportedActivitiesUpdateFieldInput>
  >;
  completedSessions?: InputMaybe<Array<UserCompletedSessionsUpdateFieldInput>>;
  hasStreak?: InputMaybe<Array<UserHasStreakUpdateFieldInput>>;
  hasPaths?: InputMaybe<Array<UserHasPathsUpdateFieldInput>>;
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
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
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
  emailVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  emailVerified_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  termsAcceptedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  termsAcceptedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  termsAcceptedAt_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  termsAcceptedAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  termsAcceptedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  termsAcceptedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  termsAcceptedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  termsAcceptedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  completedOnboarding?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  completedOnboarding_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  image_NOT?: InputMaybe<Scalars["String"]["input"]>;
  image_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  image_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  image_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  image_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  image_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  image_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  image_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  image_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  mistakenActivitiesCount?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  mistakenActivitiesCount_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  mistakenActivitiesCount_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  mistakenActivitiesCount_NOT_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  mistakenActivitiesCount_LT?: InputMaybe<Scalars["Int"]["input"]>;
  mistakenActivitiesCount_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  mistakenActivitiesCount_GT?: InputMaybe<Scalars["Int"]["input"]>;
  mistakenActivitiesCount_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  mistakenActivities?: InputMaybe<MistakenActivityWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  mistakenActivities_NOT?: InputMaybe<MistakenActivityWhere>;
  mistakenActivities_ALL?: InputMaybe<MistakenActivityWhere>;
  mistakenActivities_NONE?: InputMaybe<MistakenActivityWhere>;
  mistakenActivities_SINGLE?: InputMaybe<MistakenActivityWhere>;
  mistakenActivities_SOME?: InputMaybe<MistakenActivityWhere>;
  createdLessonsInteractionsCount?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdLessonsInteractionsCount_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  createdLessonsInteractionsCount_IN?: InputMaybe<
    Array<Scalars["Int"]["input"]>
  >;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdLessonsInteractionsCount_NOT_IN?: InputMaybe<
    Array<Scalars["Int"]["input"]>
  >;
  createdLessonsInteractionsCount_LT?: InputMaybe<Scalars["Int"]["input"]>;
  createdLessonsInteractionsCount_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  createdLessonsInteractionsCount_GT?: InputMaybe<Scalars["Int"]["input"]>;
  createdLessonsInteractionsCount_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  dailyActivity?: InputMaybe<DailyActivityWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  dailyActivity_NOT?: InputMaybe<DailyActivityWhere>;
  dailyActivity_ALL?: InputMaybe<DailyActivityWhere>;
  dailyActivity_NONE?: InputMaybe<DailyActivityWhere>;
  dailyActivity_SINGLE?: InputMaybe<DailyActivityWhere>;
  dailyActivity_SOME?: InputMaybe<DailyActivityWhere>;
  OR?: InputMaybe<Array<UserWhere>>;
  AND?: InputMaybe<Array<UserWhere>>;
  NOT?: InputMaybe<UserWhere>;
  hasAccount?: InputMaybe<AccountWhere>;
  hasAccount_NOT?: InputMaybe<AccountWhere>;
  hasAccountConnection?: InputMaybe<UserHasAccountConnectionWhere>;
  hasAccountConnection_NOT?: InputMaybe<UserHasAccountConnectionWhere>;
  hasAccountAggregate?: InputMaybe<UserHasAccountAggregateInput>;
  hasSession?: InputMaybe<SessionWhere>;
  hasSession_NOT?: InputMaybe<SessionWhere>;
  hasSessionConnection?: InputMaybe<UserHasSessionConnectionWhere>;
  hasSessionConnection_NOT?: InputMaybe<UserHasSessionConnectionWhere>;
  hasSessionAggregate?: InputMaybe<UserHasSessionAggregateInput>;
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
  /** @deprecated Use `reactedToPaths_SOME` instead. */
  reactedToPaths?: InputMaybe<PathWhere>;
  /** @deprecated Use `reactedToPaths_NONE` instead. */
  reactedToPaths_NOT?: InputMaybe<PathWhere>;
  /** Return Users where all of the related Paths match this filter */
  reactedToPaths_ALL?: InputMaybe<PathWhere>;
  /** Return Users where none of the related Paths match this filter */
  reactedToPaths_NONE?: InputMaybe<PathWhere>;
  /** Return Users where one of the related Paths match this filter */
  reactedToPaths_SINGLE?: InputMaybe<PathWhere>;
  /** Return Users where some of the related Paths match this filter */
  reactedToPaths_SOME?: InputMaybe<PathWhere>;
  /** @deprecated Use `reactedToPathsConnection_SOME` instead. */
  reactedToPathsConnection?: InputMaybe<UserReactedToPathsConnectionWhere>;
  /** @deprecated Use `reactedToPathsConnection_NONE` instead. */
  reactedToPathsConnection_NOT?: InputMaybe<UserReactedToPathsConnectionWhere>;
  /** Return Users where all of the related UserReactedToPathsConnections match this filter */
  reactedToPathsConnection_ALL?: InputMaybe<UserReactedToPathsConnectionWhere>;
  /** Return Users where none of the related UserReactedToPathsConnections match this filter */
  reactedToPathsConnection_NONE?: InputMaybe<UserReactedToPathsConnectionWhere>;
  /** Return Users where one of the related UserReactedToPathsConnections match this filter */
  reactedToPathsConnection_SINGLE?: InputMaybe<UserReactedToPathsConnectionWhere>;
  /** Return Users where some of the related UserReactedToPathsConnections match this filter */
  reactedToPathsConnection_SOME?: InputMaybe<UserReactedToPathsConnectionWhere>;
  reactedToPathsAggregate?: InputMaybe<UserReactedToPathsAggregateInput>;
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
  /** @deprecated Use `completedSessions_SOME` instead. */
  completedSessions?: InputMaybe<SessionCompletionRecordWhere>;
  /** @deprecated Use `completedSessions_NONE` instead. */
  completedSessions_NOT?: InputMaybe<SessionCompletionRecordWhere>;
  /** Return Users where all of the related SessionCompletionRecords match this filter */
  completedSessions_ALL?: InputMaybe<SessionCompletionRecordWhere>;
  /** Return Users where none of the related SessionCompletionRecords match this filter */
  completedSessions_NONE?: InputMaybe<SessionCompletionRecordWhere>;
  /** Return Users where one of the related SessionCompletionRecords match this filter */
  completedSessions_SINGLE?: InputMaybe<SessionCompletionRecordWhere>;
  /** Return Users where some of the related SessionCompletionRecords match this filter */
  completedSessions_SOME?: InputMaybe<SessionCompletionRecordWhere>;
  /** @deprecated Use `completedSessionsConnection_SOME` instead. */
  completedSessionsConnection?: InputMaybe<UserCompletedSessionsConnectionWhere>;
  /** @deprecated Use `completedSessionsConnection_NONE` instead. */
  completedSessionsConnection_NOT?: InputMaybe<UserCompletedSessionsConnectionWhere>;
  /** Return Users where all of the related UserCompletedSessionsConnections match this filter */
  completedSessionsConnection_ALL?: InputMaybe<UserCompletedSessionsConnectionWhere>;
  /** Return Users where none of the related UserCompletedSessionsConnections match this filter */
  completedSessionsConnection_NONE?: InputMaybe<UserCompletedSessionsConnectionWhere>;
  /** Return Users where one of the related UserCompletedSessionsConnections match this filter */
  completedSessionsConnection_SINGLE?: InputMaybe<UserCompletedSessionsConnectionWhere>;
  /** Return Users where some of the related UserCompletedSessionsConnections match this filter */
  completedSessionsConnection_SOME?: InputMaybe<UserCompletedSessionsConnectionWhere>;
  completedSessionsAggregate?: InputMaybe<UserCompletedSessionsAggregateInput>;
  /** @deprecated Use `hasStreak_SOME` instead. */
  hasStreak?: InputMaybe<StreakWhere>;
  /** @deprecated Use `hasStreak_NONE` instead. */
  hasStreak_NOT?: InputMaybe<StreakWhere>;
  /** Return Users where all of the related Streaks match this filter */
  hasStreak_ALL?: InputMaybe<StreakWhere>;
  /** Return Users where none of the related Streaks match this filter */
  hasStreak_NONE?: InputMaybe<StreakWhere>;
  /** Return Users where one of the related Streaks match this filter */
  hasStreak_SINGLE?: InputMaybe<StreakWhere>;
  /** Return Users where some of the related Streaks match this filter */
  hasStreak_SOME?: InputMaybe<StreakWhere>;
  /** @deprecated Use `hasStreakConnection_SOME` instead. */
  hasStreakConnection?: InputMaybe<UserHasStreakConnectionWhere>;
  /** @deprecated Use `hasStreakConnection_NONE` instead. */
  hasStreakConnection_NOT?: InputMaybe<UserHasStreakConnectionWhere>;
  /** Return Users where all of the related UserHasStreakConnections match this filter */
  hasStreakConnection_ALL?: InputMaybe<UserHasStreakConnectionWhere>;
  /** Return Users where none of the related UserHasStreakConnections match this filter */
  hasStreakConnection_NONE?: InputMaybe<UserHasStreakConnectionWhere>;
  /** Return Users where one of the related UserHasStreakConnections match this filter */
  hasStreakConnection_SINGLE?: InputMaybe<UserHasStreakConnectionWhere>;
  /** Return Users where some of the related UserHasStreakConnections match this filter */
  hasStreakConnection_SOME?: InputMaybe<UserHasStreakConnectionWhere>;
  hasStreakAggregate?: InputMaybe<UserHasStreakAggregateInput>;
  /** @deprecated Use `hasPaths_SOME` instead. */
  hasPaths?: InputMaybe<PathWhere>;
  /** @deprecated Use `hasPaths_NONE` instead. */
  hasPaths_NOT?: InputMaybe<PathWhere>;
  /** Return Users where all of the related Paths match this filter */
  hasPaths_ALL?: InputMaybe<PathWhere>;
  /** Return Users where none of the related Paths match this filter */
  hasPaths_NONE?: InputMaybe<PathWhere>;
  /** Return Users where one of the related Paths match this filter */
  hasPaths_SINGLE?: InputMaybe<PathWhere>;
  /** Return Users where some of the related Paths match this filter */
  hasPaths_SOME?: InputMaybe<PathWhere>;
  /** @deprecated Use `hasPathsConnection_SOME` instead. */
  hasPathsConnection?: InputMaybe<UserHasPathsConnectionWhere>;
  /** @deprecated Use `hasPathsConnection_NONE` instead. */
  hasPathsConnection_NOT?: InputMaybe<UserHasPathsConnectionWhere>;
  /** Return Users where all of the related UserHasPathsConnections match this filter */
  hasPathsConnection_ALL?: InputMaybe<UserHasPathsConnectionWhere>;
  /** Return Users where none of the related UserHasPathsConnections match this filter */
  hasPathsConnection_NONE?: InputMaybe<UserHasPathsConnectionWhere>;
  /** Return Users where one of the related UserHasPathsConnections match this filter */
  hasPathsConnection_SINGLE?: InputMaybe<UserHasPathsConnectionWhere>;
  /** Return Users where some of the related UserHasPathsConnections match this filter */
  hasPathsConnection_SOME?: InputMaybe<UserHasPathsConnectionWhere>;
  hasPathsAggregate?: InputMaybe<UserHasPathsAggregateInput>;
};

export type VerificationTokenCreateInput = {
  identifier: Scalars["String"]["input"];
  token: Scalars["String"]["input"];
  expires: Scalars["DateTime"]["input"];
};

export type VerificationTokenOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more VerificationTokenSort objects to sort VerificationTokens by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<VerificationTokenSort>>;
};

/** Fields to sort VerificationTokens by. The order in which sorts are applied is not guaranteed when specifying many fields in one VerificationTokenSort object. */
export type VerificationTokenSort = {
  identifier?: InputMaybe<SortDirection>;
  token?: InputMaybe<SortDirection>;
  expires?: InputMaybe<SortDirection>;
};

export type VerificationTokenUpdateInput = {
  identifier?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  expires?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type VerificationTokenWhere = {
  identifier?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  identifier_NOT?: InputMaybe<Scalars["String"]["input"]>;
  identifier_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  identifier_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  identifier_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  identifier_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  identifier_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  identifier_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  identifier_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  identifier_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  token_NOT?: InputMaybe<Scalars["String"]["input"]>;
  token_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  token_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  token_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  token_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  token_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  token_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  token_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  expires?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  expires_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  expires_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  expires_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  expires_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  expires_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  expires_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  expires_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  OR?: InputMaybe<Array<VerificationTokenWhere>>;
  AND?: InputMaybe<Array<VerificationTokenWhere>>;
  NOT?: InputMaybe<VerificationTokenWhere>;
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
  language?: boolean;
}

export declare class LessonModel {
  public find(args?: {
    where?: LessonWhere;
    fulltext?: LessonFulltext;
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
    fulltext?: LessonFulltext;
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

export interface ActivityAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  order?: boolean;
  description?: boolean;
  answer?: boolean;
  comment?: boolean;
  mermaid?: boolean;
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

export interface StreakAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  streakCount?: boolean;
  lastActivityDate?: boolean;
}

export declare class StreakModel {
  public find(args?: {
    where?: StreakWhere;

    options?: StreakOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Streak[]>;
  public create(args: {
    input: StreakCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateStreaksMutationResponse>;
  public update(args: {
    where?: StreakWhere;
    update?: StreakUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateStreaksMutationResponse>;
  public delete(args: {
    where?: StreakWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: StreakWhere;

    aggregate: StreakAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<StreakAggregateSelection>;
}

export interface SessionAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  expires?: boolean;
  sessionToken?: boolean;
  userId?: boolean;
}

export declare class SessionModel {
  public find(args?: {
    where?: SessionWhere;

    options?: SessionOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Session[]>;
  public create(args: {
    input: SessionCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateSessionsMutationResponse>;
  public update(args: {
    where?: SessionWhere;
    update?: SessionUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateSessionsMutationResponse>;
  public delete(args: {
    where?: SessionWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: SessionWhere;

    aggregate: SessionAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<SessionAggregateSelection>;
}

export interface VerificationTokenAggregateSelectionInput {
  count?: boolean;
  identifier?: boolean;
  token?: boolean;
  expires?: boolean;
}

export declare class VerificationTokenModel {
  public find(args?: {
    where?: VerificationTokenWhere;

    options?: VerificationTokenOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<VerificationToken[]>;
  public create(args: {
    input: VerificationTokenCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateVerificationTokensMutationResponse>;
  public update(args: {
    where?: VerificationTokenWhere;
    update?: VerificationTokenUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateVerificationTokensMutationResponse>;
  public delete(args: {
    where?: VerificationTokenWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: VerificationTokenWhere;

    aggregate: VerificationTokenAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<VerificationTokenAggregateSelection>;
}

export interface AccountAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  userId?: boolean;
  type?: boolean;
  provider?: boolean;
  providerAccountId?: boolean;
  refresh_token?: boolean;
  access_token?: boolean;
  expires_at?: boolean;
  token_type?: boolean;
  scope?: boolean;
  id_token?: boolean;
  session_state?: boolean;
}

export declare class AccountModel {
  public find(args?: {
    where?: AccountWhere;

    options?: AccountOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Account[]>;
  public create(args: {
    input: AccountCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateAccountsMutationResponse>;
  public update(args: {
    where?: AccountWhere;
    update?: AccountUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateAccountsMutationResponse>;
  public delete(args: {
    where?: AccountWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: AccountWhere;

    aggregate: AccountAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<AccountAggregateSelection>;
}

export interface UserAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  name?: boolean;
  email?: boolean;
  termsAcceptedAt?: boolean;
  image?: boolean;
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

export interface MistakenActivityAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  description?: boolean;
  answer?: boolean;
  comment?: boolean;
  mermaid?: boolean;
  sessionCompletionRecordId?: boolean;
}

export declare class MistakenActivityModel {
  public find(args?: {
    where?: MistakenActivityWhere;

    options?: MistakenActivityOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<MistakenActivity[]>;
  public create(args: {
    input: MistakenActivityCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateMistakenActivitiesMutationResponse>;
  public update(args: {
    where?: MistakenActivityWhere;
    update?: MistakenActivityUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateMistakenActivitiesMutationResponse>;
  public delete(args: {
    where?: MistakenActivityWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: MistakenActivityWhere;

    aggregate: MistakenActivityAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<MistakenActivityAggregateSelection>;
}

export interface SessionCompletionRecordAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  completedAt?: boolean;
  score?: boolean;
  timeTaken?: boolean;
  type?: boolean;
  mode?: boolean;
}

export declare class SessionCompletionRecordModel {
  public find(args?: {
    where?: SessionCompletionRecordWhere;

    options?: SessionCompletionRecordOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<SessionCompletionRecord[]>;
  public create(args: {
    input: SessionCompletionRecordCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateSessionCompletionRecordsMutationResponse>;
  public update(args: {
    where?: SessionCompletionRecordWhere;
    update?: SessionCompletionRecordUpdateInput;
    connect?: SessionCompletionRecordConnectInput;
    disconnect?: SessionCompletionRecordDisconnectInput;
    create?: SessionCompletionRecordCreateInput;
    connectOrCreate?: SessionCompletionRecordConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateSessionCompletionRecordsMutationResponse>;
  public delete(args: {
    where?: SessionCompletionRecordWhere;
    delete?: SessionCompletionRecordDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: SessionCompletionRecordWhere;

    aggregate: SessionCompletionRecordAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<SessionCompletionRecordAggregateSelection>;
}

export interface DailyActivityAggregateSelectionInput {
  count?: boolean;
  date?: boolean;
}

export declare class DailyActivityModel {
  public find(args?: {
    where?: DailyActivityWhere;

    options?: DailyActivityOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<DailyActivity[]>;
  public create(args: {
    input: DailyActivityCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateDailyActivitiesMutationResponse>;
  public update(args: {
    where?: DailyActivityWhere;
    update?: DailyActivityUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateDailyActivitiesMutationResponse>;
  public delete(args: {
    where?: DailyActivityWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: DailyActivityWhere;

    aggregate: DailyActivityAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<DailyActivityAggregateSelection>;
}

export interface PathAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  title?: boolean;
  color?: boolean;
  icon?: boolean;
}

export declare class PathModel {
  public find(args?: {
    where?: PathWhere;

    options?: PathOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Path[]>;
  public create(args: {
    input: PathCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreatePathsMutationResponse>;
  public update(args: {
    where?: PathWhere;
    update?: PathUpdateInput;
    connect?: PathConnectInput;
    disconnect?: PathDisconnectInput;
    create?: PathCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdatePathsMutationResponse>;
  public delete(args: {
    where?: PathWhere;
    delete?: PathDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: PathWhere;

    aggregate: PathAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<PathAggregateSelection>;
}

export interface ModelMap {
  Topic: TopicModel;
  Lesson: LessonModel;
  Keyword: KeywordModel;
  Activity: ActivityModel;
  Streak: StreakModel;
  Session: SessionModel;
  VerificationToken: VerificationTokenModel;
  Account: AccountModel;
  User: UserModel;
  MistakenActivity: MistakenActivityModel;
  SessionCompletionRecord: SessionCompletionRecordModel;
  DailyActivity: DailyActivityModel;
  Path: PathModel;
}
