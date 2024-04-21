import React, { useState } from 'react';
import imageCat01 from '../../assets/img/small-item-18.jpg'
import imageCat02 from '../../assets/img/small-item-19.jpg'
import imageCat03 from '../../assets/img/small-item-16.jpg'
import imageCat04 from '../../assets/img/small-item-17.jpg'
import imageCat05 from '../../assets/img/small-item-20.jpg'
import imageCat06 from '../../assets/img/small-item-21.jpg'
import imageCat07 from '../../assets/img/small-item-23.jpg'
import imageCat08 from '../../assets/img/small-item-24.jpg'
import imageCat09 from '../../assets/img/small-item-29.jpg'
import imageCat10 from '../../assets/img/small-item-30.jpg'
import imageCat11 from '../../assets/img/small-item-31.jpg'
import imageCat12 from '../../assets/img/small-item-33.jpg'
import imageCat13 from '../../assets/img/small-item-25.jpg'
import imageCat14 from '../../assets/img/small-item-26.jpg'
import imageCat15 from '../../assets/img/small-item-27.jpg'
import imageCat16 from '../../assets/img/small-item-28.jpg'
import imageCat17 from '../../assets/img/category-1.jpg'
import imageCat18 from '../../assets/img/category-2.jpg'
import imageCat19 from '../../assets/img/category-4.jpg'
import imageCat20 from '../../assets/img/category-6.jpg'

const ProductCategory = () => {
    const [showCategory, setShowCategory] = useState(false)

    return (
        <section className="category container-fluid container-sm">
            <div className="title text-center py-5 mb-5">
                <h2>دسته بندی محصولات</h2>
                <p>لاین های تخصصی اوریفلیم شامل با کیفیت ترین محصولات آرایشی و بهداشتی می باشند.</p>
            </div>
            <div className="m-4">
                <div className="card text-center">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs" id="myTab">
                            <li className="nav-item">
                                <a href="#skin" className="nav-link active" data-bs-toggle="tab">محصولات مراقبتی پوست</a>
                            </li>
                            <li className="nav-item">
                                <a href="#hair" className="nav-link" data-bs-toggle="tab">محصولات مراقبتی مو</a>
                            </li>
                            <li className="nav-item">
                                <a href="#perfume" className="nav-link" data-bs-toggle="tab">عطر و ادکلن</a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="skin">
                                <div className="two-small-items">
                                    <div id="skin-slide-show" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-6 col-lg-3">
                                                        <div className="card p-item">
                                                            <a className="card-body">
                                                                <div className="mask-content">
                                                                    <img src={imageCat01} alt="سرم پوست" width="100%" />
                                                                </div>
                                                                <div className="detail-content">
                                                                    <p>سِرم و درمان</p>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-6 col-lg-3">
                                                        <div className="card p-item">
                                                            <a className="card-body">
                                                                <div className="mask-content">
                                                                    <img src={imageCat02} alt="Novage+" width="100%" />
                                                                </div>
                                                                <div className="detail-content">
                                                                    <p>کمپین خرید محصولات Novage+</p>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-6 col-lg-3">
                                                        <div className="card p-item">
                                                            <a className="card-body">
                                                                <div className="mask-content">
                                                                    <img src={imageCat03} alt="تونر ها" width="100%" />
                                                                </div>
                                                                <div className="detail-content">
                                                                    <p>پاک کننده و تونر</p>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-6 col-lg-3">
                                                        <div className="card p-item">
                                                            <a className="card-body">
                                                                <div className="mask-content">
                                                                    <img src={imageCat04} alt="مرطوب کننده" width="100%" />
                                                                </div>
                                                                <div className="detail-content">
                                                                    <p>مرطوب کننده</p>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-6 col-lg-3">
                                                        <div className="card p-item">
                                                            <a className="card-body">
                                                                <div className="mask-content">
                                                                    <img src={imageCat05} alt="ماسک صورت" width="100%" />
                                                                </div>
                                                                <div className="detail-content">
                                                                    <p>ماسک پوست</p>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-6 col-lg-3">
                                                        <div className="card p-item">
                                                            <a className="card-body">
                                                                <div className="mask-content">
                                                                    <img src={imageCat06} alt="کرم ضد آفتاب" width="100%" />
                                                                </div>
                                                                <div className="detail-content">
                                                                    <p>کرم ضد آفتاب</p>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-6 col-lg-3">
                                                        <div className="card p-item">
                                                            <a className="card-body">
                                                                <div className="mask-content">
                                                                    <img src={imageCat07} alt="مراقبتی لب و چشم"
                                                                        width="100%" />
                                                                </div>
                                                                <div className="detail-content">
                                                                    <p>مراقبتی لب و چشم</p>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-6 col-lg-3">
                                                        <div className="card p-item">
                                                            <a className="card-body">
                                                                <div className="mask-content">
                                                                    <img src={imageCat08}
                                                                        alt="ابزار مراقبت از پوست" width="100%" />
                                                                </div>
                                                                <div className="detail-content">
                                                                    <p>ابزار مراقبت از پوست</p>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev d-none d-lg-block" type="button"
                                            data-bs-target="#skin-slide-show" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon"></span>
                                        </button>
                                        <button className="carousel-control-next d-none d-lg-block" type="button"
                                            data-bs-target="#skin-slide-show" data-bs-slide="next">
                                            <span className="carousel-control-next-icon"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="hair">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 col-lg-3">
                                        <div className="card p-item">
                                            <a className="card-body">
                                                <div className="mask-content">
                                                    <img src={imageCat09} alt="شامپو" width="100%" />
                                                </div>
                                                <div className="detail-content">
                                                    <p>شامپو</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-3">
                                        <div className="card p-item">
                                            <a className="card-body">
                                                <div className="mask-content">
                                                    <img src={imageCat10} alt="نرم کننده و تقویت کننده مو"
                                                        width="100%" />
                                                </div>
                                                <div className="detail-content">
                                                    <p>نرم کننده و تقویت کننده مو</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-3">
                                        <div className="card p-item">
                                            <a className="card-body">
                                                <div className="mask-content">
                                                    <img src={imageCat11} alt="ژل، موس و اسپری مو" width="100%" />
                                                </div>
                                                <div className="detail-content">
                                                    <p>ژل، موس و اسپری مو</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-3">
                                        <div className="card p-item">
                                            <a className="card-body">
                                                <div className="mask-content">
                                                    <img src={imageCat12} alt="ماسک مو" width="100%" />
                                                </div>
                                                <div className="detail-content">
                                                    <p>ماسک مو</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="perfume">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 col-lg-3">
                                        <div className="card p-item">
                                            <a className="card-body">
                                                <div className="mask-content">
                                                    <img src={imageCat13} alt="عطر زنانه" width="100%" />
                                                </div>
                                                <div className="detail-content">
                                                    <p>عطر زنانه</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-3">
                                        <div className="card p-item">
                                            <a className="card-body">
                                                <div className="mask-content">
                                                    <img src={imageCat14} alt="عطر مردانه" width="100%" />
                                                </div>
                                                <div className="detail-content">
                                                    <p>عطر مردانه</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-3">
                                        <div className="card p-item">
                                            <a className="card-body">
                                                <div className="mask-content">
                                                    <img src={imageCat15} alt="مام و اسپری ضد تعریق"
                                                        width="100%" />
                                                </div>
                                                <div className="detail-content">
                                                    <p>مام و اسپری ضد تعریق</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-3">
                                        <div className="card p-item">
                                            <a className="card-body">
                                                <div className="mask-content">
                                                    <img src={imageCat16} alt="بادی اسپلش" width="100%" />
                                                </div>
                                                <div className="detail-content">
                                                    <p>بادی اسپلش</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="multi-banner container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <div className="single-banner single-categorie">
                                    <div className="cat">
                                        <div className="cat-img">
                                            <a href="#"><img src={imageCat17} alt="categorie-banner" width="100%" height="450px" /></a>
                                        </div>

                                        <div className="cat-content">
                                            <a href="#">آرایش پوست</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="single-banner single-categorie">
                                    <div className="cat">
                                        <div className="cat-img">
                                            <a href="#"><img src={imageCat18} alt="categorie-banner" width="100%"
                                                height="450px" /></a>
                                        </div>

                                        <div className="cat-content">
                                            <a href="#">لاک ناخن</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xl-12 mt-4 mb-md-4">
                                <div className="single-banner single-categorie">
                                    <div className="cat">
                                        <div className="cat-img">
                                            <a href="#"><img src={imageCat19}alt="categorie-banner" width="100%" height="400px" /></a>
                                        </div>

                                        <div className="cat-content">
                                            <a href="#">آرایش لب</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="single-banner single-categorie">
                            <div className="cat">
                                <div className="cat-img">
                                    <a href="#"><img src={imageCat20} alt="categorie-banner" width="100%"
                                        height="875px" /></a>
                                </div>

                                <div className="cat-content">
                                    <a href="#">آرایش چشم</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductCategory;
