import React from 'react';
import aboutImage from '../assets/images/about.jpg';
import TreeIconImage from '../assets/images/tree.png'; 

const Prices = () => {
  const priceList = [
    { name: 'Glamping Tent', lowSeason: '150', highSeason: '170' },
    { name: 'Small Wood Cabin', lowSeason: '190', highSeason: '220' },
    { name: 'Big Wood Cabin', lowSeason: '250', highSeason: '290' },
    { name: 'Geodesic Dome', lowSeason: '180', highSeason: '200' },
    { name: 'Big Glamping Tent', lowSeason: '240', highSeason: '270' },
    { name: 'Balloon Tent', lowSeason: '150', highSeason: '170' },
    { name: 'All Kinds of Pets', lowSeason: 'FREE', highSeason: 'FREE', isFree: true },
    { name: 'Kids and Infants', lowSeason: '50', highSeason: '60' },
  ];

  return (
    <section className="container mx-auto mt-12 p-4 md:p-8 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 bg-white max-w-7xl">
      <div className="lg:w-1/2 flex justify-center">
        <img
          src={aboutImage} 
          alt="Glamping Tent"
          className="rounded-lg shadow-xl object-cover w-full h-full max-h-[550px] lg:max-h-full"
        />
      </div>

      <div className="lg:w-1/2 p-4 md:p-0 relative">
        <p className="absolute -top-16 left-0 text-gray-100 font-extrabold text-9xl tracking-tighter opacity-70 select-none hidden md:block">
          Pricing
        </p>
        
        <div className="mb-8 relative z-10">
          <img src={TreeIconImage} alt="Tree Icon" className="w-8 h-8 mb-2" /> 
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Price List</h2>
          <p className="text-gray-600 text-lg">Explore the basic prices for our accommodation.</p>
        </div>

        <div className="space-y-4 relative z-10">
          {priceList.map((item, index) => (
            <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100">
              <p className={`font-semibold text-gray-800 ${item.isFree ? 'text-lg' : ''} pr-4`}>
                {item.name}
              </p>
              <div className="flex text-sm md:text-base whitespace-nowrap">
                {item.isFree ? (
                  <span className="text-amber-700 font-bold tracking-wider">
                    LOW SEASON & HIGH SEASON - FREE
                  </span>
                ) : (
                  <span className="text-gray-600">
                    <span className="uppercase text-sm mr-1">LOW SEASON</span> 
                    - <span className="text-amber-700 font-semibold">${item.lowSeason}</span> 
                    {' | '}
                    <span className="uppercase text-sm mr-1 ml-1">HIGH SEASON</span> 
                    - <span className="text-amber-700 font-semibold">${item.highSeason}</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prices;
