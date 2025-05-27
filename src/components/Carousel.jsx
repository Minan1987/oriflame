import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Parallax, Pagination, Autoplay } from 'swiper/modules';

const Carousel = () => {
    return (
        <div className="relative w-full h-auto md:h-[100vh]">
            <Swiper
                speed={1200}
                parallax={true}
                loop={true}
                autoplay={{ delay: 6000 }}
                pagination={{ clickable: true }}
                modules={[Parallax, Pagination, Autoplay]}
                className="carousel-swiper h-full"
            >
                {/* اسلاید 1 */}
                <SwiperSlide>
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0"
                        data-swiper-parallax="-23%"
                        style={{ backgroundImage: `url("/img/slide1.webp")` }}
                    />
                    <div className="relative w-full md:w-2/5 z-10 flex flex-col items-center justify-center h-full px-10 md:px-20 bg-black/30" data-swiper-parallax="-300">

                        <h3 className="text-white text-2xl md:text-3xl font-bold mb-8">
                            رایحه‌ای که باید به یاد ماند...
                        </h3>
                        <h5 className="text-white text-lg md:text-xl max-w-xl" data-swiper-parallax="-100">
                            <strong>All or Nothing Amplified</strong> یک رایحه گل کهربایی زنانه و قدرتمند است که با ضربات جسورانه Red Ginger تقویت شده است.
                        </h5>
                    </div>
                </SwiperSlide>

                {/* اسلاید 2 */}
                <SwiperSlide>
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0"
                        data-swiper-parallax="-23%"
                        style={{ backgroundImage: `url("/img/slide3.webp")` }}
                    />
                    <div className="relative w-full md:w-2/5 z-10 flex flex-col items-center justify-center h-full px-10 md:px-20 bg-black/30" data-swiper-parallax="-300">

                        <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">
                            هر هفته یک پیشنهاد جدید!
                        </h2>
                        <p className="text-white text-lg md:text-xl max-w-xl" data-swiper-parallax="-100">
                            تخفیف‌ها فقط برای 7 روز در اینجا موجود است.<br /> فراموش نکنید که هر هفته دوباره چک کنید و از جدیدترین تخفیف‌ها بهره‌مند شوید.
                        </p>
                    </div>

                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Carousel
