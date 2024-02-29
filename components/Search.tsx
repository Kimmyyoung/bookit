"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Search = () => {

  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("1");
  const [roomType, setRoomType] = useState("King");
  const router = useRouter();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const queryString = [
      location && `location=${encodeURIComponent(location)}`,
      guests && `guests=${encodeURIComponent(guests)}`,
      roomType && `roomType=${encodeURIComponent(roomType)}`,
    ]
      .filter(Boolean)
      .join("&");
    
    console.log(queryString);

    router.push(`/${queryString}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mx-auto w-fit">Search</h1>


      <form className="max-w-sm mx-auto" onSubmit={submitHandler}>
      <div className="mb-5">
    <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
          <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ex) Seoul"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required />
        </div>
        
  <div className="mb-5">
  <label htmlFor="noofguests" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number of Guests</label>
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
          >
  {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
  </select>
        </div>
        
  <div className="mb-5">
  <label htmlFor="roomtype" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Room Type</label>
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          >
  {["King", "Single", "Twins"].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
  </select>
  </div>
        
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
      <Link href="/" className="flex flex-row items-center mx-auto gap-2 text-left rtl:text-right text-gray-500 dark:text-gray-400 hover:text-sky-400 w-fit">
        <h2 className="w-fit mt-4 text-gray-500">Go Back to Home</h2>
      </Link>
    </div>
  )
}

export default Search