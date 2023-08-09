"use client"

import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function SelectPlan() {
  const [ isActive, setIsActive ] = useState(null);
  const currentRoute = usePathname();
  const router = useRouter();

  const links = [
    {path: '/', label: '1'},
    {path: '/select-plan', label: '2'},
    {path: '/pick-add-ons', label: '3'},
    {path: '/finishing-up', label: '4'}
  ]

  const plans = [
    {
      id: 1,
      img: './icon-arcade.svg',
      label: 'Arcade',
      price: '$9/mo'
    },
    {
      id: 2,
      img: './icon-advanced.svg',
      label: 'Advanced',
      price: '$12/mo'
    },
    {
      id: 3,
      img: './icon-pro.svg',
      label: 'Pro',
      price: '$15/mo'
    },
  ]

  const handleActivePlan = (id) => {
    setIsActive(id === isActive ? null : id)
  }

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
              objectFit="fill"
              className="w-full"
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
          <div id="cardbg" className="items-center justify-center bg-light-gray px-4 pt-6 pb-[2px]">
            <div id="cardcontent" className="w-full mt-[-98px] mb-9 px-4 py-10 flex flex-col justify-between bg-white rounded-lg shadow relative">
              <div>
                {/* Select Your Plan Form */}
                <h1 className="mb-2 text-2xl font-bold text-marine-blue">Select your plan</h1>
                <p className="text-cool-gray">
                You have the option of monthly or yearly billing.
                </p>

                {/* Plan Packages */}
                {plans.map(({id, img, label, price}) => (
                  <div key={id} 
                  className={`bg-white border rounded-lg mt-6 ${id === isActive ? "bg-magnolia ring-1 ring-purplish-blue" : "border"}`} 
                  onClick={() => handleActivePlan(id)}>
                    <div className='flex p-5'>
                    <Image 
                    src={img} 
                    alt='arcade icon' 
                    width={50} 
                    height={50}/>
                    <div className='flex flex-col pl-4'>
                    <h2 className='text-marine-blue font-bold w-full'>{label}</h2>
                    <p className='text-cool-gray'>{price}</p>
                    </div>
                    </div>
                </div>
                ))}

                {/* Mo/Yr Radio */}
                <div className='bg-alabaster rounded-lg p-3 mt-6'>
                  <div className='flex items-center justify-between px-9'>
                  <span className='font-bold text-marine-blue'>Monthly</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer  dark:bg-marine-blue peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-marine-blue"></div>
                    </label>
                    <span className='font-bold text-cool-gray'>Yearly</span>
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
            <button
              className="bg-marine-blue border p-2.5 rounded-md text-white font-medium"
              id="button"
            >
              Next Step
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
