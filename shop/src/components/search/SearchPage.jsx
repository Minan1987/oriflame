import React from 'react'
import SearchResult from './SearchResult'
import { useParams } from "react-router-dom";
import informations from '../cosmeticsPage/Data'

function SearchPage() {
    const { query } = useParams();

    const search = (data, query) => {
        return data.filter((item) => item.brand.toLowerCase().includes(query) ||
            item.title.includes(query)) ||
            item.category.includes(query)
    };
    return (
        <div className='container'>
            <h2 className='text-center h5 mt-5 mb-3'>نتایج جستجو برای:  "{query}"</h2>
            <SearchResult data={search(informations, query)} />
        </div>
    )
}

export default SearchPage
