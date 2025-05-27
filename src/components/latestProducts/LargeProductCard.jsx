import React from 'react'
import { Link } from 'react-router-dom'

const LargeProductCard = ({ product }) => {

  return (
    <Link key={product.id} to={`/product/${product.id}`}>
      <div className="item rounded overflow-hidden h-auto md:h-[590px] bg-white shadow">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
    </Link>

  )
}

export default LargeProductCard
