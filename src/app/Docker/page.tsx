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
                        src="/images/dockerservice.jpg"
                        alt="docker services"
                    />
                    <div className="w-full md:w-1/2 h-full pt-0 md:pt-12 lg:pt-24 space-y-3 md:space-y-4">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                            Scalable Docker Containers for Every Environment
                        </h1>
                        <p className="w-full text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                            Run your applications in isolated, secure, and high-performance
                            Docker containers.
                            Choose preconfigured environments for{" "}
                            <span className="font-semibold text-violet-600">
                                Node.js, Python, Java, and Databases
                            </span>
                            , or customize containers to fit your exact workload.
                            <br className="hidden md:block" />
                            Pricing scales with specs — CPU, RAM, and storage — so you only
                            pay for the resources you actually need.
                        </p>
                        <a
                            href="#dockerservices"
                            className="inline-block text-violet-600 font-light text-base sm:text-lg underline"
                        >
                            Explore Docker Container Plans
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
                    <li>Use your XP to purchase Docker container services.</li>
                    <li>
                        Refill XP by watching short ads directly on our platform (no
                        redirects).
                    </li>
                    <li>Earn 20 XP per ad and deploy more containers instantly.</li>
                </ol>
                <p className="text-red-300 text-sm sm:text-base md:text-lg text-shadow-lg">
                    You may watch up to 5 ads per day. Come back after 24 hours to watch
                    again.
                </p>
            </div>

            {/* Docker Service Plans */}
            <section
                id="dockerservices"
                className="w-full flex flex-col items-center space-y-4 mt-8 sm:mt-12"
            >
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                    Docker Service Plans
                </h1>
                <p className="text-sm sm:text-base text-gray-500 text-center px-4">
                    Select a container environment and scale specs to match your workload.
                </p>

                <div className="w-full h-full gap-4 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            img: "/images/node_docker.webp",
                            cost: 75,
                            type: "Node.js Container",
                            features: [
                                "2 vCPU • 2GB RAM",
                                "20GB SSD storage",
                                "Preinstalled Node.js runtime",
                            ],
                        },
                        {
                            img: "/images/django_docker.webp",
                            cost: 120,
                            type: "Python/Django Container",
                            features: [
                                "4 vCPU • 4GB RAM",
                                "50GB SSD storage",
                                "Python & Django preinstalled",
                            ],
                        },
                        {
                            img: "/images/java_docker.png",
                            cost: 200,
                            type: "Java Spring Container",
                            features: [
                                "8 vCPU • 8GB RAM",
                                "100GB SSD storage",
                                "Optimized for JVM workloads",
                            ],
                        },
                        {
                            img: "/images/database_docker.webp",
                            cost: 300,
                            type: "Database Container (Postgres/MySQL)",
                            features: [
                                "16 vCPU • 16GB RAM",
                                "500GB SSD storage",
                                "Optimized for high I/O database ops",
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
            </section>
            <Footer/>
        </div>
    );
};

export default Page;
