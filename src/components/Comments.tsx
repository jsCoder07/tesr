import Image from "next/image";
import React from "react";
import { BiSolidLike } from "react-icons/bi";
import { TbDots } from "react-icons/tb";

const Comments = () => {
  return (
    <div className="">
      {/* Text Input */}
      <div className="flex items-center gap-4 ">
        <Image
          width={32}
          height={32}
          alt=""
          src="https://images.pexels.com/photos/26590006/pexels-photo-26590006/free-photo-of-a-zebra-standing-in-the-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          className="h-8 w-8 rounded-full"
        />
        <div className="flex-1 rounded-xl w-full flex justify-between items-center bg-white text-sm px-6 py-2">
          <input
            type="text"
            className="bg-transparent outline-none flex-1"
            placeholder="Write a comment"
          />
          <Image
            width={16}
            height={16}
            alt=""
            src="/emoji.png"
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Comments */}
      <div className="py-4">
        <div className="flex justify-between gap-4 py-4 ">
          <div className="">
            <Image
              width={40}
              height={40}
              alt=""
              src="https://images.pexels.com/photos/25950675/pexels-photo-25950675/free-photo-of-a-black-and-white-photo-of-a-woman-with-curly-hair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              className="h-10 w-10 rounded-full cursor-pointer object-cover"
            />
           </div>
           <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium text-md">Adeboye Thompson</span>
            <p className="text-sm hidden md:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium repellat reiciendis temporibus, dolore veniam
              asperiores quia neque repudiandae vero et quaerat, aperiam modi
              eveniet ducimus ea molestiae libero atque. Itaque aspernatur,
              minima dicta incidunt, nesciunt eaque ut vel cumque atque ipsum
              beatae repellat accusantium quos illum laborum earum, voluptas
              suscipit?
            </p>
            <div className=" items-center gap-8 text-xs text-gray-500 mt-6 hidden md:flex">
                <div className="flex items-center gap-2">
                <BiSolidLike className="cursor-pointer"/>
          <span className="text-gray-300"> | </span>
          <span className="text-gray-500"> 123 Likes</span>
          <div className="cursor-pointer">Reply</div>
                </div>
            </div>
          </div>
            
          <TbDots size={16}/>
          </div>
          <div className="md:hidden">
          <p className="text-sm block md:hidden  md:mt=0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium repellat reiciendis temporibus, dolore veniam
              asperiores quia neque repudiandae vero et quaerat, aperiam modi
              eveniet ducimus ea molestiae libero atque. Itaque aspernatur,
              minima dicta incidunt, nesciunt eaque ut vel cumque atque ipsum
              beatae repellat accusantium quos illum laborum earum, voluptas
              suscipit?
            </p>
            <div className="flex items-center gap-2 mt-6 md:mt-0 text-xs">
                <BiSolidLike className="cursor-pointer"/>
          <span className="text-gray-300"> | </span>
          <span className="text-gray-500"> 123 Likes</span>
          <div className="cursor-pointer">Reply</div>
                </div>
          </div>
       
           
        </div>
      
      </div>
     
   
  );
};

export default Comments;
