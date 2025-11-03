import React, { useState, useRef } from 'react';
import reviewBackground from '../assets/images/backgroundSpikes.png'; 
import buttonStartsLeft from '../assets/images/buttonstartsleft.png';
import buttonStartsRight from '../assets/images/buttonstartsright.png';


const ACCENT_COLOR_CLASS = 'text-[#8c8c4a]'; 
const BUTTON_COLOR_CLASS = 'bg-amber-800'; 

const SCROLL_CONTAINER_ID = 'reviews-scroll-container';

export default function ReviewSectionNewSimple() {
    
    const [activeIndex, setActiveIndex] = useState(0); 
    const scrollRef = useRef(null);

    const testimonials = [
        { text: "Hidden Heaven Glamping exceeded all our expectations. The tree house accommodation was like a fairytale!", name: "ERIC WARSTLER, CALIFORNIA", rating: 5 },
        { text: "We opted for a tent overlooking the tranquil lake, and it was the perfect setting for a peaceful retreat.", name: "JESSICA WILSON, TAMPA", rating: 5 },
        { text: "The geodesic dome we stayed in was a unique experience, offering unparalleled views of the star-studded sky at night.", name: "AMANDA LOWSON, NEW YORK", rating: 5 },
        { text: "Неймовірне місце! Чисто, красиво, дуже комфортно. Обов'язково повернемося наступного року!", name: "АННА П.", rating: 5 },
        { text: "Absolutely stunning location and incredible service. Highly recommend the dome experience!", name: "MARK R., FLORIDA", rating: 5 },
        { text: "Perfect getaway spot. The cabin was cozy, and the view was breathtaking. Five stars!", name: "SARAH L., TEXAS", rating: 5 },
    ];

    const totalSlides = testimonials.length;

    const scrollToSlide = (index) => {
        if (scrollRef.current) {
            const slideWidth = 384 + 32; 
            const scrollPosition = index * slideWidth; 
            
            scrollRef.current.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
            setActiveIndex(index);
        }
    };

    const goToPrev = () => {
        const newIndex = activeIndex > 0 ? activeIndex - 1 : 0;
        scrollToSlide(newIndex);
    };

    const goToNext = () => {
        const newIndex = activeIndex < totalSlides - 1 ? activeIndex + 1 : totalSlides - 1;
        scrollToSlide(newIndex);
    };

    return (
        <section id="review-section" className="font-sans relative">
            
            <div 
                className="py-16 relative z-10"
                style={{ 
                    backgroundImage: `url(${reviewBackground})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'repeat',
                }}
            >
                <div className="absolute inset-0 bg-white/70 z-0"></div> 

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    
                    <div className="flex items-center">
                        <button 
                            onClick={goToPrev}
                            disabled={activeIndex === 0} 
                            className={`hidden lg:block w-12 h-12 rounded-full bg-white shadow-lg p-2 transition duration-300 transform -translate-x-1/2 focus:outline-none 
                                ${activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 cursor-pointer'}`}
                            aria-label="Previous slide"
                        >
                            <img src={buttonStartsLeft} alt="Previous" className="w-full h-full object-contain" />
                        </button>
                        <div 
                            ref={scrollRef}
                            id={SCROLL_CONTAINER_ID}
                            className="flex overflow-x-scroll snap-x snap-mandatory space-x-8 pb-4 md:pb-6 w-full px-4 md:px-0" 
                            style={{ 
                                scrollbarWidth: 'none', 
                                msOverflowStyle: 'none', 
                            }}
                        >
                            
                            {testimonials.map((t, i) => (
                                <div 
                                    key={i} 
                                    className="flex-shrink-0 w-full md:w-96 p-6 md:p-8 snap-center bg-white rounded-lg shadow-xl" 
                                >
                                    <div className={`${ACCENT_COLOR_CLASS} text-xl mb-6 text-left`}>
                                        {'★'.repeat(t.rating)}
                                    </div>
                                    
                                    <p className="text-gray-700 mb-8 italic leading-relaxed min-h-[6rem] text-left">
                                        "{t.text}"
                                    </p>
                                    
                                    <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider text-left">
                                        {t.name}
                                    </h3>

                                    <div className="flex justify-start space-x-2 mt-6">
                                        {testimonials.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => scrollToSlide(index)}
                                                className={`w-3 h-3 rounded-full transition-colors duration-300 focus:outline-none ${
                                                    index === i ? `${BUTTON_COLOR_CLASS} w-3 h-3` : 'bg-gray-300'
                                                }`}
                                                aria-label={`Go to slide ${index + 1}`}
                                            ></button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button 
                            onClick={goToNext}
                            disabled={activeIndex === totalSlides - 1} 
                            className={`hidden lg:block w-12 h-12 rounded-full bg-white shadow-lg p-2 transition duration-300 transform translate-x-1/2 focus:outline-none 
                                ${activeIndex === totalSlides - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 cursor-pointer'}`}
                            aria-label="Next slide"
                        >
                            <img src={buttonStartsRight} alt="Next" className="w-full h-full object-contain" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}