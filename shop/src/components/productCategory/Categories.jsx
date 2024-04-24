import React from 'react'

function Categories({ categories, filterItems }) {
    return (
        <div className="m-4">
            <div className="card text-center">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        {
                            categories.map((category, index) => {
                                return (
                                    <li key={index} className="nav-item">
                                        <button onClick={() => filterItems(category)}>{category}</button>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Categories
