import { CDN_URL } from "../utils/constants";
const RestorentCard = (props) => {
  const resLists = props;
  const { name, cuisines, costForTwo, cloudinaryImageId, avgRating } =
    resLists?.resLists?.info;
  return (
    <div className="w-[300px] h-[350px] bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 bg-[200%_100%] animate-shimmer m-5 rounded-lg">
      <img
        alt="Res-food-image"
        className="w-full h-1/2 object-cover rounded"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="w-full h-1/2 py-3">
        <h3 className="px-3 py-2 text-black font-sans align-middle text-xl font-bold">
          {name} ⭐{avgRating}
        </h3>
        <h3 className="px-3 text-black font-sans align-middle text-lg ">
          {cuisines.join(", ")} {costForTwo}
        </h3>
      </div>
    </div>
  );
};
export default RestorentCard;
