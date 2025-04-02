import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  tagTypes : ["Product"],
  endpoints : (builder) => ({
    getProduct : builder.query({
      query : () => ({
        url : '/Product',
        method : "GET",
      }),
      providesTags : ["Product"]
    }),
    addProduct : builder.mutation({
      query : ({...newProduct}) => ({
        url : '/Product',
        method : "POST",
        body : newProduct,
        headers: { "Content-Type": "application/json" },
      }),
      invalidatesTags : ["Product"],
      }),

    editProduct : builder.mutation({
      query : ({id , ...updatedProduct}) => ({
        url : `/Product/${id}`,
        method : "PUT",
        body : updatedProduct
      }),
      invalidatesTags : ["Product"],
      }),

    deleteProduct : builder.mutation({
      query : ({id}) => ({
        url : `/Product/${id}`,
        method : "DELETE",
      }),
      invalidatesTags : ["Product"],
    })
  })
});
export default productApi;
export const {useGetProductQuery , useAddProductMutation , useDeleteProductMutation ,  useEditProductMutation} = productApi