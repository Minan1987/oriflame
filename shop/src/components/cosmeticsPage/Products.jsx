import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {itemCategory} from './Data';
import ProductItem from '../productPage/ProductItem';
import Filter from './Filter';

function Products() {
    const params = useParams();
    const products = itemCategory(params.productCategory)
    return (
        <div className='products container'>
            <div className="row my-5">
                    {
                        products.map((product) => (
                            <div key={product.id} className="col-md-6 col-lg-3">
                                <ProductItem productId={product.id} />
                            </div>
                        )
                        )
                    }
                 
            </div>
        </div>
    )
}

export default Products
