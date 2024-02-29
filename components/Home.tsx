'use client';

import React from 'react'
import RoomItem from './room/RoomItem';
import { IoArrowBackOutline } from "react-icons/io5";
import { IRoom } from '@/backend/models/room';
// import toast from 'react-hot-toast';
import CustomPagination from './layout/CustomPagination';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface Props {
  data: {
    success: boolean,
    resPerPage: number,
    fillteredRoomCount: number,
    rooms: IRoom[]
  }
}
const Home = ({ data } : Props) => {
    const { rooms, resPerPage, fillteredRoomCount } = data;
  const searchParams = useSearchParams();
  const location = searchParams.get('location');

  return (
    <div>
    <section id="rooms" className="m-5 flex flex-col">
        <h2 className="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white">
          {location ? `${rooms?.length} rooms in "${location}"` : "All Rooms"}
        </h2>
       <Link href="/search" className="flex flex-row items-center gap-2 text-left rtl:text-right text-gray-500 dark:text-gray-400 hover:text-sky-400 w-fit"> 
        <IoArrowBackOutline /> Back to Search
      </Link>

      
      <div className="flex flex-row justify-center w-full flex-wrap gap-4 mt-4">
          {rooms?.length === 0 ? (
            <div className="text-center">
              <h2>No Rooms Found</h2>
            </div>
          ) : (
            rooms?.map((room) => (
              <RoomItem key={room._id} room={room} />
            ))
          )}
      </div>
      </section>
   
      <CustomPagination resPerPage={resPerPage} filteredRoomsCount={fillteredRoomCount} />
      </div>
  )
}

export default Home