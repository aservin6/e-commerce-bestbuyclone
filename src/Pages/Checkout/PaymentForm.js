import React, { useState } from "react";
import { months, years } from "../../form-info-options";

const PaymentForm = () => {
  // Create a state to track whether the order has been placed
  const [orderHasBeenPlaced, setOrderHasBeenPlaced] = useState(false);

  // Each input has its own state along with some helper expressions
  const [cardNumber, setCardNumber] = useState("");
  const [cardNumberWasTouched, setCardNumberWasTouched] = useState(false);
  const cardNumberIsValid =
    cardNumber.trim() !== "" && cardNumber.trim().length === 12;
  const cardNumberIsInvalid = !cardNumberIsValid && cardNumberWasTouched;

  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryMonthWasTouched, setExpiryMonthWasTouched] = useState(false);
  const expiryMonthIsValid = expiryMonth.trim() !== "";
  const expiryMonthIsInvalid = !expiryMonthIsValid && expiryMonthWasTouched;

  const [expiryYear, setExpiryYear] = useState("");
  const [expiryYearWasTouched, setExpiryYearWasTouched] = useState(false);
  const expiryYearIsValid = expiryYear.trim() !== "";
  const expiryYearIsInvalid = !expiryYearIsValid && expiryYearWasTouched;

  const [cvv, setCvv] = useState("");
  const [cvvWasTouched, setCvvWasTouched] = useState(false);
  const cvvIsValid = cvv.trim() !== "" && cvv.trim().length === 3;
  const cvvIsInvalid = !cvvIsValid && cvvWasTouched;

  // Expression that returns true if conditions are met
  const paymentFormIsValid =
    cardNumberIsValid && expiryMonthIsValid && expiryYearIsValid && cvvIsValid;

  // When executed if the form is valid, setOrderHasBeenPlaced is set to true and the users cart is cleared
  // If the form is not valid the WasTouched states are set to true to trigger the error state for the
  // inputs that caused the error
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (paymentFormIsValid) {
      setOrderHasBeenPlaced(true);
      localStorage.removeItem("items");
      localStorage.removeItem("cartValue");
      localStorage.removeItem("savings");
      localStorage.removeItem("originalCartValue");
      localStorage.removeItem("totalItems");
    } else {
      setCardNumberWasTouched(true);
      setExpiryMonthWasTouched(true);
      setExpiryYearWasTouched(true);
      setCvvWasTouched(true);
    }
  };
  return (
    <>
      {/* Form is rendered when the orderHasBeenPlaced is false */}
      {!orderHasBeenPlaced && (
        <form className="space-y-6 text-dark">
          <div className="flex flex-col">
            <label className="text-dark font-bold">
              Credit or Debit Card Number
            </label>
            <input
              className={
                // Styling depending on if the input is valid or not
                cardNumberIsInvalid
                  ? `border border-[red] rounded-lg font-normal px-[.9375rem] h-9`
                  : `border border-opacity-50 border-dark rounded-lg font-normal px-[.9375rem] h-9 hover:border-bestBuyBlue`
              }
              type="text"
              maxLength={12}
              // State is updated on input change along with WasTouched state
              onChange={(e) => {
                setCardNumber(e.target.value);
                setCardNumberWasTouched(true);
              }}
              // WasTouched state is set to true onBlur
              onBlur={() => {
                setCardNumberWasTouched(true);
              }}
            />
            {/* If input is invalid, error message is rendered */}
            {cardNumberIsInvalid && (
              <label className="text-errorRed font-normal text-[13px]">
                Please enter a valid card number.
              </label>
            )}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col">
              <label className="text-dark font-bold">Expiration Month</label>
              <select
                className={
                  expiryMonthIsInvalid
                    ? `border border-[red] rounded-lg font-normal px-[.9375rem] h-9`
                    : `border border-opacity-50 border-dark rounded-lg font-normal px-[.9375rem] h-9 hover:border-bestBuyBlue`
                }
                name="expiryMonth"
                id="expiry-month"
                onChange={(e) => {
                  setExpiryMonth(e.target.value);
                }}
                onBlur={() => {
                  setExpiryMonthWasTouched(true);
                }}
              >
                <option value="">Month</option>
                {months.map((obj) => {
                  return (
                    <option key={obj.month} value={obj.month}>
                      {obj.month}
                    </option>
                  );
                })}
              </select>
              {expiryMonthIsInvalid && (
                <label className="text-errorRed font-normal text-[13px]">
                  Please select a valid expiration month.
                </label>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-dark font-bold">Expiration Year</label>
              <select
                className={
                  expiryYearIsInvalid
                    ? `border border-[red] rounded-lg font-normal px-[.9375rem] h-9`
                    : `border border-opacity-50 border-dark rounded-lg font-normal px-[.9375rem] h-9 hover:border-bestBuyBlue`
                }
                name="expiryYear"
                id="expiry-year"
                onChange={(e) => {
                  setExpiryYear(e.target.value);
                }}
                onBlur={() => {
                  setExpiryYearWasTouched(true);
                }}
              >
                <option value="">Year</option>
                {years.map((obj) => {
                  return (
                    <option key={obj.year} value={obj.year}>
                      {obj.year}
                    </option>
                  );
                })}
              </select>
              {expiryYearIsInvalid && (
                <label className="text-errorRed font-normal text-[13px]">
                  Please select a valid expiration year.
                </label>
              )}
            </div>
          </div>
          <div className="flex flex-col w-2/5">
            <label className="text-dark font-bold">Security Code</label>
            <input
              className={
                cvvIsInvalid
                  ? `border border-[red] rounded-lg font-normal px-[.9375rem] h-9`
                  : `border border-opacity-50 border-dark rounded-lg font-normal px-[.9375rem] h-9 hover:border-bestBuyBlue`
              }
              type="text"
              maxLength={3}
              onChange={(e) => {
                setCvv(e.target.value);
              }}
              onBlur={() => {
                setCvvWasTouched(true);
              }}
            />
            {cvvIsInvalid && (
              <label className="text-errorRed font-normal text-[13px]">
                Please enter a valid Security Code.
              </label>
            )}
          </div>
          <button
            onClick={handlePlaceOrder}
            className="font-bold bg-darkYellow w-full rounded-md py-2.5 hover:bg-bestBuyYellow"
          >
            Place Your Order
          </button>
        </form>
      )}
      {/* When the order is placed show the user their order has been placed successfully */}
      {orderHasBeenPlaced && (
        <div className="text-orderSuccess font-semibold text-2xl">
          <i className="fa-solid fa-circle-check"></i> Your order has been
          placed!
        </div>
      )}
    </>
  );
};

export default PaymentForm;
