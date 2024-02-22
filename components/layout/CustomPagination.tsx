"use client"

import React from 'react'
import Pagination from 'react-js-pagination'

import { useSearchParams, useRouter } from "next/navigation";

interface Props {
  resPerPage: number,
  filteredRoomsCount: number,
}

const CustomPagination = ({ resPerPage, filteredRoomsCount }: Props) => {

  const router = useRouter();
  const searchParams = useSearchParams();
  let currentPage = searchParams.get('page') || 1;
  currentPage = Number(currentPage);

  let queryParams;

  const handlePageChange = (pageNumber: string) => {
    if (typeof window !== 'undefined') {
      queryParams = new URLSearchParams(window.location.search);

      if (queryParams.has('page')) {
        queryParams.set('page', pageNumber);
      } else {
        queryParams.append('page', pageNumber);
      }

      const path = `${window.location.pathname}?${queryParams.toString()}`;
      router.push(path);
    }
  }

  return (
    <div className="flex justify-center mt-4">
      {resPerPage < filteredRoomsCount && (
      <Pagination
            activePage={currentPage}
            itemsCountPerPage={resPerPage}
          totalItemsCount={filteredRoomsCount}
          prevPageText={"<"}
          nextPageText={">"}  
        onChange={handlePageChange}
        innerClass="flex flex-wrap justify-center list-none"
        itemClass="bg-gray-200 px-4 py-2 mr-2 rounded"
        linkClass="text-blue-500 hover:text-blue-700"
        activeClass="bg-blue-500 text-white"
        activeLinkClass="bg-blue-500 text-white"
        disabledClass="bg-gray-300 text-gray-500"
          />
        
       )}
    </div>
  )
}

export default CustomPagination
