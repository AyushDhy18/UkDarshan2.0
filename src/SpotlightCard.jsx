import React from "react";

function SpotlightCard({ image, placeName }) {
  return (
    <>
      {/* <div
        className={
          " h-40 mb-6 w-60 rounded-lg flex flex-col justify-center items-center text-white font-extrabold " +
          image
        }
      >
        <h1 className="shadow-2xl shadow-black">{placeName}</h1>
      </div> */}
      <div
        className={
          " h-40 mb-6 w-60 rounded-lg flex flex-col justify-center items-center text-white font-extrabold bg-[url('/Hills.jpg')]"
        }
      >
        <h1 className="shadow-2xl shadow-black">Ghumne ki jagah</h1>
      </div>
    </>
  );
}

export default SpotlightCard;
