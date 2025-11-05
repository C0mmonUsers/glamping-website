import React from 'react';
import { Link } from 'react-scroll';

export default function Header() {
  return (
    <header className="fixed w-full top-0 left-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-green-600">Glamping</div>
        <nav>
          <ul className="flex space-x-6">
            {/* Would be good to use a map function here as well. */}
            <li>
              <Link
                to="hero"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-green-600"
              >
                Головна
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-green-600"
              >
                Про нас
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-green-600"
              >
                Послуги
              </Link>
            </li>
            <li>
              <Link
                to="gallery"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-green-600"
              >
                Галерея
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-green-600"
              >
                Контакти
              </Link>
            </li>
          </ul>
        </nav>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
          Бронювати
        </button>
      </div>
    </header>
  );
}
