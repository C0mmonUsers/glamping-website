import React from "react";
import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";
import gallery5 from "../assets/images/gallery5.jpg";
import gallery6 from "../assets/images/gallery6.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {images.map((img) => (
            <div
              key={img}
              className="flex-shrink-0 w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 overflow-hidden transform transition duration-300"
            >
              <img
                src={img}
                alt="Gallery"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
