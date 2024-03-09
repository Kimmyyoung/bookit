'use client';
import { useEffect, useState } from "react";
import Link from "next/link"
import ThemeSwitcher from "../ThemeSwitcher";
import { signOut, useSession } from 'next-auth/react';
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setIsAuthenticated, setUser } from "@/redux/feature/userSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth);
  const { data } = useSession();
  const [show, setShow] = useState(false);
  
  console.log(user);
  
  useEffect(() => {
    if (data) {
      dispatch(setUser(data?.user));
      dispatch(setIsAuthenticated(true));
    }
  }, [data]);
  
  const logoutHandler = () => {
    signOut();
  };
  
    return (
    <>
    <header>
    <nav className="bg-slate-200 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
              <div className="flex flex-wrap
               justify-center lg:justify-between xl:justify-between items-center mx-auto max-w-screen-xl">
                  
            <Link href="/" className="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-9 sm:h-9 lg:h-6 xl:h-6" alt="Logo" />
            </Link>
                  
            <div className="flex flex-wrap justify-center lg:flex-none lg:justify-between xl:flex-none xl:justify-between items-center lg:order-2">
                      
                {user ? (
                  <>
                  <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                    className="text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-1 text-center inline-flex relative
                    mr-2 items-center hover:bg-gray-50 dark:hover:bg-gray-700" type="button"
                    onClick={()=>setShow(!show)}>
                    <div className="relative w-8 h-8 mr-2 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                      <svg className="absolute w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    </div>
                      {data?.user?.name || 'User'}
                  </button>
                    <div id="dropdown" className={`z-10 ${show === true? '' : 'hidden'} absolute right-10 lg:right-60 xl:right-60 top-16 bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700`}>
                     <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                     <li>
                     <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                     <Link href="/me/update" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
                   </li>
                        <li>
                     <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My Booking</a>
                   </li>
                  <li>
                          <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={logoutHandler}>Signout</Link>
                   </li>
                 </ul>
                </div>
                    </>
                ) : (
                    <>
                      {data === undefined && (
                        //skeleton UI
                        <div className="flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-200 dark:text-gray-700 me-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                        </svg>
                        <div className="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"></div>
                    </div>
                     )}
                    {data === null && (
                      <Link href="/login" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2">Login</Link>  
                      )}
                    </>
                  )}
                <ThemeSwitcher />
            </div>
        </div>
    </nav>
    </header>
      </>
  )
}

export default Header