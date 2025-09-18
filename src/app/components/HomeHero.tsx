import React from 'react';

const HomeHero = () => {
    return (
        <div className={`w-full min-h-[500px] mt-24 md:mt-20 flex flex-col md:flex-row px-4 md:px-0`}>
            <div className={`w-full md:w-1/2 pt-4 md:pt-24 md:pl-6 space-y-4 md:space-y-8 flex flex-col justify-start`}>
                <h1 className={`text-2xl md:text-4xl font-bold`}>
                    Fully Managed Cloud and Docker Services <span className={`text-violet-600`}>All For Free</span>
                </h1>
                <p className={`text-base md:text-xl text-violet-300 font-semibold`}>
                    Dedicated resources, full root access and easy scaling at no cost. It's the Virtual Private Servers you have been craving.
                    Its finally here, sit at home as we deliver software functionalities to you 😉.
                </p>
            </div>
            <img 
                className={`w-full md:w-1/2 h-auto mt-8 md:mt-0 md:h-full object-contain`} 
                src="/images/homeImage.png" 
                alt="home image" 
            />
        </div>
    );
};

export default HomeHero;
