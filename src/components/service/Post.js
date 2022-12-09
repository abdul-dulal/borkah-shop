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
    updateQuantity: builder.mutation({
      query: (updateItem) => {
        const { name, ...data } = updateItem;
        return {
          url: `cart/updateQuantity/${name}`,
          method: "PUT",
          body: data,
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
    deleteMany: builder.mutation({
      query: (ids) => {
        console.log(ids);
        return {
          url: `cart/deleteAllItems`,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ids }),
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
  useDeleteManyMutation,
  useUpdateQuantityMutation,
} = postApi;
