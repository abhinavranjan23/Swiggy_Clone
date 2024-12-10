import FoodItemsList from "./FoodItemsList";
import { useState } from "react";

const FoodItems = ({ foodobj, collapse, setShowIndex, currentIndex }) => {
  //const [collapse,setCollapse] =useState(true);
  const handleOnClick = () => {
    //setCollapse(!collapse)
    setShowIndex(collapse ? null : currentIndex);
  };

  const title = foodobj?.card?.card?.title;
  const items = foodobj?.card?.card?.itemCards;
  return (
    <div>
      <div className='h-4 bg-gray-200'></div>
      <div className='ml-4'>
        <div
          className='flex justify-between my-3 py-3 cursor-pointer b'
          onClick={handleOnClick}
        >
          <span className='font-extrabold'>
            {title} ({items.length})
          </span>
          <span>{collapse ? "👆" : "👇"}</span>
        </div>
        <div>{collapse && <FoodItemsList menuobj={items} />}</div>
      </div>
    </div>
  );
};
export default FoodItems;
