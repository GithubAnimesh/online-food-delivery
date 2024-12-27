import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Fetch_MRNU_REF_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import RestaurantCategories from "./RestaurantCategories";
import fetchData from "../utils/fetchCall";
const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showIndex, setShowIndex] = useState(null);
  const [resName, setResName] = useState();

  const resId = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const fetchRefUrl = Fetch_MRNU_REF_URL.replace("RESCODE", resId.resId);
    const fetchDataList = await fetchData(fetchRefUrl);
    setResName(fetchDataList.cards[0].card.card.text);
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
      <p className="font-bold my-5 text-lg">{resName}</p>
      {categories.map((category, index) => (
        <RestaurantCategories
          data={category.card.card}
          key={category.card.card.title}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
