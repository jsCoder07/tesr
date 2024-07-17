import React from 'react'
import Image from "next/image";
import { TbDots } from "react-icons/tb";
import Link from 'next/link';
import { IoLocation } from 'react-icons/io5';
import { IoMdSchool } from 'react-icons/io';
import { PiOfficeChairFill } from 'react-icons/pi';
import { LuLink } from 'react-icons/lu';
import { FaCalendarAlt } from 'react-icons/fa';
const UserInfoCard = ({ userId }: { userId?: string }) => {
  return (
    <div className="p-4 bg-bgmain shadowMain flex flex-col gap-4">
    <div className="flex justify-between items-center">
      <span className="">User Information</span>
      <Link href="/" className="text-blue-600 text-xs">
          See All
        </Link>
    </div>
    <div
      className={`flex flex-col mt-4 gap-4 text-slate-600`}
    >
     
      <div className="flex items-center gap-4">
       <span className="text-xl text-black">Jeremy Pivens</span>
        <span className="font-medium text-green-700 text-xs">
          @jeremy pivens
        </span>
      </div>
      <p
        className={`text-slate-700`}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti libero provident esse placeat qui eos aliquid consectetur, natus voluptatibus quibusdam.
      </p>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
        <IoMdSchool />
      <div className="">Living in <span className="font-bold">Denver</span></div>
      </div>

      <div className="flex gap-2 items-center">
      <IoLocation />
      <div className="">Went to school at <span className="font-bold">University of Texas</span></div>
      </div>

      <div className="flex gap-2 items-center">
      <PiOfficeChairFill />
      <div className="">Works at <span className="font-bold">Social Plus</span></div>
      </div>
      </div>
     <div className="flex justify-between items-center">
        <div className="flex gap-2">
        <LuLink />
        <Link href='' className='text-blue-500 font-medium'>jeremy.io</Link>
        </div>
        <div className="flex gap-2">
        <FaCalendarAlt />
        <span className="">Joined Febuary 2024</span>
        </div>
     </div>
      <button className="bg-bgmain btnShadow w-full p-2 text-blue-700 text-sm hover:text-slate-500">
        Following
      </button>
      <span className="text-red-900 self-end text-xs cursor-pointer">Block User</span>
    </div>
  </div>
  )
}

export default UserInfoCard
