import React from 'react'
import avatar1 from "/img/small-item-20.jpg"
import avatar2 from "/img/small-item-26.jpg"

const Comments = () => {
    return (
        <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-800">نظرات مشتریان</h3>
            <div className="space-y-6 mt-6">
                <div className="flex items-start space-x-4 space-x-reverse mb-5">
                    <img
                        src={avatar2}
                        alt="آواتار کاربر"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="space-y-0">
                        <p className="font-medium text-gray-900">امین اسدی</p>
                        <div className="flex items-center">
                            <span className="text-yellow-500">★★★★★</span>
                        </div>
                        <p className="text-gray-700">این محصول فوق‌العاده است! کاملاً توصیه می‌کنم.</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4 space-x-reverse mb-5">
                    <img
                        src={avatar1}
                        alt="آواتار کاربر"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="space-y-0">
                        <p className="font-medium text-gray-900">پونه ناصربخت </p>
                        <div className="flex items-center">
                            <span className="text-yellow-500">★★★★☆</span>
                        </div>
                        <p className="text-gray-700">اين بار ۶امه که سفارش میدمش واقعااااا فوق العادس عالیه محشره 😁❤️</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments
