import React, { useState } from 'react'
import logo from '../../assets/img/logo-main-white.png'
import { FaShoppingBasket } from "react-icons/fa";
import SearchBox from '../search/SearchBox';

const TopHeader = () => {
   
    return (
        <div className="top-header">
            <div className="login-register col-sm-6 col-lg-4 text-end">
                <a href="#">ورود</a>
                <a href="#">عضویت</a>
                <a href="#">
                    <FaShoppingBasket />
                </a>
            </div>
            <div className="logo col-lg-4 text-center d-none d-lg-inline-block">
                <a href="#" target="_blank">
                    <img src={logo} alt="Oriflame Logo" />
                </a>
            </div>
            <div className="search col-sm-6 col-lg-4">
                <SearchBox />
            </div>
        </div>
    )
}

export default TopHeader
