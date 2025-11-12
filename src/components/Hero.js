import React from 'react';
import heroImage from '../assets/images/hero.jpg';
import treeIcon from '../assets/images/tree.png';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-end pr-72 text-right text-white px-4">
        <img 
          src={treeIcon} 
          alt="Ялинка" 
          className="w-16 h-16 opacity-0 animate-fadeInDown" 
          style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
        />
        <p 
          className="font-bebas text-2xl opacity-0 animate-fadeInDown" 
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          39°N 120°W / 39°N 120°W
        </p>
        <h1 
          className="text-5xl md:text-6xl font-bold mb-4 opacity-0 animate-fadeInDown" 
          style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
        >
          HIDDEN HEAVEN GLAMPING
        </h1>
        <button 
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded opacity-0 animate-fadeIn" 
          style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
        >
          Book Now
        </button>
        <button 
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded opacity-0 animate-fadeIn mt-4" 
          style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}
        >
          Call us
        </button>
      </div>
    </section>
  );
}
