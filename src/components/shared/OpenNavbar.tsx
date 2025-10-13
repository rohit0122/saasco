'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ThemeToggleButton } from '@/components/common/ThemeToggleButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'How it works?', path: '/how-it-works' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-30 top-0 left-0 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            SaaSCo
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side - theme toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggleButton />
            <Link href="/sign-in"><button  className='px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition'>Sign In</button></Link>

          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {/* Simple hamburger / close icon */}
              <span className="block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 mb-1.5"></span>
              <span className="block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 mb-1.5"></span>
              <span className="block w-6 h-0.5 bg-gray-700 dark:bg-gray-300"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              {link.name}
            </Link>
          ))}

          <div className="flex mt-2 mx-auto space-x-4">
            <ThemeToggleButton />
            <Link href="/sign-in"  className='flex-grow'><button  className='w-full px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition'>Sign In</button></Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
