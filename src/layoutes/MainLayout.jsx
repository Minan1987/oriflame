import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/header/Navbar'
import BottomNav from '../components/header/BottomNav'
import Footer from '../components/Footer'
import Menu from '../components/header/Menu'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Menu />

      <div className="pb-16 md:pb-6 mt-0 md:mt-32" >
        <Outlet />
      </div>
      
      <BottomNav />
      <Footer />
    </>
  )
}

export default MainLayout
