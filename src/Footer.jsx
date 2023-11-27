import React from "react";

function Footer() {
  return (
    <>
      <footer className="px-24 pt-16 pb-4 text-white bg-black h-80">
        <div className="flex flex-col">
          <div className="flex ">
            <img src="/LogoUK.png" alt="logo" className="h-8 mr-2" />
            <div className="flex flex-col">
              <h1 className="text-2xl text-white">UK दर्शन</h1>
            </div>
          </div>
          <h2 className="mt-5 italic w-1/2">
            Discover the enchanting beauty of Uttarakhand, where every mountain
            tells a story, every river whispers a melody, and every village is a
            chapter in nature's grand tale. Explore the hidden gems and embrace
            the magic of the Himalayas with us.
          </h2>
        </div>

        <div className="border-y-2 my-5"></div>

        <div className="flex items-center justify-center ">
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/UttarakhandTourismOfficialPage/"
              target="_blank"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/145/145802.png"
                alt="facebook"
                className="h-6"
              />
            </a>
            <a
              href="https://www.instagram.com/uttarakhand_tourismofficial/"
              target="_blank"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
                alt="instagram"
                className="h-6"
              />
            </a>
            <a href="https://twitter.com/UTDBofficial" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png"
                alt="twitter"
                className="h-6"
              />
            </a>

            <a
              href="https://www.youtube.com/channel/UCX7c5KGrPjG8tzna7xhro4g"
              target="_blank"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/174/174883.png"
                alt="youtube"
                className="h-6"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-5">
          <h6 className="text-sm text-slate-400">
            Made by team : Ayush, Himanshu, Sudhanshu, Shashank, Harsh.
          </h6>
        </div>
      </footer>
    </>
  );
}

export default Footer;
