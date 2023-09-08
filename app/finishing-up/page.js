'use client'

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function FinishingUp() {
  const currentRoute = usePathname();
  const router = useRouter();

  const links = [
    {path: '/', label: '1'},
    {path: '/select-plan', label: '2'},
    {path: '/pick-add-ons/', label: '3'},
    {path: '/finishing-up', label: '4'},
  ]

  return (
    <>
      <section className="box-border w-full h-screen m-0 p-0">
        <div className="items-center justify-center overflow-hidden">
          {/* Sidebar and Step Indicators */}
          <div className="flex w-full" id="sidebarwrapper">
            <Image
              src="./bg-sidebar-mobile.svg"
              alt="sidebar-mobile"
              width={320}
              height={80}
              priority
              className="w-full object-fill"
            />
            <div className="absolute flex items-center justify-center w-full mt-6" id="sidebar">
              <div className="flex flex-row gap-4 text-white text-center items-center" id="steps">
                {/* Step Indicators */}
                {links.map(({ path, label }) => (
                  <Link key={path} href={path} passHref>
                    <div className={`font-bold border rounded-full h-10 w-10 inline-block p-2 m-0 ${currentRoute === path ? "bg-light-blue text-black border-none" : "text-white"}`}>
                    {label}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Card Content */}
          <div id="cardbg" className="items-center justify-center bg-alabaster px-4 pt-6 pb-[110px]">
            <div id="cardcontent" className="w-full mt-[-98px] mb-9 px-5 py-8 flex flex-col justify-between bg-white rounded-lg shadow relative">
              <div>
              <h1 className="mb-2 text-2xl font-bold text-marine-blue">Finishing up</h1>
                <p className="text-cool-gray">
                Double-check everything looks OK before confirming.
                </p>
                {/* Selected Lists Display */}
                <div className='w-full bg-alabaster rounded-lg px-4 py-4 my-4'>

                <div className='flex items-center justify-between mb-4'>
                <div className=''>
                    <h3 className='text-marine-blue font-bold'>Arcade (Monthly)</h3>
                    <Link href="/select-plan" passHref>
                    <p className='text-cool-gray text-sm underline cursor-pointer'>Change</p>
                    </Link>
                  </div>

                  <div className=''>
                    <p  className='text-marine-blue font-bold'>$9/mo</p>
                  </div>
                </div>

                <hr/>
                <div className='flex items-center justify-between mt-2'>
                  <div>
                    <p className='text-cool-gray text-sm'>Online service</p>
                  </div>
                  <div>
                    <p className='text-marine-blue text-sm'>+1$/mo</p>
                  </div>
                </div>

                <div className='flex items-center justify-between mt-2'>
                  <div>
                    <p className='text-cool-gray text-sm'>Larger storage</p>
                  </div>
                  <div>
                    <p className='text-marine-blue text-sm'>+2$/mo</p>
                  </div>
                </div>
                </div>

               <div className='flex items-center justify-between px-4'>
                <div>
                <p className='text-sm text-cool-gray'>Total (per month)</p>
                </div>
                <div>
                  <p className='font-bold text-purplish-blue'>+$12/mo</p>
                </div>
               </div>
                  
              </div>
            </div>
          </div>

           {/* Next Step Button */}
           <div className="flex items-center justify-between pr-4 pb-3 mt-3" id="btn-wrapper">
          <button id='button'
          className='text-cool-gray font-bold p-4' 
          onClick={() => router.back()}>
          Go Back
          </button>

          <Link href="/subscription-completed" passHref>
          <button
          className="bg-purplish-blue border p-2.5 rounded-md text-white font-medium"
          id="button">
            Confirm
          </button>
          </Link>
          </div>

        </div>
      </section>
    </>
  );
}
