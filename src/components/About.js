import React from 'react';
import aboutImage from '../assets/images/about.jpg'; // Постав своє зображення

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <img src="/images/tree.png" alt="Ялинка" className="mx-auto w-12 h-12 mb-8" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-4 text-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Welcome to Hidden Heaven</h2>
          <p className="mb-4 text-gray-700">
            Nestled in the serene landscapes near the border of Canada, Hidden Heaven offers a captivating glamping experience unlike any other. Our retreat, situated in the heart of Washington state, invites all guests to immerse themselves in the beauty of nature while indulging in the comforts of luxury accommodation.  
          </p>
        </div>
      </div>
<div className="flex justify-center items-center gap-40 mt-16 px-4">
  <div className="flex flex-col items-center">
    <img src="/images/tent.png" alt="Тент" className="w-16 h-16" />
    <p className="text-gray-700 font-semibold text-center">5 Vintage Retro Tents</p>
  </div>

  <div className="flex flex-col items-center">
    <img src="/images/tent3.png" alt="Тент2" className="w-16 h-16" />
    <p className="text-gray-700 font-semibold text-center">10 wood cabins</p>
  </div>

  <div className="flex flex-col items-center">
    <img src="/images/tent2.png" alt="Тент3" className="w-16 h-16" />
    <p className="text-gray-700 font-semibold text-center">3 Safari Tents</p>
  </div>

  <div className="flex flex-col items-center">
    <img src="/images/tent4.png" alt="Тент4" className="w-16 h-16" />
    <p className="text-gray-700 font-semibold text-center">2 Tree Houses</p>
  </div>
</div>

    </section>
  );
}
