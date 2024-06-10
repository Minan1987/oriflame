import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Fade from 'react-reveal/fade';
import products from './Data';
import ProductItem from '../productPage/ProductItem';




function Products() {
    const { category } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const decodedCategory = decodeURIComponent(category);
        const categoryProducts = products.filter(product => product.category === decodedCategory);
        setFilteredProducts(categoryProducts);
    }, [category]);
    return (
        <div className='products container'>
            <div className="row">
                <Fade bottom cascade>
                    {
                        products.map((product) => (
                            <div key={product.id} className="col-md-6 col-lg-3">
                                <ProductItem productId={product.id} />
                            </div>
                        )
                        )
                    }
                </Fade>
            </div>
        </div>
    )
}

export default Products
