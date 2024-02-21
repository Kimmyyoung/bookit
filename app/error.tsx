'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
    error: Error;
    reset?: () => void;
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div>
   
        <div className="text-center mt-10">
          <div className="flex flex-col items-center">
            <div className="text-blue-500 font-bold text-7xl">
                404
            </div>

            <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
                This page does not exist
            </div>

            <div className="text-gray-400 font-medium text-sm md:text-sm lg:text-sm mt-8">
                {error?.message}
            </div>
        </div>
        </div>

        <div className="flex py-4 w-full items-center justify-center">
        <button className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-blue-500 text-lg font-bold text-white" onClick={()=> reset?.()}>
          Try again!
          <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
        </div>
    </div>
  )
}