import React from 'react'
import ProfileCard from './ProfileCard'
import Link from 'next/link'
import { MdEventAvailable, MdOutlinePostAdd, MdStore } from 'react-icons/md'
import { BsCollectionFill, BsFillCalendarEventFill } from 'react-icons/bs'
import { BiSolidPhotoAlbum } from 'react-icons/bi'
import { TiVideo } from 'react-icons/ti'
import { IoListSharp, IoNewspaperSharp, IoPeople } from 'react-icons/io5'
import { FaList } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { GiHiking } from 'react-icons/gi'
import Ads from './Ads'

const LeftTab = ({ type }: { type?: 'home' |'profile' }) => {
  return (
    <div className="flex flex-col justify-between text-sm rounded-lg  gap-4">
      {type==='home' && (<ProfileCard/>)}
    <div className="p-4 bg-bgmain shadowMain flex flex-col text-sm text-slate-500 gap-2">
      <Link href='' className='flex items-center gap-4 p-2 rounded-md hover:bg-slate-50 hover:text-blue-500'><MdOutlinePostAdd size={20} color='#D4A131'/>
      <span className="">My Posts</span>
      </Link>
      <hr className='w-full self-center border-t-1 border-slate-50'/>
      <Link href='' className='flex items-center gap-4 p-2 rounded-md hover:bg-slate-50 hover:text-blue-500'><BsCollectionFill size={20} color='#4CAF50'/>
      <span className="">Collections of Posts</span>
      </Link>
      <hr className='w-full self-center border-t-1 border-slate-50'/>
      <Link href='' className='flex items-center gap-4 p-2 rounded-md hover:bg-slate-50 hover:text-blue-500'><GiHiking size={20} color='#C92E29'/>
      <span className="">Activity</span>
      </Link><hr className='w-full self-center border-t-1 border-slate-50'/>
      <Link href='' className='flex items-center gap-4 p-2 rounded-md hover:bg-slate-50 hover:text-blue-500'><MdStore size={20} color='#9874D7'/>
      <span className="">Market Place</span>
      </Link><hr className='w-full self-center border-t-1 border-slate-50'/>
      <Link href='' className='flex items-center gap-4 p-2 rounded-md hover:bg-slate-50 hover:text-blue-500'><MdEventAvailable size={20} color='#D7622D'/>
      <span className="">Events</span>
      </Link><hr className='w-full self-center border-t-1 border-slate-50'/>
      <Link href='' className='flex items-center gap-4 p-2 rounded-md hover:bg-slate-50 hover:text-blue-500'><BiSolidPhotoAlbum size={20} color='#4582FF'/>
      <span className="">Photo Albums</span>
      </Link><hr className='w-full self-center border-t-1 border-slate-50'/>
      <Link href='' className='flex items-center gap-4 p-2 rounded-md hover:bg-slate-50 hover:text-blue-500'><IoPeople size={20} color='#4CAF50'/>
      <span className="">People</span>
      </Link><hr className='w-full self-center border-t-1 border-slate-50'/>
      <Link href='' className='flex items-center gap-4 p-2 rounded-md hover:bg-slate-50 hover:text-blue-500'><TiVideo size={20} color='#C92E29'/>
      <span className="">Videos</span>
      </Link><hr className='w-full self-center border-t-1 border-slate-50'/>
      <Link href='' className='flex items-center gap-4 p-2 rounded-md hover:bg-slate-50 hover:text-blue-500'><IoNewspaperSharp size={20} color='#D4A131'/>
      <span className="">News</span>
      </Link><hr className='w-full self-center border-t-1 border-slate-50'/>
      <Link href='' className='flex items-center gap-4 p-2 rounded-md hover:bg-slate-50 hover:text-blue-500'><MdOutlinePostAdd size={20} color='#D7622D'/>
      <span className="">Groups & Interests</span>
      </Link><hr className='w-full self-center border-t-1 border-slate-50'/>
      <Link href='' className='flex items-center gap-4 p-2 rounded-md hover:bg-slate-50 hover:text-blue-500'><IoListSharp size={20} color='#4582FF'/>
      <span className="">Classifieds</span>
      </Link><hr className='w-full self-center border-t-1 border-slate-50'/>
      <Link href='' className='flex items-center gap-4 p-2 rounded-md hover:bg-slate-50 hover:text-blue-500'><IoMdSettings size={20} color='#4CAF50'/>
      <span className="">Settings</span>
      </Link>
      
    </div>
    <Ads size='sm'/>
   </div>
  )
}

export default LeftTab
