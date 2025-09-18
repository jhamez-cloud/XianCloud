"use client"

import React from 'react';
import NavBar from "@/app/components/NavBar";
import {useState} from "react";
import Card from "@/app/components/Card";
import Footer from "@/app/components/Footer";

const Page = () => {

    const [selectedCard, setSelectedCard] = useState<number | null>(null);

    return (
        <div className={`w-full min-h-screen bg-white px-4 sm:px-8 md:px-16 lg:px-28 pt-4 sm:pt-8 pb-12`}>
            <NavBar/>

            {/* Hero Section */}
            <div className="w-full min-h-[400px] md:min-h-[600px] pt-4 sm:pt-8 mt-24 md:mt-20">
                <div className="w-full h-full flex flex-col md:flex-row md:space-x-4">
                    <img
                        className="w-full md:w-1/2 h-auto md:h-full rounded-lg mb-6 md:mb-0 object-cover"
                        src="/images/cloudstorage.webp"
                        alt="cloud storage"
                    />
                    <div className="w-full md:w-1/2 h-full pt-0 md:pt-12 lg:pt-24 space-y-3 md:space-y-4">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                            Cloud Storage, Built for Growth
                        </h1>
                        <p className="w-full text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                            Securely store, manage, and scale your data with our flexible
                            cloud storage solutions. Choose the perfect disk size for your
                            needs — from lightweight personal projects to
                            enterprise-level storage.
                            <br className="hidden md:block" />
                            Upgrade to our{" "}
                            <span className="font-semibold text-violet-600">
                AI-Integrated Storage Tier
              </span>{" "}
                            and unlock smart features like automated backups, intelligent
                            file search, and predictive scaling — making your storage
                            smarter, faster, and future-ready.
                        </p>
                        <a
                            href="#cloudstorage"
                            className="inline-block text-violet-600 font-light text-base sm:text-lg underline"
                        >
                            Explore Cloud Storage Plans
                        </a>
                    </div>
                </div>
            </div>

            {/* How Free Access Works */}
            <div className="w-full min-h-[300px] bg-violet-500 text-white p-4 sm:p-6 md:p-8 md:pl-16 space-y-2 mt-8 sm:mt-12 rounded-lg shadow-md">
                <h1 className="text-xl sm:text-2xl font-semibold text-shadow-lg">
                    How Does Free Access Work?
                </h1>
                <ol className="w-full list-decimal text-base sm:text-lg space-y-1 pl-5">
                    <li>Create an account with us.</li>
                    <li>Gain 200 xian points instantly after sign up.</li>
                    <li>Use your XP to purchase cloud storage plans.</li>
                    <li>
                        To refill XP, watch short ads directly on our platform (no
                        redirects).
                    </li>
                    <li>Earn 20 XP per ad and unlock more storage or upgrades.</li>
                </ol>
                <p className="text-red-300 text-sm sm:text-base md:text-lg text-shadow-lg">
                    You may watch up to 5 ads per day. Come back after 24 hours to watch
                    again.
                </p>
            </div>

            {/* Cloud Storage Plans */}
            <section
                id="cloudstorage"
                className="w-full flex flex-col items-center space-y-4 mt-8 sm:mt-12"
            >
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                    Cloud Storage Plans
                </h1>
                <p className="text-sm sm:text-base text-gray-500 text-center px-4">Choose a plan that fits your needs.</p>

                <div className="w-full h-full gap-4 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            img: "/images/store.png",
                            cost: 50,
                            type: "Basic Storage (10GB)",
                            features: ["10GB secure storage", "Fast access", "SSL protection"],
                        },
                        {
                            img: "/images/store.png",
                            cost: 100,
                            type: "Standard Storage (20GB)",
                            features: [
                                "20GB secure storage",
                                "Priority bandwidth",
                                "Easy scaling",
                                "SSL protection",
                            ],
                        },
                        {
                            img: "/images/store1.png",
                            cost: 200,
                            type: "Premium Storage (50GB)",
                            features: [
                                "50 secure storage",
                                "High performance I/O",
                                "Multi-device access",
                                "SSL protection",
                            ],
                        },
                        {
                            img: "/images/store1.png",
                            cost: 500,
                            type: "AI-Integrated Storage (100GB + AI)",
                            features: [
                                "100GB secure storage",
                                "AI-powered file search",
                                "Files scanner and analyzer",
                                "Accurate text extractor",
                                "SSL protection",
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
                            <ul className="list-disc pl-4 text-xs sm:text-sm">
                                {item.features.map((f, i) => (
                                    <li key={i}>{f}</li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
                <Footer/>
            </section>
        </div>
    );
};

export default Page;
