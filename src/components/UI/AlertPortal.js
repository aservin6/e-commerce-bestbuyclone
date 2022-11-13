import React, { useContext } from "react";
import { createPortal } from "react-dom";
import CartContext from "../../store/cart-context";

const ItemAddedAlert = () => {
  const cartCtx = useContext(CartContext);
  const showAlertStyling = "alert text-dark bg-bestBuyYellow shadow-lg absolute z-50 w-full top-16 -right-0 md:right-16 md:top-20 md:w-1/3 transition-all"
  return (
    // Create an Alert that renders when an item is added to the cart
    <div
      onClick={cartCtx.onCloseAlert}
      className={cartCtx.showAlert ? showAlertStyling : "alert text-dark bg-darkYellow shadow-lg absolute z-50 w-full -top-full right-0 md:-right-full md:top-20 transition-all"}
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Added to your cart!</span>
      </div>
    </div>
  );
};

const AlertPortal = () => {
  return (
    // Creates a portal that exists outside of the default "root"
    <>
      {createPortal(<ItemAddedAlert />, document.getElementById("alert-root"))}
    </>
  );
};

export default AlertPortal;
