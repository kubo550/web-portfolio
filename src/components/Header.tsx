import Link from "next/link";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { navLinks } from "constants/navLinks";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className='shadow-md sticky border-b-2 border-gray-900 z-40 '
      id='top'
    >
      <nav className='bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center w-full justify-around'>
              <div className='hidden sm:block'>
                <div className='ml-10 flex items-baseline space-x-4'>
                  {navLinks.map(({ path, title }) => (
                    <Link key={path} href={path}>
                      <a className=' hover:bg-gray-700 text-white rounded-md text-sm font-medium'>
                        {title}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className='-mr-2 flex sm:hidden'>
              <button
                onClick={() => setIsMobileMenuOpen(prev => !prev)}
                className='bg-gray-800 inline-flex items-center justify-center ml-2 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>

                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>

                <svg
                  className='hidden h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isMobileMenuOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          {ref => (
            <div className='sm:hidden'>
              <div ref={ref} className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                {navLinks.map(({ path, title }) => (
                  <Link key={path} href={path}>
                    <a
                      className='hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium'
                      onClick={closeMobileMenu}
                    >
                      {title}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </header>
  );
};

export default Header;
