import logo from "../../logo/199816425.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginPage from "./LoginPages";

const Navbar = () => {
  const [logButton, setLogButton] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <div className='flex justify-between bg-orange-500 w-full items-center sm:h-90 '>
        <img className='w-32 md:w-48' src={logo} />
        <div>
          <ul className='hidden md:flex'>
            <li className='px-10 '>
              <Link tp='./'>Search</Link>
            </li>

            <li className='px-10'>
              <Link to='./offer'>Offers❤️‍🔥</Link>
            </li>
            <li className='px-10'>
              <Link to='./about'> Help</Link>
            </li>
            <li className='px-10'>Cart</li>
            <li>
              <button
                className='px-7 '
                onClick={() => {
                  logButton == true ? setLogButton(false) : setLogButton(true);
                }}
              >
                {logButton ? "logout" : "login"}
              </button>
            </li>
          </ul>
        </div>
        <div>
          <button
            className='md:hidden block text-white'
            onClick={() => {
              setMenuOpen(true);
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='100'
              height='100'
              viewBox='0 0 50 50'
              className='w-8 h-8 mr-10'
            >
              <path d='M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z'></path>
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          className={`fixed top-0 right-0 h-full bg-orange-400 text-white w-64 transform transition-transform duration-300 z-50 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className='self-end text-white'
            onClick={() => setMenuOpen(false)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='w-8 h-8'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
          <div className='flex flex-col p-6 space-y-4'>
            <Link to='./' className='py-2' onClick={() => setMenuOpen(false)}>
              Search
            </Link>
            <Link
              to='./offer'
              className='py-2'
              onClick={() => setMenuOpen(false)}
            >
              Offers❤️‍🔥
            </Link>
            <Link
              to='./about'
              className='py-2'
              onClick={() => setMenuOpen(false)}
            >
              Help
            </Link>
            <span className='py-2' onClick={() => setMenuOpen(false)}>
              Cart
            </span>
            <button
              className='py-2 border bg-green-600 rounded-md w-45 '
              onClick={() => {
                setLogButton(!logButton);
                setMenuOpen(false);
              }}
            >
              {logButton ? "logout" : "login"}
            </button>
          </div>
        </div>
      )}

      <div>
        {logButton ? (
          <LoginPage
            setShow={() => {
              setLogButton(false);
            }}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
