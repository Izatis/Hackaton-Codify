import { FC, useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from 'widgets/app-bar/app-bar';

import Footer from 'widgets/footer/footer';


const Layout: FC = () => {

    const [isShow, setIsShow] = useState(false)
    const { pathname } = useLocation()

    useEffect(() => {
        if (pathname === '/' || pathname.slice(0, 7) === '/client') {
            setIsShow(true)
        } else {
            setIsShow(false)
        }
    }, [pathname])

    return (
        <>
            {isShow && <Navbar />}
            <Outlet />
            {isShow && <Footer/>}
        </>
    );
};

export default Layout;