import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import Home from "./Pages/Home/Home";
import ProductPage from "./Pages/ProductPage/ProductPage";
import SearchPage from "./Pages/SearchPage/SearchPage";
import { categories } from "./categories";
import Cart from "./components/Cart/Cart";
import AlertPortal from "./components/UI/AlertPortal";
import CheckoutPage from "./Pages/Checkout/CheckoutPage";

const App = () => {
  return (
    <>
      <AlertPortal />
      <Router>
        <Routes>
          {/* Maps over categories array and creates a Route for each category object */}
          {categories.map((cat) => {
            return (
              <Route
                path={cat.url}
                key={cat.name}
                element={<CategoryPage api={cat.api} title={cat.name} />}
              />
            );
          })}
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/search-page" element={<SearchPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:id" element={<ProductPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
