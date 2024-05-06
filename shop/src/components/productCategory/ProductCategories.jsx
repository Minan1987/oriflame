import React, { useState } from 'react'
import Categories from './Categories'
import CategoryMenu from './CategoryMenu'
import items from './Data'
import OtherCategories from './OtherCategories';

const allCategories = [...new Set(items.map((item) => item.category))];
const firstCategory = allCategories[0];

function ProductCategories() {
    const [menuItems, setMenuItems] = useState(items.filter(item => item.category === firstCategory))
    const [categories, setCategories] = useState(allCategories);
    const filterItems = (category) => {
        const newItem = items.filter((item) => item.category === category);
        setMenuItems(newItem);
    }
    return (
        <div className="m-4 category">
            <div class="title text-center py-5 mb-5">
                <h2>دسته بندی محصولات</h2>
                <p>لاین های تخصصی اوریفلیم شامل با کیفیت ترین محصولات آرایشی و بهداشتی می باشند.</p>
            </div>
            <div className="text-center">
                <Categories categories={categories} filterItems={filterItems} />
                <CategoryMenu items={menuItems} />
                <OtherCategories />
            </div>
        </div>
    )
}

export default ProductCategories
