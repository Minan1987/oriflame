import React from 'react'
import { useGetProductsQuery } from '../api/apiSlice'
import Spinner from './Spinner'
import { Helmet } from 'react-helmet-async'
import ProductCard from './ProductCard'


const ProductsList = () => {
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetProductsQuery()

    let content = null
    if (isLoading) {
        content = <Spinner />
    } else if (isSuccess && Array.isArray(data)) {
        content = (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {data.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        )
    } else if (isError) {
        content = <div className="text-red-600">{error.toString()}</div>
    }


    return (
        <div className='my-10'>
            <Helmet>
                <title>صفحه اصلی | اوریفلیم</title>
                <meta name="اوریفلیم" content="فروشگاه اینترنتی محصولات آرایشی و بهداشتی" />
            </Helmet>
            {content}
        </div>
    )
}

export default ProductsList
