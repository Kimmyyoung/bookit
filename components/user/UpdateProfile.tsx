"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/redux/hook';
import { toast } from 'react-hot-toast';
import { useUpdateProfileMutation } from '@/redux/api/userApi';

const UpdateProfile = () => {
  const [ name, setName ] = useState("");
  const [ email, setEmail] = useState("");
  const router = useRouter();

  const { user: currentUser } = useAppSelector((state) => state.auth);

  const [updateProfile, { isLoading, isSuccess, error }] = useUpdateProfileMutation();

  
  useEffect(() => {
    if (currentUser) {
      setName(currentUser?.name);
      setEmail(currentUser?.email);
    }

    if(error && 'data' in error) {
      toast.error(error?.data?.message)
    }

    if(isSuccess){
      router.refresh()
    }
  }, [currentUser, error, isSuccess]);

  const submitHandler = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = { name, email };
    updateProfile(userData);
  }
  return ( 
    <div className="max-w-sm mx-auto">
      <h2 className="text-2xl font-semibold text-blue-600/100 dark:text-blue-500/100 my-4">Update Profile</h2>
<form className="max-w-sm mx-auto" onSubmit={submitHandler}>
  <div className="mb-5">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
    value={name}
    onChange={(e)=>setName(e.target.value)}
    required />
  </div>
  <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Email
          </label>
          <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required />
  </div>
  
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Update
        </button>
</form>
</div>
  )
}

export default UpdateProfile