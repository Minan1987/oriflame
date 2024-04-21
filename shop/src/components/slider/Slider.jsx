import React from 'react';
import background1 from '../../assets/img/slide2-1.jpg'
import background2 from '../../assets/img/slide3-1.jpg'
import background3 from '../../assets/img/slide1.jpg'

const Slider = () => {
  return (
    <div id="slideshow" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-indicators">
            <button type="button" data-bs-target="#slideshow" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#slideshow" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#slideshow" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">
            <div className="carousel-item active">
                <a href="#">
                    <div className="slide-img" style={{backgroundImage:`url(${background3})`}}></div>
                    <div className="carousel-caption">
                        <h2 className="lineUp text-dark">رایحه ای که باید به یاد ماند...</h2>
                        <p className="lineUp2 d-none d-md-block">All or Nothing Amplified یک رایحه گل کهربایی زنانه و
                            قدرتمند است<br/> که با ضربات جسورانه Red Ginger تقویت شده است.</p>
                        <button className="btn btn-outline-custom lineUp3">خرید محصول</button>

                    </div>
                </a>
            </div>
            <div className="carousel-item">
                <a href="#">
                    <div className="slide-img" style={{backgroundImage:`url(${background1})`}}></div>
                    <div className="carousel-caption">
                        <h2 className="lineUp">هر هفته یک پیشنهاد جدید!</h2>
                        <p className="lineUp2 d-none d-md-block">تخفیف‌ها فقط برای 7 روز در اینجا موجود است<br/> فراموش نکنید
                            که هر هفته دوباره چک کنید و از جدیدترین تخفیف ها بهره مند شوید.</p>
                        <button className="btn btn-outline-custom lineUp3">خرید محصول</button>
                    </div>
                </a>
            </div>
            <div className="carousel-item">
                <a href="#">
                    <div className="slide-img" style={{backgroundImage:`url(${background2})`}}></div>
                    <div className="carousel-caption">
                        <h2 className="lineUp">برند آرایشی نوایج</h2>
                        <p className="lineUp2 d-none d-md-block">برترین محصولات آرایشی را با کمترین هزینه تهیه کنید</p>
                        <button className="btn btn-outline-custom lineUp3">خرید محصول</button>
                    </div>
                </a>
            </div>
        </div>
    </div>
  );
}

export default Slider;
