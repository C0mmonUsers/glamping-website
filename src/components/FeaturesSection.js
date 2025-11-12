import React from "react";
import coupleImage from "../assets/images/couple.jpg";
import tentIcon from "../assets/images/tenticon.png";
import foodIcon from "../assets/images/foodicon.png";
import pointerIcon from "../assets/images/pointericon.png";
import treeIcon from "../assets/images/tree.png";

export default function CampingExperienceBlock() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-10 max-w-6xl mx-auto py-16 px-6">
      <div className="w-full lg:w-1/2">
        <img
          src={coupleImage}
          alt="Couple enjoying camping experience"
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />
      </div>

      <div className="w-full lg:w-1/2">
        <img src={treeIcon} alt="Pine Tree" className="w-12 h-12 mb-2" />
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          Discover an Immersive Camping Experience
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Hidden Heaven is your perfect getaway in Washington.
        </p>

        <div className="flex flex-wrap gap-6 mb-8">
          <div className="flex items-center gap-2 text-amber-900 font-semibold">
            <img src={tentIcon} alt="Tent" className="w-6 h-6" />
            Luxury accommodation
          </div>
          <div className="flex items-center gap-2 text-amber-900 font-semibold">
            <img src={foodIcon} alt="Food" className="w-6 h-6" />
            Delicious food
          </div>
          <div className="flex items-center gap-2 text-amber-900 font-semibold">
            <img src={pointerIcon} alt="Pointer" className="w-5 h-6" />
            Easy to reach
          </div>
        </div>

        <p className="text-base text-gray-700 mb-4 leading-relaxed">
          Hidden Heaven promises a stay that exceeds expectations. We mix beautiful and comfortable accommodation with nice restaurants and untouched nature to let you experience the best vacation in the wild.
        </p>

        <p className="text-base text-gray-700 mb-8 leading-relaxed">
          Whether you're embarking on a romantic retreat, a family adventure, or a solo escape — Hidden Heaven offers an idyllic getaway where memories are made to last.
        </p>

        <button className="bg-amber-800 hover:bg-amber-900 text-white font-bold py-3 px-6 uppercase tracking-wider transition duration-300 rounded-md">
          More About Us
        </button>
      </div>
    </section>
  );
}
