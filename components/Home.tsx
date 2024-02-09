import React from 'react'
import RoomItem from './room/RoomItem';

const Home = () => {
  return (
    <div>
    <section id="rooms" className="m-5">
      <h2 className="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white">All Rooms</h2>
      <a href="/search" className="text-left rtl:text-right text-gray-500 dark:text-gray-400">
        Back to Search
      </a>
      <div className="row mt-4">
        <RoomItem />
      </div>
    </section>
  </div>
  )
}

export default Home