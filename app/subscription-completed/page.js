'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function SubscriptionCompleted() {
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
           <div className="flex items-center justify-center mt-7 mb-5">
           <Image 
            src="/icon-thank-you.svg"
            width={52}
            height={52}
            alt="Thank-you-badge"
            />
           </div>
            <h1 className="text-marine-blue font-bold text-xl text-center mb-3">Thank you!</h1>
            <p className="text-cool-gray text-center items-center mb-[52px]">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
            </div>
          </div>

        </div>
      </section>
        </>
    )
}