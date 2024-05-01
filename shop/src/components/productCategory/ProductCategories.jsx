import React, { useState } from 'react'
import Categories from './Categories'
import CategoryMenu from './CategoryMenu'
import items from './Data'

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
            <div className="text-center">
                <Categories categories={categories} filterItems={filterItems} />
                <CategoryMenu items={menuItems} />
            </div>
        </div>
    )
}

export default ProductCategories
