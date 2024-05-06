import React from 'react'
import imageCat17 from '../../assets/img/category-1.jpg'
import imageCat18 from '../../assets/img/category-2.jpg'
import imageCat19 from '../../assets/img/category-4.jpg'
import imageCat20 from '../../assets/img/category-6.jpg'

function OtherCategories() {
  return (
    <div class="multi-banner container-fluid">
            <div class="row">
                <div class="col-12 col-lg-6 p-0">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <div class="single-banner single-categorie">
                                <div class="cat">
                                    <div class="cat-img">
                                        <a href="#"><img src={imageCat17} alt="categorie-banner" width="100%"
                                                height="450px"/></a>
                                    </div>

                                    <div class="cat-content">
                                        <a href="#">آرایش پوست</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="single-banner single-categorie">
                                <div class="cat">
                                    <div class="cat-img">
                                        <a href="#"><img src={imageCat18} alt="categorie-banner" width="100%"
                                                height="450px"/></a>
                                    </div>

                                    <div class="cat-content">
                                        <a href="#">لاک ناخن</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-xl-12 mt-4 mb-md-4">
                            <div class="single-banner single-categorie">
                                <div class="cat">
                                    <div class="cat-img">
                                        <a href="#"><img src={imageCat19} alt="categorie-banner" width="100%"
                                                height="400px"/></a>
                                    </div>

                                    <div class="cat-content">
                                        <a href="#">آرایش لب</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="single-banner single-categorie">
                        <div class="cat">
                            <div class="cat-img">
                                <a href="#"><img src={imageCat20} alt="categorie-banner" width="100%"
                                        height="875px"/></a>
                            </div>

                            <div class="cat-content">
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
