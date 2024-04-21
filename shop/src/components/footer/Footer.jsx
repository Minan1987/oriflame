import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import logo from '../../assets/img/logo-main.png'
import footerImg1 from '../../assets/img/footer-gallery-7.jpg'
import footerImg2 from '../../assets/img/footer-gallery-6.jpg'
import footerImg3 from '../../assets/img/footer-gallery-5.jpg'
import footerImg4 from '../../assets/img/footer-gallery-3.jpg'
import footerImg5 from '../../assets/img/footer-gallery-2.jpg'
import footerImg6 from '../../assets/img/footer-gallery-1.jpg'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <a href="#pageTop" className="backToTop" style={{opacity:"1"}}>
        <IoIosArrowUp style={{color:"#fff", fontSize:"35px", marginTop:"5px"}} />
        </a>
        <div className="clearfix footer-info">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="footer-text">
                            <a href="#" className="footer-logo">
                                <img src={logo} alt="اوریفلم"/>
                            </a>
                            <p>برند اوریفلیم (Oriflame)، یکی از شرکت های معتبر در زمینه تولید محصولات آرایشی و بهداشتی
                                ارگانیک در اروپاست می باشد.<br/>محصولات آرایشی و بهداشتی شرکت اوریفلیم، کاملا طبیعی و
                                ارگانیک هستند و بدون هیچگونه مواد شیمیایی می باشد.
                                همچنین اوریفلیم، برای آزمایش و تست محصولات هرگز از حیوانات استفاده نمی کند.
                                </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="footerInfoTitle">
                            <h4>اطلاعات</h4>
                        </div>
                        <div className="useLink">
                            <ul className="list-unstyled">
                                <li>
                                <Link to="/about-us"><IoIosArrowBack />درباره ما</Link>
                                </li>
                                <li>
                                    <Link to="/contact-us"><IoIosArrowBack />تماس با ما</Link>
                                </li>
                                <li>
                                <Link to="/"><IoIosArrowBack />اطمینان از اصل بودن محصولات</Link>
                                </li>
                                <li>
                                <Link to="/"><IoIosArrowBack />نحوه ارسال سفارش</Link>
                                </li>
                                <li>
                                <Link to="/"><IoIosArrowBack />شرایط و قوانین استفاده از سایت</Link>
                                </li>
                                <li>
                                <Link to="/"><IoIosArrowBack />حفظ حریم خصوصی</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 ">
                        <div className="footerInfoTitle">
                            <h4>برترین محصولات</h4>
                        </div>
                        <div className="footerGallery row">
                            <div className="col-4 col-md-4 col-lg-4 mb-4">
                                <a href="#">
                                    <img src={footerImg1} alt="gallery-img" width="100%"/>
                                </a>
                            </div>

                            <div className="col-4 col-md-4 col-lg-4 mb-4">
                                <a href="#">
                                    <img src={footerImg2} alt="gallery-img" width="100%"/>
                                </a>
                            </div>

                            <div className="col-4 col-md-4 col-lg-4 mb-4">
                                <a href="#">
                                    <img src={footerImg3} alt="gallery-img" width="100%"/>
                                </a>
                            </div>

                            <div className="col-4 col-md-4 col-lg-4">
                                <a href="#">
                                    <img src={footerImg4} alt="gallery-img" width="100%"/>
                                </a>
                            </div>

                            <div className="col-4 col-md-4 col-lg-4">
                                <a href="#">
                                    <img src={footerImg5} alt="gallery-img" width="100%"/>
                                </a>
                            </div>

                            <div className="col-4 col-md-4 col-lg-4">
                                <a href="#">
                                    <img src={footerImg6} alt="gallery-img" width="100%"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="footerInfoTitle">
                            <h4 className="mt-sm-5">خبرنامه</h4>
                        </div>

                        <div className="footerText">
                            <p>برای دریافت جدیدترین اخبار در خبرنامه عضو شوید.</p>
                            <form className="input-group">
                                <input type="text" className="form-control" required="" placeholder="Email address"
                                    aria-describedby="basic-addon21"/>
                                <button type="submit" className="input-group-addon" id="basic-addon21">ارسال</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="clearfix copyRight">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 order-md-1">
                        <ul className="list-inline d-flex justify-content-end socialLink">
                            <li><a href="#"><FaTwitter /></a></li>
                            <li><a href="#"><IoLogoLinkedin /></a></li>
                            <li><a href="#"><FaFacebook /></a></li>
                            <li><a href="#"><FaSkype /></a></li>
                            <li><a href="#"><FaPinterestP /></a></li>
                        </ul>
                    </div>

                    <div className="col-md-7">
                        <div className="copyRightText text-sm-center">
                            <p><span className="d-none d-lg-inline-block">© 2023 Copyright</span> <a target="_blank"
                                    href="#">همه حقوق برای فروشگاه الکترونیکی اوریف مارکت
                                    محفوظ است.</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
