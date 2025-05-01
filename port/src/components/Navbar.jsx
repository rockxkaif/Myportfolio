import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Skills', path: '/skills' },
  { name: 'Experience', path: '/experience' },
  { name: 'Certificates', path: '/certificates' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <nav className="glass-effect sticky top-0 z-50">
      <div className="container">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center">
            <NavLink to="/" className="text-xl font-bold text-[#4F46E5]">
              Portfolio
            </NavLink>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-[#1E293B] dark:text-[#E2E8F0] hover:text-[#4F46E5] dark:hover:text-[#4F46E5] px-3 py-2 text-sm font-medium ${
                    isActive ? 'text-[#4F46E5]' : ''
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-[#1E293B] dark:text-[#E2E8F0] hover:text-[#4F46E5] dark:hover:text-[#4F46E5] hover:bg-gray-100 dark:hover:bg-[#1E293B] transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <FaSun className="h-5 w-5" />
              ) : (
                <FaMoon className="h-5 w-5" />
              )}
            </button>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-[#1E293B] dark:text-[#E2E8F0] hover:text-[#4F46E5] dark:hover:text-[#4F46E5] hover:bg-gray-100 dark:hover:bg-[#1E293B]"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-medium ${
                  isActive
                    ? 'text-[#4F46E5]'
                    : 'text-[#1E293B] dark:text-[#E2E8F0] hover:text-[#4F46E5] dark:hover:text-[#4F46E5] hover:bg-gray-100 dark:hover:bg-[#1E293B]'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
} 