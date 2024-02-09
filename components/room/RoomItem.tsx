"use client";

import React from 'react'
import StarRatings from "react-star-ratings";

const RoomItem = () => {
  return (
    <>
    <div className="mt-20 flex w-96 flex-col rounded-xl bg-gray-50 bg-clip-border text-gray-700 shadow-md">
    <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
    <img
      src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
      alt="img-blur-shadow"
    />
  </div>
  <div className="p-6 pb-2">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      Room Name
    </h5>
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
     <b>$100</b> / night
    </p>
  </div>
  
  <div className="px-6">
  <StarRatings
                rating={5}
                starRatedColor="#e61e4d"
                numberOfStars={5}
                starDimension="18px"
                starSpacing="1px"
                name="rating"
              />
    <span className="ml-2">(50 Reviews)</span>        
  </div>
  
  <div className="p-6 pt-2">
    <button
      className="select-none rounded-lg bg-sky-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-sky-500/20 transition-all hover:shadow-lg hover:shadow-sky-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      Read More
    </button>
  </div>
</div>
    </>
    
  )
}

export default RoomItem