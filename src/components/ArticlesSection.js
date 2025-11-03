import React, { useState } from "react";
// Шляхи до ваших зображень
import buttonLeft from "../assets/images/buttonstartsleft.png";
import buttonRight from "../assets/images/buttonstartsright.png";
import tree from "../assets/images/tree.png";
import spafortwo from "../assets/images/spafortwo.jpg";
import carwithpeople from "../assets/images/carwithpeople.jpg";
import cozywinterreading from "../assets/images/cozywinterreading.jpg";
import domeImage from "../assets/images/dome.jpg";

const ArticlesSection = () => {
  // Дані статей
  const articles = [
    { title: "Cozy Winter in a Dome", img: domeImage, alt: "Dome in winter with wooden deck chair" },
    { title: "SPA for Two", img: spafortwo, alt: "Couple relaxing in an outdoor hot tub" },
    { title: "Adventures Await", img: carwithpeople, alt: "Car parked in nature with people" },
    { title: "Cozy Winter Reading", img: cozywinterreading, alt: "Book and coffee on a cozy winter day" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); 
  // Визначаємо, скільки карток видно: 2
  const ARTICLES_PER_VIEW = 2;
  // Ширина однієї картки (w-80 = 320px) плюс інтервал (space-x-6 = 24px)
  const CARD_WIDTH_PLUS_GAP = 320 + 24; 

  const prevSlide = () => {
    // Якщо поточний індекс 0, переходимо до кінця, щоб останні дві картки були видимі
    setCurrentIndex((prev) =>
      prev === 0 ? articles.length - ARTICLES_PER_VIEW : prev - 1
    );
  };

  const nextSlide = () => {
    // Якщо наступний рух призведе до виходу за межі останньої видимої картки, повертаємося до 0
    setCurrentIndex((prev) =>
      prev >= articles.length - ARTICLES_PER_VIEW ? 0 : prev + 1
    );
  };

  return (
    <section className="bg-[#fdfbf7] py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 relative">
        <div className="lg:w-1/3 max-w-md relative">
          <p className="text-8xl font-extrabold text-gray-200 opacity-30 -mb-8 relative -z-0 hidden md:block">
            Articles
          </p>
          <div className="relative z-10">
            <div className="mb-4">
               <img src={tree} alt="Pine Tree Icon" className="w-6 h-6 inline-block" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Latest News & <br />Articles For You
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Read more about camping, glamping, and exploring Washington.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Stay informed and engaged with the latest updates and inspiring
              articles.
            </p>
            <a 
              href="#"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-lg"
            >
              MORE ARTICLES
            </a>
          </div>
        </div>
        <div className="lg:w-2/3 relative flex items-center w-full max-w-2xl">
          <div className="overflow-hidden w-full">
            <div 
              className="flex transition-transform duration-500 ease-in-out space-x-6"
              style={{ 
                transform: `translateX(-${currentIndex * CARD_WIDTH_PLUS_GAP}px)`
              }}
            >
              {articles.map((article, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-80 h-[400px] rounded-xl overflow-hidden shadow-lg relative transition duration-300 hover:shadow-xl cursor-pointer"
                >
                  <img
                    src={article.img}
                    alt={article.alt}
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute inset-x-0 bottom-0 bg-[#6d7325]/90 p-4 text-white text-center">
                    <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                    <p className="flex items-center justify-center text-sm font-medium hover:text-amber-300 transition duration-300">
                      READ MORE <span className="ml-1 text-lg">→</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute -left-12 lg:-left-6 top-1/2 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition z-20"
          >
            <img src={buttonLeft} alt="Previous" className="w-6 h-6 object-contain" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-12 lg:-right-6 top-1/2 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition z-20"
          >
            <img src={buttonRight} alt="Next" className="w-6 h-6 object-contain" />
          </button>
        </div>
      </div>

      <hr className="mt-16 border-gray-300" />
    </section>
  );
};

export default ArticlesSection;