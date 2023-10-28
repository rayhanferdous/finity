import { useRouter } from "next/router";
import React from "react";
import Cookies from "universal-cookie";

const dashboard = () => {
  const cookies = new Cookies(null, { path: "/" });
  const router = useRouter();
  const handleLogout = () => {
    cookies.remove("token");
    router.push("/");
  };
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            You're logged in!
          </div>
          <button onClick={handleLogout} className="primary-btn">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
