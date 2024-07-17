import Link from "next/link";
import React from "react";
import { FcHome } from "react-icons/fc";
import { RiChatSmileFill } from "react-icons/ri";

const NavBottom = () => {
  return (
    <div className="bg-[#f5f5f5] h-12 xl:flex justify-between gap-20 py-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32 items-center hidden">
      <div className="w-[10%] flex gap-2 bg-white p-2 rounded-lg items-center">
        <FcHome size={20} />
        <Link href="/" className="text-slate-700 hover:text-blue-700">
          <span className="text-sm  font-sans">Home</span>
        </Link>
      </div>
      <div className="w-[50%] flex gap-10 text-sm text-slate-700 font-sans">
        <Link href="/" className="hover:text-blue-500">
          All
        </Link>
        <Link href="/" className="hover:text-blue-500">
          Friends
        </Link>
        <Link href="/" className="hover:text-blue-500">
          Family
        </Link>
        <Link href="/" className="hover:text-blue-500">
          Acquintances
        </Link>
        <Link href="/" className="hover:text-blue-500">
          Work
        </Link>
        <Link href="/" className="hover:text-blue-500">
          Followers
        </Link>
        <Link href="/" className="hover:text-blue-500">
          Following
        </Link>
      </div>
      <div className="text-left flex-1 flex gap-2 items-center">
        <RiChatSmileFill size={20} color="#6e9c39" />
        <Link href="/" className="text-slate-700 hover:text-blue-700">
          <span className="text-sm font-sans">Hangout</span>
        </Link>
      </div>
    </div>
  );
};

export default NavBottom;
