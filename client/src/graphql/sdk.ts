import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthUserInput = {
  avatar?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type CreatePostInput = {
  authorId: Scalars['String'];
  avatarImage?: InputMaybe<Scalars['String']>;
  body: Scalars['String'];
  likes: Scalars['Float'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  createUser: User;
  deleteUser: Scalars['Boolean'];
  loginUser: LoginResponse;
  providerAuthUser: Scalars['ID'];
};


export type MutationCreatePostArgs = {
  PostInput: CreatePostInput;
};


export type MutationCreateUserArgs = {
  UserInput: CreateUserInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationLoginUserArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationProviderAuthUserArgs = {
  UserInput: AuthUserInput;
};

export type Post = {
  __typename?: 'Post';
  authorId: Scalars['ID'];
  avatarImage?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  categories: Array<Scalars['String']>;
  likes: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  postByAuthorId?: Maybe<Post>;
  posts: Array<Post>;
  /** get user by object id */
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryPostByAuthorIdArgs = {
  id: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  avatar: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type CreatePostMutationVariables = Exact<{
  postInput: CreatePostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', authorId: string, body: string, categories: Array<string>, likes: number } };

export type CreateUserMutationVariables = Exact<{
  userInput: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', username?: string | null, email: string } };

export type DeleteUserMutationVariables = Exact<{
  deleteUserId: Scalars['String'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: boolean };

export type ProviderAuthUserMutationVariables = Exact<{
  userInput: AuthUserInput;
}>;


export type ProviderAuthUserMutation = { __typename?: 'Mutation', providerAuthUser: string };

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', avatarImage?: string | null, body: string, likes: number }> };

export type UserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', _id: string, name: string, username?: string | null, avatar: string, email: string } | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', _id: string, name: string, username?: string | null, email: string, avatar: string }> };


export const CreatePostDocument = gql`
    mutation CreatePost($postInput: CreatePostInput!) {
  createPost(PostInput: $postInput) {
    authorId
    body
    categories
    likes
  }
}
    `;
export const CreateUserDocument = gql`
    mutation CreateUser($userInput: CreateUserInput!) {
  createUser(UserInput: $userInput) {
    username
    email
  }
}
    `;
export const DeleteUserDocument = gql`
    mutation DeleteUser($deleteUserId: String!) {
  deleteUser(id: $deleteUserId)
}
    `;
export const ProviderAuthUserDocument = gql`
    mutation ProviderAuthUser($userInput: AuthUserInput!) {
  providerAuthUser(UserInput: $userInput)
}
    `;
export const PostsDocument = gql`
    query Posts {
  posts {
    avatarImage
    body
    likes
  }
}
    `;
export const UserDocument = gql`
    query User($userId: String!) {
  user(id: $userId) {
    _id
    name
    username
    avatar
    email
  }
}
    `;
export const UsersDocument = gql`
    query Users {
  users {
    _id
    name
    username
    email
    avatar
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CreatePost(variables: CreatePostMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreatePostMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreatePostMutation>(CreatePostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreatePost', 'mutation');
    },
    CreateUser(variables: CreateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserMutation>(CreateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateUser', 'mutation');
    },
    DeleteUser(variables: DeleteUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteUserMutation>(DeleteUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteUser', 'mutation');
    },
    ProviderAuthUser(variables: ProviderAuthUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProviderAuthUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProviderAuthUserMutation>(ProviderAuthUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ProviderAuthUser', 'mutation');
    },
    Posts(variables?: PostsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PostsQuery>(PostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Posts', 'query');
    },
    User(variables: UserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserQuery>(UserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'User', 'query');
    },
    Users(variables?: UsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UsersQuery>(UsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Users', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;