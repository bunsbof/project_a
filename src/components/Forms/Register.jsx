import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { TfiFacebook, TfiGoogle, TfiLinkedin } from "react-icons/tfi";

const Register = () => {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState();
  // const navigate = useNavigate();

  const postDetails = (pics) => {
    
  };

  const registerHandler = async (e) => {
    e.preventDefault();

  };

  return (
    <>
      <form
        onSubmit={registerHandler}
        className="bg-white flex item-center justify-center flex-col py-0 px-[50px] h-full text-center"
      >
        <h1 className="font-bold my-px text-3xl">Create Account</h1>
        <div className="my-5 mx-0 flex flex-row items-center justify-around">
          <a className="text-[#333] font-sm no-underline border-1 border-solid border-socialBtn rounded-circle inline-flex justify-center items-center my-0 mx-1.4 h-10 w-10">
            <TfiFacebook />
          </a>
          <a className="text-[#333] font-sm no-underline border-1 border-solid border-socialBtn rounded-circle inline-flex justify-center items-center my-0 mx-1.4 h-10 w-10">
            <TfiGoogle />
          </a>
          <a className="text-[#333] font-sm no-underline border-1 border-solid border-socialBtn rounded-circle inline-flex justify-center items-center my-0 mx-1.4 h-10 w-10">
            <TfiLinkedin />
          </a>
        </div>
        <input
          id="file"
          type="file"
          appcept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
          className="hidden"
        />
        <label htmlFor="file" className="forfile">
          Choose a Photo
        </label>
        <input
          value={name}
          type="text"
          placeholder="Name"
          onChange={(e) => setUsername(e.target.value)}
          className="bg-mainTheme border-none py-3 px-3.6 my-2 mx-0 w-full focus:outline-none"
        />
        <input
          value={email}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="bg-mainTheme border-none py-3 px-3.6 my-2 mx-0 w-full focus:outline-none"
        />
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="bg-mainTheme border-none py-3 px-3.6 my-2 mx-0 w-full focus:outline-none"
        />
        <input
          value={confirmPassword}
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="bg-mainTheme border-none py-3 px-3.6 my-2 mx-0 w-full focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-loginBtn border-1 border-solid border-btnBorder bg-loginBtn text-white text-xs font-bold py-3 px-11 tracking-[1px] uppercase active:scale-95 focus:outline-none"
        >
          Sign Up
        </button>
      </form>
    </>
  );
};

export default Register;
