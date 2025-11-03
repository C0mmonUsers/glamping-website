import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Контакти</h2>
        <div className="flex flex-col md:flex-row gap-10">
          <form className="flex-1 bg-white shadow-lg rounded-lg p-6 space-y-4">
            <input type="text" placeholder="Ім'я" className="w-full p-3 border rounded"/>
            <input type="email" placeholder="Email" className="w-full p-3 border rounded"/>
            <textarea placeholder="Повідомлення" className="w-full p-3 border rounded h-32"></textarea>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded">Надіслати</button>
          </form>
          <div className="flex-1 space-y-4 text-gray-700">
            <p><strong>Адреса:</strong> Карпати, Україна</p>
            <p><strong>Телефон:</strong> +380 12 345 6789</p>
            <p><strong>Email:</strong> info@glamping.com</p>
            <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
              <span>Мапа тут (Google Maps)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
