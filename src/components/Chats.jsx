import React from "react";
import { face3, landscape1 } from "../assets";

const Chats = () => {
  return (
    <div className="hidden md:flex flex-col w-full border-l relative">
      {/* Header */}
      <div className="flex items-center px-4 w-full min-h-[4.5rem] z-20 bg-[#eeedef]">
        <div className="flex items-center w-[3.1rem] h-[3.1rem] bg-[#dda117] rounded-full">
          <img
            src={face3}
            alt="chats-contact-profile"
            className="object-cover w-full h-full rounded-full p-1"
          />
        </div>
        <div className="pl-2">
          <p className="font-semibold text-black/90">Boss</p>
          <p className="text-[14px] w-[15rem] whitespace-nowrap truncate text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      {/* Message */}
      <div className="absolute top-0 w-full h-full">
        <div className="absolute flex h-full w-full">
          <img src={landscape1} alt="bg-message" className="object-cover h-full" />
        </div>
      </div>
      {/* Texts */}
      <div className="relative z-20">
        <p className="">This is a message</p>
      </div>
      {/* Input */}
    </div>
  );
};

export default Chats;
