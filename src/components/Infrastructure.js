import React from 'react';

import emailIcon from '../assets/images/emailicon.png';
import treeIcon from '../assets/images/tree.png'; 
import wifiIcon from '../assets/images/wifiIcon.png';
import elecCablesIcon from '../assets/images/eleccabelsicon.png';
import parkingIcon from '../assets/images/parkingIcon.png';
import showerIcon from '../assets/images/showerIcon.png';
import washingMachineIcon from '../assets/images/washingmachineicon.png';
import aidMedIcon from '../assets/images/aidmedicon.png';

const TREE_COLOR_CLASS = 'text-olive';
const ACCENT_COLOR_CLASS = 'text-olive';
const ACCENT_BORDER_CLASS = 'border-olive';
const EMAIL_COLOR_CLASS = 'text-olive';

const features = [
  {
    iconSrc: wifiIcon, 
    title: "Fast Internet",
    description: "Stay connected with high-speed internet access available throughout the glamping site.",
    tag: "FREE"
  },
  {
    iconSrc: elecCablesIcon, 
    title: "Electrical Cabinets",
    description: "Electrical cabinets are located across the site, ensuring access to power for charging devices."
  },
  {
    iconSrc: parkingIcon, 
    title: "Parking",
    description: "Ample parking spaces are provided for guests, allowing for hassle-free arrival and departure."
  },
  {
    iconSrc: showerIcon, 
    title: "Sanitary Facilities",
    description: "Clean and well-maintained sanitary facilities are available, including modern bathrooms and showers."
  },
  {
    iconSrc: washingMachineIcon, 
    title: "Washing Machines",
    description: "Guests have access to washing machines on-site, making it easy to keep clothes fresh and clean."
  },
  {
    iconSrc: aidMedIcon, 
    title: "First Aid / Ambulance",
    description: "Our glamping site is equipped with first aid kits and access to medical assistance in case of emergencies."
  },
];

export default function InfrastructureSection() {
  return (
    <section id="infrastructure-section" className="font-sans py-16 md:py-24 relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <p className="absolute -top-16 left-0 text-gray-100 font-extrabold text-9xl tracking-tighter opacity-70 select-none hidden md:block">
          Infrastructure
        </p>

        <div className="flex flex-col mb-12 md:mb-16 relative">
          <div className="flex flex-col md:flex-row justify-between relative">
            <div className="flex flex-col md:flex-row md:items-start md:w-2/3">
              <div className="flex flex-col items-start">
                <div className="flex items-center">
                  <img 
                    src={treeIcon} 
                    alt="Tree icon" 
                    className="w-16 h-10 object-contain" 
                  />
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mt-[-12px]"> 
                  Camp Infrastructure
                </h1>
              </div>
            </div>

            <div className="mt-8 md:mt-0 md:w-1/3 lg:w-1/4 flex items-start">
              <div className={`flex-shrink-0 w-12 h-12 ${ACCENT_COLOR_CLASS} mr-4`}>
                <img src={emailIcon} alt="Email" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-1">
                  STILL HAVE QUESTIONS?
                </p>
                <p className="text-lg font-bold text-gray-900 whitespace-nowrap">
                  Write us on <a href="mailto:hidden.heaven@email.com" className={`hover:text-olive transition ${EMAIL_COLOR_CLASS}`}>
                    hidden.heaven@email.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12 mt-10">
          {features.map((item) => (
            <div key={item.title} className="flex items-start">
              <div className={`flex-shrink-0 w-10 h-10 ${ACCENT_COLOR_CLASS} mr-5`}>
                <img src={item.iconSrc} alt={item.title} className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  {item.title}
                  {item.tag && (
                    <span className={`ml-3 text-xs font-bold uppercase py-1 px-2 rounded border ${ACCENT_BORDER_CLASS} bg-white`}>
                      {item.tag}
                    </span>
                  )}
                </h3>
                <p className="text-gray-600 text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
