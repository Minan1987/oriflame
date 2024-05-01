import React, { useEffect, useRef } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function CategoryMenu({ items }) {
    const sliderRef = useRef(null);

    useEffect(() => {
        // Initialize the slider after component mounted
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(0); // Reset slider to the first slide
        }
    }, [items]); // Reinitialize the slider when items change
    const isMobileView = window.innerWidth <= 768;
    const settings = {
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: <IoIosArrowForward fill='#444' />,
        nextArrow: <IoIosArrowBack fill='#444' />,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1024, // Adjust breakpoint as needed
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 768, // Adjust breakpoint as needed
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 480, // Adjust breakpoint as needed
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    };
    if(isMobileView || items.length > 4){
        return (
        <Slider ref={sliderRef} {...settings}>
            {
                items.map((item) => {
                    const { id, title, img } = item
                    return (
                        <div key={id} className="item">
                            <a href="#" className="">
                                <div className="mask-content">
                                    <img src={img} alt={title} width="100%" />
                                </div>
                                <div className="detail-content">
                                    <p>{title}</p>
                                </div>
                            </a>
                        </div>
                    )
                })
            }
        </Slider>
    )
    }

        return (
            <div className="row category-item">
                {items.map((item) => {
                    const { id, title, img } = item;
                    return (
                        <div key={id} className="col">
                            <a className="">
                                <div className="mask-content">
                                    <img src={img} alt={title} width="100%" />
                                </div>
                                <div className="detail-content">
                                    <p>{title}</p>
                                </div>
                            </a>
                        </div>
                    );
                })}
            </div>
        );
    }


export default CategoryMenu
