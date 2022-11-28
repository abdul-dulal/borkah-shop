import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Task"],
  endpoints: (builder) => ({
    getCartItemsbyuser: builder.query({
      query: (user) => {
        return {
          url: `cart/get-cartItems?user=${user}`,
          method: "GET",
        };
      },
      providesTags: ["Task"],
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
      invalidatesTags: ["Task"],
    }),
    deletePost: builder.mutation({
      query: (id) => {
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
  useGetCartItemsbyuserQuery,
  useCreatePostMutation,

  useDeletePostMutation,
} = postApi;
