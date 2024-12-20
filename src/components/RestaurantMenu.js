import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import data from "../utils/mockMenuData";
import { MENU_IMG_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState([]);
  const resId = useParams();
  useEffect(() => {
    setMenuData(data);
  }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2226149&lng=73.102795&restaurantId=403973&catalog_qa=undefined&submitAction=ENTER"
  //   );
  //   const json = await data.json();
  //   setMenuData(json.data);
  // };
  // console.log("JSON data is", data);
  // setMenuData(data);
  if (menuData === null) return <Shimmer />;

  //const { itemCard } = JSON.stringify(menuData);

  return (
    <div className="menu">
      <h1>Restaurant Menu</h1>
      <ul>
        {menuData.map((item) => (
          <li key={item?.card?.info?.id}>
            <img src={MENU_IMG_URL + item?.card?.info?.imageId} />
            {item?.card?.info?.name} - ₹{item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
