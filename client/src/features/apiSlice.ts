import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (builder) => ({
    example: builder.mutation<
      { message: string },
      { input: string; name: string }
    >({
      query: (body) => ({
        url: "example",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useExampleMutation } = apiSlice;
