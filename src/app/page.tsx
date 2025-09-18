"use client"

import NavBar from "@/app/components/NavBar";
import HomeHero from "@/app/components/HomeHero";

export default function Home() {
  return (
    <div className={`w-full min-h-screen bg-white px-4 sm:px-8 md:px-16 lg:px-28 pt-4 pb-12`}>
        <NavBar/>
        <HomeHero/>
    </div>
  );
}
