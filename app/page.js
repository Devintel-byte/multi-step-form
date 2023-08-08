"use client"

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
// import { useFormik } from 'formik';

export default function Home() {
  const router = useRouter();
  const links = [
    {path: '/', label: '1'},
    {path: '/select-plan', label: '2'},
    {path: '/pick-add-ons', label: '3'},
    {path: '/finishing-up', label: '4'}
  ]
  // const validate = (values) => {
  //   const errors = {};
  //   if (!values.email) {
  //     errors.email = 'Valid email required';
  //   } else if (
  //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  //   ) {
  //     errors.email = 'Valid email required';
  //   }
  //   return errors;
  // };

  // const formik = useFormik({
  //   initialValues: {
  //     email: '',
  //   },
  //   validate,
  // });

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
                    <div className={`font-bold border rounded-full h-10 w-10 inline-block p-2 m-0 ${router.pathname === path ? "focus:bg-light-blue focus:text-black focus:border-none" : "text-white"}`}>
                    {label}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Card Content */}
          <div id="cardbg" className="items-center justify-center bg-light-gray px-4 pt-6 pb-[58px]">
            <div id="cardcontent" className="w-full mt-[-98px] mb-9 px-4 py-10 flex flex-col justify-between bg-white rounded-lg shadow relative">
              <div>
                {/* Personal Info Form */}
                <h1 className="mb-2 text-2xl font-bold text-marine-blue">Personal info</h1>
                <p className="text-cool-gray">
                  Please provide your name, email address, and phone number.
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
