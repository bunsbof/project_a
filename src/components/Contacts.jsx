import React from "react";
import { Contact } from "../components/index";
import profile from "../assets/profile.jpg";
import { face1, face2, face3, face4, face5, face6 } from "../assets";

const Contacts = () => {
  const Contacts = [
    {
      id: '1',
      img: face1,
      name: "Tester",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: '2',
      img: face2,
      name: "Admin",
      message:
        "Sed a est vel neque ultrices accumsan quis eu diam. Pellentesque vitae tellus ac turpis aliquam consequat.",
    },
    {
      id: '3',
      img: face3,
      name: "Boss",
      message: "Phasellus pellentesque maximus pharetra.",
    },
    {
      id: '4',
      img: face4,
      name: "Người Giỡn",
      message:
        "Morbi hendrerit hendrerit arcu, non rutrum ante aliquam vitae. Cras sit amet nibh sed turpis euismod malesuada.",
    },
    {
      id: '5',
      img: face5,
      name: "Banhsbeof",
      message:
        "Morbi eu sem rhoncus, egestas erat luctus, finibus eros. Donec a ex convallis, ultrices sapien et, fringilla purus.",
    },
    {
      id: '6',
      img: face6,
      name: "Mồ Côi",
      message:
        "Curabitur lacinia, leo ut tincidunt faucibus, massa sem posuere nulla, sed lobortis diam mauris nec libero.",
    },
    {
      id: '7',
      img: face3,
      name: "Boss",
      message: "Phasellus pellentesque maximus pharetra.",
    },
    {
      id: '8',
      img: face4,
      name: "Người Giỡn",
      message:
        "Morbi hendrerit hendrerit arcu, non rutrum ante aliquam vitae. Cras sit amet nibh sed turpis euismod malesuada.",
    },
    {
      id: '9',
      img: face5,
      name: "Banhsbeof",
      message:
        "Morbi eu sem rhoncus, egestas erat luctus, finibus eros. Donec a ex convallis, ultrices sapien et, fringilla purus.",
    },
  ];
  return (
    <div>
      <div className="md:w-[20rem] px-4">
        {Contacts.map((contact) => (
          <Contact key={contact.id} img={contact.img} name={contact.name} message={contact.message} />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
