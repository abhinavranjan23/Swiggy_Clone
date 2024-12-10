import { useState, useEffect } from "react";

const useRestaurants = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [restaurentList, setRestaurentList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [banner, setBanner] = useState([]);
  const [bannerList, setBannerList] = useState([]);
  const [topRes, setTopRes] = useState([]);
  const [onlineDelRes, setOnlineDelRes] = useState("");

  const fetchRestaurants = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      const restaurants =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      const banner = data?.data?.cards[0]?.card?.card;
      const bannerList = data?.data?.cards[0]?.card?.card?.imageGridCards?.info;
      const recomandedRes = data?.data?.cards[1]?.card?.card;
      const onlineDel = data?.data?.cards[2]?.card?.card?.title;
      setRestaurentList(restaurants);
      setFilteredList(restaurants);
      setBanner(banner);
      setBannerList(bannerList);
      setTopRes(recomandedRes);
      setOnlineDelRes(onlineDel);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterByRating = (minRating) => {
    const filtered = restaurentList.filter(
      (rest) => rest.info.avgRating >= minRating
    );
    setFilteredList(filtered);
  };

  const filterBySearch = (searchTerm) => {
    const filtered = restaurentList.filter((rest) =>
      rest.info.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredList(filtered);
  };

  useEffect(() => {
    fetchRestaurants();
  }, [url]);

  return {
    isLoading,
    restaurentList,
    filteredList,
    filterByRating,
    filterBySearch,
    banner,
    bannerList,
    topRes,
    onlineDelRes,
  };
};

export default useRestaurants;
