import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useGetProductsByCategoryQuery } from '../../api/apiSlice';
import ProductCard from '../ProductCard';
import TabNavigation from '../TabNavigation';

const categoryId = 3
const tabs = [
    { key: "menHygiene", label: "بهداشتی آقایان", subCategoryId: 13, slug: "menHygiene" },
    { key: "womenHygiene", label: "بهداشتی بانوان", subCategoryId: 14, slug: "womenHygiene" },
    { key: "babyHygiene", label: "بهداشتی کودک", subCategoryId: 15, slug: "babyHygiene" },
]

const Hygiene = () => {
    const [searchParams] = useSearchParams()
    const tabSlug = searchParams.get('tab')
    const [activeTab, setActiveTab] = useState(tabs[0].slug);
console.log(`URL is: ${window.location.href}`)
console.log(`tabSlusis:${tabSlug}`)
    useEffect(() => {
        const tabFromUrl = tabs.find(tab => tab.slug === tabSlug);
        if (tabFromUrl) {
            setActiveTab(tabFromUrl.slug);
        }
    }, [tabSlug]);

    const { data: products = [] } = useGetProductsByCategoryQuery(categoryId)

    const currentTab = tabs.find(tab => tab.slug === activeTab);
    const filteredProducts = products.filter(p => p.subCategoryId === currentTab.subCategoryId);

    return (
        <section className='container mx-auto px-4 mt-6'>
            <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-col-6 gap-6 p-4'>
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hygiene
