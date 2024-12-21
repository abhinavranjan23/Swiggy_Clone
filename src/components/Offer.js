import { Fade } from "react-awesome-reveal";
import "animate.css";

const Offer = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-orange-100'>
      {/* Content */}
      <div className='flex flex-col items-center w-full px-10 md:flex-row md:justify-between'>
        {/* Left Section */}
        <div className='flex flex-col items-center justify-center space-y-5 md:items-start'>
          <div className='flex items-center justify-center bg-yellow-400 rounded-lg px-10 py-5'>
            <span className='text-2xl font-bold text-gray-800'>
              LIMITED TIME OFFER
            </span>
          </div>
          <div className='flex flex-col items-center md:items-start'>
            <h2 className='text-5xl font-bold text-gray-800'>
              50% Off on First Order!
            </h2>
            <p className='mt-4 text-center text-gray-600 md:text-left'>
              Enjoy your favorite meals delivered to your door at half the
              price.
            </p>
            <p className='text-center text-gray-600 md:text-left'>
              Offer valid for new users only. Don’t miss out!
            </p>
          </div>
          <button className='px-6 py-3 mt-5 text-white bg-red-500 rounded-lg hover:bg-red-600'>
            Order Now
          </button>
        </div>

        {/* Right Section */}
        <div className='flex items-center justify-center mt-10 md:mt-0'>
          <img
            src='https://via.placeholder.com/300'
            alt='Delicious Food'
            className='rounded-lg shadow-lg'
          />
        </div>
      </div>
    </div>
  );
};
export default Offer;
