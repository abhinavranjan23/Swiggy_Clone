import logo from "../../logo/199816425.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginPage from "./LoginPages";

const Navbar = () => {
  const [logButton, setLogButton] = useState(false);
  return (
    <div>
      <div className='flex justify-between bg-orange-600 h-90 w-auto items-center'>
        <img className='w-48' src={logo} />
        <div>
          <ul className='flex'>
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
                {logButton ? "login" : "logout"}
              </button>
            </li>
          </ul>
        </div>
      </div>
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
