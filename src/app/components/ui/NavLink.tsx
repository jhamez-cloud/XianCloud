import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const NavLink = ({href,children}:{href:string,children:React.ReactNode}) => {

    const path = usePathname();
    const isActive = path === href;

    return (
     <Link href={href} className={`text-lg font-semibold transition ${
         isActive ? "text-violet-600" : "text-gray-400"
     }`}>
         {children}
     </Link>
    );
};

export default NavLink;