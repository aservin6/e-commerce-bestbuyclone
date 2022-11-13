import React from "react";

const RatingStars = ({ reviewAvg }) => {
  return (
    // Render a set of rating stars based on the reviewAvg value
    <div className={`flex items-center`}>
      {reviewAvg === 5 ? (
        <>
          <i className="fa-solid fa-star text-darkYellow"></i>
          <i className="fa-solid fa-star text-darkYellow"></i>
          <i className="fa-solid fa-star text-darkYellow"></i>
          <i className="fa-solid fa-star text-darkYellow"></i>
          <i className="fa-solid fa-star text-darkYellow"></i>
        </>
      ) : (
        <></>
      )}
      {reviewAvg >= 4.5 && reviewAvg < 5 ? (
        <>
          <i className="fa-solid fa-star text-darkYellow"></i>
          <i className="fa-solid fa-star text-darkYellow"></i>
          <i className="fa-solid fa-star text-darkYellow"></i>
          <i className="fa-solid fa-star text-darkYellow"></i>
          <i className="fa-solid fa-star-half-stroke text-darkYellow"></i>
        </>
      ) : (
        <></>
      )}
      {reviewAvg >= 4 && reviewAvg < 4.5 ? (
        <>
          <i className="fa-solid fa-star text-darkYellow"></i>
          <i className="fa-solid fa-star text-darkYellow"></i>
          <i className="fa-solid fa-star text-darkYellow"></i>
          <i className="fa-solid fa-star text-darkYellow"></i>
          <i className="fa-regular fa-star text-darkYellow"></i>
        </>
      ) : (
        <></>
      )}
      {reviewAvg >= 3.5 && reviewAvg < 4 ? (
        <>
          <i className="fa-solid fa-star text-darkYellow"></i>
          <i className="fa-solid fa-star text-darkYellow"></i>
          <i className="fa-solid fa-star text-darkYellow"></i>
          <i className="fa-solid fa-star-half-stroke text-darkYellow"></i>
          <i className="fa-regular fa-star text-darkYellow"></i>
        </>
      ) : (
        <></>
      )}
      {reviewAvg >= 3 && reviewAvg < 3.5 ? (
        <>
          <i className="fa-solid fa-star text-darkYellow"></i>
          <i className="fa-solid fa-star text-darkYellow"></i>
          <i className="fa-solid fa-star text-darkYellow"></i>
          <i className="fa-regular fa-star text-darkYellow"></i>
          <i className="fa-regular fa-star text-darkYellow"></i>
        </>
      ) : (
        <></>
      )}
      {reviewAvg >= 2.5 && reviewAvg < 3 ? (
        <>
          <i className="fa-solid fa-star text-darkYellow"></i>
          <i className="fa-solid fa-star text-darkYellow"></i>
          <i className="fa-solid fa-star-half-stroke text-darkYellow"></i>
          <i className="fa-regular fa-star text-darkYellow"></i>
          <i className="fa-regular fa-star text-darkYellow"></i>
        </>
      ) : (
        <></>
      )}
      {reviewAvg >= 2 && reviewAvg < 2.5 ? (
        <>
          <i className="fa-solid fa-star text-darkYellow"></i>
          <i className="fa-solid fa-star text-darkYellow"></i>
          <i className="fa-regular fa-star text-darkYellow"></i>
          <i className="fa-regular fa-star text-darkYellow"></i>
          <i className="fa-regular fa-star text-darkYellow"></i>
        </>
      ) : (
        <></>
      )}
      {reviewAvg >= 1.5 && reviewAvg < 2 ? (
        <>
          <i className="fa-solid fa-star text-darkYellow"></i>
          <i className="fa-solid fa-star-half-stroke text-darkYellow"></i>
          <i className="fa-regular fa-star text-darkYellow"></i>
          <i className="fa-regular fa-star text-darkYellow"></i>
          <i className="fa-regular fa-star text-darkYellow"></i>
        </>
      ) : (
        <></>
      )}
      {reviewAvg >= 1 && reviewAvg < 1.5 ? (
        <>
          <i className="fa-solid fa-star text-darkYellow"></i>
          <i className="fa-regular fa-star text-darkYellow"></i>
          <i className="fa-regular fa-star text-darkYellow"></i>
          <i className="fa-regular fa-star text-darkYellow"></i>
          <i className="fa-regular fa-star text-darkYellow"></i>
        </>
      ) : (
        <></>
      )}
      {reviewAvg >= 0.5 && reviewAvg < 1 ? (
        <>
          <i className="fa-solid fa-star-half-stroke text-darkYellow"></i>
          <i className="fa-regular fa-star text-darkYellow"></i>
          <i className="fa-regular fa-star text-darkYellow"></i>
          <i className="fa-regular fa-star text-darkYellow"></i>
          <i className="fa-regular fa-star text-darkYellow"></i>
        </>
      ) : (
        <></>
      )}
      {reviewAvg >= 0 && reviewAvg < 0.5 ? (
        <>
          <i className="fa-regular fa-star text-darkYellow"></i>
          <i className="fa-regular fa-star text-darkYellow"></i>
          <i className="fa-regular fa-star text-darkYellow"></i>
          <i className="fa-regular fa-star text-darkYellow"></i>
          <i className="fa-regular fa-star text-darkYellow"></i>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default RatingStars;
