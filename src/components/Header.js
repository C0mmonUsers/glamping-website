import React from "react";
import { Link } from "react-scroll";

const navItems = [
  { to: "hero", label: "Main" },
  { to: "about", label: "About Us" },
  { to: "services", label: "Services" },
  { to: "gallery", label: "Gallery" },
  { to: "contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed w-full top-0 left-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-green-600">Glamping</div>

        <nav>
          <ul className="flex space-x-6">
            {navItems.map(({ to, label }, index) => (
              <li key={index}>
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-green-600"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
          Book Now
        </button>
      </div>
    </header>
  );
}
