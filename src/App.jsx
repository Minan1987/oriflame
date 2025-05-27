import React from 'react'
import ProductsList from './components/ProductsList'
import MotivationContent from './components/MotivationContent'
import Carousel from './components/Carousel'
import LatestProducts from './components/latestProducts/LatestProducts'
import DailyDeal from './components/DailyDeal'
import ProductsCategory from './components/ProductsCategory'

const App = () => {
  return (
    <div>
      <Carousel />
      <LatestProducts />
      <DailyDeal />
      {/* <ProductsList /> */}
      <MotivationContent />
      <ProductsCategory />
    </div>
  )
}

export default App
