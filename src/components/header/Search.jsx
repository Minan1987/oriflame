import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
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
        <div className="ms-5 flex w-[30%] items-center justify-between relative">
            <input
                type="search"
                className="relative pl-8 m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-surface transition duration-300 ease-in-out focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:bg-body-dark dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill"
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
            />

            {/* Search icon */}
            <span
                className="absolute left-1 text-gray-600 dark:text-white cursor-pointer"
                id="basic-addon2"
                onClick={handleSearch}
            >
                <IoSearch style={{ fontSize: "1.5rem" }} />
            </span>
        </div>
    )
}

export default Search
