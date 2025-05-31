import React, { useEffect, useState } from 'react'
import { BsSearchHeart } from "react-icons/bs";
import { useNavigate, useSearchParams } from 'react-router-dom';

const Search = () => {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();
    const queryParam = searchParams.get("q") || "";
    console.log(`queryParam: ${queryParam}`)
    const [inputValue, setInputValue] = useState(queryParam)

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSearch = () => {
        const trimmed = inputValue.trim();
        if (trimmed) {
            navigate(`/search?q=${trimmed}`);
        } else {
            navigate("/search");
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch()
        }
    }

    // فقط موقع ورود به صفحه، مقدار اولیه ست بشه
     useEffect(() => {
        setInputValue(queryParam)
    }, []) // فقط یک بار موقع mount اجرا میشه

    return (
        <div className="ms-5 flex w-full items-center justify-between relative">
            <input
                type="search"
                className="relative text-white pr-8 m-0 block flex-auto rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-1 py-1.5 text-base font-normal text-surface transition duration-300 ease-in-out focus:border-primary focus:text-white focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:bg-body-dark placeholder:text-gray-200"
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="جستجو..."
                aria-label="Search"
                aria-describedby="button-addon2"
            />

            {/* Search icon */}
            <span
                className="absolute right-1 text-gray-600 dark:text-white cursor-pointer"
                id="basic-addon2"
                onClick={handleSearch}
            >
                <BsSearchHeart style={{ fontSize: "1.5rem", color:"#fff" }} />
            </span>
        </div>
    )
}

export default Search
