import React from "react";
import { useContext } from "react";
import UserContextt from "../utils/UserContextt";
import logo from "../../logo/logo.png";

const Footer = () => {
  return (
    <footer className='bg-orange-500' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'></h2>
      <div className='mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='space-y-8'>
            <img className='h-20' src={logo} alt='Food Delivery Logo' />
            <p className='text-sm leading-6 text-gray-600'>
              Bringing delicious meals to your doorstep. Fast, fresh, and
              flavorful.
            </p>

            <div className='flex space-x-6'>
              <a href='#' className='text-gray-400 hover:text-gray-500'>
                <span className='sr-only'>Facebook</span>
                <svg
                  className='h-6 w-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
              <a href='#' className='text-yellow-500 hover:text-gray-500'>
                <span className='sr-only'>Instagram</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 16 16'
                  fill='currentColor'
                  className='w-4 h-4'
                >
                  <path
                    fillRule='evenodd'
                    d='M8.074.945A4.993 4.993 0 0 0 6 5v.032c.004.6.114 1.176.311 1.709.16.428-.204.91-.61.7a5.023 5.023 0 0 1-1.868-1.677c-.202-.304-.648-.363-.848-.058a6 6 0 1 0 8.017-1.901l-.004-.007a4.98 4.98 0 0 1-2.18-2.574c-.116-.31-.477-.472-.744-.28Zm.78 6.178a3.001 3.001 0 1 1-3.473 4.341c-.205-.365.215-.694.62-.59a4.008 4.008 0 0 0 1.873.03c.288-.065.413-.386.321-.666A3.997 3.997 0 0 1 8 8.999c0-.585.126-1.14.351-1.641a.42.42 0 0 1 .503-.235Z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
              <a href='#' className='text-gray-400 hover:text-blue-400'>
                <span className='sr-only'>Twitter</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 16 16'
                  fill='currentColor'
                  className='w-4 h-4'
                >
                  <path d='M2.75 2a.75.75 0 0 0-.75.75v10.5a.75.75 0 0 0 1.5 0v-2.624l.33-.083A6.044 6.044 0 0 1 8 11c1.29.645 2.77.807 4.17.457l1.48-.37a.462.462 0 0 0 .35-.448V3.56a.438.438 0 0 0-.544-.425l-1.287.322C10.77 3.808 9.291 3.646 8 3a6.045 6.045 0 0 0-4.17-.457l-.34.085A.75.75 0 0 0 2.75 2Z' />
                </svg>
              </a>
            </div>
          </div>
          <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold leading-6 text-gray-900'>
                  Services
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  <li>
                    <a
                      href='#'
                      className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                    >
                      Fast Delivery
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                    >
                      Fresh Ingredients
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                    >
                      Multiple Cuisines
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                    >
                      Easy Payment Options
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mt-10 md:mt-0'>
                <h3 className='text-sm font-semibold leading-6 text-gray-900'>
                  Support
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  <li>
                    <a
                      href='#'
                      className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                    >
                      Order Tracking
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                    >
                      Feedback
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold leading-6 text-gray-900'>
                  Company
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  <li>
                    <a
                      href='#'
                      className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                    >
                      Press
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mt-10 md:mt-0'>
                <h3 className='text-sm font-semibold leading-6 text-gray-900'>
                  Legal
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  <li>
                    <a
                      href='#'
                      className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                    >
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                    >
                      Accessibility
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24'>
          <p className='text-xs leading-5 text-gray-500'>
            &copy; 2024 Food Delivery Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
