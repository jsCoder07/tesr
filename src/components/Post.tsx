import Image from "next/image";
import React from "react";
import Comments from "./Comments";
import { BiSolidLike } from "react-icons/bi";
import { FcComments } from "react-icons/fc";
import { PiShareNetworkFill } from "react-icons/pi";
import { TbDots, TbDotsVertical } from "react-icons/tb";

const Post = () => {
  return (
    <div className="flex flex-col gap-2 shadowMain pt-4">
      {/* User Section */}
      <div className="flex items-center justify-between px-4 ">
        <div className="flex items-center gap-2">
          <Image
            src="https://images.pexels.com/photos/25950675/pexels-photo-25950675/free-photo-of-a-black-and-white-photo-of-a-woman-with-curly-hair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className="w-10 h-10 rounded-full object-cover"
            width={40}
            height={40}
          />
          <span className="font-medium">Adeboye Thompson</span>
        </div>
        <TbDots size={16} />
      </div>
      {/* Post Image */}
      <div className="flex flex-col gap-2 md:p-4 p-2">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nobis
          odio magni animi eius pariatur tempore porro fugit facilis earum
          quaerat minus libero nisi nulla ducimus ex a fugiat iste doloribus
          consequatur dolore consequuntur expedita praesentium molestias.
          Numquam, explicabo molestias fugiat delectus dicta quas laboriosam,
          veniam voluptatum ipsa sit voluptates.
        </p>
        <div className="relative w-full min-h-96">
          <Image
            src="https://images.pexels.com/photos/26590006/pexels-photo-26590006/free-photo-of-a-zebra-standing-in-the-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className="rounded-md object-cover"
            fill
          />
        </div>
      </div>
      {/* Post Interaction */}
      <div className="flex items-center justify-between text-sm px-2 md:px-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-white rounded-xl p-2">
            <BiSolidLike className="cursor-pointer" />
            <span className="text-gray-300"> | </span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Likes</span>
            </span>
          </div>

          <div className="flex items-center gap-4 bg-white rounded-xl p-2">
            <FcComments className="cursor-pointer" />
            <span className="text-gray-300"> | </span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-white rounded-xl p-2 ml-2">
            <PiShareNetworkFill className="cursor-pointer" />
            <span className="text-gray-300"> | </span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Shares</span>
            </span>
          </div>
        </div>
      </div>
      <div className="px-4 py-2">
        <Comments />
      </div>
    </div>
  );
};

export default Post;
