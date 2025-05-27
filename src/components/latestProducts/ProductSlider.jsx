import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from '../ProductCard';


const ProductSlider = ({ products }) => {

  return (
    <Swiper
      dir="rtl"
      navigation={true}
      loop={true}
      autoplay={{ delay: 3000 }}
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      spaceBetween={20}
      className="product-swiper bg-white"
      breakpoints={{
        640: { slidesPerView: 2 }
      }}
    >
      {products.map(product => (
        <SwiperSlide key={product.id} style={{ width: "50%", padding: "0" }}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ProductSlider
