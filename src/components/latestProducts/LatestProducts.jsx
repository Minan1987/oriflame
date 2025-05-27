import React, { useEffect } from 'react'
import { useGetProductsQuery } from '../../api/apiSlice';
import ProductSlider from './ProductSlider'
import LargeProductCard from './LargeProductCard'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Spinner from '../Spinner';

const LatestProducts = () => {

  const {
    data: products = [],
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetProductsQuery()

  let content = null
  if (isLoading) {
    content = <Spinner />
  } else if (isSuccess) {
    const largeProducts = products.filter(p => p.isLarge);
    const sliderProducts = products.filter(p => !p.isLarge);

    const LargeProduct1 = largeProducts[0];
    const LargeProduct2 = largeProducts[1];
    //تقسیم محصولات به دودسته جهت نمایش در دو اسلایدر
    const half = Math.ceil(sliderProducts.length / 2);
    const sliderGroup1 = sliderProducts.slice(0, half);
    const sliderGroup2 = sliderProducts.slice(half);

    content = (
      <div className="space-y-10 px-4 md:px-10 py-10 overflow-x-hidden">

        {/* TITLE */}
        <div className='title text-center py-5 mb-5'>
          <h2 className='font-bold text-2xl lg:text-3xl'>تازه‌ترین ترندها</h2>
          <p className='text-gray-400 pt-5 py-2'>محصولات ترند اوریفلم را به لیست هفتگی خود اضافه کنید.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ستون اول: عکس بالا، اسلایدر پایین */}
          <div className="flex flex-col gap-6">
            {LargeProduct1 && (
              <div data-aos="fade-left" data-aos-duration="2000">
                <LargeProductCard product={LargeProduct1} isLarge />
              </div>
            )}
            {sliderGroup1.length > 0 && (
              <div data-aos="fade-left" data-aos-duration="6000">
                <ProductSlider products={sliderGroup1} />
              </div>
            )}
          </div>

          {/* ستون دوم: اسلایدر بالا، عکس پایین */}
          <div className="flex flex-col gap-6">
            {sliderGroup2.length > 0 && (
              <div data-aos="fade-right" data-aos-duration="4000">
                <ProductSlider products={sliderGroup2} />
              </div>
            )}
            {LargeProduct2 && (
              <div data-aos="fade-right" data-aos-duration="8000">
                <LargeProductCard product={LargeProduct2} isLarge />
              </div>
            )}
          </div>
        </div>

      </div>
    )
  } else if (isError) {
    content = <div className="text-red-600">{error.toString()}</div>
  }


  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <> {content}</>
  )
}

export default LatestProducts
