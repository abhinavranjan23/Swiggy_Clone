import CDN_LINK from "../urlpath/cdn";
const BannerItems = (props) => {
  const { bannerobj } = props;
  const imageLink = bannerobj.imageId;
  return (
    <div>
      <div className='sm:w-40 sm:h-40 mx-5 flex justify-center items-center w-28 h-28 '>
        <img className='object-contain' src={CDN_LINK + imageLink}></img>
      </div>
    </div>
  );
};
export default BannerItems;
