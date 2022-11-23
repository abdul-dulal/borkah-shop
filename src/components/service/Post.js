import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Task"],
  endpoints: (builder) => ({
    getAllCartItem: builder.query({
      query: () => ({
        url: `cart/getAllItem`,
        method: "GET",
      }),
      providesTags: ["Task"],
    }),
    getPostbyId: builder.query({
      query: (id) => ({
        url: `product/api/v1/getbyId/${id}`,
        method: "GET",
      }),
    }),
    createPost: builder.mutation({
      query: (newPost) => {
        console.log(newPost);
        return {
          url: `cart/cartItem`,
          method: "POST",
          body: JSON.stringify(newPost),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
      invalidatesTags: ["Task"],
    }),
    deletePost: builder.mutation({
      query: (id) => {
        console.log(id);
        return {
          url: `cart/delete-cartItem/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Task"],
    }),
  }),
});

export const {
  useGetPostbyIdQuery,
  useCreatePostMutation,
  useGetAllCartItemQuery,
  useDeletePostMutation,
} = postApi;
