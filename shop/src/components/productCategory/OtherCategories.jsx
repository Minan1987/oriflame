import React , {useEffect} from 'react'
import imageCat17 from '../../assets/img/category-1.jpg'
import imageCat18 from '../../assets/img/category-2.jpg'
import imageCat19 from '../../assets/img/category-4.jpg'
import imageCat20 from '../../assets/img/category-6.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

function OtherCategories() {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, [])
  return (
    <div className="multi-banner container-fluid">
            <div className="row">
                <div className="col-12 col-lg-6 p-0">
                    <div className="row">
                        <div className="col-sm-12 col-md-6" data-aos="zoom-in">
                            <div className="single-banner single-categorie">
                                <div className="cat">
                                    <div className="cat-img">
                                        <a href="#"><img src={imageCat17} alt="categorie-banner" width="100%"
                                                height="450px"/></a>
                                    </div>

                                    <div className="cat-content">
                                        <a href="#">آرایش پوست</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6" data-aos="zoom-in">
                            <div className="single-banner single-categorie">
                                <div className="cat">
                                    <div className="cat-img">
                                        <a href="#"><img src={imageCat18} alt="categorie-banner" width="100%"
                                                height="450px"/></a>
                                    </div>

                                    <div className="cat-content">
                                        <a href="#">لاک ناخن</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-12 mt-4 mb-md-4" data-aos="zoom-in">
                            <div className="single-banner single-categorie">
                                <div className="cat">
                                    <div className="cat-img">
                                        <a href="#"><img src={imageCat19} alt="categorie-banner" width="100%"
                                                height="400px"/></a>
                                    </div>

                                    <div className="cat-content">
                                        <a href="#">آرایش لب</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6" data-aos="zoom-in">
                    <div className="single-banner single-categorie">
                        <div className="cat">
                            <div className="cat-img">
                                <a href="#"><img src={imageCat20} alt="categorie-banner" width="100%"
                                        height="875px"/></a>
                            </div>

                            <div className="cat-content">
                                <a href="#">آرایش چشم</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default OtherCategories
