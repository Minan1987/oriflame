import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from './ProductCard';
import { useGetProductsByBrandQuery } from '../api/apiSlice';
import CountDownTimer from './CountDownTimer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DailyDeal = () => {

  //  const { data = [] } = useGetProductsQuery();
  // const products = data.filter(product => product.brand === "NOVAGE+");

  const { data: products = [] } = useGetProductsByBrandQuery('NOVAGE')

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="daily-deal mt-5 p-5"
      style={{
        backgroundImage: `url(/img/daily-deal-bg.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff'
      }}>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <div className='py-5 '>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <h2 className='font-bold text-4xl pb-3'>حراج روزانه</h2>
              <CountDownTimer endDate={Date.now() + 99999999} />
            </div>

            <h3 className='text-2xl text-center py-3'>۳۰٪ تخفیف بر روی محصولات مراقبتی پوست نوایج </h3>

          </div>
          {products.length >= 2 ? (
            <>

              <Swiper
                dir="rtl"
                navigation={true}
                loop={products.length > 2}
                autoplay={{ delay: 3000 }}
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                spaceBetween={20}
                className="deal-swiper bg-transparent"
                breakpoints={{
                  640: { slidesPerView: 2 }
                }}
              >
                {products.map(product => (

                  <SwiperSlide key={product.id} style={{ width: "50%", padding: "0" }}>
                    <div data-aos="zoom-in">
                      <ProductCard product={product} />
                    </div>
                  </SwiperSlide>


                ))}
              </Swiper>

            </>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <CountDownTimer endDate={Date.now() + 99999999} />
              {products.map(product => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section >
  )
}

export default DailyDeal
