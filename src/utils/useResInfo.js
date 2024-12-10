import { useState, useEffect } from "react";

const RESMENU =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6139298&lng=77.2088282&restaurantId=";

const useResInfo = (resId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [heading, setHeading] = useState("");
  const [tab, setTab] = useState([]);
  const [resDetails, setResDetails] = useState({});
  const [recomand, setRecomand] = useState([]);
  const [nestedCategory, setNestedCategory] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setIsLoading(true);
      try {
        const data = await fetch(RESMENU + resId);
        const info = await data.json();

        setHeading(info?.data?.cards[0]?.card?.card?.text || "");
        setTab(info?.data?.cards[1]?.card?.card?.tabs || []);
        setResDetails(info?.data?.cards[2]?.card?.card?.info || {});

        const groupedCards =
          info?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
        const category = groupedCards.filter(
          (c) =>
            c.card?.card?.["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
        const nstdCategory = groupedCards.filter(
          (c) =>
            c.card?.card?.["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        );
        setNestedCategory(nstdCategory);

        setRecomand(category);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (resId) {
      fetchApi();
    }
  }, [resId]);

  return {
    isLoading,
    heading,
    tab,
    resDetails,
    recomand,
    nestedCategory,
  };
};

export default useResInfo;
