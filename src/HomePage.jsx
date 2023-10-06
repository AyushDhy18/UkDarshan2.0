import React from "react";
import SpotlightCard from "./SpotlightCard";
import DevDarshan from "./DevDarshan";
import SpotLight from "./SpotLight";
import Attractions from "./Attractions";
import Header from "./Header";
import Signup from "./Signup";

let foundValues;

const searchChange = (event) => {
  let Districts = [
    "Almora",
    "Bageshwar",
    "Chamoli",
    "Champawat",
    "Dehradun",
    "Haridwar",
    "Nainital",
    "Pauri Garhwal",
    "Pithoragarh",
    "Rudraprayag",
    "Tehri Garhwal",
    "Udham Singh Nagar",
    "Uttarkashi",
  ];
  let valueToFind = event.target.value.toLowerCase();

  foundValues = Districts.filter(
    (element) => element.toLowerCase() == valueToFind
  );

  if (foundValues != 0) {
    console.log(foundValues);
    document.getElementById("query").innerHTML = foundValues;
  }
};

function HomePage() {
  return (
    <div>
      <div className="">
        <Header></Header>
        <div className="h-screen bg-cover bg-no-repeat flex flex-col place-content-center bg-[url('/Hills.jpg')]">
          {/* Search bar */}
          <input
            className="self-center w-1/3 px-8 py-4 border-gray-300 rounded-full border-1 decoration-none focus:outline-none focus:border-2 focus:border-yellow-300 justify-self-center"
            placeholder="Explore"
            onChange={searchChange}
          />
          <div className="flex self-center w-1/3 px-4 mt-1 text-2xl border rounded-full bg-slate-50 justify-self-center">
            {" "}
            <a href="" id="query"></a>
          </div>
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
