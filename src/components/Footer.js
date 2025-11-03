// src/components/Footer.js
import React from 'react';

// Припускаємо, що ці шляхи до іконок коректні
import twitterIcon from '../assets/images/twittericon.png';
import instIcon from '../assets/images/insticon.png';
import facebookIcon from '../assets/images/facebookicon.png';

const Footer = () => {
  
  const socialLinks = [
    { 
      name: 'TWITTER', 
      handle: 'hidden.h', 
      url: 'https://twitter.com/hidden.h', 
      icon: twitterIcon,
      alt: 'Twitter icon'
    },
    { 
      name: 'INSTAGRAM', 
      handle: 'hidden.heaven', 
      url: 'https://instagram.com/hidden.heaven', 
      icon: instIcon,
      alt: 'Instagram icon'
    },
    { 
      name: 'FACEBOOK', 
      handle: 'hh.camp', 
      url: 'https://facebook.com/hh.camp', 
      icon: facebookIcon,
      alt: 'Facebook icon'
    },
  ];

  return (
    // Головний контейнер з темним фоном
    <footer className="bg-[#2c2b2a] text-gray-400 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Основний вміст: Заголовок, Контактна інформація та Соцмережі --- */}
        <div className="flex flex-col lg:flex-row justify-between lg:space-x-12">
          
          {/* Блок контакту (ліва частина) */}
          <div className="lg:w-2/3 mb-12 lg:mb-0">
            
            {/* Заголовок - ЗМЕНШЕНИЙ РОЗМІР */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-6 max-w-lg">
              Book Your Glamping Experience <br />and Embrace Nature's Tranquility
            </h2>
            
            {/* Лінія під заголовком */}
            <div className="w-16 h-1 bg-yellow-600 mb-6"></div> 
            
            {/* Текст та контакти - ОФОРМЛЕННЯ КРАСИВЕ та НЕ ЇСТЬ ОЧІ */}
            <p className="text-base text-gray-300 mb-4 max-w-xl leading-relaxed">
              We look forward to hearing from you and creating lasting memories of your
              vacation at the Hidden Heaven glamping. Write us on{' '}
              <a 
                href="mailto:hidden.heaven@email.com" 
                className="text-yellow-600 hover:text-yellow-500 font-semibold transition duration-300"
              >
                hidden.heaven@email.com
              </a> 
              <br />
              or call us <a href="tel:+12345678900" 
                className="text-yellow-600 hover:text-yellow-500 font-semibold transition duration-300"
              >
                +1 (234) 567 89 00.
              </a>
            </p>
            
            {/* Примітка */}
            <p className="text-xs text-gray-500 mt-8">
              * Please make reservations in advance as the number of accommodations is limited.
            </p>
          </div>
          
          {/* Блок соціальних мереж (права частина) */}
          {/* ВИПРАВЛЕНО: Збільшено ширину до 1/2 і додано лівий відступ (ml-16) для центрування */}
          <div className="lg:w-1/2 flex flex-col space-y-8 mt-8 lg:mt-0 **lg:ml-16**">
            {socialLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center group" 
              >
                {/* Іконка - ЗБІЛЬШЕНИЙ РОЗМІР */}
                <div className="w-12 h-12 p-3 border border-gray-500 rounded-full flex items-center justify-center mr-4 group-hover:border-yellow-600 transition duration-300">
                  <img src={link.icon} alt={link.alt} className="w-full h-full object-contain" />
                </div>
                
                {/* Текст */}
                <div>
                  <div className="text-sm font-semibold text-gray-400 group-hover:text-yellow-600 transition duration-300">{link.name}</div>
                  <div className="text-xl font-bold text-white">{link.handle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
        
        {/* --- Розділювальна лінія --- */}
        <hr className="border-gray-600 mt-16" />
        
      </div>
    </footer>
  );
};

export default Footer;