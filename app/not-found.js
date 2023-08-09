"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter();
  
  return (
    <>
      <div className='overflow-hidden m-0 p-0 bg-marine-blue text-white w-full h-screen'>
        <div id='bgWrapper' className='flex flex-col items-center justify-center h-screen'>
        <div className='text-2xl font-bold text-center'><span className='mx-1 text-strawberry-red'>404</span> - Page not found</div>
        <p className='mt-2 leading-5'>Visit a valid page</p>
        <button id='button'
          className='text-cool-gray font-bold p-4' 
          onClick={() => router.back()}>
          Go Back
          </button>
        </div>
      </div>
    </>
  )
}
