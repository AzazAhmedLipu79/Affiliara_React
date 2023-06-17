import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Header({ logoutStatus }) {
  const { user, isAuthenticated, logout } = useAuth0();
  console.log(useAuth0());
  return (
    <section
      id="Header"
      className="w-full  flex flex-col items-center border-b  pb-1   border-[#1e1e1e] "
    >
      <div className="container max-w-7xl h-full ">
        <h2 className="font-a text-center text-2xl lg:text-3xl lg:my-4 my-2  ">
          <span className="animate-pulse text-gray-900">R</span>afy{" "}
          <span className="animate-pulse text-gray-900">I</span>ELTS
        </h2>

        <ul className="flex justify-around items-center text-sm  lg:mx-[10%] ">
          <li>
            <Link
              className="hover:bg-red-100 hover:text-red-500 px-2 py-1 rounded-full"
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li className="hover:bg-red-100 hover:text-red-500 px-2 py-1 rounded-full">
            <Link to={"#about"}>About</Link>
          </li>
          <li className="hover:bg-red-100 hover:text-red-500 px-2 py-1 rounded-full">
            {" "}
            {isAuthenticated ? (
              <div className="flex items-center justify-center">
                <img
                  src={user?.picture}
                  className="w-[20px] h-[20px] rounded-full"
                />
                <Link to={"/dashboard"} className="mx-2">
                  {user?.name}
                </Link>
              </div>
            ) : (
              <Link to={"/login"}>Login</Link>
            )}
          </li>

          {logoutStatus && (
            <li className="hover:bg-red-100 hover:text-red-500 px-2 py-1 rounded-full">
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
