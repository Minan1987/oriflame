import React from 'react'

const TabNavigation = ({ activeTab, setActiveTab, tabs }) => {

    return (
        <>
            {/* Mobile: Select Dropdown */}
            <div className="sm:hidden p-4">
                <label htmlFor="tabs" className="sr-only">انتخاب دسته‌بندی</label>
                <select
                    id="tabs"
                    value={activeTab}
                    onChange={(e) => setActiveTab(e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 text-sm"
                >
                    {tabs.map(tab => (
                        <option key={tab.slug} value={tab.slug}>{tab.label}</option>
                    ))}
                </select>
            </div>

            {/* Desktop: Tab Buttons */}
            <ul className="hidden sm:flex text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse">
                {tabs.map(tab => (
                    <li key={tab.slug} className="w-full">
                        <button
                            onClick={() => setActiveTab(tab.slug)}
                            className={`flex items-center justify-center w-full truncate p-4 ${activeTab === tab.slug
                                ? "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white"
                                : "bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                                }`}>
                            {/* <img src={tab.icon} alt={tab.label} className="w-8 ml-3" /> */}
                            {tab.label}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TabNavigation
