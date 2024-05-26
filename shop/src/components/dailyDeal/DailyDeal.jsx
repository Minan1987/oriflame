import React, {useEffect} from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import smallImage8 from '../../assets/img/small-item-8.jpg'
import smallImage9 from '../../assets/img/small-item-9.jpg'
import smallImage10 from '../../assets/img/small-item-10.jpg'
import smallImage12 from '../../assets/img/small-item-12.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link, Outlet} from 'react-router-dom'

const DailyDeal = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])
    return (
        <section className="daily-deal mt-5 p-5">
            <div className="col-12 col-lg-6" >
                <div data-aos="fade-up">
                    <h2>حراج روزانه</h2>
                    <p>۳۰٪ تخفیف بر روی محصولات مراقبتی پوست نوایج </p>
                </div>

                <div className="daily-deal-product">
                    <div className="two-small-items" data-aos="fade-left">
                        <div id="product-item-slide-show3" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="card">
                                                <a className="card-body">
                                                    <div className="countdown" data-countdown="2023/05/01">
                                                        <div className="count">
                                                            <p>۰۰</p>
                                                            <span>روز</span>
                                                        </div>
                                                        <div className="count">
                                                            <p>۰۲</p>
                                                            <span>ساعت</span>
                                                        </div>
                                                        <div className="count">
                                                            <p>۳۰</p>
                                                            <span>دقیقه</span>
                                                        </div>
                                                        <div className="count">
                                                            <p>۶۰</p>
                                                            <span>ثانیه</span>
                                                        </div>
                                                    </div>
                                                    <div className="mask-content">
                                                       <Link to='/product'><img src={smallImage8} alt="NOVAGE+" width="100%" /></Link> 
                                                    </div>
                                                    <div className="detail-content">
                                                        <div className="title-card">
                                                            <h4 className="card-title">NOVAGE+</h4>
                                                            <ul>
                                                                <li><i><FaRegStarHalfStroke /></i></li>
                                                                <li><i><FaStar /></i></li>
                                                                <li><i><FaStar /></i></li>
                                                                <li><i><FaStar /></i></li>
                                                                <li><i><FaStar /></i></li>
                                                            </ul>
                                                        </div>
                                                        <p className="card-text">کپسول روغن صورت Nutri6</p>
                                                        <div className="pro-details">
                                                            <div className="price">۷,۵۰۰,۰۰۰ تومان</div>
                                                            <div className="add-to-card"><i><FaPlus /></i></div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 d-none d-sm-block">
                                            <div className="card">
                                                <a className="card-body">
                                                    <div className="countdown" data-countdown="2023/05/01">
                                                        <div className="count">
                                                            <p>۰۰</p>
                                                            <span>روز</span>
                                                        </div>
                                                        <div className="count">
                                                            <p>۰۲</p>
                                                            <span>ساعت</span>
                                                        </div>
                                                        <div className="count">
                                                            <p>۳۰</p>
                                                            <span>دقیقه</span>
                                                        </div>
                                                        <div className="count">
                                                            <p>۶۰</p>
                                                            <span>ثانیه</span>
                                                        </div>
                                                    </div>
                                                    <div className="mask-content">
                                                        <img src={smallImage9} alt="NOVAGE+" width="100%" />
                                                    </div>
                                                    <div className="detail-content">
                                                        <div className="title-card">
                                                            <h4 className="card-title">NOVAGE+</h4>
                                                            <ul>
                                                                <li><i><FaRegStarHalfStroke /></i></li>
                                                                <li><i><FaStar /></i></li>
                                                                <li><i><FaStar /></i></li>
                                                                <li><i><FaStar /></i></li>
                                                                <li><i><FaStar /></i></li>
                                                            </ul>
                                                        </div>
                                                        <p className="card-text">روغن پاک کننده صورت</p>
                                                        <div className="pro-details">
                                                            <div className="price">۹۹۰,۰۰۰ تومان</div>
                                                            <div className="add-to-card"><i><FaPlus /></i></div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="card">
                                                <a className="card-body">
                                                    <div className="countdown" data-countdown="2023/05/01">
                                                        <div className="count">
                                                            <p>۰۰</p>
                                                            <span>روز</span>
                                                        </div>
                                                        <div className="count">
                                                            <p>۰۲</p>
                                                            <span>ساعت</span>
                                                        </div>
                                                        <div className="count">
                                                            <p>۳۰</p>
                                                            <span>دقیقه</span>
                                                        </div>
                                                        <div className="count">
                                                            <p>۶۰</p>
                                                            <span>ثانیه</span>
                                                        </div>
                                                    </div>
                                                    <div className="mask-content">
                                                        <img src={smallImage10} alt="NOVAGE+" width="100%" />
                                                    </div>
                                                    <div className="detail-content">
                                                        <div className="title-card">
                                                            <h4 className="card-title">NOVAGE+</h4>
                                                            <ul>
                                                                <li><i><FaRegStarHalfStroke /></i></li>
                                                                <li><i><FaStar /></i></li>
                                                                <li><i><FaStar /></i></li>
                                                                <li><i><FaStar /></i></li>
                                                                <li><i><FaStar /></i></li>
                                                            </ul>
                                                        </div>
                                                        <p className="card-text">محلول ProCeuticals 10% ویتامین C</p>
                                                        <div className="pro-details">
                                                            <div className="price">۹۹۰,۰۰۰ تومان</div>
                                                            <div className="add-to-card"><i><FaPlus /></i></div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 d-none d-sm-block">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="countdown" data-countdown="2023/05/01">
                                                        <div className="count">
                                                            <p>۰۰</p>
                                                            <span>روز</span>
                                                        </div>
                                                        <div className="count">
                                                            <p>۰۲</p>
                                                            <span>ساعت</span>
                                                        </div>
                                                        <div className="count">
                                                            <p>۳۰</p>
                                                            <span>دقیقه</span>
                                                        </div>
                                                        <div className="count">
                                                            <p>۶۰</p>
                                                            <span>ثانیه</span>
                                                        </div>
                                                    </div>
                                                    <div className="mask-content">
                                                        <img src={smallImage12} alt="NOVAGE+" width="100%" />
                                                    </div>
                                                    <div className="detail-content">
                                                        <div className="title-card">
                                                            <h4 className="card-title">NOVAGE+</h4>
                                                            <ul>
                                                                <li><i><FaRegStarHalfStroke /></i></li>
                                                                <li><i><FaStar /></i></li>
                                                                <li><i><FaStar /></i></li>
                                                                <li><i><FaStar /></i></li>
                                                                <li><i><FaStar /></i></li>

                                                            </ul>
                                                        </div>
                                                        <p className="card-text">قطره رتینول پاور ProCeuticals</p>
                                                        <div className="pro-details">
                                                            <div className="price">۷۵۰,۰۰۰ تومان</div>
                                                            <div className="add-to-card"><i><FaPlus /></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Outlet />
                            <button className="carousel-control-prev" type="button" data-bs-target="#product-item-slide-show"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#product-item-slide-show"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DailyDeal;
