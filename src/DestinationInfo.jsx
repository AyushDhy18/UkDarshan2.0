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
    <div className="flex flex-col items-center h-screen py-3 justify-top">
      <div className="">
        <div
          className={" bg-bottom w-screen h-80 bg-cover"}
          style={{ backgroundImage: Photo }}
        ></div>
      </div>

      <div>
        <button>{placeData.title}</button>
      </div>
    </div>
  );
}

export default DestinationInfo;
