import React, { useEffect } from 'react';
import ProductItem from '../productPage/ProductItem';
import bigImage1 from '../../assets/img/big-image1.webp'
import bigImage2 from '../../assets/img/big-image1.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';


const LatestProducts = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])
    return (
        <section className="new-arrival container-fluid container-xl">
            <div className="title text-center py-5 mb-5" data-aos="fade-up">
                <h2>جدیدترین محصولات</h2>
                <p>محصولات جدید اوریفلم را به لیست هفتگی خود اضافه کنید.</p>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="two-small-items" data-aos="zoom-in">
                        <div id="product-item-slide-show-1" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <ProductItem productId="1" />
                                        </div>
                                        <div className="col-sm-6 d-none d-sm-block" >
                                            <ProductItem productId="6" />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <ProductItem productId="5" />
                                        </div>
                                        <div className="col-sm-6 d-none d-sm-block">
                                            <ProductItem productId="13" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#product-item-slide-show-1"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#product-item-slide-show-1"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </button>
                        </div>
                    </div>
                    <div className="one-big-item" data-aos="zoom-in">
                        <a href="#">
                            <figure className="item">
                                <img src={bigImage1} alt="" width="100%" />
                            </figure>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-lg-6" >
                    <div className="one-big-item" data-aos="zoom-in">
                        <a href="#">
                            <figure className="item">
                                <img src={bigImage2} alt="" width="100%" />
                            </figure>
                        </a>
                    </div>
                    <div className="two-small-items" data-aos="zoom-in">
                        <div id="product-item-slide-show-2" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <ProductItem productId="7" />
                                        </div>
                                        <div className="col-sm-6 d-none d-sm-block">
                                            <ProductItem productId="11" />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-sm-6">
                                        <ProductItem productId="3" />
                                        </div>
                                        <div className="col-sm-6 d-none d-sm-block">
                                        <ProductItem productId="12" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#product-item-slide-show-2"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#product-item-slide-show-2"
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

export default LatestProducts;
