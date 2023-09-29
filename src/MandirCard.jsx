import React from "react";

function MandirCard() {
  return (
    <>
      <div className="w-64 h-64 ">
        <div className="w-64 h-64 bg-cover bg-opacity-40 bg-[url('https://badrinath-kedarnath.gov.in/Assets/image/k3.jpg')] border rounded-xl">
          <div className="flex items-center justify-center w-full h-full p-3 text-center bg-white opacity-80">
            Dedicated to Lord Shiva, the ancient temple has exquisite
            architecture and is built of extremely large but evenly shaped grey
            stone slabs.
          </div>
        </div>
        <div className="relative w-64 h-64 bg-cover bottom-64 bg-[url('https://badrinath-kedarnath.gov.in/Assets/image/k3.jpg')] rounded-xl hover:opacity-0 "></div>
      </div>
    </>
  );
}

export default MandirCard;
