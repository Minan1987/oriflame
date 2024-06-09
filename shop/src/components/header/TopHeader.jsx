import React from 'react'
import logo from '../../assets/img/logo-main-white.png'
import { FaShoppingBasket } from "react-icons/fa";
import SearchBox from '../search/SearchBox';
import { Link, Outlet } from 'react-router-dom'
import { useGlobalContext } from '../Context';

const TopHeader = () => {
   const data = useGlobalContext()
   console.log(data)
    return (
        <div className="top-header">
            <div className="login-register col-sm-6 col-lg-4 text-end">
                <Link to="/login">ورود</Link>
                <Link to="/login">عضویت</Link>
                <a href="#">
                    <FaShoppingBasket />
                </a>
                <a href="#">hi</a>
            </div>
            <div className="logo col-lg-4 text-center d-none d-lg-inline-block">
                <a href="#" target="_blank">
                    <img src={logo} alt="Oriflame Logo" />
                </a>
            </div>
            <div className="search col-sm-6 col-lg-4">
                <SearchBox />
            </div>
            <Outlet />
        </div>
    )
}

export default TopHeader
