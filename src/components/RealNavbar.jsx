// src/components/RealNavbar.js

import { useEffect, useState } from 'react';
import NavbarButtons from './Buttons/NavbarButtons';
import AuthButton from './Buttons/AuthButton';
import FavorilerButtonu from './Buttons/FavorilerButtonu';
import SepetimButtonu from './Buttons/SepetimButton';
import User from '../components/User';
import { useSelector } from 'react-redux';

export default function RealNavbar() {
    const [isSticky, setIsSticky] = useState(false);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    useEffect(() => {
        const handleScroll = () => {
            const navbarTopPosition = document.getElementById('real-navbar').offsetTop;
            if (window.scrollY > navbarTopPosition) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            id="real-navbar"
            className={`${
                isSticky ? 'fixed top-0 left-0 right-0 z-50 bg-white shadow-md mt-0' : 'mt-2'
            } md:flex justify-between items-center p-4`}
        >
            <div className="flex justify-between w-full items-center mx-10 md:flex-col lg:justify-center sm:gap-5 1190:flex-row 1190:justify-around">
                <div className="flex md:flex-col 1190:flex-row justify-between items-center md:gap-5">
                    <h1 className="text-2xl font-bold">Sputnik Giyim</h1>
                    <NavbarButtons />
                </div>

                <div className="flex sm:flex-col 1190:flex-row justify-end sm:gap-5 1190:space-x-8 w-[40%] items-center">
                    <div className="flex items-center space-x-2 gap-2 text-[#23A6F0]">
                        {isLoggedIn ? <User /> : <AuthButton />}
                    </div>

                    <div className="flex lg:space-x-2 1190:gap-16 text-[#23A6F0]">
                        <SepetimButtonu />
                        <FavorilerButtonu />
                    </div>
                </div>
            </div>
        </div>
    );
}
