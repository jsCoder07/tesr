import React from 'react'
import Image from "next/image";
import Link from "next/link";
const Birthday = () => {
  return (
    <div className="p-4 bg-bgmain shadowMain flex flex-col gap-4">
      <div className="">
      <span className='text-slate-500'>Birthday</span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/25950675/pexels-photo-25950675/free-photo-of-a-black-and-white-photo-of-a-woman-with-curly-hair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-semibold">Jeremy Pivens</span>
        </div>
        <div className="flex gap-2 justify-end">
          <button className="bg-blue-500 px-2 py-1 rounded-md text-xs text-white">Contribute</button>
        </div>
      </div>
      <div className="bg-slate-50 p-4 flex items-center gap-4">
      <Image
            src="/gift.png"
            alt=""
            width={24}
            height={24}
            className="w-4 h-4 rounded-full object-cover"
          />
          <Link href='/' className='flex flex-col gap-1 text-xs'>
          <span className="text-gray-700 font-semibold">Upcoming Birthdays</span>
          <span className="text-slate-500">See all other friends with upcoming birthdays</span></Link>
      </div>
    </div>
  )
}

export default Birthday
