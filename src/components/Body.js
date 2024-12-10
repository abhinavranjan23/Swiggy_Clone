import Restcard from "./Restcard";
import { useState } from "react";
import { Shimmer } from "./shimmer.js";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurents.js";
import HOMEURL from "../urlpath/homePageApi.js";
import useOnlineStatus from "../urlpath/useOnlineStatus.js";
import { InhancedRestCard } from "./Restcard";
import BannerItems from "./BannerItems.js";

const Body = () => {
  const [searchValue, setSearchValue] = useState("");
  const {
    isLoading,
    filteredList,
    filterByRating,
    filterBySearch,
    banner,
    bannerList,
    topRes,
    onlineDelRes,
  } = useRestaurants(HOMEURL);
  // console.log(bannerItems);
  // const bannerItemsList = bannerItems.imageGridCards.info;
  // console.log(bannerItemsList)
  const status = useOnlineStatus();
  const PromotedCard = InhancedRestCard(Restcard);
  const firstTitle = banner?.header?.title;
  const topResItem = topRes?.gridElements?.infoWithStyle?.restaurants || [];

  if (status == false)
    return (
      <h1>Looks Like You are Offline ! Check Your Internet Connection </h1>
    );

  if (isLoading) {
    return <Shimmer />;
  }

  return (
    <div className=' lg:w-3/4 mx-auto flex-col sm:w-full'>
      <h1 className='font-bold text-[25px] pt-7 sm:ml-4'>{firstTitle}</h1>
      <div className='h-72 border-b border-slate-300 flex overflow-x-scroll no-scrollbar items-center scroll-smooth '>
        {Array.isArray(bannerList) &&
          bannerList.map((arg, index) => (
            <BannerItems key={index} bannerobj={arg} />
          ))}
      </div>
      <h1 className='font-bold text-[25px] py-7 sm:text-[20px]'>
        {topRes?.header?.title}
      </h1>
      <div className='flex overflow-x-scroll no-scrollbar gap-8  border-b border-slate-300 pb-10'>
        {topResItem.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={`/restaurant/${restaurant?.info?.id}`}
          >
            {" "}
            <Restcard restobj={restaurant} />
          </Link>
        ))}
      </div>
      <div className='my-10 flex justify-center items-center'>
        <input
          type='search'
          id='searchinput'
          placeholder='Search for restaurant'
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button className='' onClick={() => filterBySearch(searchValue)}>
          Search
        </button>
      </div>
      <div className='flex justify-around my-10 sm:flex flex-wrap'>
        <button className='border p-3 rounded-3xl'>Sort by</button>
        <button className='border p-3 rounded-3xl'>Filter By</button>
        <button
          className='border p-3 rounded-3xl'
          onClick={() => filterByRating(4)}
        >
          Rating 4+
        </button>
        <button className='border p-3 rounded-3xl'>Fast Delivery</button>
        <button className='border p-3 rounded-3xl'>Pure Veg</button>
        <button className='border p-3 rounded-3xl'>New on Swiggy</button>
        <button className='border p-3 rounded-3xl'>Offer</button>
        <button className='border p-3 rounded-3xl'>Rs.300-600</button>
        <button className='border p-3 rounded-3xl'>less than Rs.300</button>
      </div>
      <h1 className='font-bold text-[25px] py-7 '>{onlineDelRes}</h1>
      <div className='flex flex-wrap gap-x-8'>
        {filteredList.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={`/restaurant/${restaurant?.info?.id}`}
          >
            {restaurant.info.isOpen ? (
              <PromotedCard restobj={restaurant} />
            ) : (
              <Restcard restobj={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
