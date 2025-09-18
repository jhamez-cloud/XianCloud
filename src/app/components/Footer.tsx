"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full bg-gray-900 text-gray-300 py-6 sm:py-8 px-4 sm:px-8 md:px-12 mt-8 sm:mt-16">
            <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">

                {/* Brand Section */}
                <div className="flex flex-col items-center md:items-start space-y-2 max-w-xs text-center md:text-left">
                    <h1 className="text-xl sm:text-2xl font-bold text-white">XDC</h1>
                    <p className="text-xs sm:text-sm text-gray-400">
                        — WHERE HUMANITY TOUCHES THE CLOUD
                    </p>
                </div>

                {/* Links Section */}
                <div className="flex flex-wrap justify-center md:justify-end gap-8 sm:gap-12 md:space-x-8">
                    <div className="flex flex-col space-y-2">
                        <h2 className="text-white font-semibold text-center md:text-left">Services</h2>
                        <Link href="/webhosting" className="hover:text-violet-400 text-xs sm:text-sm text-center md:text-left">
                            Web Hosting
                        </Link>
                        <Link href="/bothosting" className="hover:text-violet-400 text-xs sm:text-sm text-center md:text-left">
                            Bot Hosting
                        </Link>
                        <Link href="/cloudstorage" className="hover:text-violet-400 text-xs sm:text-sm text-center md:text-left">
                            Cloud Storage
                        </Link>
                        <Link href="/dockerservices" className="hover:text-violet-400 text-xs sm:text-sm text-center md:text-left">
                            Docker Services
                        </Link>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <h2 className="text-white font-semibold text-center md:text-left">Company</h2>
                        <Link href="/about" className="hover:text-violet-400 text-xs sm:text-sm text-center md:text-left">
                            About Us
                        </Link>
                        <Link href="/contact" className="hover:text-violet-400 text-xs sm:text-sm text-center md:text-left">
                            Contact
                        </Link>
                        <Link href="/support" className="hover:text-violet-400 text-xs sm:text-sm text-center md:text-left">
                            Support
                        </Link>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-4 text-center text-xs sm:text-sm text-gray-500">
                <p> © {new Date().getFullYear()} Xian Data Center. All rights reserved.</p>
                <a href="mailto:jameskekeli12@gmail.com" className="hover:text-violet-400">CEO of Xian Data Center, James Kekeli</a>
            </div>
        </footer>
    );
};

export default Footer;
