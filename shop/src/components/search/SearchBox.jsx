import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link, Outlet } from 'react-router-dom';

function SearchBox() {
    const [query, setQuery] = useState('');
    const [error, setError] = useState('')
    const [clickedSearch, setClickedSearch] = useState(false);

    const handleSearchClick = () => {
        if (query.trim() === '') {
            setClickedSearch(true);
        } else {
            setClickedSearch(false);
            // Proceed with search logic
        }
    };

    return (
        <div>
            <div className="search-box rounded d-flex align-items-center justify-content-end">
                <input
                    type="search"
                    className="bg-transparent text-white border-none"
                    placeholder="جستجو..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Link to={`/search-page/${query}`} >
                    <button className="border-0 bg-transparent text-white" id="search-addon" onClick={handleSearchClick}>
                        <FiSearch />
                    </button>
                </Link>
                <Outlet />

            </div>
            {
                clickedSearch && query.trim() === "" && <div className='error'>.لطفا محصول مورد نظر خود را جستجو کنید"</div>
            }

        </div>


    );
}

export default SearchBox;
