import { CDN_URL } from "../utils/constants";

const RestorentCard = (props) => {
  const resLists = props;
  const { name, cuisines, costForTwo, cloudinaryImageId, avgRating } =
    resLists?.resLists?.info;

  return (
    <div className="w-[300px] h-[350px] bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 m-5 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 relative overflow-hidden">
      {/* Food Image */}
      <img
        alt="Res-food-image"
        className="w-full h-1/2 object-cover rounded-t"
        src={CDN_URL + cloudinaryImageId}
      />

      {/* Card Content */}
      <div className="w-full h-1/2 py-3">
        <h3 className="px-3 py-2 text-black font-sans align-middle text-xl font-bold">
          {name} ⭐ {avgRating}
        </h3>
        <h3 className="px-3 text-black font-sans align-middle text-lg">
          {cuisines.join(", ")} {costForTwo}
        </h3>
      </div>
    </div>
  );
};

// Veg Label Higher-Order Component (HOC)
export const VegRestorentCard = (RestorentCard) => {
  return (props) => {
    return (
      <div className="relative">
        {/* Veg Label */}
        <label className="bg-green-500 text-white font-bold text-sm p-1 rounded absolute top-2 left-2 z-10">
          Veg
        </label>
        <RestorentCard {...props} />
      </div>
    );
  };
};

export default RestorentCard;
