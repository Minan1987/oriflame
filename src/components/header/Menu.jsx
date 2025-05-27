import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav className="hidden md:flex justify-center items-center md:fixed top-16 right-0 left-0 z-40 w-full bg-zinc-50 py-2 shadow-md dark:bg-neutral-700">
      <ul className="flex justify-center items-center gap-4 px-4 md:text-base">
        <li><NavItem to="/">صفحه اصلی</NavItem></li>
        <li><NavItem to="/cosmetics">آرایشی</NavItem></li>
        <li><NavItem to="/hair">مو</NavItem></li>
        <li><NavItem to="/skin">پوست</NavItem></li>
        <li><NavItem to={`/hygiene?tab=womenHygiene`}>بهداشتی بانوان</NavItem></li>
        <li><NavItem to={`/hygiene?tab=menHygiene`}>بهداشتی آقایان</NavItem></li>
        <li><NavItem to={`/hygiene?tab=babyHygiene`}>بهداشتی کودک</NavItem></li>
      </ul>
    </nav>
  )
}

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `transition duration-200 hover:text-pink-700 ${isActive ? "text-pink-600 font-bold" : "text-gray-700 dark:text-white/60"}`
    }>
    {children}
  </NavLink>
)

export default Menu