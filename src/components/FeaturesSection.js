import React from 'react';
import coupleImage from '../assets/images/couple.jpg';
import tentIcon from '../assets/images/tenticon.png';
import foodicon from '../assets/images/foodicon.png';
import pointericon from '../assets/images/pointericon.png';

const CampingExperienceBlock = () => {
  const altText = "Пара відпочиває в глемпінгу";

  return (
    <div className="flex flex-col lg:flex-row max-w-6xl mx-auto py-10 px-4 md:px-6 lg:py-20 gap-10 items-center font-sans">

      <div className="w-full lg:w-1/2 relative">
        <img 
          src={coupleImage} 
          alt={altText} 
          className="w-full h-full object-cover  shadow-xl"
        />
      </div>

      <div className="w-full lg:w-1/2">
        <p className="text-sm font-semibold uppercase text-stone-700 tracking-wider flex items-center mb-1">
         <img src="/images/tree.png" alt="Ялинка" className="w-12 h-12"/>
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mt-2 mb-6">
          Discover an Immersive Camping Experience
        </h2>
        
        <p className="text-lg font-medium text-gray-600 mb-6">
          Hidden Heaven is your perfect getaway in Washington.
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8 text-sm">
          <img src={tentIcon} alt="Tent" className="w-5 h-5 "/>
          <span className="flex items-center text-amber-900 font-semibold">
             Luxury accommodation
          </span>

          <span className="flex items-center text-amber-900 font-semibold">
           <img src={foodicon} alt="Food" className="w-5 h-5 "/>
            Delicious food
          </span>

          <span className="flex items-center text-amber-900 font-semibold">
            <img src={pointericon} alt="Pointer" className="w-4 h-6"/>
             Easy to reach
          </span>
        </div>

        <p className="text-base text-gray-700 leading-relaxed mb-4">
          Hidden Heaven promises a stay that exceeds expectations. We mix beautiful and comfortable accommodation with nice restaurants and untouched nature to let you experience the best vacation in the wild.
        </p>

        <p className="text-base text-gray-700 leading-relaxed mb-8">
          Whether you're embarking on a romantic retreat, a family adventure, or a solo sojourn, Hidden Heaven offers an idyllic escape where cherished memories are made and cherished.
        </p>

        <button 
          className="bg-amber-800 hover:bg-amber-900 text-white font-bold py-3 px-6 uppercase tracking-wider transition duration-300"
        >
          MORE ABOUT US
        </button>
      </div>
    </div>
  );
};

export default CampingExperienceBlock;