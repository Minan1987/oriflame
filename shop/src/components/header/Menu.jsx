import React from 'react'
import logo from '../../assets/img/logo-main.png'
import { Link, Outlet } from 'react-router-dom'

const Menu = () => {
    return (
        <div className="bottom-hedaer">
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a target="_self" href="/" >
                    <img className="logo-md d-lg-none " src={logo} alt="اوریفلبم" width="150px" />
                </a>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">صفحه اصلی</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cosmetics" className="nav-link" >آرایشی</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/hair" className="nav-link" >مو</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/skin" className="nav-link" >پوست</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/women-health" className="nav-link" >بهداشتی بانوان</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/men-health" className="nav-link" >بهداشتی آقایان</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="children-health" className="nav-link" >بهداشتی کودک</Link>
                        </li>
                    </ul>
                    <Outlet />
                </div>
            </nav>
        </div>
    )
}

export default Menu
