import React from 'react'
import { Link } from 'react-router-dom'
import CustomNumeralNumericFormat from './Price'
import { FaPlus } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const ProductCard = ({ product }) => {
    return (
        <Link key={product.id} to={`/product/${product.id}`}>
            <div className="bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full object-cover rounded-t-lg h-[327px]"
                />
                <div className="detail-content w-full p-4">
                    <div className="title-card flex justify-between items-center pb-2">
                        <h3 className="text-lg font-semibold mb-1 truncate text-gray-700">{product.title}</h3>
                        <ul className='flex justify-center items-center text-primary text-sm'>
                            <li><i><FaRegStarHalfStroke /></i></li>
                            <li><i><FaStar /></i></li>
                            <li><i><FaStar /></i></li>
                            <li><i><FaStar /></i></li>
                            <li><i><FaStar /></i></li>

                        </ul>
                    </div>
                    <p className="text-gray-400 mb-2 text-sm truncate pb-5">{product.description}</p>
                    <div className="flex justify-between items-center">
                        <div className="price">
                            <CustomNumeralNumericFormat
                                value={product.price}
                                thousandSeparator=","
                                prefix={` قیمت: `}
                                suffix={` تومان `}
                            /></div>
                        <div className="add-to-card bg-primary rounded p-3 text-white"><i><FaPlus /></i>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard
