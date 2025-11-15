import React from "react";
import bike from "../assets/images/bikeicon.png";
import raft from "../assets/images/boaticon.png";
import rod from "../assets/images/fishingrod.png";
import grill from "../assets/images/Grill.png";
import honey from "../assets/images/backgroundhoney.png";

const activities = [
  {
    icon: bike,
    title: "Mountain Biking",
    description:
      "Embark on exhilarating mountain biking trails that wind through the rugged terrain surrounding our glamping site, offering breathtaking views of the Washington landscape.",
  },
  {
    icon: raft,
    title: "Rafting",
    description:
      "Experience the thrill of white-water rafting adventures down the roaring rivers nearby, where guides lead you through exhilarating rapids for an unforgettable outdoor experience.",
  },
  {
    icon: rod,
    title: "Fly Fishing",
    description:
      "Cast your line into pristine rivers teeming with trout during guided fly fishing excursions, immersing yourself in the serene beauty of nature while honing your angling skills.",
  },
  {
    icon: grill,
    title: "Barbeque Night",
    description:
      "Gather under the starry sky for a cozy barbecue night, where the tantalizing aroma of sizzling grilled delights fills the air as guests come together around the crackling firepit.",
  },
];

const ActivityItem = ({ icon, title, description }) => (
  <div className="flex gap-4 md:gap-6 lg:w-1/2 p-2">
    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12">
      <img src={icon} alt={title} className="w-full h-full object-contain" />
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base">{description}</p>
    </div>
  </div>
);

const DiscountsAndActivities = () => {
  return (
    <section className="bg-white">
      <div
        className="relative text-center py-16 px-6 rounded-2xl shadow-sm"
        style={{
          backgroundImage: `url(${honey})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          We Give a{" "}
          <span className="text-amber-600">15% Discount for Honeymoon!</span>
        </h2>
        <p className="text-gray-600 mb-6">
          Book your getaway for 3+ days and contact our managers to get the
          discount.
        </p>
        <button className="border-2 border-amber-600 text-amber-700 font-semibold py-2 px-6 rounded-lg hover:bg-amber-600 hover:text-white transition">
          BOOK NOW
        </button>
      </div>
      <div className="max-w-6xl mx-auto py-16 px-6 flex flex-wrap justify-between">
        {activities.map((item, index) => (
          <ActivityItem
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default DiscountsAndActivities;
