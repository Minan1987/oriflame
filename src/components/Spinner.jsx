import React from 'react'
import { MoonLoader } from "react-spinners";

const Spinner = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <MoonLoader color='#e43192' size={100} aria-label="در حال بارگذاری..." speedMultiplier={0.3} />
        </div>
    )
}

export default Spinner
