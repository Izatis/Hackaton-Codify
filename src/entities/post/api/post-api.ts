import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "shared/config/env-config";

export const post = createApi({
  reducerPath: "post",
  tagTypes: ["Carts"],
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getPosts: build.query({
      query: ({ token }) => ({
        url: "v1/walls/post/all",
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }),
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }: any) => ({ type: "Carts", id })),
            { type: "Carts", id: "LIST" },
          ]
          : [{ type: "Carts", id: "LIST" }],
      transformResponse: (resp: any) => {
        return resp.map((item: any) => ({
          ...item,
          created_at: new Date(item.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }) + " / " + new Date(item.created_at).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
          }),
        }));
      },
    }),

    getPostByDate: build.query({
      query: ({ token }) => ({
        url: "v1/walls/post/all",
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }),
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }: any) => ({ type: "Carts", id })),
            { type: "Carts", id: "LIST" },
          ]
          : [{ type: "Carts", id: "LIST" }],

      transformResponse: (resp: any) => {
        const transformedResponse = resp.map((item: any) => ({
          ...item,
          created_at: new Date(item.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }) + " / " + new Date(item.created_at).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
          }),
        }));

        return transformedResponse.sort((a: any, b: any) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      },
    }),


    getPostByComments: build.query({
      query: ({ token }) => ({
        url: "v1/feeds/",
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }),
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }: any) => ({ type: "Carts", id })),
            { type: "Carts", id: "LIST" },
          ]
          : [{ type: "Carts", id: "LIST" }],
      transformResponse: (resp: any) => {
        return resp.map((item: any) => ({
          ...item,
          created_at: new Date(item.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }) + " / " + new Date(item.created_at).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
          }),
        }));
      },
    }),

  }),
});

export const { useGetPostsQuery, useGetPostByDateQuery, useGetPostByCommentsQuery } = post;
