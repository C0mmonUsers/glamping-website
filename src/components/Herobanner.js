import React from 'react';
import bannerImage from '../assets/images/banner.jpg';
const HeroBanner = () => {
  return (
   <section
  className="relative bg-cover bg-center h-[600px] flex items-center p-8 md:p-16 lg:p-24"
  style={{
    backgroundImage: `url(${bannerImage})`,
  }}
>

      <div className="absolute inset-0 bg-black opacity-40"></div> 
      
      <div className="relative z-10 text-white max-w-xl">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
          Ignite Your Passion: Campfire Dreams
        </h1>
        
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 shadow-md">
          LEARN MORE
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;