import React from "react";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { BiLogOut } from "react-icons/bi";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  console.log("user is", user);

  return (
    <div className="bg-[url('/Hills.jpg')]">
      <div className="inset-x-0 top-0 flex justify-between px-16 py-2 overflow-hidden bg-black rounded-full shadow-lg">
        <div className="flex">
          <img className="h-12 mr-3 " src="/LogoUK.png" />
          <a
            className="self-center text-2xl font-semibold text-lime-600 hover:text-sky-600 hover:font-bold"
            href=""
          >
            UK दर्शन
          </a>
        </div>

        <div className="flex items-center">
          <a
            href="#spotlight"
            className="text-2xl font-semibold text-white hover:text-lime-600"
          >
            SpotLight
          </a>
          <Link
            className="ml-10 text-2xl font-semibold text-lime-600 hover:text-white"
            to="/Blogs"
          >
            BLogs
          </Link>
          <a
            className="ml-10 text-2xl font-semibold text-white hover:text-lime-600"
            href="#attractions"
          >
            attractions
          </a>
          {isAuthenticated == false ? (
            <button
              className="ml-10 font-semibold text-lime-600 hover:text-white"
              onClick={(e) => loginWithRedirect()}
            >
              <VscAccount className="mt-2 text-3xl" />
            </button>
          ) : (
            <>
              <button
                className="ml-10 font-semibold text-lime-600 hover:text-white"
                onClick={(e) => logout()}
              >
                <BiLogOut className="mt-2 text-3xl" />
              </button>
              <h1 className="text-white">{user.name}</h1>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
