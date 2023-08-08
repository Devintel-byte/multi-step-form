"use client"

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SelectPlan() {
  const router = useRouter();
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
                <Link href="/" passHref>
                <div className={`font-bold border rounded-full h-10 w-10 inline-block p-2 m-0 ${router.pathname === '/' ? "active:bg-light-blue active:text-black active:border-none" : "text-white"}`}>
                  <p className="w-full h-full">1</p>
                </div>
                </Link>
                <Link href="/select-plan" passHref>
                <div className={`font-bold border rounded-full h-10 w-10 inline-block p-2 m-0 ${router.pathname === '/step-2' ? "active:bg-light-blue active:text-black active:border-none" : "text-white"}`}>
                  <p className="w-full h-full">2</p>
                </div>
                </Link>
                <Link href="/step-3" passHref>
                <div className={`font-bold border rounded-full h-10 w-10 inline-block p-2 m-0 ${router.pathname === '/step-3' ? "active:bg-light-blue active:text-black active:border-none" : "text-white"}`}>
                  <p className="w-full h-full">3</p>
                </div>
                </Link>
                <Link href="/step-4" passHref>
                <div className={`font-bold border rounded-full h-10 w-10 inline-block p-2 m-0 ${router.pathname === '/step-4' ? "active:bg-light-blue active:text-black active:border-none" : "text-white"}`}>
                  <p className="w-full h-full">4</p>
                </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Card Content */}
          <div id="cardbg" className="items-center justify-center bg-light-gray px-4 pt-6 pb-[58px]">
            <div id="cardcontent" className="w-full mt-[-98px] mb-9 px-4 py-10 flex flex-col justify-between bg-white rounded-lg shadow relative">
              <div>
                {/* Personal Info Form */}
                <h1 className="mb-2 text-2xl font-bold text-marine-blue">Select your plan</h1>
                <p className="text-cool-gray">
                You have the option of monthly or yearly billing.
                </p>
                <form autoComplete="off" className="mt-4">
                  <div id="name">
                    <label className="text-sm text-marine-blue">Name</label>
                    <input
                      className="w-full p-2.5 border rounded-lg text-sm"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="e.g. Stephen King"
                    />
                  </div>

                  <div id="email" className="mt-3">
                    <article>
                      <label className="text-sm text-marine-blue">Email Address</label>
                    </article>
                    <input
                      className="block w-full p-2.5 border rounded-lg text-sm bg-white"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="e.g. stephenking@lorem.com"
                      required
                    />
                  </div>

                  <div id="phone" className="mt-3">
                    <label className="text-sm text-marine-blue">Phone Number</label>
                    <input
                      className="w-full p-2.5 border rounded-lg text-sm"
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="e.g. +1 234 567 890"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Next Step Button */}
          <div className="text-right pr-4 pb-3" id="btn-wrapper">
            <button
              className="bg-marine-blue border p-2.5 rounded-md mt-3 text-white font-medium"
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
