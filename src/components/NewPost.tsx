import Image from "next/image";
import React from "react";
import { BsFillCalendarDayFill } from "react-icons/bs";
import { FaImage, FaLink, FaPoll, FaVideo } from "react-icons/fa";
import { FcAddImage } from "react-icons/fc";
import { MdAddAPhoto, MdEmojiEmotions } from "react-icons/md";
import { PiVideoFill } from "react-icons/pi";

const NewPost = () => {
  return (
    <div>
      <div className="md:p-4 p-2 flex justify-between text-sm rounded-lg bg-bgmain shadowMain gap-4">
        {/* Avatar */}
        <Image
          width={48}
          height={48}
          className="w-12 h-12 object-cover rounded-full"
          src="https://images.pexels.com/photos/25950675/pexels-photo-25950675/free-photo-of-a-black-and-white-photo-of-a-woman-with-curly-hair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        {/* Post */}
        <div className="flex-1">
          {/* Input */}
          <div className="flex gap-4">
            <textarea placeholder="Share your ideas with the world" className="bg-bgmain rounded-lg shadowMain flex-1 p-3"></textarea>
           
            <MdEmojiEmotions  size={20} color="#FEA51C"  className="w-5 h-5 object-cover rounded-full cursor-pointer self-end hidden md:block"/>
          </div>
          {/* Options */}
          <div className="flex items-center gap-4 mt-4 flex-wrap font-sans">
            <div className="flex items-center justify-center gap-2 cursor-pointer text-blackmd flex-col">
            
            <MdAddAPhoto size={20} color="#7E97FD"/>
              <div className="">Photo</div>
            </div>
            <div className="flex items-center justify-center gap-2 cursor-pointer text-blackmd flex-col">
            {/* <PiVideoFill size={20} color="#4CAF50"/> */}
            <FaVideo size={20} color="#4CAF50"/>
              <div className="">Video</div>
            </div>
            <div className="flex items-center justify-center gap-2 cursor-pointer text-blackmd flex-col">
            <BsFillCalendarDayFill size={20} color="#FE5534"/>
              <div className="">Event</div>
            </div>
            {/* <div className="flex items-center justify-center gap-2 cursor-pointer text-blackmd flex-col">
            <FaPoll size={20} color="#FEA51C"/>
              <div className="">Poll</div>
            </div> */}
            <div className="flex items-center justify-center gap-2 cursor-pointer text-blackmd flex-col">
            <FaLink size={20} color="#4582FF"/>
              <div className="">Links</div>
            </div>
            <div className="flex items-center justify-center gap-2 cursor-pointer text-blackmd flex-col  md:hidden">
            <MdEmojiEmotions  size={20} color="#FEA51C" />
            <div className="">Emoji</div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
