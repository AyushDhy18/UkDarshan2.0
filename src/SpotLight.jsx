import React from "react";
import SpotlightCard from "./SpotlightCard";

function SpotLight() {
  return (
    <>
      <div className="mt-12 bg-slate-50" id="spotlight">
        <div className="flex items-center justify-center">
          <hr className="w-11/12 " />
        </div>
        <h1 className="my-5 text-3xl font-black text-center ">
          Spotlight Destinations
        </h1>
        <div className="grid justify-around grid-cols-5 mr-auto place-items-center">
          {/* <SpotlightCard
            placeName="Dehradun"
            image="bg-[url('https://res.cloudinary.com/tourhq/image/upload/c_fill,f_auto,fl_progressive,q_auto,g_auto,h_262,w_382/spotlight_images/saudi_img')]"
          /> */}

          <SpotlightCard />
          <SpotlightCard />
          <SpotlightCard />
          <SpotlightCard />
          <SpotlightCard />
          <SpotlightCard />
          <SpotlightCard />
          <SpotlightCard />
          <SpotlightCard />
          <SpotlightCard />
        </div>
      </div>
    </>
  );
}

export default SpotLight;
