import React from "react";

const Contact = ({ img, name, message }) => {
  return (
    <div className="flex justify-between border-b pt-2 pb-2">
      <div className="flex items-center">
        <div className="flex w-16 h-16">
          <img
            src={img}
            alt="contact-profile"
            className="object-cover w-full rounded-full"
          />
        </div>
        <div className="pl-3">
          <p className="font-semibold text-[18px]">{name}</p>
          <p className="text-gray-600 w-[20rem] md:w-[10rem] truncate">{message}</p>
        </div>
      </div>
      <div className="flex h-full text-gray-400">
        <p className="">12:30</p>
      </div>
    </div>
  );
};

export default Contact;
