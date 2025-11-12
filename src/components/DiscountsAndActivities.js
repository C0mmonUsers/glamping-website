import React from 'react';
import bike from '../assets/images/bikeicon.png';
import boat from '../assets/images/boaticon.png';
import rod from '../assets/images/fishingrod.png';
import grill from '../assets/images/Grill.png';
import honey from '../assets/images/backgroundhoney.png';

const activities = [
  { icon: bike, title: "Mountain Biking", description: "Explore breathtaking trails with our guided mountain biking tours." },
  { icon: boat, title: "Boating", description: "Enjoy peaceful rides across the lake with our safe and modern boats." },
  { icon: rod, title: "Fishing", description: "Relax by the water and catch local fish species in the calm surroundings." },
  { icon: grill, title: "Outdoor BBQ", description: "Grill your favorite meals while enjoying nature and fresh air." }
];

const ActivityItem = ({ icon, title, description }) => (
  <div className="flex gap-4 md:gap-6 lg:w-1/2 p-2">
    <div className="flex-shrink-0 w-16 h-16 text-amber-800">
      <img src={icon} alt={title} className="w-full h-full object-contain" />
    </div>
    <div>
      <h3 className="text-lg font-bold text-olive">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const DiscountsAndActivities = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${honey})` }}>
      <div className="max-w-6xl mx-auto py-12 px-4 md:px-6">
        <div className="flex flex-wrap">
          {activities.map((item, index) => (
            <ActivityItem key={index} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscountsAndActivities;
