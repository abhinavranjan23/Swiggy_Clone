import CDN_LINK from "../urlpath/cdn";

const Restcard = (props) => {
  const { restobj } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, areaName } =
    restobj?.info;
  console.log(areaName);
  const { slaString } = restobj?.info?.sla;
  return (
    <div className=' sm:w-64 sm:h-80 flex-col mb-8 w-52 h-60'>
      <img
        className='sm:h-3/5 sm:w-64 w-52 h-3/5 object-cover rounded-2xl'
        alt='food images'
        src={CDN_LINK + cloudinaryImageId}
      />
      <h1 className='font-bold text-xl pt-2'>{name}</h1>
      <div className='flex'>
        <h2 className='font-semibold'>⭐{avgRating}</h2> •
        <h2 className='font-semibold'> {slaString}</h2>
      </div>
      <h3 className='truncate text-zinc-500 font-semibold'>
        {cuisines.join(",")}
      </h3>
      <h4 className='truncate text-zinc-500 font-semibold'>📌{areaName}</h4>
    </div>
  );
};
export const InhancedRestCard = (Restcard) => {
  return (props) => {
    return (
      <div>
        <div className='absolute'>
          <label className='bg-black text-white rounded-md p-1 my-5'>
            Open
          </label>
        </div>
        <Restcard {...props} />
      </div>
    );
  };
};
export default Restcard;
