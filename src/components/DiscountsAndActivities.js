import React from 'react';
import bike from '../assets/images/bikeicon.png';
import boat from '../assets/images/boaticon.png'; 
import rod from '../assets/images/fishingrod.png';
import grill from '../assets/images/Grill.png';
import honey from '../assets/images/backgroundhoney.png'; 


const ActivityItem = ({ icon, title, description }) => (
    <div className="flex gap-4 md:gap-6 lg:w-1/2 p-2">
        <div className="flex-shrink-0 w-16 h-16 text-amber-800">
            <img src={icon} alt={`${title} icon`} className="w-full h-full object-contain" />
        </div>
        
        <div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
            <p className="text-base text-gray-600 leading-relaxed">{description}</p>
        </div>
    </div>
);


const DiscountsAndActivities = () => {

    return (
        <div className="font-sans">
            
            <div className="max-w-6xl mx-auto py-12 px-4 md:px-6">
                <div className="bg-gray-50/70 p-12 text-center rounded-lg opacity-95" 
                     style={{ 
                        backgroundImage: `url(${honey})`, 
                         backgroundSize: '1200px ',
                         backgroundRepeat: 'no-repeat',
                         backgroundPosition: 'center',
                         
                    }}>
                    
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-snug">
                        We Give a <span className="text-amber-700">15% Discount</span> for Honeymoon!
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 mb-8">
                        Book your getaway for 3+ days and contact our managers to get the discount.
                    </p>
                    <button className="text-sm font-bold uppercase text-amber-700 tracking-wider py-3 px-6 border border-amber-700 hover:bg-amber-50 transition duration-300">
                        Book Now
                    </button>
                </div>
            </div>
            
            <div className="max-w-6xl mx-auto py-12 px-4 md:px-6">
                <div className="flex flex-wrap"> 
                    
                    <ActivityItem 
                        icon={bike} 
                        title="Mountain Biking"
                        description="Embark on exhilarating mountain biking trails that wind through the rugged terrain surrounding our glamping site, offering breathtaking views of the Washington landscape."
                    />
                    
                    <ActivityItem 
                        icon={boat} 
                        title="Rafting"
                        description="Experience the thrill of white-water rafting adventures down the roaring rivers nearby, where guides lead you through exhilarating rapids for an unforgettable outdoor experience."
                    />

                    <ActivityItem 
                        icon={rod} 
                        title="Fly Fishing"
                        description="Cast your line into pristine rivers teeming with trout during guided fly fishing excursions, immersing yourself in the serene beauty of nature while honing your angling skills."
                    />

                    <ActivityItem 
                        icon={grill} 
                        title="Barbeque Night"
                        description="Gather under the starry sky for a cozy barbecue night, where the tantalizing aroma of sizzling grilled delights fills the air as guests come together around the crackling firepit."
                    />
                </div>
            </div>
        </div>
    );
};

export default DiscountsAndActivities;