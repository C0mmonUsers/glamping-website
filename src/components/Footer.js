import React from 'react';
import twitterIcon from '../assets/images/twittericon.png';
import instIcon from '../assets/images/insticon.png';
import facebookIcon from '../assets/images/facebookicon.png';

const socialLinks = [
  { name: 'TWITTER', handle: 'hidden.h', url: 'https://twitter.com/hidden.h', icon: twitterIcon, alt: 'Twitter icon' },
  { name: 'INSTAGRAM', handle: 'hidden.heaven', url: 'https://instagram.com/hidden.heaven', icon: instIcon, alt: 'Instagram icon' },
  { name: 'FACEBOOK', handle: 'hh.camp', url: 'https://facebook.com/hh.camp', icon: facebookIcon, alt: 'Facebook icon' },
];

const Footer = () => {
  return (
    <footer className="bg-footer text-gray-400 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between lg:space-x-12">
          <div className="lg:w-2/3 mb-12 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-6 max-w-lg">
              Book Your Glamping Experience <br />and Embrace Nature&apos;s Tranquility
            </h2>

            <div className="w-16 h-1 bg-yellow-600 mb-6"></div>

            <p className="text-base text-gray-300 mb-4 max-w-xl leading-relaxed">
              We look forward to hearing from you and creating lasting memories of your&nbsp;
              vacation at the Hidden Heaven glamping. Write us on&nbsp;
              <a 
                href="mailto:hidden.heaven@email.com" 
                className="text-yellow-600 hover:text-yellow-500 font-semibold transition duration-300"
              >
                hidden.heaven@email.com
              </a>&nbsp;
              or call us&nbsp;
              <a href="tel:+12345678900" 
                className="text-yellow-600 hover:text-yellow-500 font-semibold transition duration-300"
              >
                +1 (234) 567 89 00.
              </a>
            </p>

            <p className="text-xs text-gray-500 mt-8">
              * Please make reservations in advance as the number of accommodations is limited.
            </p>
          </div>

          <div className="lg:w-1/2 flex flex-col space-y-8 mt-8 lg:mt-0 lg:ml-16">
            {socialLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <div className="w-12 h-12 p-3 border border-gray-500 rounded-full flex items-center justify-center mr-4 group-hover:border-yellow-600 transition duration-300">
                  <img src={link.icon} alt={link.alt} className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-400 group-hover:text-yellow-600 transition duration-300">{link.name}</div>
                  <div className="text-xl font-bold text-white">{link.handle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <hr className="border-gray-600 mt-16" />
      </div>
    </footer>
  );
};

export default Footer;
