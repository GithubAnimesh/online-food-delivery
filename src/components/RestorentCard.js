import { CDN_URL } from "../utils/constants";
const RestorentCard = (props) => {
  const resLists = props;
  const { name, cuisines, costForTwo, cloudinaryImageId, avgRating } =
    resLists?.resLists?.info;
  return (
    <div className="res-card">
      <img
        alt="Res-food-image"
        className="res-card-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwo}</h3>
      <h3>{avgRating}</h3>
    </div>
  );
};
export default RestorentCard;
