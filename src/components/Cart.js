import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispacher = useDispatch();
  const clearCarts = () => {
    dispacher(clearCart());
  };
  return (
    <div>
      <div className="mx-10 px-2 text-center py-6">List of Items in Cart</div>
      <div className="w-6/12 m-auto text-center">
        <button
          onClick={clearCarts}
          className="p-2 rounded-lg bg-black text-white"
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1>Add items to card</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
