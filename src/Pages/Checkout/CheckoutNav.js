import React from "react";
import BrandLogo from "../../components/UI/BrandLogo";

const CheckoutNav = () => {
  return (
    // Create a Navbar for the checkout page
    <nav className="bg-bestBuyBlue">
      <div className="container flex items-center px-4 py-3 mx-auto md:gap-10 lg:w-1/2">
        <BrandLogo />
        <span className="text-white text-3xl pl-2">Checkout</span>
        <a className="ml-auto text-white text-[13px]" href="/cart">Return to Cart</a>
      </div>
    </nav>
  );
};

export default CheckoutNav;
