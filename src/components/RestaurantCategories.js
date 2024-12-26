import ItemList from "./ItemList";
const RestaurantCategories = ({ data, showItems, setShowIndex }) => {
  const accordion = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-slate-200 p-4 rounded-lg shadow-md">
        <div
          onClick={accordion}
          className="flex justify-between items-center text-lg font-semibold text-gray-800 border-b border-gray-300 pb-2"
        >
          <span>
            {data.title} ({data.itemCards.length})
          </span>
          <span className="cursor-pointer text-gray-600 hover:text-gray-800">
            {showItems ? "⬆️" : "⬇️"}
          </span>
        </div>
        <div className="mt-4">
          {showItems && <ItemList items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};
export default RestaurantCategories;
