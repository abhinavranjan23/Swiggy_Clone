import Restcard from "./Restcard";
import { useRef, useState, useEffect } from "react";
import { Shimmer } from "./shimmer.js";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurents.js";
import HOMEURL from "../urlpath/homePageApi.js";
import useOnlineStatus from "../urlpath/useOnlineStatus.js";
import { InhancedRestCard } from "./Restcard";
import BannerItems from "./BannerItems.js";

const Body = () => {
  const endres = useRef();
  const [searchValue, setSearchValue] = useState("");
  const [endOfRes, setEndOfRes] = useState(false);
  // console.log(endOfRes);
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

  useEffect(() => {
    if (!isLoading && endres.current) {
      const observer = new IntersectionObserver((enteries) => {
        const entery = enteries[0];
        console.dir(entery);
        setEndOfRes(entery.isIntersecting);
      });
      observer.observe(endres.current);
    }
  }, [isLoading]);

  if (status == false)
    return (
      <h1>Looks Like You are Offline ! Check Your Internet Connection </h1>
    );

  if (isLoading) {
    return <Shimmer />;
  }

  return (
    <div className=' lg:w-3/4 mx-auto flex-col sm:w-full mt-28'>
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
      <div className='flex  md:my-10 overflow-x-auto  justify-between gap-x-3 no-scrollbar '>
        <button className='border py-1 px-3 md:py-2 md:px-5  md:rounded-3xl rounded-2xl min-w-fit '>
          Sort by
        </button>
        <button className='border py-1 px-3 md:py-2 md:px-5 md:rounded-3xl rounded-2xl min-w-fit'>
          Filter By
        </button>
        <button
          className='border py-1 px-3 md:py-2 md:px-5 md:rounded-3xl rounded-2xl min-w-fit '
          onClick={() => filterByRating(4)}
        >
          Rating 4+
        </button>
        <button className='border py-1 px-3 md:py-2 md:px-5 md:rounded-3xl rounded-2xl min-w-fit'>
          Fast Delivery
        </button>
        <button className='border py-1 px-3 md:py-2 md:px-5 md:rounded-3xl rounded-2xl min-w-fit'>
          Pure Veg
        </button>
        <button className='border py-1 px-3 md:py-2 md:px-5 md:rounded-3xl rounded-2xl min-w-fit'>
          New on Swiggy
        </button>
        <button className='border py-1 px-3 md:py-2 md:px-5 md:rounded-3xl rounded-2xl min-w-fit'>
          Offer
        </button>
        <button className='border py-1 px-3 md:py-2 md:px-5 md:rounded-3xl rounded-2xl min-w-fit'>
          Rs.300-600
        </button>
        <button className='border py-1 px-3 md:py-2 md:px-5 md:rounded-3xl rounded-2xl min-w-fit'>
          less than Rs.300
        </button>
      </div>
      <h1 className='font-bold text-[25px] py-7 '>{onlineDelRes}</h1>
      <div className='flex flex-wrap gap-x-8 ' ref={endres}>
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
