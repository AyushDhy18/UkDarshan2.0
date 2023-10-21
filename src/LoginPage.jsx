import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen py-16">
      <div className="flex flex-row items-center justify-center h-full bg-gradient-to-r from-green-400 to-blue-500 p-28">
        {/* <div className="h-full bg-cover bg-no-repeat flex flex-row items-center justify-center mt-20 ml-40 mr-40 p-28 mb-96  bg-[url('https://www.indiadivine.org/wp-content/uploads/2015/09/temple-bells2-001.jpg')] "> */}
        <div className="flex flex-col">
          <Link
            className="font-bold text-7xl text-lime-700 hover:font-black"
            to="/"
          >
            UK-दर्शन
          </Link>
          <p className="text-2xl">Yahan pe kuch acha likhna hai ......</p>
        </div>
        <div className="flex flex-col items-center justify-center p-5 bg-white rounded-full shadow-2xl w-96 h-96 hover:rounded-xl ml-52 bg-[url('/Hills.jpg')]">
          <input
            type="email"
            placeholder="E-mail address or phone number"
            className="p-2 mt-12 mb-4 border w-80 rounded-xl"
          ></input>

          <input
            type="Password"
            placeholder="Password"
            className="p-2 mb-4 border w-80 rounded-xl"
          ></input>
          <button className="p-2 text-white border bg-lime-700 w-80 rounded-2xl">
            Log in
          </button>
          <a href="" className=" hover:underline">
            Forgotten Password ?
          </a>

          <hr className="mb-3 " />

          <div className="flex justify-center">
            <button className="text-white bg-blue-500 border rounded-2xl">
              <Link to="/signup" className="px-5 py-2">
                Sign Up
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
