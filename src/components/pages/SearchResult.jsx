import React from 'react'
import { useGetProductsBySearchQuery } from '../../api/apiSlice'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../ProductCard'
import Spinner from '../Spinner'
import NotFound from '../NotFound'

const SearchResult = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") || ""
    console.log(query)
    
    const {
        data: products,
        isLoading,
        isSuccess,
        isError
    } = useGetProductsBySearchQuery(query, {
        skip: query.trim() === ""
    })

    let content = null
    if (isLoading) {
        content = <Spinner />
    } else if (isSuccess) {
        content = (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {products?.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        )

    } else if (isError) {
        content = <NotFound />
    }

    return (
        <>
            {content}
        </>

    )
}

export default SearchResult
