import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col justify-center p-5 bg-white shadow-2xl">
          <label for="First">First Name</label>
          <input
            type="text"
            id="First"
            placeholder="First Name"
            className="p-2 mb-4 border shadow-2xl w-80 rounded-xl"
          ></input>
          <label for="Last">Last Name </label>
          <input
            type="text"
            id="Last"
            placeholder="Last Name"
            className="p-2 mb-4 border shadow-2xl w-80 rounded-xl"
          ></input>
          <label for="Mail">E-mail Address </label>
          <input
            type="email"
            id="Mail"
            placeholder="Username "
            className="p-2 mb-4 border shadow-2xl w-80 rounded-xl"
          ></input>

          <label for="Password">Password</label>
          <input
            type="Password"
            id="Password"
            placeholder="Password"
            className="p-2 mb-4 border shadow-2xl w-80 rounded-xl"
          ></input>

          <label for="Confirm">Confirm Password</label>
          <input
            type="Password"
            id="Confirm"
            placeholder="Confirm Password"
            className="p-2 mb-4 border shadow-2xl w-80 rounded-xl"
          ></input>
          <div className="flex justify-center space-x-16">
            <button className="px-5 py-2 text-white bg-blue-500 border rounded-2xl">
              <Link to="/login">Back</Link>
            </button>

            <button className="px-5 py-2 text-white bg-blue-500 border rounded-2xl">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
