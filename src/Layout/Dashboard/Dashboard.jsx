import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const Dashboard = () => {

    const { user, setLocalStorageChange } = useAuth();
    // Logout handler 
    const handleLogout = () => {
      localStorage.removeItem("Current User");
      toast.success("Successfully Logged out in");
      setLocalStorageChange((prevState) => !prevState);
    };

    // responsive state 
    const  [isOpen,setIsOpen] = useState(false)
    const localData = localStorage.getItem("Current User"); 
    const data = JSON.parse(localData)
    
    

  return (
    <div className={`flex flex-col md:flex-row`}>
      <div
        className={`bg-[#8EA7E9] h-screen md:w-[280px]  md:sticky top-0  ${
          isOpen ? "fixed  w-[280px]" : "w-full static h-max md:h-screen"
        }  `}
      >
        <div className="block md:hidden z-50 relative p-4">
          {isOpen ? (
            <button onClick={() => setIsOpen(!isOpen)} className="rounded-lg">
              <svg
                width={45}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                    fill="white"
                  ></path>{" "}
                </g>
              </svg>
            </button>
          ) : (
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                width={45}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M4 12H20M4 8H20M4 16H12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </button>
          )}
        </div>
        {/* profile part  */}
        <div className={` ${isOpen ? "" : "hidden"} md:block`}>
          <div className="mt-16 mb-10 flex flex-col items-center justify-center space-y-4 ">
            <img
              className="w-[100px] h-[100px] rounded-full border-2 border-white custom-border2"
              src="https://source.unsplash.com/300x300/?profile"
              alt=""
            />
            <div className="text-center">
              <h1 className="text-2xl font-medium text-white/80">
                {data?.name}
              </h1>
              <p className="text-gray-400 text-white/60">{data?.role}</p>
            </div>
          </div>
          <div className="text-center flex flex-col gap-y-6">
            <Link
              to="/dashboard"
              className="px-6 py-2 bg-white custom-border font-medium text-[#4a64ac] w-max mx-auto"
            >
              Dashboard
            </Link>
            <Link
              to="/dashboard/add home"
              className="px-6 py-2 bg-white custom-border font-medium text-[#4a64ac] w-max mx-auto"
            >
              Add Home
            </Link>

            <div>
              {localStorage.getItem("Current User") ? (
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 bg-white custom-border font-medium text-[#4a64ac] w-max mx-auto"
                >
                  Logout
                </button>
              ) : (
                <Link to="/login">
                  <button className="px-6 py-2 bg-white custom-border font-medium text-[#4a64ac] w-max mx-auto">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "opacity-20" : "opacity-100"
        } w-full md:w-[calc(100%-280px)] bg-[#ECF2F9] p-10 -z-10`}
      >
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
