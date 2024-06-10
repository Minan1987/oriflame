import React from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../cosmeticsPage/Data'
import formatCarrency from '../Util'
import Comments from '../comments/Comments'

function ProductPage() {
  const params = useParams()
  const product = getProduct(params.productId)
  console.log(product)
  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-4">
          <img src={product.image} />
        </div>
        <div className="col-8">
          <h3>{product.title}</h3>
          <h5 className='card-title'>{product.brand}</h5>
          <p className='mt-5'>{product.desc}</p>
          <div className='d-flex justify-content-between'>
            <span>قیمت: {formatCarrency(product.price)}</span>
            <button className='btn btn-outline-orif'>افزودن به سبد خرید</button>
          </div>
        </div>
      </div>
      <div className="w-50 m-auto mt-5">
        <h4 className='mt-5'>نظر خود در رابطه با محصول را با ما در میان بگذارید:</h4>
        <Comments />
      </div>

    </div>
  )
}

export default ProductPage
