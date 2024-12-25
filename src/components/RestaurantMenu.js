import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Fetch_MRNU_REF_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import RestaurantCategories from "./RestaurantCategories";
import fetchData from "../utils/fetchCall";
const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState([]);
  const [categories, setCategories] = useState([]);
  const resId = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const fetchDataList = await fetchData(Fetch_MRNU_REF_URL);
    setMenuData(
      fetchDataList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards
    );
    const filterCategories =
      fetchDataList.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (c) =>
          c.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    setCategories(filterCategories);
  };
  if (menuData === null) return <Shimmer />;
  return (
    <div className="text-center">
      <p className="font-bold my-5 text-lg">Restaurant name</p>
      <p className="font-bold text-lg">cuisinies</p>
      {categories.map((category) => (
        <RestaurantCategories
          data={category.card.card}
          key={category.card.card.title}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
