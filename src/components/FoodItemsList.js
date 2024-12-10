import CDN_LINK from "../urlpath/cdn";

const FoodItemsList = (props) => {
  const { menuobj } = props;
  return (
    <div>
      {menuobj.map((i) => (
        <div
          className='flex justify-between h-44 border-b py-2 my-2 text-left items-center'
          key={i.card?.info?.id}
        >
          <div className='flex flex-col w-9/12'>
            {i.card?.info?.isVeg ? (
              <img
                className='w-3 h-3'
                src='https://i.pinimg.com/736x/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.jpg'
              ></img>
            ) : (
              <img
                className='w-3 h-3'
                src='https://cdn.vectorstock.com/i/1000v/00/43/non-vegetarian-sign-veg-logo-symbol-vector-50890043.jpg'
              ></img>
            )}
            <span className='font-bold'>{i.card?.info?.name}</span>
            {i.card?.info?.ratings?.aggregatedRating.rating && (
              <span className='font-medium'>
                ⭐{i.card?.info?.ratings.aggregatedRating.rating} (
                {i.card?.info?.ratings.aggregatedRating.ratingCountV2})
              </span>
            )}
            <span className='font-semibold'>
              ₹{i.card?.info?.price / 100 || i.card?.info?.defaultPrice / 100}
            </span>
            <span className='line-clamp-2 text-gray-500 text-pretty font-serif pr-7'>
              {i.card?.info?.description}
            </span>
          </div>

          <div className='w-3/12 relative'>
            <button className='border border-gray-300 font-bold text-lg absolute bg-slate-50 rounded-md text-green-800 px-10 py-2 left-1/2 bottom-[-10px] transform -translate-x-1/2 hover:bg-slate-200'>
              Add+
            </button>
            <img
              className='w-96 h-32 object-cover rounded-2xl'
              alt='Food item'
              src={CDN_LINK + i.card?.info?.imageId}
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FoodItemsList;
