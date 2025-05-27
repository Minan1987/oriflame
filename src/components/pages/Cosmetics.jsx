import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useGetProductsByCategoryQuery } from '../../api/apiSlice';
import ProductCard from '../ProductCard';
import TabNavigation from '../TabNavigation';

// آرایشی
const categoryId = 4

const tabs = [
  { key: "faceCosmetics", label: "آرایش صورت", subCategoryId: 16, slug: "faceCosmetics" },
  { key: "eyeCosmetics", label: "آرایش چشم", subCategoryId: 17, slug: "eyeCosmetics" },
  { key: "lipsCosmetics", label: "آرایش لب", subCategoryId: 18, slug: "lipsCosmetics" },
  { key: "nailCosmetics", label: "آرایش ناخن", subCategoryId: 19, slug: "nailCosmetics" }
];

const Cosmetics = () => {
  const [searchParams] = useSearchParams()
  const tabSlug = searchParams.get('tab')
  const [activeTab, setActiveTab] = useState(tabs[0].slug);

  //برای اینکه از URL اومد initialTab در useState تغییر کنه
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

export default Cosmetics