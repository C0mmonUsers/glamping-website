import React from 'react';
import heroImage from '../assets/images/hero.jpg';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-end pr-72 text-right text-white px-4">
        <img src="/images/tree.png" alt="Ялинка" className="w-16 h-16"/>
        <p className="font-bebas text-2xl">39°N 120°W /  39°N 120°W</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeInDown whitespace-normal">
          HIDDEN HEAVEN GLAMPING
        </h1>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded animate-fadeIn">
          Book Now
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded animate-fadeIn mt-4">
          Call us
        </button>
      </div>
    
    </section>
    
  );
}
