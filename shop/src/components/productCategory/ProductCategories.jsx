import React, { useState } from 'react'
import Categories from './Categories'
import CategoryMenu from './CategoryMenu'
import items from './Data'

const allCategories = [...new Set(items.map((item) => item.category))];

function ProductCategories() {
    const [menuItems, setMenuItems] = useState(items)
    const [categories, setCategories] = useState(allCategories);
    const filterItems = (category) => {
        const newItem = items.filter((item) => item.category === category);
        setMenuItems(newItem);
    }
    return (
        <div>
            <Categories categories={categories} filterItems={filterItems} />
            <CategoryMenu items= {items}/>
        </div>
    )
}

export default ProductCategories
