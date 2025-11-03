import React from 'react';
import service1 from '../assets/images/service1.jpg';
import service2 from '../assets/images/service2.jpg';
import service3 from '../assets/images/service3.jpg';
import TENT from '../assets/images/TENT.jpg';
import vodopad from '../assets/images/vodopad.jpg';

export default function Services() {
  const services = [
    { img: service1, title: "Luxury Design", desc: "Each of our rooms is beautifully designed, combining eco materials and fine fabric." },
    { img: service3, title: "Adventure Packages", desc: "There's so much to do near our spot, from rafting to horse racing!" },
    { img: service2, title: "Breakfast Included", desc: "We serve breakfast each morning with fresh local products." },
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-2 md:px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img src={s.img} alt={s.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-700">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
<div className="mt-20 flex flex-col md:flex-row items-stretch gap-6 px-4 md:px-12">
  <div className="md:w-1/2 w-full h-96 overflow-hidden">
    <img
      src={TENT}
      alt="Camping setup"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="md:w-2/3 w-full bg-green-50  flex items-center">
    <div className="w-full pl-6 md:pl-12 pr-6 py-8 text-left">
      <h2 className="text-3xl font-bold text-green-900 mb-4">
        Experience Nature in Style - Reserve Your Spot!
      </h2>
      <p className="text-gray-800 mb-6">
        Whether you're seeking a romantic getaway, a family adventure, or a solo escape, Hidden Heaven promises an unforgettable stay for every visitor. From cozy tents to charming cabins, our accommodations are thoughtfully designed to provide a tranquil haven amidst the breathtaking wilderness.
      </p>
      <button className="bg-green-600 text-white px-6 py-3 text-lg hover:bg-green-700 transition duration-300">
        BOOK NOW
      </button>
    </div>
  </div>
</div>
<div className="relative mt-20 mx-6 md:mx-12">
  <img
    src={vodopad}
    alt="Водопад"
    className="w-full h-auto rounded-xl"
  />
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
    <span className="text-5xl md:text-7xl font-bold mb-2">Explore.</span>
    <span className="text-5xl md:text-7xl font-bold mb-2">Camp.Thrive</span>
</div>

</div>
    </section>
  );
}
