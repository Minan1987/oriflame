import React, { useState } from 'react';
import TabNavigation from './TabNavigation';
import { useGetSubCategoriesByCategoryQuery } from '../api/apiSlice';
import { Link } from 'react-router-dom';
import { subCategoryMap } from './subCategoryMap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const tabs = [
    { key: "skin", label: "مراقبتی پوست", categoryId: 1, slug: "skin" },
    { key: "hair", label: "مراقبتی مو", categoryId: 2, slug: "hair" },
    { key: "hygiene", label: "بهداشتی", categoryId: 3, slug: "hygiene" },
    { key: "cosmetics", label: "آرایشی", categoryId: 4, slug: "cosmetics" }
];

const ProductsCategory = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].key);
    const currentTab = tabs.find(tab => tab.key === activeTab);

    const { data: subCategories = [] } = useGetSubCategoriesByCategoryQuery(currentTab.categoryId);

    return (
        <div className="space-y-10 px-4 md:px-10 pb-10 overflow-x-hidden">
            {/* TITLE */}
            <div className="text-center py-5 mb-5">
                <h2 className="font-bold text-2xl lg:text-3xl">دسته بندی محصولات</h2>
                <p className="text-gray-400 pt-5 py-2">
                    با انتخاب یکی از دسته‌بندی‌ها، زیرشاخه‌های مرتبط را مشاهده نمایید.
                </p>
            </div>

            {/* TABS */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />

                {/* SUBCATEGORIES */}
                {subCategories.length <= 4 ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
                        {subCategories.map((subCategory) => {

                            const map = subCategoryMap[subCategory.slug]
                            // console.log('slug:', subCategory.slug);
                            // console.log('map:', subCategoryMap[subCategory.slug]);
                            if (!map) return null;
                            const to = `${map.path}?tab=${subCategory.slug}`

                            return (
                                < Link
                                    key={subCategory.id}
                                    to={to}
                                    className="relative group overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <img
                                        src={subCategory.image}
                                        alt={subCategory.name}
                                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-lg font-semibold">
                                        {subCategory.name}
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                ) : (
                    <div className="w-full">
                        <Swiper
                            dir="rtl"
                            navigation={true}
                            loop={true}
                            autoplay={{ delay: 3000 }}
                            modules={[Navigation]}
                            slidesPerView={1}
                            spaceBetween={1}
                            className="subCategory-swiper bg-transparent"
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 4 }
                            }}
                        >
                            {subCategories.map((subCategory) => {

                                const map = subCategoryMap[subCategory.slug]
                                // console.log('slug:', subCategory.slug);
                                // console.log('map:', subCategoryMap[subCategory.slug]);
                                if (!map) return null;
                                const to = `${map.path}?tab=${subCategory.slug}`

                                return (
                                    <SwiperSlide key={subCategory.id} className='w-full p-6'>
                                        <div className="overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow">
                                            <Link
                                                to={to}
                                                className="relative group block"
                                            >
                                                <img
                                                    src={subCategory.image}
                                                    alt={subCategory.name}
                                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-lg font-semibold">
                                                    {subCategory.name}
                                                </div>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                )}

            </div>
        </div >
    );
};

export default ProductsCategory;
