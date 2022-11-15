import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPostbyId: builder.query({
      query: (id) => ({
        url: `product/api/v1/getbyId/${id}`,
        method: "GET",
      }),
      providesTags: ["Post"],
    }),
    createPost: builder.mutation({
      query: (newPost) => {
        return {
          url: `cart/cartItem`,
          method: "POST",
          body: JSON.stringify(newPost),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
      invalidatesTags: ["Post"],
    }),

    getAllCartItem: builder.query({
      query: () => ({
        url: `cart/getAllItem`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetPostbyIdQuery,
  useCreatePostMutation,
  useGetAllCartItemQuery,
} = postApi;
