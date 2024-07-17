import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { AiTwotoneHome } from "react-icons/ai";
import { IoHome } from "react-icons/io5";
import { GiThreeFriends } from "react-icons/gi";
import {
  MdAutoStories,
  MdMessage,
  MdOutlineAppRegistration,
  MdViewCompact,
} from "react-icons/md";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { IoIosNotifications, IoIosPeople } from "react-icons/io";
import { RiLoginBoxFill } from "react-icons/ri";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { BiSolidGrid } from "react-icons/bi";
const Navbar = () => {
  return (
    <div className="h-20 flex justify-between items-center">
      <div className="">
        {/* Left */}
        <Link href="/">
          <h1 className="mr-10">
            <Image src="/logo2.jpg" alt="" width={80} height={80} />
          </h1>
        </Link>
      </div>
      <div className="hidden md:flex flex-1">
        {/* Ceneter */}
        {/* <div className="flex gap-6 text-[#31344b]">
          <Link href="/" className="flex gap-2 items-center justify-center">
            <IoHome color="#19ABD6" size={20}/>
            <span className="">Home</span>
          </Link>

          <Link href="/" className="flex gap-2 items-center justify-center">
          <HiMiniUserGroup color="#F9564E" size={20}/>
            <span className="">Friends</span>
          </Link>

          <Link href="/" className="flex gap-2 items-center justify-center">
            <MdAutoStories color="#65CE90" size={20} />
            <span className="">Stories</span>
          </Link>
        </div> */}
        <div className="hidden search xl:flex flex-row items-center justify-between border border-gray-300 ml-4 bg-bgmain  w-[70%] rounded-lg">
          <input
            type="text"
            className="bg-transparent outline-none ml-3"
            placeholder="search"
          />
          <button className="bg-[#4582ff] py-3 px-8 ">
            <FaSearch size={14} color="#fff" />
          </button>
        </div>
      </div>
      <div className="">
        {/* Right */}
        <div className="z-40">
          <MobileNav />
        </div>
        <div className="hidden md:flex">
          <ClerkLoading>
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <div className="flex items-center justify-center text-sm text-[#31344b] gap-4">
                <div className="cursor-pointer">
                <BiSolidGrid  size={20} color="#64748b"/>
                  
                </div>
                <div className="cursor-pointer">
                  <IoIosPeople size={20} color="#64748b" />
                </div>
                <div className="cursor-pointer">
                  <MdMessage size={20} color="#64748b" />
                </div>
                <div className="cursor-pointer relative">
                  <div className="bg-[#ab4540] text-white absolute p-2 w-3 h-3 flex items-center justify-center -top-2 left-2 text-[10px] font-bold">2</div>
                  <IoIosNotifications size={20} color="#64748b" />
                </div>

                <UserButton />
              </div>
            </SignedIn>
            <SignedOut>
              <div className="flex items-center justify-center text-sm text-[#31344b] gap-2">
                <RiLoginBoxFill size={20} color="#6e9c39" />
                <Link href="/sign-in">Login</Link>
                <MdOutlineAppRegistration size={20} color="#ab4540" />
                <Link href="/sign-up">Sign Up</Link>
              </div>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
