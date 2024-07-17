import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendsRequest = () => {
  return (
    <div className="p-4 bg-bgmain shadowMain flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-slate-500">Friend's Requests</span>
        <Link href="/" className="text-blue-600 text-xs">
          See All
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/25950675/pexels-photo-25950675/free-photo-of-a-black-and-white-photo-of-a-woman-with-curly-hair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-semibold">Jeremy Pivens</span>
        </div>
        <div className="flex gap-2 justify-end">
          <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className="rounded-full object-cover w-5 h-5 cursor-pointer "
          />
          <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className="rounded-full object-cover w-5 h-5 cursor-pointer"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/25950675/pexels-photo-25950675/free-photo-of-a-black-and-white-photo-of-a-woman-with-curly-hair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-semibold">Jeremy Pivens</span>
        </div>
        <div className="flex gap-2 justify-end">
          <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className="rounded-full object-cover w-5 h-5 cursor-pointer "
          />
          <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className="rounded-full object-cover w-5 h-5 cursor-pointer"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/25950675/pexels-photo-25950675/free-photo-of-a-black-and-white-photo-of-a-woman-with-curly-hair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={32}
            height={32}
            className="rounded-full object-cover w-8 h-8"
          />
          <span className="font-semibold">Jeremy Pivens</span>
        </div>
        <div className="flex gap-2 justify-end">
          <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className="rounded-full object-cover w-5 h-5 cursor-pointer "
          />
          <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className="rounded-full object-cover w-5 h-5 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default FriendsRequest;
