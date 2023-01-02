import React from "react";

const ProductCarousel = ({ product }) => {
  return (
    <>
      {product.images && (
        <>
          <div className="w-2/3 mx-auto carousel">
            {product.images.map((image, index) => {
              // If conditions are met the image is not rendered
              if (image.href.includes("prescaled") || image.width < 500 || image.height < 500) {
                // eslint-disable-next-line
                return;
              }
              return (
                <div key={index} className="w-full carousel-item md:py-10">
                  <img
                    id={`item${index}`}
                    src={image.href}
                    className="h-[200px] mx-auto object-contain mb-auto xl:h-[350px]"
                    alt="product carousel component"
                  />
                </div>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center w-full gap-2 py-2 mx-auto lg:pb-10">
            {product.images.map((image, index) => {
              // If conditions are met the image is not rendered
              if (image.href.includes("prescaled") || image.width < 500 || image.height < 500) {
                // eslint-disable-next-line
                return;
              }
              return (
                <a
                  key={index}
                  href={`#item${index}`}
                  className="border border-dark border-opacity-30"
                  aria-label="switch image"
                >
                  <img
                    className="h-[32px] w-[32px] mx-auto object-contain p-0.5 lg:h-[64px] lg:w-[64px]"
                    src={image.href}
                    alt=""
                  />
                </a>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default ProductCarousel;
