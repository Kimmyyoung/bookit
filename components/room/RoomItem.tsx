"use client";

import React from 'react'
import StarRatings from "react-star-ratings";
import { IRoom } from "@/backend/models/room";
import Link from 'next/link';

interface Props {
  room: IRoom;
}
const RoomItem = ({ room } : Props) => {
  return (
    <>
    <div className="col-sm-12 w-fit col-md-6 col-lg-3 my-3 d-flex">
    <div className="mt-20 flex w-96 flex-col rounded-xl bg-gray-50 bg-clip-border text-gray-700 shadow-md">
    <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
    <img
      src={room?.images?.length > 0 ? room.images[0].url : "/images/room-default.jpg"}
      alt={room?.name}
    />
  </div>
  <div className="p-6 pb-2">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased h-14">
      {room?.name}
    </h5>
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
        <b>$ {room?.pricePerNight}</b> / night
    </p>
  </div>
  
  <div className="px-6 mt-5">
  <StarRatings
                rating={5}
                starRatedColor="#e61e4d"
                numberOfStars={5}
                starDimension="18px"
                starSpacing="1px"
                name="rating"
              />
            <span className="ml-2">({room?.numOfReviews} reviews)</span>        
  </div>
  
          <div className="p-6 pt-2">
            <Link href={`/room/${room._id}`}>
    <button
              className="select-none rounded-lg bg-sky-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-sky-500/20 transition-all hover:shadow-lg hover:shadow-sky-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
    >
      View Details
              </button>
              </Link>
  </div>
        </div>
        </div>
    </>
    
  )
}

export default RoomItem