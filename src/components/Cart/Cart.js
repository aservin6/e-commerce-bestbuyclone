import React, { useContext, useEffect } from "react";
import CartContext from "../../store/cart-context";
import Wrapper from "../UI/Wrapper";
import OrderSummary from "./OrderSummary";
import CartItem from "./CartItem";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  // Change title on page load
  useEffect(() => {
    document.title = "Cart - Best Buy";
  }, []);

  return (
    <Wrapper bgColor={"bg-lightGray"}>
      <div className="container mx-auto pt-5 grid lg:grid-cols-[70%_30%] md:py-10 gap-5 md:px-4">
        {/* If the cart has items render the items */}
        {cartCtx.cart.length > 0 ? (
          <>
            <section id="cart" className="px-3 w-full md:px-0">
              <ul className="flex flex-col space-y-5">
                {cartCtx.cart.map((product, index) => {
                  return <CartItem key={index} product={product} />;
                })}
              </ul>
            </section>
            <OrderSummary
              cartValue={cartCtx.cart_value}
              originalCartValue={cartCtx.original_cart_value}
              totalItems={cartCtx.total_items}
              savings={cartCtx.savings}
            />
          </>
        ) : (
          // Or if the cart has no items render that the cart is empty
          <>
            <p className="text-dark font-bold text-xl text-center md:text-left">
              Your cart is empty.
            </p>
            <OrderSummary
              cartValue={cartCtx.cart_value}
              totalItems={cartCtx.total_items}
            />
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default Cart;
