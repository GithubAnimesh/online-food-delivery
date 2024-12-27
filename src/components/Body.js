import RestorentCard, { VegRestorentCard } from "./RestorentCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import fetchData from "../utils/fetchCall";
import userData from "../utils/UserContext";
import { FETCH_REF_URL } from "../utils/constants";
const Body = () => {
  const [resLists, setResLists] = useState([]);
  const [filterResLists, setFilterResLists] = useState([]);
  const [searchText, setSearchText] = useState("");
  const userInfo = useContext(userData);
  const VegRestorent = VegRestorentCard(RestorentCard);
  useEffect(() => {
    restaurentData();
  }, []);
  const restaurentData = async () => {
    const fetchDataList = await fetchData(FETCH_REF_URL);
    setResLists(
      fetchDataList?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterResLists(
      fetchDataList?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  let onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>You are not online</h1>;
  }
  return resLists.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="w-full md:w-auto m-10 my-5">
      <div className="flex">
        <div className="border-solid  mr-3">
          <input
            type="text"
            className="border-2 border-indigo-600 mr-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-sky-500 rounded p-2 hover:bg-sky-700 p-2"
            onClick={() => {
              const searchLists = resLists.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterResLists(searchLists);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-sky-500 rounded p-2 hover:bg-sky-700"
          onClick={() => {
            const topResLists = resLists.filter(
              (res) => res.info.avgRating > 4.4
            );
            setFilterResLists(topResLists);
          }}
        >
          Top Rated Restorent
        </button>
      </div>
      <div className="flex flex-wrap justify-center items-center my-5 w-full h-full bg-gray-200">
        {filterResLists.map((item) => (
          <Link
            className="link-tag"
            to={"/restaurant/" + item.info.id}
            key={item.info.id}
          >
            {" "}
            {item.info.avgRating > 4 ? (
              <VegRestorent resLists={item} />
            ) : (
              <RestorentCard resLists={item} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
