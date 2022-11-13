import React from "react";

const OrderSummary = ({
  cartValue,
  originalCartValue,
  totalItems,
  savings,
}) => {
  // Create an order summary for the checkout page using the data passed in
  return (
    <section
      id="order-summary"
      className="bg-white border-dark border-opacity-30 px-3 h-fit border"
    >
      {totalItems > 0 && (
        <div className="flex flex-col h-full pt-3 pb-5">
          <h2 className="text-dark text-xl font-bold text-center border-b border-dark border-opacity-30 pb-2">
            Order Summary
          </h2>
          <div className="flex justify-between items-center text-dark text-[13px] pt-2">
            <span>Original Price</span>

            <span>${originalCartValue}</span>
          </div>
          <div className="flex justify-between items-center text-dark text-[13px] border-b border-dark border-opacity-30 pb-2">
            <span>Savings</span>

            <span>-${savings}</span>
          </div>
          <div className="flex justify-between items-center text-dark font-bold text-[17px] py-2">
            <span>Total</span>

            <span>${cartValue}</span>
          </div>
        </div>
      )}

      {totalItems < 1 && (
        <>
          <div className="flex flex-col h-full py-3">
            <h2 className="text-dark text-xl font-bold text-center border-b border-dark border-opacity-30">
              Order Summary
            </h2>
            <div className="flex justify-between items-center text-dark font-bold text-[17px] py-2">
              <span>Total</span>

              <span>${cartValue}</span>
            </div>
            <a
              className="bg-bestBuyBlue w-full flex justify-center mt-auto rounded-md py-3"
              href="/"
            >
              <span className="text-white font-bold text-[15px]">
                Continue Shopping
              </span>
            </a>
          </div>
        </>
      )}
    </section>
  );
};

export default OrderSummary;
