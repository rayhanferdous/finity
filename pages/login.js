import { AuthRepo } from "@/repository/AuthRepo";
import React, { useState } from "react";

const login = () => {
  const [userName, setUserName] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
 
  const submitForm = async (event) => {
    event.preventDefault();
    AuthRepo.login(userName, password);
  };

  return (
    <form onSubmit={submitForm} className="flex items-center justify-center">
      <div className=" bg-white rounded-2xl py-4 shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl">
        <h3 className="text-xl font-semibold text-blue-400 pt-2">Sign In!</h3>
        <div className="flex space-x-2 m-4 items-center justify-center"></div>
        {/* Inputs */}
        <div className="flex flex-col items-center justify-center">
          <input
            type="text"
            value={userName}
            className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Email"
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <input
            type="password"
            value={password}
            className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button className="rounded-2xl m-2 text-white bg-blue-400 w-2/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in">
            Sign In
          </button>
        </div>
      </div>
    </form>
  );
};

export default login;
