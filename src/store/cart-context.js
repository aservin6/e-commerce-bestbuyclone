import React, { useState, createContext, useEffect } from "react";

// Default cart context
const CartContext = createContext({
  cart: [],
  original_cart_value: 0,
  cart_value: 0,
  savings: 0,
  total_items: 0,
  onAddItem: () => {},
  onRemoveItem: () => {},
  onCloseAlert: () => {},
  showAlert: false,
});

export const CartContextProvider = ({ children }) => {
  // Create some state to store cart items
  const [items, setItems] = useState([]);
  // Create some state to keep track of the total amount of cart items
  const [totalItems, setTotalItems] = useState(0);
  // Create some state to keep track of the carts value after savings
  const [cartValue, setCartValue] = useState(0);
  // Create some state to keep track of the original cart value
  const [originalCartValue, setOriginalCartValue] = useState(0);
  // Create some state to keep track of the savings
  const [savings, setSavings] = useState(0);
  // Create some state tracks when the addToCart alert is shown
  const [showAlert, setShowAlert] = useState(false);

  // When the component loads if localStorage has more than 1 item the cart
  // states are set to the localStorage data items
  useEffect(() => {
    if (localStorage.length > 1) {
      setItems(JSON.parse(localStorage.getItem("items")));
      setTotalItems(localStorage.getItem("totalItems"));
      setCartValue(localStorage.getItem("cartValue"));
      setOriginalCartValue(localStorage.getItem("originalCartValue"));
      setSavings(localStorage.getItem("savings"));
    }
  }, []);

  // When executed the items and other variables states are updated by adding the new item
  const addItemHandler = (item) => {

    const newItemList = [...items, item];
    setItems(newItemList);
    setTotalItems(newItemList.length);


    const total = newItemList.reduce((prev, curr) => prev + curr.salePrice, 0);
    setCartValue(total.toFixed(2));

    const originalTotal = newItemList.reduce(
      (prev, curr) => prev + curr.regularPrice,
      0
    );
    setCartValue(originalTotal.toFixed(2));
    setSavings(originalTotal - total);
    
    // Cart values are saved to localStorage
    localStorage.setItem("items", JSON.stringify(newItemList));
    localStorage.setItem("totalItems", newItemList.length);
    localStorage.setItem("cartValue", total.toFixed(2));
    localStorage.setItem("originalCartValue", originalTotal.toFixed(2));
    localStorage.setItem("savings", (originalTotal - total).toFixed(2));
    
    // Alert is shown for 3 seconds when item is added
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000)
  };

  // When executed the items and other variables states are updated by removing the targeted item
  const removeItemHandler = (product) => {
    const newItemList = items.filter((item) => {
      return item !== product;
    });
    setItems(newItemList);
    setTotalItems(newItemList.length);

    const total = newItemList.reduce((prev, curr) => prev + curr.salePrice, 0);
    setCartValue(total.toFixed(2));

    const originalTotal = newItemList.reduce(
      (prev, curr) => prev + curr.regularPrice,
      0
    );
    setCartValue(originalTotal.toFixed(2));

    setSavings(originalTotal - total);

    // Local storaged is saved with updated data
    localStorage.setItem("items", JSON.stringify(newItemList));
    localStorage.setItem("totalItems", newItemList.length);
    localStorage.setItem("cartValue", total.toFixed(2));
    localStorage.setItem("originalCartValue", originalTotal.toFixed(2));
    localStorage.setItem("savings", (originalTotal - total).toFixed(2));
  };

  // Alert can be closed by clicking on alert if user desires
  const closeAlertHandler = () => {
    setShowAlert(false);
  }

  // CartContextProvider with key values defined above
  return (
    <CartContext.Provider
      value={{
        cart: items,
        original_cart_value: originalCartValue,
        cart_value: cartValue,
        savings: savings,
        total_items: totalItems,
        onAddItem: addItemHandler,
        onRemoveItem: removeItemHandler,
        onCloseAlert: closeAlertHandler,
        showAlert: showAlert,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
