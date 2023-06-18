import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "shared/config/env-config";

export const post = createApi({
  reducerPath: "post",
  tagTypes: ["Carts"],
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getPosts: build.query({
      query: ({ token }) => ({
        url: `v1/walls/post/all`,
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
    }),
    // addProduct: build.mutation({
    //     query: (body) => ({
    //         url: 'goods',
    //         method: 'POST',
    //         body,
    //     }),
    //     invalidatesTags: [{type: 'Carts', id: 'LIST'}]
    // }),
    // deleteProduct: build.mutation({
    //     query: (id) => ({
    //         url: `goods/${id}`,
    //         method: 'DELETE',
    //     }),
    //     invalidatesTags: [{type: 'Carts', id: 'LIST'}]
    // })
  }),
});

export const { useGetPostsQuery } = post;
