import React from "react";
import Image from "next/image";
import circle from "../../public/circle.png";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="flex gap-10 p-8 flex-col max-w-7xl md:items-center w-full justify-start min-h-screen relative">
      <Image
        src={circle}
        className="hidden md:block absolute top-0 left-0"
        width={200}
        height={200}
        alt="circle"
      />
      <Image
        src={circle}
        className="hidden md:block absolute top-24 left-0"
        width={150}
        height={150}
        alt="circle"
      />
      <Image
        src={circle}
        className="hidden md:block absolute top-0 -right-20"
        width={200}
        height={200}
        alt="circle"
      />
      <Image
        src={circle}
        className="hidden md:block absolute top-32 -right-32"
        width={300}
        height={300}
        alt="circle"
      />
      <h1 className="text-4xl md:text-5xl font-display md:text-center tracking-tight leading-relaxed bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
        Hello, <br /> where do you want to fly?
      </h1>
      <span className="font-thin tracking-widest text-base md:text-xl uppercase">
        the world&apos;s largest online transport app in space
      </span>
      <div className="h-px bg-white/10 rounded-full w-full max-w-2xl"></div>
      <Link
        href={"/book"}
        className="bg-gradient-to-r hover:bg-blue-700 from-blue-700 to-purple-600 max-w-mdinde inline-flex items-center justify-center gap-2 text-white font-bold py-2 px-4 hover:shadow-xl transitions rounded-full"
      >
        Book a flight
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </Link>
      <div className="p-4 flex flex-wrap items-center justify-center w-full max-w-7xl gap-8 mt-4">
        <div className="px-10 flex flex-col border-l ">
          <h1 className="text-2xl font-bold">10M+</h1>
          <p className="text-gray-500">Total Users</p>
        </div>
        <div className="px-10 flex flex-col border-l ">
          <h1 className="text-2xl font-bold">10M+</h1>
          <p className="text-gray-500">Total Users</p>
        </div>
        <div className="px-10 flex flex-col border-l ">
          <h1 className="text-2xl font-bold">10M+</h1>
          <p className="text-gray-500">Total Users</p>
        </div>
      </div>
    </div>
  );
}
