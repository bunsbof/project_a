import React from "react";
import { Navbar, Search, Contacts, Chats } from "../components/index";

const Home = () => {
  return (
    <div className="home">
      <div className="flex">
        <div className="">
          {/* Navbar */}
          <Navbar />
          {/* Search */}
          <Search />
          {/* Contacts */}
          <Contacts />
        </div>
        {/* Chats */}
        <Chats />
      </div>
    </div>
  );
};

export default Home;
