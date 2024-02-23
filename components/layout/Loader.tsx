import React from 'react'

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-56 h-56 dark:bg-gray-800">
    <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div>
</div>
  )
}

export default Loader