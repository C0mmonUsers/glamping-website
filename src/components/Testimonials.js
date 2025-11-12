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
    <section id="services" className="py-20 bg-cream font-kanit">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white shadow-xl rounded-2xl overflow-hidden transform hover:scale-105 transition duration-500"
            >
              <img src={s.img} alt={s.title} className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-olive mb-3">{s.title}</h3>
                <p className="text-gray-700 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 flex flex-col md:flex-row items-stretch gap-8 px-6 md:px-16">
        <div className="md:w-1/2 w-full h-96 overflow-hidden rounded-2xl shadow-lg">
          <img
            src={TENT}
            alt="Camping setup"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:w-2/3 w-full bg-green-50 flex items-center rounded-2xl shadow-lg">
          <div className="w-full px-8 py-10 text-left">
            <h2 className="text-4xl font-bold text-olive mb-5">
              Experience Nature in Style — Reserve Your Spot!
            </h2>
            <p className="text-gray-800 mb-8 leading-relaxed">
              Whether you're seeking a romantic getaway, a family adventure, or a solo escape, Hidden Heaven promises an unforgettable stay for every visitor. From cozy tents to charming cabins, our accommodations are thoughtfully designed to provide a tranquil haven amidst the breathtaking wilderness.
            </p>
            <button className="bg-olive text-white px-8 py-3 text-lg rounded-full hover:bg-[#55601d] transition duration-300">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>

      <div className="relative mt-24 mx-6 md:mx-16">
        <img
          src={vodopad}
          alt="Водопад"
          className="w-full h-auto rounded-2xl shadow-xl"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/20 rounded-2xl">
          <span className="text-6xl md:text-8xl font-bebas tracking-wider mb-2">Explore.</span>
          <span className="text-6xl md:text-8xl font-bebas tracking-wider">Camp. Thrive.</span>
        </div>
      </div>
    </section>
  );
}
