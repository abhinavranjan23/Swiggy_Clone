import NestedCategoryList from "./NestedCategoryList";

const NestedCategory = (props) => {
  const { foodobjs } = props;
  // const {categories} = foodobjs.card?.card;
  // const category = categories;
  const categories = foodobjs?.card?.card?.categories || [];
  const title = foodobjs?.card?.card?.title || "Default Title";
  return (
    <div>
      <div className='h-4 bg-gray-200'></div>
      <div className='ml-4'>
        <div className='flex flex-col my-3 py-3 '>
          <span className='font-extrabold'>{title}</span>
          {categories.map((i, index) => (
            <NestedCategoryList
              key={index}
              catList={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default NestedCategory;
