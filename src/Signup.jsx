import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500 ">
        <div className="flex flex-col justify-center p-5 shadow-2xl bg-[url('/Hills.jpg')] bg-top rounded-lg">
          <label for="First" className="font-medium">
            First Name
          </label>
          <input
            type="text"
            id="First"
            placeholder="First Name"
            className="p-2 mb-4 border shadow-2xl w-80 rounded-xl"
          ></input>
          <label for="Last" className="font-medium">
            Last Name{" "}
          </label>
          <input
            type="text"
            id="Last"
            placeholder="Last Name"
            className="p-2 mb-4 border shadow-2xl w-80 rounded-xl"
          ></input>
          <label for="Mail" className="font-medium">
            E-mail Address{" "}
          </label>
          <input
            type="email"
            id="Mail"
            placeholder="Username "
            className="p-2 mb-4 border shadow-2xl w-80 rounded-xl"
          ></input>

          <label for="Password" className="font-medium">
            Password
          </label>
          <input
            type="Password"
            id="Password"
            placeholder="Password"
            className="p-2 mb-4 border shadow-2xl w-80 rounded-xl"
          ></input>

          <label for="Confirm" className="font-medium">
            Confirm Password
          </label>
          <input
            type="Password"
            id="Confirm"
            placeholder="Confirm Password"
            className="p-2 mb-4 border shadow-2xl w-80 rounded-xl"
          ></input>
          <div className="flex justify-center space-x-16">
            <button className="text-white bg-blue-500 border  rounded-2xl">
              <Link to="/login" className="px-5 py-2">
                Back
              </Link>
            </button>

            <button className="px-5 py-2 text-white bg-blue-500 border rounded-2xl">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
