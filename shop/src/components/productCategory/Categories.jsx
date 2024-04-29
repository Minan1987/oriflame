import React from 'react'

function Categories({ categories, filterItems }) {
    return (
        <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
                {
                    categories.map((category, index) => {
                        return (
                            <li key={index} className="nav-item">
                                <button className='tab-btn' onClick={() => filterItems(category)}>{category}</button>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default Categories
