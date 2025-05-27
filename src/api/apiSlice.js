import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        //"https://oriflameapi.bluenet.ir"
        //http://localhost:8000
        baseUrl: "http://localhost:8000"
    }),
    tagTypes: ["PRODUCT", "CART"],
    endpoints: builder => ({
        // محصولات
        getProducts: builder.query({
            query: () => "/products",
            providesTags: (result = [], error, arg) => [
                "PRODUCT",
                ...result.map(({ id }) => ({ type: "PRODUCT", id }))
            ]
        }),
        getProduct: builder.query({
            query: (productId) => `/products/${productId}`,
            providesTags: (result, error, arg) => [{ type: "PRODUCT", id: arg }]
        }),
        getProductsByCategory: builder.query({
            query: (category) => (`/products?category=${category}`)
        }),
        getProductsByBrand: builder.query({
            query: (brand) => (`/products?brand=${brand}`)
        }),
        getProductsBySearch: builder.query({
            query: (searchTerm) => `/products?title_like=${encodeURIComponent(searchTerm)}`
        }),
        getCategories: builder.query({
            query: (categoryId) => `categories/${categoryId}`
        }),
        getSubCategoriesByCategory: builder.query({
            query: (categoryId) => `subCategories?categoryId=${categoryId}`
        }),

        // سبد خرید
        getCart: builder.query({
            query: () => "/cart",
            providesTags: ["CART"]
        }),
        addToCart: builder.mutation({
            query: (newItem) => ({
                url: "/cart",
                method: "POST",
                body: newItem
            }),
            invalidatesTags: ["CART"]
        }),
        removeFromCart: builder.mutation({
            query: (itemId) => ({
                url: `/cart/${itemId}`,
                method: "DELETE"
            }),
            invalidatesTags: ["CART"]
        }),
        updateCartItem: builder.mutation({
            query: ({ itemId, ...patch }) => ({
                url: `/cart/${itemId}`,
                method: "PATCH",
                body: patch
            }),
            invalidatesTags: ["CART"]
        })
    })
})

export const {
    useGetProductsQuery,
    useGetProductQuery,
    useGetProductsByCategoryQuery,
    useGetProductsBySearchQuery,
    useGetSubCategoriesByCategoryQuery,
    useGetCartQuery,
    useAddToCartMutation,
    useRemoveFromCartMutation,
    useUpdateCartItemMutation,
    useGetProductsByBrandQuery
} = apiSlice