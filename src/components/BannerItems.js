import CDN_LINK from "../urlpath/cdn";
const BannerItems = (props) => {
  const { bannerobj } = props;
  const imageLink = bannerobj.imageId;
  return (
    <div>
      <div className='w-40 h-40 mx-5 flex justify-center items-center '>
        <img
          className='object-contain'
          src={CDN_LINK + imageLink}
        ></img>
      </div>
    </div>
  );
};
export default BannerItems;
