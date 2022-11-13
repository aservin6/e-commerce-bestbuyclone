import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

const AddToCartButton = ({ item }) => {
  const cartCtx = useContext(CartContext);
  return (
    // Renders a button that adds the item to the cart onClick
    <button
      className="bg-bestBuyYellow font-bold flex items-center rounded-md text-sm py-1 px-4 space-x-2 w-fit md:py-2 md:px-5 md:space-x-3"
      onClick={() => {
        cartCtx.onAddItem(item);
      }}
    >
      <i className="fa-solid fa-cart-shopping text-dark"></i>
      <span>Add to Cart</span>
    </button>
  );
};

export default AddToCartButton;
