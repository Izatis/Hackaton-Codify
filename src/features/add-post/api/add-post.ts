import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "shared/api/api-slice";
import { API_URL } from "shared/config/env-config";

export const addPost = createApi({
  reducerPath: "addPost",
  tagTypes: ["Posts"],
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    // getGoods: build.query({
    //   query: (limit = "") => `goods?${limit && `_limit=${limit}`}`,
    //   providesTags: (result) =>
    //     result
    //       ? [
    //           ...result.map(({ id }: any) => ({ type: "Posts", id })),
    //           { type: "Posts", id: "LIST" },
    //         ]
    //       : [{ type: "Posts", id: "LIST" }],
    // }),
    addAPost: build.mutation({
      query: ({ values, token }) => ({
        url: "v1/walls/post",
        method: "POST",
        body: values,
        headers: { Authorization: `Bearer ${token}` },
      }),
      invalidatesTags: [{ type: "Posts", id: "LIST" }],
    }),
    // deleteProduct: build.mutation({
    //   query: (id) => ({
    //     url: `goods/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: [{ type: "Posts", id: "LIST" }],
    // }),
  }),
});

export const { useAddAPostMutation } = addPost;
