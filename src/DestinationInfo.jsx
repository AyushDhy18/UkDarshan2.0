import React, { useEffect, useState } from "react";
import { getPlaceData } from "./api";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

function DestinationInfo() {
  const [placeData, setPlaceData] = useState();
  const [loading, setLoading] = useState(true);
  const id = useParams().id;
  useEffect(() => {
    getPlaceData(id)
      .then((placeData) => {
        setPlaceData(placeData);
        setLoading(false);
        console.log(placeData);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  const Photo = `url('${placeData.thumbnail}')`;

  return (
    // <div className="flex flex-col items-center h-screen py-3 justify-top">
    //   <div className="">
    //     <div
    //       className={" bg-bottom w-screen h-80 "}
    //       style={{ backgroundImage: Photo }}
    //     ></div>
    //   </div>

    //   <div>
    //     <button>{placeData.title}</button>
    //   </div>
    // </div>
    <div className="bg-green-100 mb-24">
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <div className="h-full w-full">
          <div
            className="w-full h-72 bg-center"
            style={{ backgroundImage: Photo }}
          >
            <div className="flex items-center justify-center w-full backdrop-blur-md">
              <div className="">
                <img
                  src={placeData.thumbnail}
                  alt="dehradun"
                  className="rounded-full h-96 w-96"
                ></img>
              </div>
              <div className="ml-10 text-black w-96">
                <h1 className="mb-6 text-4xl">Dehradun</h1>
                <p>
                  Come to Dehradun, where mountains embrace tranquility. Explore
                  temples, taste local delights, and soak in nature's beauty for
                  an unforgettable experience
                </p>
                <h1></h1>
              </div>
            </div>
          </div>
          {/* Discription & other functions */}
          <div className="mt-32 mx-20">
            <h1 className="text-3xl font-bold mb-6">Discription</h1>
            <p className="text-lg">
              Come to Dehradun, where mountains embrace tranquility. Explore
              temples, taste local delights, and soak in nature's beauty for an
              unforgettable experienceCome to Dehradun, where mountains embrace
              tranquility.
              <br /> Explore temples, taste local delights, and soak in nature's
              beauty for an unforgettable experienceCome to Dehradun, where
              mountains embrace tranquility. Explore temples, taste local
              delights, and soak in nature's beauty for an unforgettable
              experienceCome to Dehradun
              <br /> where mountains embrace tranquility. Explore temples, taste
              local delights, and soak in nature's beauty for an unforgettable
              experience where mountains embrace tranquility.
              <br />
              Explore temples, taste local delights, and soak in nature's beauty
              for an unforgettable experiencewhere mountains embrace
              tranquility. Explore temples, taste local delights, and soak in
              nature's beauty for an unforgettable experience
            </p>
          </div>
        </div>
      </div>

      {/* other functions */}
      <div>
        <div className="flex justify-center items-center my-12">
          <h1 className="text-4xl font-black">HOW TO REACH</h1>
        </div>

        <div className="mx-20 flex gap-x-8 justify-center">
          <div className="flex flex-col w-80 shadow-lg bg-white shadow-black">
            <img
              src="https://uttarakhandtourism.gov.in/themes/utdb_frontend/images/Flight_Image.jpg"
              className=""
            />
            <div className="flex items-center justify-center my-3">
              <a
                href="https://www.google.com/travel/flights?hl=en#flt=/m/0dlv0..2019-01-13*./m/0dlv0.2019-01-17;c:INR;e:1;ls:1w;sd:0;t:h"
                className="text-2xl font-bold text-blue-500 hover:text-purple-700 hover:underline "
              >
                View Air Schedule
              </a>
            </div>
          </div>

          <div className="flex flex-col w-80 shadow-lg bg-white shadow-black">
            <img
              src="https://uttarakhandtourism.gov.in/themes/utdb_frontend/images/Train_Image.jpg"
              className=""
            />
            <div className="flex items-center justify-center my-3">
              <a
                href="https://www.google.com/travel/flights?hl=en#flt=/m/0dlv0..2019-01-13*./m/0dlv0.2019-01-17;c:INR;e:1;ls:1w;sd:0;t:h"
                className="text-2xl font-bold text-blue-500 hover:text-purple-700 hover:underline "
              >
                View Train Schedule
              </a>
            </div>
          </div>

          <div className="flex flex-col w-80 shadow-lg bg-white shadow-black">
            <img
              src="https://uttarakhandtourism.gov.in/themes/utdb_frontend/images/Bus_Image.jpg"
              className=""
            />
            <div className="flex items-center justify-center my-3">
              <a
                href="https://www.google.com/travel/flights?hl=en#flt=/m/0dlv0..2019-01-13*./m/0dlv0.2019-01-17;c:INR;e:1;ls:1w;sd:0;t:h"
                className="text-2xl font-bold text-blue-500 hover:text-purple-700 hover:underline "
              >
                View Road Schedule
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationInfo;
