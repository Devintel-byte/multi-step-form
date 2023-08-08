'use client'

import Image from "next/image"
import { useFormik } from "formik"

export default function Home() {

  // const validate = (values) => {
  //   const errors = {};

  //   if (!values.email) {
  //     errors.email = "Valid email required";
  //   } else if (
  //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  //   ) {
  //     errors.email = "Valid email required"
  //   }

  //   return errors;
  // }

  // const formik = useFormik({
  //   initialValues: {
  //     email: ""
  //   }, 
  //   validate
  // })

  return (
    <>
      <section className="m-0 p-0 box-border w-full h-screen">
        <div className="overflow-hidden items-center justify-center">
          <div id="sidebarwrapper" className="flex w-full">
          <Image className="w-full"
          src='./bg-sidebar-mobile.svg' 
          alt="sidebar-mobile" 
          width={320} 
          height={80}
          objectFit="fill" />
            <div id="sidebar">
              <div id="steps"></div>
            </div>
          </div>

          <div id="cardbg" className="bg-light-gray px-4 pt-6 pb-[58px] items-center justify-center">
            <div id="cardcontent" className="mt-[-98px] mb-9 px-4 py-10 w-full flex flex-col justify-between bg-white rounded-lg shadow relative">

              <div>
              <h1 className="text-2xl text-marine-blue font-bold mb-2">Personal info</h1>
              <p className="text-cool-gray">Please provide your name, email address, and phone number.</p>
              <form autoComplete="off" className="mt-4">
                <div id="name">
                <label className="text-sm text-marine-blue">
                Name
                </label>
                <input className="w-full border rounded-lg text-sm p-2.5" 
                type="text" 
                name="name" 
                id="name" 
                placeholder="e.g. Stephen King"/>
                </div>

                <div id="email" className="mt-3">
                <article>
                <label className="text-sm text-marine-blue">
                Email Address
                </label>
                {/* {formik.errors.email ? <p className='text-sm text-strawberry-red font-bold'> {formik.errors.email} </p> : null} */}
                </article>
                <input className='bg-white border text-sm rounded-lg block w-full p-2.5'
                type="email" 
                name="email" 
                id="email" 
                placeholder="e.g. stephenking@lorem.com"
                required />
                </div>

                <div id="phone" className="mt-3">
                <label className="text-sm text-marine-blue">
                Phone Number
                </label>
                <input className="w-full border rounded-lg text-sm p-2.5" 
                type="tel" 
                name="phone" 
                id="phone" 
                placeholder="e.g. +1 234 567 890"/>
                </div>
              </form>
              </div>

            </div>
          </div>
          <div className="pr-4 pb-3 text-right"
          id="btn-wrapper">
          <button className="text-white bg-marine-blue border p-2.5 rounded-md mt-3"
          id="button">
          Next Step
          </button>
          </div>

        </div>
      </section>
    </>
  )
}
