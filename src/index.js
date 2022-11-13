import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { CartContextProvider } from "./store/cart-context";
import { SearchContextProvider } from "./store/search-context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <SearchContextProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </SearchContextProvider>
);
