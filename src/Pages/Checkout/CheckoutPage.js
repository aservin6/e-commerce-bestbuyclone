import React, { useContext, useEffect } from "react";
import CheckoutItem from "../Checkout/CheckoutItem";
import CheckoutOrderSummary from "../Checkout/CheckoutOrderSummary";
import CartContext from "../../store/cart-context";
import CheckoutNav from "./CheckoutNav";
import OrderForm from "./OrderForm";

// When the component loads change the title
const CheckoutPage = () => {
  useEffect(() => {
    document.title = "Cart - Best Buy";
  }, []);

  // Store context in a vairable
  const cartCtx = useContext(CartContext);

  return (
    <div className="bg-lightGray min-h-screen">
      <CheckoutNav />
      <main className="mx-auto container lg:w-1/2">
        <h1 className="px-2 font-bold text-3xl text-dark py-5">
          Getting your order
        </h1>
        <div className="grid lg:grid-cols-[70%_30%] gap-5">
          {/* If the cart has items inside render a list of those items */}
          {cartCtx.cart.length > 0 ? (
            <>
              <section id="checkout" className="w-full bg-white px-3 md:px-6 border">
                <ul className="flex flex-col border-b border-opacity-30 border-dark py-6 space-y-3">
                  <h3 className="text-dark font-bold text-xl">
                    Shipping details
                  </h3>
                  {/* Map over the cart items and return a CheckoutItem for each product */}
                  {cartCtx.cart.map((product, index) => {
                    return <CheckoutItem key={index} product={product} />;
                  })}
                </ul>
                <OrderForm />
              </section>
              <CheckoutOrderSummary
                cartValue={cartCtx.cart_value}
                originalCartValue={cartCtx.original_cart_value}
                totalItems={cartCtx.total_items}
                savings={cartCtx.savings}
              />
            </>
          ) : (
            // If the cart has no items, inform the user that their cart is empty
            <>
              <p className="text-dark font-bold text-xl text-center md:text-left">
                Your cart is empty.
              </p>
              <CheckoutOrderSummary
                cartValue={cartCtx.cart_value}
                totalItems={cartCtx.total_items}
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
