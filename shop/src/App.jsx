import React from 'react'
import { TopHeader, Menu, Slider, Footer, CosmeticsPage, HairPage, SkinPage, WomenHealthPage, MenHealthPage, ChildrenHealthPage, LatestProducts, DailyDeal, ContactUs, AboutUs, ProductCategories } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <Slider />
      <LatestProducts />
      <DailyDeal />
      <ProductCategories />
    </>
  )
}
const App = () => {
  return (
    <BrowserRouter>
      <header>
        <TopHeader />
        <Menu />
      </header>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cosmetics' element={<CosmeticsPage />} />
        <Route path='/hair' element={<HairPage />} />
        <Route path='/skin' element={<SkinPage />} />
        <Route path='/women-health' element={<WomenHealthPage />} />
        <Route path='/men-health' element={<MenHealthPage />} />
        <Route path='/children-health' element={<ChildrenHealthPage />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
