import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Accordion from "../../components/UI/Accordion";
import Error from "../../components/UI/Error";
import Loading from "../../components/UI/Loading";
import Wrapper from "../../components/UI/Wrapper";
import ProductDisplay from "./ProductDisplay";
import ProductPricing from "./ProductPricing";
import RelatedProduct from "./RelatedProduct";

const ProductPage = () => {
  // Store the product id from the url using useParams
  const { id } = useParams();

  // Create a state that will store the product get request data
  const [product, setProduct] = useState([]);
  // Any related products will be stored in their own state
  const [relatedProducts, setRelatedProducts] = useState([]);

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // When the component loads, execute a get request and store the data
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://api.bestbuy.com/v1/products(sku=${id})?apiKey=${process.env.REACT_APP_API_KEY}&sort=name.asc&pageSize=1&format=json`
        );
        setProduct(data.products[0]);
        setRelatedProducts(
          // related product data is sliced to 5 shuffled
          data.products[0].productVariations
            .sort(() => Math.random() - 0.5)
            .slice(0, 5)
        );
        setIsLoading(false);
        // Change the title to the name of the product
        document.title = data.products[0].name + " | Best Buy";
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    getProduct();
  }, [id]);

  return (
    <>
      {isLoading && <Loading />}
      {error && <Error />}
      {/* If get request returns data, display the data, if not inform the user there is no data */}
      {product ? (
        <Wrapper bgColor={"bg-white"}>
          <div className="container px-3 py-4 mx-auto lg:px-0 md:py-10">
            <section
              id="product-section"
              className="grid text-dark md:gap-10 md:grid-cols-2"
            >
              <ProductDisplay product={product} />
              <ProductPricing product={product} />
            </section>
            {relatedProducts.length > 0 && (
              <section id="related-products" className="">
                <h3 className="py-2 font-bold border-b border-dark border-opacity-30 text-dark">
                  Related Products
                </h3>
                <ul className="grid grid-cols-2 pt-5 pb-10 gap-y-10 md:grid-cols-3 lg:flex lg:items-center">
                  {relatedProducts.map((item, index) => {
                    return (
                      <RelatedProduct key={index} item={item} sku={item.sku} />
                    );
                  })}
                </ul>
              </section>
            )}
            <section id="about-product" className="md:mr-auto md:w-2/3">
              <Accordion title={"Description"} content={product.longDescription} id={"description"} />
              <Accordion title={"What's Included"} object={product.includedItemList} id={"what's included"} />
            </section>
          </div>
        </Wrapper>
      ) : (
        <Wrapper>
          <p className="grid text-3xl font-bold text-center text-errorRed place-content-center h-96">
            Product can't be found using BestBuy api
          </p>
        </Wrapper>
      )}
    </>
  );
};

export default ProductPage;
