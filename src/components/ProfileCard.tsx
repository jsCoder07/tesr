import Image from "next/image";
import React from "react";
import { RiUserFollowFill } from "react-icons/ri";

const ProfileCard = () => {
  return (
    <div className="p-4 bg-bgmain shadowMain text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src="https://images.pexels.com/photos/5256142/pexels-photo-5256142.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          fill
          className="rounded-md object-cover"
        />
        <Image
          src="https://images.pexels.com/photos/7533332/pexels-photo-7533332.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          width={48}
          height={48}
          className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10 object-cover"
        />
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">Jeremy Pivens</span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <RiUserFollowFill />
            <RiUserFollowFill />
            <RiUserFollowFill />
          </div>
          <span className="text-xs text-slate-600">1000 Followers</span>
        </div>
        <button className="bg-bgmain shadowMain text-blue-500 p-2 text-xs">
          My Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
