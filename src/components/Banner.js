import React from 'react';
import bannerImage from '../assets/images/banner2.jpg';

const Banner = () => {
  return (
   <section
  className="relative bg-cover bg-center h-[600px] flex items-center p-8 md:p-16 lg:p-24"
  style={{
    backgroundImage: `url(${bannerImage})`,
  }}
>
    </section>
  );
};

export default Banner;