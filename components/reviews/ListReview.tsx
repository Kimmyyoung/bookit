import React from "react";
import Avatar from 'react-avatar';
import StarRatings from "react-star-ratings";

const ListReview = () => {
  return (
    <div className="reviews w-75 mb-5">
      <h3>3 Reviews</h3>
      <hr />
      <div className="review-card my-3">
        <div className="flex flex-row gap-4">
          <div>
            <Avatar
              facebookId="100008343750912"
              size="100"
              className="rounded-full"
            />
          </div>
          <div className="col-9 col-lg-11">
            <StarRatings 
              rating={4}
              starRatedColor="#e61e4d"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="1px"
              name="rating"
            />
            <p className="review_user mt-1">by John Doe</p>
            <p className="review_comment">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              consectetur, mi nec tristique vehicula, elit tellus vulputate ex,
              nec bibendum libero elit at orci.
            </p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ListReview;