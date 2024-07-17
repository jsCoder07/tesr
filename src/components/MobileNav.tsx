"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./MobileNav.module.css";
import { IoHome, IoLogIn, IoSettings } from "react-icons/io5";
import { GiSettingsKnobs, GiThreeFriends } from "react-icons/gi";
import { MdAutoStories, MdGroups2, MdLogin, MdOutlineAppRegistration, MdSettings } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { RiDashboardFill, RiLoginBoxFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { AiFillPushpin } from "react-icons/ai";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <div
        className={`${styles.burgerShadow} p-2 rounded-full flex flex-col gap-1 cursor-pointer`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div
          className={`w-6 h-1 rounded-sm bg-[#F9564E] ${
            open ? "rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 rounded-sm bg-[#F9564E] ${
            open ? "opacity-0" : ""
          } ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 rounded-sm bg-[#F9564E] ${
            open ? "-rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
      </div>
      {open && (
        <div
          className={`${styles.navShadow} absolute top-20 left-0 w-full gap-2 flex flex-col rounded-md p-1 text-[#44476a]  font-medium text-sm z-10 h-[calc(100vh-80px)]`}
        >
          <div className="bg-white p-4">
          <h2 className="font-bold text-md text-[#0d1b36] font-sans">Navigation</h2>
          <h4 className="text-xs text-[#8992a3]">Find your way around</h4>
          </div>
          <div className="flex flex-col gap-4">
          <Link
            href="/"
            className={`flex justify-between items-center p-3 ${styles.whiteShadow} rounded-md `}
          >
            <IoHome color="#4056A1" size={20}/>
            <span className="">Home</span>
          </Link>
          <div className="flex gap-6 flex-wrap items-center justify-center">
          <Link
            href="/"
            className={`w-[45%] h-[100px] flex justify-between items-center p-3 ${styles.whiteShadow} rounded-3xl`}
          >
            <GiThreeFriends color="#F9564E" size={30}/>
            <span className="">Friends</span>
          </Link>
          <Link
            href="/"
            className={`w-[45%] h-[100px] flex justify-between items-center p-3 ${styles.whiteShadow} rounded-3xl`}
          >
            <MdGroups2 color="#65CE90" size={30}/>
            <span className="">Groups</span>
          </Link>
          <Link
            href="/"
            className={`w-[45%] h-[100px] flex justify-between items-center p-3 ${styles.whiteShadow} rounded-3xl`}
          >
            <HiMiniUserGroup color="#426782" size={30}/>
            <span className="">Circles</span>
          </Link>
          </div>
          <Link
            href="/"
            className={`flex justify-between items-center p-3 ${styles.whiteShadow} rounded-md`}
          >
            <MdAutoStories color="#D79922" size={20}/>
            <span className="">Stories</span>
          </Link>
         
          <Link
            href="/sign-in"
            className={`flex justify-between items-center p-3 ${styles.whiteShadow} rounded-md`}
          >
            <RiLoginBoxFill color="#A64AC9" size={20}/>
           
            <span className="">Login</span>
          </Link>
          <Link
            href="/sign-up"
            className={`flex justify-between items-center p-3 ${styles.whiteShadow} rounded-md`}
          >
            
           <MdOutlineAppRegistration color="#2D5F5C" size={20} />
            <span className="">Sign Up</span>
          </Link>
          </div>
          <div className="absolute bottom-4 left-0 right-0  h-10 flex justify-center items-center gap-6">
            <div className={`w-10 h-10 rounded-lg ${styles.whiteShadow} justify-center items-center flex`}><FaUser /></div>
            <div className={`w-10 h-10 rounded-lg ${styles.whiteShadow} justify-center items-center flex`}><IoSettings /></div>
            <div className={`w-10 h-10 rounded-lg ${styles.whiteShadow} justify-center items-center flex`}><RiDashboardFill /></div>
            <div className={`w-10 h-10 rounded-lg ${styles.whiteShadow} justify-center items-center flex`}><AiFillPushpin /></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
