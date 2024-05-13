import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";


function SearchResult({data}) {
    if (data.length === 0) {
        return <div>نتیجه ای یافت نشد.</div>;
    }
  return (
    <div className='products'>
            <ul className='row align-items-center p-0'>
                {
                    data.map((item) =>
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
                                            <div className="price">{item.price}</div>
                                            <button className="add-to-card">
                                                <i><FaPlus /></i>
                                            </button>
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

export default SearchResult
