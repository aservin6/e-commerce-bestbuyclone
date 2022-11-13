import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

const CartButton = () => {
  const cartCtx = useContext(CartContext);
  return (
    // render a link that takes you to the Cart 
    <a
      href="/cart"
      className="relative px-2 hover:cursor-pointer md:flex md:items-center md:space-x-2 md:ml-auto"
    >
      <i className="fa-solid fa-cart-shopping text-white text-2xl"></i>
      <span className="hidden text-white text-lg font-bold hover:underline md:block">
        Cart
      </span>
      {cartCtx.total_items > 0 && (
        <div className="flex items-center justify-center text-xs font-bold w-5 h-5 bg-bestBuyYellow rounded-full text-dark absolute -right-3 top-1 -translate-x-1/2 -translate-y-1/2 md:left-6">
          {cartCtx.total_items}
        </div>
      )}
    </a>
  );
};

export default CartButton;
