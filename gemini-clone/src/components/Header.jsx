import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import React, { useContext } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const Header = () => {
  const { isSubscribed } = useContext(Context);
  return (
    <div className="navbar max-sm:px-4 pr-4">
      <div className="flex-1">
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="drawer-button sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              id="menu"
              className="cursor-pointer"
            >
              <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                <g stroke="#d1d5db" strokeWidth={2} transform="translate(-1629 -1753)">
                  <g transform="translate(1630 1754)">
                    <path d="M0 6h18M0 0h18M0 12h18" />
                  </g>
                </g>
              </g>
            </svg>
          </label>
        </div>

        <div className="dropdown dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-gray-300 font-normal text-xl"
          >
            Gemini
            <svg
              className="w-4 h-4 mt-1 !text-gray-300"
              fill="#d1d5db"
              viewBox="-6.5 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>dropdown</title>{" "}
                <path
                  d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z"
                  className="h-6 w-6"
                />{" "}
              </g>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-72"
          >
            <div className="flex gap-3 justify-between items-center p-3">
              <div className="flex gap-3 items-center">
                <img src="/google-gemini-icon.svg" className="w-6 h-6" alt="" />
                <p className="text-gray-300">Gemini</p>
              </div>

              {!isSubscribed ? (
                <FaCheckCircle size={20} className="text-green-500" />
              ) : (
                <button className="btn btn-md text-gray-300" onClick={() => window.location.reload()}>Select</button>
              )}
              
            </div>
            <div className="flex gap-3 items-center p-3 justify-between">
             <div className="flex gap-3 items-center">
             <img src="/gemini-advanced.svg" className="w-6 h-6" alt="" />
              <p className="text-gray-300">Gemini Advanced</p>
             </div>
              {isSubscribed ? (
                <FaCheckCircle size={20} className="text-green-500" />
              ) : (
                <Link to="/pricing" className="btn btn-md text-gray-300">
                Upgrade
              </Link>
              )}
            </div>
          </ul>
        </div>
      </div>

      <SignedOut>
        <Link to="/sign-in" className="btn">
          {" "}
          Sign In{" "}
        </Link>
      </SignedOut>

      <SignedIn>
        <UserButton afterSignOutUrl="/sign-in" />
      </SignedIn>
    </div>
  );
};

export default Header;
