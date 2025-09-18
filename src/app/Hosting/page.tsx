"use client"

import React from 'react';
import NavBar from "@/app/components/NavBar";
import Card from "@/app/components/Card";
import {useState} from "react";
import Footer from "@/app/components/Footer";

const Page = () => {

    const [selectedCard, setSelectedCard] = useState<number | null>(null);

    return (
        <div className={`w-full min-h-screen bg-white px-4 sm:px-8 md:px-16 lg:px-28 pt-4 sm:pt-8 pb-12`}>
            <NavBar/>
            <div className={`w-full pt-4 sm:pt-8 mt-24 md:mt-20 space-y-8 md:space-y-16`}>
                {/* Web Hosting Section */}
                <div className={`w-full flex flex-col md:flex-row md:space-x-4`}>
                    <img className={`w-full md:w-1/2 h-auto md:h-full rounded-lg mb-6 md:mb-0 object-cover`} src="/images/feature_b1.jpg" alt="hosting"/>
                    <div className={`w-full md:w-1/2 pt-0 md:pt-12 lg:pt-24 space-y-3 md:space-y-4`}>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Web Hosting</h1>
                        <p className={`w-full text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed`}>
                            Flexible Web Hosting for Every Framework.
                            Launch and scale your websites seamlessly with our powerful virtual servers.
                            Whether your project is built with Node.js, Django, Apache, or modern JavaScript frameworks, our hosting is optimized to keep it fast, secure, and always online.
                        </p>
                        <a href="#webhosting" className={`inline-block text-violet-600 font-light text-base sm:text-lg underline`}>Check Out Web Hosting Platforms</a>
                    </div>
                </div>

                {/* Bot Hosting Section */}
                <div className={`w-full flex flex-col md:flex-row-reverse md:space-x-reverse md:space-x-4`}>
                    <img className={`w-full md:w-1/2 h-auto md:h-full rounded-lg mb-6 md:mb-0 object-cover`} src="/images/feature_b2.jpg" alt="hosting"/>
                    <div className={`w-full md:w-1/2 pt-0 md:pt-12 lg:pt-24 space-y-3 md:space-y-4`}>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Bot Hosting</h1>
                        <p className={`w-full text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed`}>
                            Deploy powerful WhatsApp automations powered by Baileys, a reliable WhatsApp library.
                            Automate social workflows, fetch and share content from other platforms, and manage everything from a secure admin panel.
                            Connect devices, customize behavior, and control access — all with enterprise-grade reliability and privacy.
                        </p>
                        <a href="#bothosting" className={`inline-block text-violet-600 font-light text-base sm:text-lg underline`}>Check Out Our Bot Hosting Platform</a>
                    </div>
                </div>
            </div>
            <div className={`w-full min-h-[300px] bg-violet-500 text-white p-4 sm:p-6 md:p-8 md:pl-16 space-y-2 mt-8 sm:mt-12 rounded-lg shadow-md`}>
                <h1 className={`text-xl sm:text-2xl font-semibold text-shadow-lg`}>How Does Free Access Work?</h1>
                <ol className={`w-full list-decimal text-base sm:text-lg space-y-1 pl-5`}>
                    <li>Create an account with us.</li>
                    <li>Gain 200 xian points after sign up.</li>
                    <li>Purchase Services with XP obtained.</li>
                    <li>To refill XP, watch shorts ads right from here without any redirects.</li>
                    <li>After completing each ad you will be given extra 20 XP.</li>
                </ol>
                <p className={`text-red-300 text-sm sm:text-base md:text-lg text-shadow-lg`}>You may watch a total of 5 ads each day. Come Back after 24hrs to watch ads again.</p>
            </div>
            <section
                className="w-full flex flex-col items-center space-y-16 sm:space-y-24 mt-8 sm:mt-12"
            >
                {/* --- Web Hosting --- */}
                <div className="w-full flex flex-col items-center space-y-4" id={`webhosting`}>
                    <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                        Web Hosting Platforms Available
                    </h1>
                    <p className="text-sm sm:text-base text-gray-500 text-center px-4">You Have 0 XP.</p>
                    <div className="w-full h-full gap-4 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                type: "Static Websites",
                                img: "/images/web-design1.png",
                                cost: 50,
                                features: [
                                    "Supports HTML, CSS, JavaScript, React, Vue, Angular",
                                    "Fast CDN delivery",
                                    "Unlimited Bandwidth",
                                    "Free SSL Certificates",
                                ],
                            },
                            {
                                type: "Node.js Apps",
                                img: "/logos/nodejs.png",
                                cost: 100,
                                features: [
                                    "Optimized for Express.js, NestJS & Next.js",
                                    "Scalable Event-driven Architecture",
                                    "Unlimited RAM & CPU Scaling",
                                    "Integrated NPM & Yarn Support",
                                ],
                            },
                            {
                                type: "Django Framework",
                                img: "/images/django.jpg",
                                cost: 150,
                                features: [
                                    "Preconfigured PostgreSQL/MySQL",
                                    "Gunicorn + Nginx setup",
                                    "Unlimited Storage & CPU",
                                    "Supports Celery & Redis integrations",
                                ],
                            },
                            {
                                type: "PHP Hosting",
                                img: "/images/php.png",
                                cost: 200,
                                features: [
                                    "Supports Laravel, Symfony, WordPress",
                                    "Apache/Nginx with PHP-FPM",
                                    "Unlimited Databases & Storage",
                                    "One-click Composer Install",
                                ],
                            },
                        ].map((item, index) => (
                            <Card
                                key={index}
                                onSelect={() => setSelectedCard(index)}
                                type={item.type}
                                image={item.img}
                                cost={item.cost}
                            >
                                <ul className="list-disc pl-4 text-xs sm:text-sm space-y-1">
                                    {item.features.map((f, i) => (
                                        <li key={i}>{f}</li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* --- Bot Hosting --- */}
                <div className="w-full flex flex-col items-center space-y-4" id={`bothosting`}>
                    <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                        Bot Hosting Platforms Available
                    </h1>
                    <p className="text-sm sm:text-base text-gray-500 text-center px-4">
                        Deploy WhatsApp & automation bots with reliable resources.
                    </p>

                    <div className="w-full h-full gap-4 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                img: "/images/logo-2-square.png",
                                type: "Tier 1 Bot Server",
                                ram: "1 GB",
                                cpu: "0.5 vCPU",
                                storage: "10 GB SSD",
                                cost: 50,
                            },
                            {
                                img: "/images/tier2.png",
                                type: "Tier 2 Bot Server",
                                ram: "2 GB",
                                cpu: "1 vCPUs",
                                storage: "20 GB SSD",
                                cost: 100,
                            },
                            {
                                img: "/images/tier3.png",
                                type: "Tier 3 Bot Server",
                                ram: "2 GB",
                                cpu: "1.5 vCPUs",
                                storage: "80 GB SSD",
                                cost: 150,
                            },
                            {
                                img: "/images/tier4.png",
                                type: "Unlimited Bot Server",
                                ram: "UNLIMITED",
                                cpu: "UNLIMITED",
                                storage: "UNLIMITED",
                                cost: 200,
                            },
                        ].map((plan, index) => (
                            <Card
                                key={index}
                                onSelect={() => setSelectedCard(index)}
                                type={plan.type}
                                image={plan.img}
                                cost={plan.cost}
                            >
                                <ul className="list-disc pl-4 text-xs sm:text-sm">
                                    <li>RAM: {plan.ram}</li>
                                    <li>CPU: {plan.cpu}</li>
                                    <li>STORAGE: {plan.storage}</li>
                                </ul>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default Page;
