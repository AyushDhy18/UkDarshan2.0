import React from "react";
import MandirCard from "./MandirCard";

function DevDarshan() {
  return (
    <>
      <div id="spritual">
        <div>
          <h1 className="my-5 text-3xl font-black text-center ">
            Spritual Places
          </h1>
        </div>
        <div className="grid justify-center grid-cols-4 gap-x-4 p-9 gap-y-10">
          {/* <MandirCard phto="bg-[url('https://badrinath-kedarnath.gov.in/Assets/image/k3.jpg')]"></MandirCard> */}
          <MandirCard></MandirCard>
          <MandirCard></MandirCard>
          <MandirCard></MandirCard>
          <MandirCard></MandirCard>
          <MandirCard></MandirCard>
          <MandirCard></MandirCard>
          <MandirCard></MandirCard>
          <MandirCard></MandirCard>
        </div>
      </div>
    </>
  );
}

export default DevDarshan;
