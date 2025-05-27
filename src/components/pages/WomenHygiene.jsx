import React from 'react'
import { useGetProductsByCategoryQuery } from '../../api/apiSlice'
import ProductCard from '../ProductCard';

const categoryId = 3
const subCategoryId = 14
const WomenHygiene = () => {
  const { data: products = [] } = useGetProductsByCategoryQuery(categoryId)
  const filteredProducts = products.filter(p => p.subCategoryId === subCategoryId);
  return (
    <section className='container mx-auto px-4 my-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-col-6 gap-6 p-4'>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default WomenHygiene
