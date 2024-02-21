"use client";

import { IRoom } from "@/backend/models/room";
import StarRatings from "react-star-ratings";
import RoomImageSlider from "./RoomImageSlider";
import BookingDatePicker from "./BookingDatePicker";
import ListReview from "../reviews/ListReview";
import NewReview from "../reviews/NewReview";
import RoomFeatures from "./RoomFeatures";

interface Props {
  data: {
    room: IRoom;
  }
}
const RoomDetails = ({ data }: Props) => {
  const { room } = data;

  return (
    <div className="flex flex-col justify-center px-10 py-4 gap-2">
      <h2 className="text-2xl mt-5 text-blue-500 font-bold">{room.name}</h2>
      <p className="text-gray-500">{room.address}</p>

      <div className="mt-auto mb-3 items-center">
        <StarRatings
          rating={room?.ratings}
          starRatedColor="#e61e4d"
          numberOfStars={5}
          starDimension="22px"
          starSpacing="1px"
          name="rating"
        />
        <span className="ml-2 no-of-reviews">({room?.numOfReviews} Reviews)</span>
      </div>

      {/* room images */}
      <RoomImageSlider images={room.images} />

      <div className="row my-5">
        <div className="col-12 col-md-6 col-lg-">
          <h3 className="text-2xl text-blue-500 mb-4 font-semibold">Description</h3>
          <p>{room?.description}</p>

          {/* room features */}
          <RoomFeatures room={room} />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <BookingDatePicker room={room} />
          // Room Map - Todo
        </div>
      </div>

      {/* Reviews  */}
      <ListReview />
      <NewReview />

    </div>
  )
}

export default RoomDetails