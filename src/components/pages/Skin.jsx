import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useGetProductsByCategoryQuery } from '../../api/apiSlice';
import ProductCard from '../ProductCard';
import TabNavigation from '../TabNavigation';

const categoryId = 1
const tabs = [
  { key: "Hydrating", label: "آبرسان و مرطوب کننده", subCategoryId: 1, slug: "hydrating" },
  { key: "mask", label: "ماسک پوست", subCategoryId: 2, slug: "skinMask" },
  { key: "sunscreen", label: "کرم ضدآفتاب", subCategoryId: 3, slug: "کرم ضدآفتاب" },
  { key: "tuner", label: "پاک کننده و تونر", subCategoryId: 4, slug: "tuner" },
  { key: "serum", label: "سرم و درمان", subCategoryId: 5, slug: "serum" },
  { key: "eye", label: "مراقبتی چشم", subCategoryId: 6, slug: "eye" },
  { key: "lips", label: "مراقبتی لب", subCategoryId: 7, slug: "lips" }
];
const Skin = () => {
  const [searchParams] = useSearchParams()
  const tabSlug = searchParams.get('tab')
  const [activeTab, setActiveTab] = useState(tabs[0].slug);

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

export default Skin
