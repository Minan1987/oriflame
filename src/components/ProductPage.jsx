import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { useGetProductQuery } from '../api/apiSlice'
import { useParams, Link } from 'react-router-dom'
import Spinner from './Spinner'
import CustomNumeralNumericFormat from './Price'
import { IoMdArrowRoundBack } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import AddToCartButtom from './AddToCartButtom';
import ProdusctFeatures from './ProdusctFeatures';

const ProductPage= () => {

    const { productId } = useParams()

    const [count, setCount] = useState(1)

    const {
        data: product,
        isFetching,
        isSuccess,
        isError,
        error
    } = useGetProductQuery(productId)

    let content
    if (isFetching) {
        content = <Spinner />
    } else if (isSuccess) {
        content = (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="relative">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="space-y-6">
                        <Link to="/">
                            <div className="w-full flex items-center justify-end text-primary-500 ">بازگشت<IoMdArrowRoundBack style={{ fontSize: "2rem" }} /> </div>
                        </Link>
                        <h2 className="text-3xl font-bold text-gray-900">{product.title}</h2>
                        <p className="text-lg text-gray-600">{product.description}</p>
                        <div className="flex items-center space-x-4">
                            <span className="flex items-center gap-1 pe-3">
                                <CustomNumeralNumericFormat
                                    value={product.price - (product.price * product.discount) / 100}
                                    thousandSeparator=","
                                    prefix="قیمت با تخفیف: "
                                    className="text-lg text-gary-800 font-bold"
                                />
                                <span className="text-sm text-gray-700 font-normal">تومان</span>
                            </span>

                            <span className="text-sm text-gray-500 line-through">
                                <CustomNumeralNumericFormat
                                    value={product.price}
                                    thousandSeparator=","
                                />
                            </span>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-800">ویژگی‌های محصول:</h3>
                            <ul className="list-disc pl-6 text-gray-600">
                                {product.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}

                            </ul>
                        </div>
                        <div className="flex items-center justify-start space-x-6">
                            <div className="flex items-center justify-center me-6">
                                <button
                                    onClick={() => setCount(prev => Math.max(prev - 1, 1))}
                                    className="bg-gray-200 p-3 rounded"
                                >
                                    <FiMinus />
                                </button>
                                <span className="w-10 text-center">{count}</span>
                                <button
                                    onClick={() => setCount(prev => prev + 1)}
                                    className="bg-gray-200 p-3 rounded"
                                >
                                    <FiPlus />
                                </button>
                            </div>
                            <AddToCartButtom productId={product.id} quantity={count} />
                        </div>
                    </div>
                </div>

                <ProdusctFeatures productId={product.id} />

            </div>
        )
    } else if (isError) {
        content = <div className="text-red-600">{error.toString()}</div>
    }

    return (
        <div>
            {(isSuccess && product) && (
                <Helmet>
                    <title>{`صفحه محصول | اوریفلیم`}</title>
                    <meta name="اوریفلیم" content={product.description} />
                </Helmet>
            )}
            {content}
        </div>
    )
}

export default ProductPage
