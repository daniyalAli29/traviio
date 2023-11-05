/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n            #graphql\n            mutation AddBooking($booking:AddBookingInput!){\n                addBooking(booking:$booking)\n            }\n        ": types.AddBookingDocument,
    "\n        #graphql\n        mutation AddUser($user: AddUserInput!) {\n          addUser(user:$user){\n            access\n            refresh\n          }\n        }\n      ": types.AddUserDocument,
    "\n        #graphql\n        query LoginUser($email: String!, $password:String!){\n          loginUser(email: $email, password:$password){\n            access\n            refresh\n          }\n        }\n      ": types.LoginUserDocument,
    "\n      #graphql\n      query GetAccessToken($refreshToken: String!, $secret:String!){\n        getAccessToken(refreshToken: $refreshToken, secret:$secret){\n          refresh\n          access\n        }\n      }\n\n    ": types.GetAccessTokenDocument,
    "\n          #graphql\n          query GetBooking($id:String!){\n            booking(id: $id){\n              email\n            }\n          }\n        ": types.GetBookingDocument,
    "\n          #graphql\n          mutation UpdateBookingPayment($id:String!, $key:String!){\n            completeBooking(booking: $id, token:$key)\n          }": types.UpdateBookingPaymentDocument,
    "\n      #graphql\n      query GetUser{\n        user{\n          name\n        }\n      }\n    ": types.GetUserDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n            #graphql\n            mutation AddBooking($booking:AddBookingInput!){\n                addBooking(booking:$booking)\n            }\n        "): (typeof documents)["\n            #graphql\n            mutation AddBooking($booking:AddBookingInput!){\n                addBooking(booking:$booking)\n            }\n        "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        #graphql\n        mutation AddUser($user: AddUserInput!) {\n          addUser(user:$user){\n            access\n            refresh\n          }\n        }\n      "): (typeof documents)["\n        #graphql\n        mutation AddUser($user: AddUserInput!) {\n          addUser(user:$user){\n            access\n            refresh\n          }\n        }\n      "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        #graphql\n        query LoginUser($email: String!, $password:String!){\n          loginUser(email: $email, password:$password){\n            access\n            refresh\n          }\n        }\n      "): (typeof documents)["\n        #graphql\n        query LoginUser($email: String!, $password:String!){\n          loginUser(email: $email, password:$password){\n            access\n            refresh\n          }\n        }\n      "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      #graphql\n      query GetAccessToken($refreshToken: String!, $secret:String!){\n        getAccessToken(refreshToken: $refreshToken, secret:$secret){\n          refresh\n          access\n        }\n      }\n\n    "): (typeof documents)["\n      #graphql\n      query GetAccessToken($refreshToken: String!, $secret:String!){\n        getAccessToken(refreshToken: $refreshToken, secret:$secret){\n          refresh\n          access\n        }\n      }\n\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n          #graphql\n          query GetBooking($id:String!){\n            booking(id: $id){\n              email\n            }\n          }\n        "): (typeof documents)["\n          #graphql\n          query GetBooking($id:String!){\n            booking(id: $id){\n              email\n            }\n          }\n        "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n          #graphql\n          mutation UpdateBookingPayment($id:String!, $key:String!){\n            completeBooking(booking: $id, token:$key)\n          }"): (typeof documents)["\n          #graphql\n          mutation UpdateBookingPayment($id:String!, $key:String!){\n            completeBooking(booking: $id, token:$key)\n          }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      #graphql\n      query GetUser{\n        user{\n          name\n        }\n      }\n    "): (typeof documents)["\n      #graphql\n      query GetUser{\n        user{\n          name\n        }\n      }\n    "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;