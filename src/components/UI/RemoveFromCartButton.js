import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

const RemoveFromCartButton = ({ item }) => {
  const cartCtx = useContext(CartContext);
  return (
    // Create a button that removes the targeted item from the cart onClick
    <button
      className="text-bestBuyBlue text-[13px] hover:text-dark self-end md:text-sm"
      onClick={() => {
        cartCtx.onRemoveItem(item);
      }}
    >
      Remove Item
    </button>
  );
};

export default RemoveFromCartButton;
