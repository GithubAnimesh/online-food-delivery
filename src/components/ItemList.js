import { useDispatch } from "react-redux";
import { MENU_IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  const dispacher = useDispatch();
  const handleAddItem = (item) => {
    dispacher(addItem(item));
  };

  return (
    <div className="m-4 p-4 bg-gray-100 rounded-lg shadow-lg">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between items-center border-b border-gray-300 py-4"
        >
          {/* Item Details */}
          <div className="flex flex-col w-2/3">
            <div className="text-lg font-semibold text-gray-800 text-left">
              {item.card.info.name}
            </div>
            <div className="text-gray-600 font-medium text-left">
              Rs. {item.card.info.price / 100}
            </div>
            {item.card.info.ratings.aggregatedRating.rating &&
            item.card.info.ratings.aggregatedRating.rating !== "undefined" ? (
              <div className="text-gray-600 font-medium text-left">
                ⭐ {item.card.info.ratings.aggregatedRating.rating}(
                {item.card.info.ratings.aggregatedRating.ratingCountV2})
              </div>
            ) : (
              <p className="text-gray-600 font-medium text-left">
                ⭐ Rating not available
              </p>
            )}
          </div>

          {/* Conditional Rendering for Image */}
          {item.card.info.imageId && item.card.info.imageId !== "undefined" ? (
            <img
              className="w-[150px] h-[140px] object-cover rounded-md"
              src={MENU_IMG_URL + item.card.info.imageId}
              alt={item.card.info.name}
            />
          ) : (
            <div className="text-gray-500 italic text-sm">
              Image not available
            </div>
          )}
          <button
            className="bg-lime-500 p-2 rounded text-white"
            onClick={() => handleAddItem(item)}
          >
            Add +
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
