"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

export default function AddOnsMonthly() {
    const router = useRouter();
    const currentRoute = usePathname();
    const [ isChecked, setIsChecked ] = useState({})

    const links = [
        {path: '/', label: '1'},
        {path: '/select-plan', label: '2'},
        {path: '/pick-add-ons', label: '3'},
        {path: '/finishing-up', label: '4'}
      ]

    const addons = [
      {
        id: '1',
        label: 'Online service',
        desc: 'Access to multiplayer games',
        price: '+$1/mo'
      },
      {
        id: '2',
        label: 'Larger storage',
        desc: 'Extra 1TB of cloud save',
        price: '+$2/mo'
      },
      {
        id: '3',
        label: 'Customizable profit',
        desc: 'Custom theme on your profile',
        price: '+$2/mo'
      },
    ]

    const handleCheckboxClick = (id) => {
      setIsChecked((prevStateClick) => ({
        ...prevStateClick, 
        [id]: !prevStateClick[id],
      }))
    }

  return (
    <>
        <section className="box-border w-full h-screen m-0 p-0">
        <div className="items-center justify-center overflow-hidden">
          {/* Sidebar and Step Indicators */}
          <div className="flex w-full" id="sidebarwrapper">
            <Image
              src="../bg-sidebar-mobile.svg"
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
          <div id="cardbg" className="items-center justify-center bg-light-gray px-4 pt-6 pb-6">
            <div id="cardcontent" className="w-full mt-[-98px] mb-9 px-4 py-10 flex flex-col justify-between bg-white rounded-lg shadow relative">
              <div>
                {/* Select Your Plan Form */}
                <h1 className="mb-2 text-2xl font-bold text-marine-blue">Pick add-ons</h1>
                <p className="text-cool-gray">
                Add-ons help enhance your gaming experience.
                </p>

                {/* Checkbox Options */}
                {addons.map(({id, label, desc, price}) => (
                  <div key={id} className={`bg-white border rounded-lg p-3 mt-4 flex items-center ${isChecked[id] ? "bg-light-blue ring-1 ring-purplish-blue" : "border"}`}>
                        <input className='h-6 w-6 accent-purplish-blue border rounded-md'
                        id={`checkbox-${id}`} 
                        type='checkbox' 
                        checked={isChecked[id]}
                        onChange={() => handleCheckboxClick(id)} 
                        />
                    <div className='pl-4 w-full'>
                      <h2 className='font-bold text-marine-blue'>{label}</h2>
                      <p className='text-cool-gray text-sm'>{desc}</p>
                    </div>
                    <div>
                      <p className='text-purplish-blue text-sm font-medium'>{price}</p>
                    </div>
                </div>
                ))}

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
          
            <Link href='/finishing-up' passHref>
            <button
              className="bg-marine-blue border p-2.5 rounded-md text-white font-medium"
              id="button"
            >
              Next Step
            </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
