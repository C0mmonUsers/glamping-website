import React from 'react';
import domeImage from '../assets/images/dome.jpg'; 
import cabinImage from '../assets/images/cabin.jpg';
import treeIcon from '../assets/images/tree.png'; 
import backgroundroks from '../assets/images/backgroundroks.png'; 

import paw from '../assets/images/paw.png'; 
import wifi from '../assets/images/wifi.png'; 
import fire from '../assets/images/fire.png'; 
import toilet from '../assets/images/toilet.png'; 
import air from '../assets/images/air.png'; 
import car from '../assets/images/car.png'; 


const PRIMARY_COLOR = 'text-amber-700';
const ACCENT_COLOR = 'text-gray-500';

const ACCOMMODATIONS_DATA = [
    {
        image: domeImage, 
        title: "Geodesic Dome", 
        details: "1-6 PERSONS | 25M2", 
        description: "With spacious interiors and panoramic views of the wilderness, our geodesic domes provide the perfect setting for a memorable retreat.",
        amenities: [
            { icon: paw, label: "Pets allowed" },
            { icon: wifi, label: "Wi-Fi" },
            { icon: fire, label: "Bonfire" },
        ],
    },

    {
        image: cabinImage, 
        title: "Small Wood Cabin", 
        details: "1-6 PERSONS | 25M2", 
        description: "These quaint cabins exude warmth and character, with their handcrafted wooden exteriors and inviting interiors.",
        amenities: [
            { icon: toilet, label: "Shower and toilet" },
            { icon: air, label: "Air conditioning" },
            { icon: car, label: "Parking" },
        ],
    },
];

const AccommodationCard = ({ image, title, details, description, amenities }) => (
    <div className="w-full lg:w-1/2 p-4 flex"> 
        <div className="bg-white flex flex-col h-full shadow-md rounded-lg overflow-hidden"> 
            
            <div className="overflow-hidden h-64"> 
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
            
            <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                    <div className="text-xs uppercase text-gray-500 font-semibold mb-1 tracking-wider">{details}</div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-4 cursor-pointer hover:text-amber-700 transition duration-200">
                        {title} →
                    </h3>

                    <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4 text-sm text-gray-700">
                        {amenities.map((item, index) => (
                            <span key={index} className="flex items-center">
                                <img src={item.icon} alt={item.label} className="w-4 h-4 mr-1 object-contain" />
                                {item.label}
                            </span>
                        ))}
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed min-h-[4rem]">{description}</p>
                </div>
                
                <button className="bg-amber-700 text-white text-sm font-bold tracking-wider py-3 px-6 uppercase hover:bg-amber-800 transition duration-300 shadow-md self-start">
                    BOOK NOW
                </button>
            </div>
        </div>
    </div>
);

const HabitationsHeader = () => (
    <div className="max-w-6xl mx-auto py-12 px-4 md:px-6 flex flex-wrap">
        <div className="w-full lg:w-1/2 pr-4 mb-8 lg:mb-0">
            <p className={`text-6xl md:text-8xl font-extrabold opacity-10 mb-6 ${PRIMARY_COLOR}`}>
                Habitations
            </p>
            <div className={`mb-2`}>
                <img src={treeIcon} alt="Tree icon" className="w-8 h-8 object-contain" />
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Explore Our Canvas<br />Tents and Cozy Cabins
            </h2>
        </div>

        <div className="w-full lg:w-1/2 pl-4">
            <p className={`text-lg mb-4 ${ACCENT_COLOR}`}>
                We offer a diverse range of accommodations to suit every traveler's preference.
            </p>
            <p className={`text-base mb-6 text-gray-600 leading-relaxed`}>
                Immerse yourself in the tranquility of nature with our geodesic domes, providing a unique and futuristic lodging experience under the open sky. For those seeking rustic charm, our wood cabins offer cozy comfort amidst the lush forest surroundings, complete with modern amenities for a relaxing stay.
            </p>
            <button className={`text-sm font-bold uppercase ${PRIMARY_COLOR} tracking-wider hover:text-amber-800 transition duration-300`}>
                SEE ALL →
            </button>
        </div>
    </div>
);

const Habitations = () => {
    return (
        <div className="font-sans relative"
             style={{
                 backgroundImage: `url(${backgroundroks})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat',
             }}>
            
            <div className="absolute inset-0 bg-white/50 z-0"></div> 

            <div className="relative z-10">
                <HabitationsHeader /> 

                <div className="max-w-6xl mx-auto pb-12 px-4 md:px-6 flex flex-wrap  items-stretch">
                    {ACCOMMODATIONS_DATA.map((acc, index) => (
                        <AccommodationCard 
                            key={index}
                            {...acc}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Habitations;