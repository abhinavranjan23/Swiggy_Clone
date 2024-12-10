import FoodItemsList from "./FoodItemsList";
import { useState } from "react";

const NestedCategoryList = (props) => {
  const [collapse, setCollapse] = useState(false);
  const handleOnClick = () => {
    setCollapse(!collapse);
  };
  const { catList } = props;
  const title = catList?.title;
  const items = catList?.itemCards;
  return (
    <div>
      <div className='h-4 bg-gray-200'></div>
      <div className='ml-4'>
        <div
          className='flex justify-between my-3 py-3 cursor-pointer b'
          onClick={handleOnClick}
        >
          <span className='font-bold'>
            {title} ({items.length})
          </span>
          <span>{collapse ? "👆" : "👇"}</span>
        </div>
        <div>{collapse && <FoodItemsList menuobj={items} />}</div>
      </div>
    </div>
  );
};
export default NestedCategoryList;
