import React, { useState } from 'react';
import NavLink from "@/app/components/ui/NavLink";
import LinkButton from "@/app/components/ui/LinkButton";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`w-full h-auto min-h-[70px] md:h-[100px] bg-white flex flex-col md:flex-row items-center justify-between px-4 md:px-12 shadow-md top-0 left-0 fixed z-50`}>
            <div className="w-full md:w-auto flex items-center justify-between py-4 md:py-0">
                <img className={`w-[150px] md:w-[200px] h-[45px] md:h-[60px]`} src="/logos/logo-dark-transparent.png" alt="companyLogo"/>
                <button 
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto h-auto md:h-full py-4 md:py-0 space-y-4 md:space-y-0 md:space-x-2 items-start md:items-center`}>
                <ul className={`flex flex-col md:flex-row w-full md:w-auto space-y-4 md:space-y-0 md:space-x-4`}>
                    <li className={`text-lg font-semibold text-gray-400`}>< NavLink href={`/`} children={`Home`}/></li>
                    <li className={`text-lg font-semibold text-gray-400`}>< NavLink href={`/Hosting`} children={`Cloud Hosting`}/></li>
                    <li className={`text-lg font-semibold text-gray-400`}>< NavLink href={`/Storage`} children={`Advanced Cloud Storage`}/></li>
                    <li className={`text-lg font-semibold text-gray-400`}>< NavLink href={`/Docker`} children={`Docker Services`}/></li>
                </ul>
                <div className="w-full md:w-auto pt-4 md:pt-0">
                    <LinkButton href="/SignIn" children={`Login`}/>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
