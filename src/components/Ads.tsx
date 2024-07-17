import React from "react";
import Image from "next/image";
import { TbDots } from "react-icons/tb";
const Ads = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-bgmain shadowMain">
      <div className="flex justify-between items-center">
        <span className="">Sponsored Ads</span>
        <TbDots size={16} />
      </div>
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/4669225/pexels-photo-4669225.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="rounded-lg object-cover"
            fill
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/4669250/pexels-photo-4669250.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="rounded-full w-6 h-6 object-cover"
            width={24}
            height={24}
          />
          <span className="font-medium text-green-700">
            Victory Bar & Grill
          </span>
        </div>
        <p
          className={`text-slate-700 ${size === "sm" ? "text-xs" : "text-sm"}`}
        >
          {size === "sm"
            ? "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti libero provident esse"
            : size === "md"
            ? "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti libero provident esse placeat qui eos aliquid consectetur"
            : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti libero provident esse placeat qui eos aliquid consectetur, natus voluptatibus quibusdam."}
        </p>
        <button className="btnShadow w-full p-2 text-blue-700 text-sm hover:text-slate-500">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Ads;
