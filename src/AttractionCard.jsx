import React from "react";

function AttractionCard() {
  return (
    <>
      <div className="shadow mb-7 hover:shadow-2xl ">
        <a
          href="https://www.euttaranchal.com/tourism/dehradun-tour-packages.php"
          target="_
              blank"
        >
          <div className="flex flex-row">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/54/af.jpg "
              alt="dehradun"
              className="w-20 h-20 mr-3 rounded-lg"
            ></img>

            <div className="flex flex-col justify-center ml-3 mr-3">
              <div className="mr-9">
                <a
                  href="https://www.euttaranchal.com/tourism/dehradun-tour-packages.php"
                  className="text-lg font-bold decoration-auto hover:underline decoration-3 "
                >
                  Dehradun
                </a>
                <p>1,440 Tour and Activities</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default AttractionCard;
