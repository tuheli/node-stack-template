import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../app/store";
import { User } from "../common/common";

interface SignUpRequest {
  username: string;
  password: string;
}

interface SignUpResponse {
  username: string;
}

interface SignInRequest {
  username: string;
  password: string;
}

interface SignInResponse {
  user: {
    username: string;
    authorizationToken: string;
  };
}

interface ValidateAuthorizationTokenRequest {
  user: User;
}

interface ValidateAuthorizationTokenResponse {
  user: User;
}

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["Foods"],
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders: (headers, { getState }) => {
      const authorizationToken = (getState() as RootState).user.user
        ?.authorizationToken;

      if (authorizationToken) {
        headers.set("authorization", `Bearer ${authorizationToken}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    signUp: builder.mutation<SignUpResponse, SignUpRequest>({
      query: (body) => ({
        url: "signup",
        method: "POST",
        body,
      }),
    }),
    signIn: builder.mutation<SignInResponse, SignInRequest>({
      query: (body) => ({
        url: "signin",
        method: "POST",
        body,
      }),
    }),
    validateAuthorizationToken: builder.mutation<
      ValidateAuthorizationTokenResponse,
      ValidateAuthorizationTokenRequest
    >({
      query: (body) => ({
        url: "validateauthorizationtoken",
        method: "POST",
        body,
        headers: {
          authorization: `Bearer ${body.user.authorizationToken}`,
        },
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useValidateAuthorizationTokenMutation,
} = apiSlice;
