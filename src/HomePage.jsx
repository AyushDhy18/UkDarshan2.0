import React from "react";
import SpotlightCard from "./SpotlightCard";
import DevDarshan from "./DevDarshan";
import SpotLight from "./SpotLight";
import Attractions from "./Attractions";
import Header from "./Header";
function HomePage() {
  return (
    <div>
      <div className="">
        <Header></Header>
        <div className="h-screen bg-cover bg-no-repeat flex flex-col place-content-center bg-[url('/Hills.jpg')]">
          <input
            className="self-center w-1/3 px-8 py-4 border-gray-300 rounded-full border-1 decoration-none focus:outline-none focus:border-2 focus:border-yellow-300 justify-self-center"
            placeholder="Explore"
          />
        </div>

        <div className="h-64"></div>

        <SpotLight />

        <div className="h-64"></div>

        <Attractions></Attractions>

        <div className="h-64"></div>
        <DevDarshan></DevDarshan>
      </div>
    </div>
  );
}

export default HomePage;
