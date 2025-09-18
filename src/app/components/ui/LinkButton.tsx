"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    href: string;
    children: React.ReactNode;
}

const LinkButton = ({ href, children }: Props) => {
    const path = usePathname();
    const isActive = path === "/SignIn" || path === "/SignUp" || path === href;

    return (
        <Link
            href={href}
            className={`bg-violet-700 ${
                isActive ? "text-white" : "text-gray-400"
            } text-lg text-shadow-black p-2 px-4 rounded-md border cursor-pointer transition hover:bg-violet-800`}
        >
            {children}
        </Link>
    );
};

export default LinkButton;
