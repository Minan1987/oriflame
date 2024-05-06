import React from 'react'
import pro1 from '../../assets/img/small-item-1.webp'
import { FaPlus } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

function Products(props) {
    console.log(props);
    return (
        <div className='products'>
            <ul className='row align-items-center p-0'>
                {
                    props.item.map((item) => 
                        <li key={item.id} className='col-md-6 col-lg-4 mb-3'>
                            <div className="card p-2 bg-white shadow-sm rounded">
                                <a className="card-body">
                                    <div className="mask-content">
                                        <img src={item.image} alt={item.title} width="100%" />
                                    </div>
                                    <div className="detail-content">
                                        <div className="title-card">
                                            <h4 className="card-title">{item.brand}</h4>
                                            <ul>
                                                <li><i><FaRegStar /></i></li>
                                                <li><i><FaRegStarHalfStroke /></i></li>
                                                <li><i><FaStar /></i></li>
                                                <li><i><FaStar /></i></li>
                                                <li><i><FaStar /></i></li>

                                            </ul>
                                        </div>

                                        <h2 className="card-text">{item.title}</h2>
                                        <div className="pro-details">
                                            <div className="price">{item.price} تومان</div>
                                            <div className="add-to-card"><i><FaPlus /></i></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </li>
                    )
                }


            </ul>
        </div>
    )
}

export default Products
