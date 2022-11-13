import React, { useEffect, useState } from "react";
import { states } from "../../form-info-options";
import PaymentForm from "./PaymentForm";

const OrderForm = () => {
  // Create a state that tracks whether shipping details are needed or not
  const [shippingDetailsNeeded, setShippingDetailsNeeded] = useState(true);
  // Create a state that tracks whether payment info is needed or not
  const [paymentInfoNeeded, setPaymentInfoNeeded] = useState(false);
  // Helper variable that holds the condition to showStoredShippingInfo
  const showStoredShippingInfo = !shippingDetailsNeeded && !paymentInfoNeeded;
  // Helper variable that holds the condition to showPaymentInfoScreen
  const showPaymentInfoScreen = paymentInfoNeeded && !shippingDetailsNeeded;
  // Create a state that tracks whether to saveInfo or not (shipping information)
  const [saveInfo, setSaveInfo] = useState(false);

  // States are created for each input field in the form along with whether they have been touched by the user
  // and helper variables to determine if the inputs are valid
  const [firstName, setFirstName] = useState("");
  const [firstNameWasTouched, setFirstNameWasTouched] = useState(false);
  const firstNameIsValid = firstName.trim() !== "";
  const firstNameIsInvalid = !firstNameIsValid && firstNameWasTouched;

  const [lastName, setLastName] = useState("");
  const [lastNameWasTouched, setLastNameWasTouched] = useState(false);
  const lastNameIsValid = lastName.trim() !== "";
  const lastNameIsInvalid = !lastNameIsValid && lastNameWasTouched;

  const [address, setAddress] = useState("");
  const [addressWasTouched, setAddressWasTouched] = useState(false);
  const addressIsValid = address.trim() !== "";
  const addressIsInvalid = !addressIsValid && addressWasTouched;

  const [city, setCity] = useState("");
  const [cityWasTouched, setCityWasTouched] = useState(false);
  const cityIsValid = city.trim() !== "";
  const cityIsInvalid = !cityIsValid && cityWasTouched;

  const [state, setState] = useState("");
  const [stateWasTouched, setStateWasTouched] = useState(false);
  const stateIsValid = state.trim().length > 0;
  const stateIsInvalid = !stateIsValid && stateWasTouched;

  const [zip, setZip] = useState("");
  const [zipWasTouched, setZipWasTouched] = useState(false);
  const zipIsValid = zip.trim() !== "";
  const zipIsInvalid = !zipIsValid && zipWasTouched;

  // Expression that returns true if conditions are met
  const orderFormIsValid =
    firstNameIsValid &&
    lastNameIsValid &&
    addressIsValid &&
    cityIsValid &&
    stateIsValid &&
    zipIsValid;

  // When the component loads, if the shippingInfo item exists in localStorage set the input states to the stored data
  useEffect(() => {
    if (localStorage.getItem("shippingInfo")) {
      const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));
      setFirstName(shippingInfo.firstName);
      setLastName(shippingInfo.lastName);
      setAddress(shippingInfo.address);
      setCity(shippingInfo.city);
      setZip(shippingInfo.zip);
      setState(shippingInfo.state);
      setShippingDetailsNeeded(false);
    }
  }, []);

  // Handle the submit shipping details
  const handleSubmitShippingInformation = (e) => {
    // If the user wants to save their shipping information and every input is valid
    //  save info to localStorage and setShippingDetailsNeeded is set to false
    if (saveInfo && orderFormIsValid) {
      e.preventDefault();
      localStorage.setItem(
        "shippingInfo",
        JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          address: address,
          city: city,
          state: state,
          zip: zip,
        })
      );
      setShippingDetailsNeeded(false);
      // If the user doesn't want to save their shipping information and every input is
      // valid only setShippingDetailsNeeded is set to false
    } else if (orderFormIsValid) {
      e.preventDefault();
      setShippingDetailsNeeded(false);
    } else {
      // If any input is invalid, the WasTouched state is set to true to
      // trigger the error state for the input
      e.preventDefault();
      setFirstNameWasTouched(true);
      setLastNameWasTouched(true);
      setAddressWasTouched(true);
      setCityWasTouched(true);
      setZipWasTouched(true);
      setStateWasTouched(true);
      return;
    }
  };

  return (
    <div className="py-4">
      {/* If shipping details are needed render a form to get the info */}
      {shippingDetailsNeeded && (
        <form className="text-dark flex flex-col font-bold text-[15px] space-y-5">
          <label className="font-bold text-dark">Shipping Address</label>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col">
              <label>First Name</label>
              <input
                // For each input, set their state on each key press and
                //  set their WasTouched state to true
                onChange={(e) => {
                  setFirstName(e.target.value);
                  setFirstNameWasTouched(true);
                }}
                // OnBlur, set wasTouched state to true
                onBlur={() => {
                  setFirstNameWasTouched(true);
                }}
                className={
                  // For each input style for a valid and invalid state
                  firstNameIsInvalid
                    ? `border border-[red] rounded-lg font-normal px-[.9375rem] h-9`
                    : `border border-opacity-50 border-dark rounded-lg font-normal px-[.9375rem] h-9 hover:border-bestBuyBlue`
                }
                type="text"
                name="firstName"
                value={firstName}
              />
              {/* If an input is invalid show the user */}
              {firstNameIsInvalid && (
                <label className="text-errorRed font-normal text-[13px]">
                  Please enter a first name.
                </label>
              )}
            </div>
            <div className="flex flex-col">
              <label>Last Name</label>
              <input
                onChange={(e) => {
                  setLastName(e.target.value);
                  setLastNameWasTouched(true);
                }}
                onBlur={() => {
                  setLastNameWasTouched(true);
                }}
                className={
                  lastNameIsInvalid
                    ? `border border-[red] rounded-lg font-normal px-[.9375rem] h-9`
                    : `border border-opacity-50 border-dark rounded-lg font-normal px-[.9375rem] h-9 hover:border-bestBuyBlue`
                }
                type="text"
                name="lastName"
                value={lastName}
              />
              {lastNameIsInvalid && (
                <label className="text-errorRed font-normal text-[13px]">
                  Please enter a last name.
                </label>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <label>Address</label>
            <input
              onChange={(e) => {
                setAddress(e.target.value);
                setAddressWasTouched(true);
              }}
              onBlur={() => {
                setAddressWasTouched(true);
              }}
              className={
                addressIsInvalid
                  ? `border border-[red] rounded-lg font-normal px-[.9375rem] h-9`
                  : `border border-opacity-50 border-dark rounded-lg font-normal px-[.9375rem] h-9 hover:border-bestBuyBlue`
              }
              type="text"
              name="address"
              value={address}
            />
            {addressIsInvalid && (
              <label className="text-errorRed font-normal text-[13px]">
                Please enter an address.
              </label>
            )}
          </div>
          <div className="grid grid-cols-[1fr_25%_25%] gap-3">
            <div className="flex flex-col">
              <label>City</label>
              <input
                onChange={(e) => {
                  setCity(e.target.value);
                  setCityWasTouched(true);
                }}
                onBlur={() => {
                  setCityWasTouched(true);
                }}
                className={
                  cityIsInvalid
                    ? `border border-[red] rounded-lg font-normal px-[.9375rem] h-9`
                    : `border border-opacity-50 border-dark rounded-lg font-normal px-[.9375rem] h-9 hover:border-bestBuyBlue`
                }
                type="text"
                name="city"
                value={city}
              />
              {cityIsInvalid && (
                <label className="text-errorRed font-normal text-[13px]">
                  Please enter a city.
                </label>
              )}
            </div>
            <div className="flex flex-col">
              <label>State</label>
              <select
                className={
                  stateIsInvalid
                    ? `border border-[red] rounded-lg font-normal px-[.9375rem] h-9`
                    : `border border-opacity-50 border-dark rounded-lg font-normal px-[.9375rem] h-9 hover:border-bestBuyBlue`
                }
                name="state"
                id="state-select"
                onChange={(e) => {
                  setState(e.target.value);
                  setStateWasTouched(true);
                }}
                onBlur={() => {
                  setStateWasTouched(true);
                }}
                value={state}
              >
                <option value={""}>Select</option>
                {states.map((state) => {
                  return (
                    <option key={state.code} value={state.code}>
                      {state.code}
                    </option>
                  );
                })}
              </select>
              {stateIsInvalid && (
                <label className="text-errorRed font-normal text-[13px]">
                  Please select a state.
                </label>
              )}
            </div>
            <div className="flex flex-col">
              <label>ZIP Code</label>
              <input
                onChange={(e) => {
                  setZip(e.target.value);
                  setZipWasTouched(true);
                }}
                onBlur={() => {
                  setZipWasTouched(true);
                }}
                className={
                  zipIsInvalid
                    ? `border border-[red] rounded-lg font-normal px-[.9375rem] h-9`
                    : `border border-opacity-50 border-dark rounded-lg font-normal px-[.9375rem] h-9 hover:border-bestBuyBlue`
                }
                type="text"
                pattern="[0-9]{5}"
                maxLength={5}
                name="zip"
                value={zip}
              />
              {zipIsInvalid && (
                <label className="text-errorRed font-normal text-[13px]">
                  Please enter a zip code.
                </label>
              )}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="save-info"
                  id="save-info-checkbox"
                  className="h-[18px] w-[18px] border-lg border-dark border-opacity-30"
                  onChange={(e) => {
                    setSaveInfo(e.target.checked);
                  }}
                />
                <label className="py-[10px] pl-[10px] text-[13px] font-normal">
                  Save this information for next time
                </label>
              </div>
              <button
                onClick={handleSubmitShippingInformation}
                className="bg-bestBuyBlue text-white py-1.5 rounded-lg mt-5"
                type="submit"
              >
                Apply
              </button>
            </div>
          </div>
        </form>
      )}

      {/* If showStoredShippingInfo is true show the user their shipping details */}
      {showStoredShippingInfo && (
        <>
          <label className="font-bold text-dark">Shipping Address</label>
          <div className="border border-opacity-30 border-dark w-fit p-2 text-[15px] my-5 rounded-md text-dark">
            <p>
              {firstName} {lastName}
            </p>
            <p>{address.toUpperCase()}</p>
            <p>
              {city.toUpperCase()}, {state} {zip}
            </p>
          </div>
          <button
            className="text-bestBuyBlue text-[13px]"
            // Create a button that deletes or resets any shipping information
            // and allows the user to input new information
            onClick={() => {
              localStorage.removeItem("shippingInfo");
              setFirstName("");
              setFirstNameWasTouched(false);
              setLastName("");
              setLastNameWasTouched(false);
              setAddress("");
              setAddressWasTouched(false);
              setCity("");
              setCityWasTouched(false);
              setState("");
              setStateWasTouched(false);
              setZip("");
              setZipWasTouched(false);
              setSaveInfo(false);
              setShippingDetailsNeeded(true);
              setFirstNameWasTouched(false);
            }}
          >
            Use another address
          </button>
          {/* Create a button that sets setPaymentInfoNeeded to true */}
          <button
            onClick={() => {
              setPaymentInfoNeeded(true);
            }}
            className="text-white bg-bestBuyBlue rounded-md font-bold text-[15px] w-full py-3 mt-5"
          >
            Continue to Payment Information
          </button>
        </>
      )}
      {/* When showPaymentInfoScreen is true, render the payment form */}
      {showPaymentInfoScreen && <PaymentForm />}
    </div>
  );
};

export default OrderForm;
