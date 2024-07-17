import React from 'react'
import Image from "next/image";
import { TbDots } from "react-icons/tb";
import Link from 'next/link';
const UserMediaCard = ({ userId }: { userId?: string }) => {
  return (
    <div className="p-4 bg-bgmain shadowMain">
    <div className="flex justify-between items-center">
      <span className="">User Photos</span>
      <Link href="/" className="text-blue-600 text-xs">
          See All
        </Link>
    </div>
    <div
      className={`flex flex-wrap gap-4 justify-between mt-4`}
    >
      <div className="relative w-1/5 h-24">
        <Image src='https://images.pexels.com/photos/935985/pexels-photo-935985.jpeg?auto=compress&cs=tinysrgb&w=600' fill alt='' className='object-cover rounded-md'/>
      </div>
      <div className="relative w-1/5 h-24">
        <Image src='https://images.pexels.com/photos/20434746/pexels-photo-20434746/free-photo-of-portrait-of-couple-wearing-traditional-clothes.jpeg?auto=compress&cs=tinysrgb&w=600' fill alt='' className='object-cover rounded-md'/>
      </div>
      <div className="relative w-1/5 h-24">
        <Image src='https://images.pexels.com/photos/1102609/pexels-photo-1102609.jpeg?auto=compress&cs=tinysrgb&w=600' fill alt='' className='object-cover rounded-md'/>
      </div>
      <div className="relative w-1/5 h-24">
        <Image src='https://images.pexels.com/photos/22813222/pexels-photo-22813222/free-photo-of-woman-and-a-man-smiling-and-posing.jpeg?auto=compress&cs=tinysrgb&w=600' fill alt='' className='object-cover rounded-md'/>
      </div>
      <div className="relative w-1/5 h-24">
        <Image src='https://images.pexels.com/photos/22798476/pexels-photo-22798476/free-photo-of-group-of-children-posing-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600' fill alt='' className='object-cover rounded-md'/>
      </div>
      <div className="relative w-1/5 h-24">
        <Image src='https://images.pexels.com/photos/5935235/pexels-photo-5935235.jpeg?auto=compress&cs=tinysrgb&w=600' fill alt='' className='object-cover rounded-md'/>
      </div>
      <div className="relative w-1/5 h-24">
        <Image src='https://images.pexels.com/photos/7533332/pexels-photo-7533332.jpeg?auto=compress&cs=tinysrgb&w=600' fill alt='' className='object-cover rounded-md'/>
      </div>
      <div className="relative w-1/5 h-24">
        <Image src='https://images.pexels.com/photos/864939/pexels-photo-864939.jpeg?auto=compress&cs=tinysrgb&w=600' fill alt='' className='object-cover rounded-md'/>
      </div>
     </div>
  </div>
  )
}

export default UserMediaCard
