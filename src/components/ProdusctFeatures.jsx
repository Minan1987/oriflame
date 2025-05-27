import React, { useState } from 'react';
import Comments from './Comments';
import { useGetProductQuery } from '../api/apiSlice';
import { LuGlasses } from "react-icons/lu";
import { FaFeatherPointed } from "react-icons/fa6";
import { FaRegCommentDots } from "react-icons/fa";

const ProductFeatures = ({ productId }) => {
    const [activeTab, setActiveTab] = useState("about");
    const { data: product } = useGetProductQuery(productId)

    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mt-10">
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">
                <li className="me-2">
                    <button
                        type="button"
                        onClick={() => setActiveTab("about")}
                        className={`flex items-center p-4 rounded-ss-lg text-lg font-bold ${activeTab === "about"
                            ? "text-primary dark:text-primary"
                            : "hover:bg-gray-100 dark:hover:bg-gray-700"
                            }`}
                    >
                        <LuGlasses style={{ marginLeft: "5px" }} />     نقد و بررسی
                    </button>
                </li>
                <li className="me-2">
                    <button
                        type="button"
                        onClick={() => setActiveTab("services")}
                        className={`flex items-center p-4 text-lg font-bold ${activeTab === "services"
                            ? "text-primary dark:text-primary"
                            : "hover:bg-gray-100 dark:hover:bg-gray-700"
                            }`}
                    >
                        <FaFeatherPointed />   مشخصات
                    </button>
                </li>
                <li className="me-2">
                    <button
                        type="button"
                        onClick={() => setActiveTab("statistics")}
                        className={`flex items-center p-4 text-lg font-bold ${activeTab === "statistics"
                            ? "text-primary dark:text-primary"
                            : "hover:bg-gray-100 dark:hover:bg-gray-700"
                            }`}
                    >
                        <FaRegCommentDots />    دیدگاه‌ها
                        <span className='bg-primary text-white px-2 py-1 rounded text-xs ms-2'>2</span>
                    </button>
                </li>
            </ul>

            <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
                {activeTab === "about" && (
                    <div>
                        <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">نقد و بررسی</h2>
                        <p className="mb-3 text-gray-500 dark:text-gray-400">
                            توضیحات کامل درباره محصول...
                        </p>
                    </div>
                )}

                {activeTab === "services" && (
                    <div>
                        <h3 className="text-lg font-medium text-gray-800">مشخصات محصول:</h3>
                        <ul className="list-disc pl-6 text-gray-600">
                            {product.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}

                        </ul>
                    </div>
                )}

                {activeTab === "statistics" && (
                    <div>
                        <dl className="grid grid-cols-2 gap-4 text-gray-900 dark:text-white">
                            <Comments />
                        </dl>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductFeatures;