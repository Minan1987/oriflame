import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { getProduct } from './cosmeticsPage/Data'
import { FaPlus } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

const ProductItem = ({productId}) => {
    const product = getProduct(productId)
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="card">
            <Link to={`/product/${product.id}`} className="card-body">
                <div className="mask-content">
                    <img src={product.image} alt={product.title} width="100%" />
                </div>
                <div className="detail-content">
                    <div className="title-card">
                        <h4 className="card-title">{product.brand}</h4>
                        <ul>
                            <li><i><FaRegStar /></i></li>
                            <li><i><FaRegStar /></i></li>
                            <li><i><FaRegStarHalfStroke /></i></li>
                            <li><i><FaStar /></i></li>
                            <li><i><FaStar /></i></li>
                        </ul>
                    </div>
                    <p className="card-text">ر{product.title}</p>
                    <div className="pro-details">
                        <div className="price">{`${product.price} تومان`}</div>
                        <div className="add-to-card"><i><FaPlus /></i></div>
                    </div>
                </div>
            </Link>
            <Outlet />
        </div>
    )
}

export default ProductItem
