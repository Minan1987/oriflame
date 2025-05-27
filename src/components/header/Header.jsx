import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Menu from './Menu'
import BottomNav from './BottomNav'

const Header = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='w-full'>
             {isDesktop? 
             (
                <>
                    <Navbar />
                    <Menu />
                </>
            ) :
            (
             <BottomNav />   
            )
            
            }
            
        </div>
    )
}

export default Header
