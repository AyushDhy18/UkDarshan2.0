import React from "react";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";

const Header = () => {
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
          <a
            className="ml-10 text-2xl font-semibold text-lime-600 hover:text-white"
            href="#spritual"
          >
            SpritualPlaces
          </a>
          <a
            className="ml-10 text-2xl font-semibold text-white hover:text-lime-600"
            href="#attractions"
          >
            attractions
          </a>
          <Link
            className="ml-10 font-semibold text-lime-600 hover:text-white"
            to="/login"
          >
            <VscAccount className="mt-2 text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
