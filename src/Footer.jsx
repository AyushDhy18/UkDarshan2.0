import React from "react";

function Footer() {
  return (
    <>
      <footer className="px-24 py-16 text-white bg-black h-80">
        <div className="flex flex-col">
          <div className="flex ">
            <img src="/LogoUK.png" alt="logo" className="h-8 mr-2" />
            <div className="flex flex-col">
              <h1 className="text-2xl text-white">UK दर्शन</h1>
            </div>
          </div>
          <h2 className="mt-5 italic">Explore the Land of gods with us</h2>
        </div>

        <div className="border-y-4"></div>
      </footer>
    </>
  );
}

export default Footer;
