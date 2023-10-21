import React from "react";
import { Link } from "react-router-dom";

function AttractionCard({ id, photo }) {
  return (
    <>
      <div className="shadow mb-7 hover:shadow-2xl ">
        <Link
          to={"/destination/" + id}
          target="_
              blank"
        >
          <div className="flex flex-row">
            <img
              src={photo}
              alt={id}
              className="w-20 h-20 mr-3 rounded-lg"
            ></img>

            <div className="flex flex-col justify-center ml-3 mr-3">
              <div className="mr-9">
                <Link
                  to={"/destination/" + id}
                  target="_
              blank"
                  className="text-lg font-bold decoration-auto hover:underline decoration-3 "
                >
                  {id}
                </Link>
                <p>1,440 Tour and Activities</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default AttractionCard;
