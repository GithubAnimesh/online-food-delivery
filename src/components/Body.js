import RestorentCard from "./RestorentCard";
import fetchdata from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [resLists, setResLists] = useState(fetchdata);
  console.log(resLists);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterLists = fetchdata.filter(
              (res) => res.info.avgRating > 4.4
            );
            setResLists(filterLists);
          }}
        >
          Top Rated Restorent
        </button>
      </div>
      <div className="res-container">
        {resLists.map((item) => (
          <RestorentCard key={item.info.id} fetchdata={item} />
        ))}
      </div>
    </div>
  );
};
export default Body;
