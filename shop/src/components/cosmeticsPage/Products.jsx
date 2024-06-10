import React from 'react'
import Fade from 'react-reveal/fade';
import products from './Data';
import ProductItem from '../productPage/ProductItem';


function Products({items, addProduct}) {
    return (
        <div className='products'>
            <Fade bottom cascade>
                <ul className='row align-items-center p-0'>
                    {
                        products.map((product) =>
                        (
                            <li key={product.id} className='col-md-6 col-lg-4 mb-3'>
                                <ProductItem
                                    items={items}
                                    addProduct={addProduct}
                                    productId={product.id}
                                />
                            </li>
                        )
                        )
                    }
                </ul>
            </Fade>
        </div>
    )
}

export default Products
