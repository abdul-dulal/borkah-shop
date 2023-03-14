import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://borkha-shop.onrender.com/" }),
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
    getWishlistItemsbyuser: builder.query({
      query: (user) => {
        return {
          url: `wishlist/getItem?user=${user?.email}`,
          method: "GET",
        };
      },
      providesTags: ["Task"],
    }),
    getProuduct: builder.query({
      query: (id) => {
        console.log(id);
        return {
          url: `product/getbyId/${id}`,
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
    addWishlist: builder.mutation({
      query: (newItem) => {
        return {
          url: `wishlist/item`,
          method: "POST",
          body: JSON.stringify(newItem),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
      invalidatesTags: ["Task"],
    }),
    updateQuantity: builder.mutation({
      query: (updateItem) => {
        const { id, ...data } = updateItem;
        console.log(id);
        return {
          url: `cart/updateQunatity/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["Task"],
    }),
    productUpdateQuantity: builder.mutation({
      query: (updateItem) => {
        const { id, ...data } = updateItem;

        return {
          url: `product/updateQunatity/${id}`,
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
    deleteWishtItem: builder.mutation({
      query: (id) => {
        return {
          url: `wishlist/deleteItem/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Task"],
    }),
    deleteMany: builder.mutation({
      query: (ids) => {
        return {
          url: `wishlist/deleteAllItems`,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ids }),
          method: "DELETE",
        };
      },
      invalidatesTags: ["Task"],
    }),
    deleteAllItem: builder.mutation({
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
  useAddWishlistMutation,
  useGetWishlistItemsbyuserQuery,
  useDeleteWishtItemMutation,
  useDeleteAllItemMutation,
  useProductUpdateQuantityMutation,
  useGetProuductQuery,
} = postApi;
