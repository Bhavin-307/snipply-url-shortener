import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const placeholders = [
    "Paste your long URL here...",
    "Drop your link and make it short!",
    "Enter your URL to shorten it...",
    "Shrink your link—just paste & go!",
    "Your long link goes here...",
  ];

  const navigate = useNavigate();
  const [longURL, setLongURL] = useState();

  const handleShorten = (e) => {
    e.preventDefault();
    console.log("Long URL:", longURL);
    if (longURL) navigate(`/auth?createNew=${longURL}`);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center w-auto">
        <h2 className="mt-32 lg:mt-24 text-4xl sm:text-6xl lg:text-8xl font-extrabold text-neutral-800 dark:text-gray-300 flex flex-col items-center ">
          Shorten Your Links,
        </h2>
        <h2 className="leading-24 sm:mt-2 lg:mt-5 text-3xl sm:text-5xl lg:text-7xl  font-extrabold bg-gradient-to-r from-purple-700 via-pink-500 via-40% to-orange-400 bg-clip-text text-transparent">
          Amplify Your Reach.
        </h2>
        <p className="mx-auto mt-6 text-[15px] lg:text-[18px] items-center text-center tracking-widest text-gray-700 dark:text-gray-300">
          " Create short, memorable links in seconds. Track clicks and analyze
          your audience engagement. "
        </p>
      </div>
      <div className="w-80 md:w-xl lg:w-3xl rounded-lg mx-5 h-56 md:h-60 lg:h-64 mt-16 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06),_0_4px_16px_rgba(0,0,0,0.04)] dark:bg-gradient-to-br from-[#111828] via-[#111828] via-60% to-[#302A45] dark:shadow-[inset_0_1px_4px_rgba(255,255,255,0.02),_inset_0_-1px_4px_rgba(0,0,0,0.15)]">
        <div className="flex flex-col mx-5 mt-2 dark:text-[#D1D5DC]">
          <h2 className="text-md md:text-xl lg:text-2xl font-extrabold">
            Turn your long link into a short & shareable one!
          </h2>
          <p className="text-xs md:text-lg lg:text-xl opacity-70 font-medium mt-2">
            No payment required—just paste & go.
          </p>
        </div>
        <div className="flex flex-col mt-8 md:mt-10 mx-5">
          <h2 className="text-sm md:text-lg lg:text-xl font-extrabold dark:text-[#D1D5DC]">
            Enter your link here:
          </h2>
          <form onSubmit={handleShorten} className="mt-4 w-full">
            <PlaceholdersAndVanishInput
              type="url"
              value={longURL}
              placeholders={placeholders}
              onChange={(e) => setLongURL(e.target.value)}
            />
          </form>
        </div>
      </div>
      <div className="flex flex-col items-center mt-12">
        <h2 className="uppercase text-gray-700 dark:text-gray-300 font-medium opacity-80">
          Your Gateway to Smarter Connections
        </h2>
        <h2 className="mt-3 text-3xl font-extrabold text-center leading-11">
          The Snipply Connections Platform
        </h2>
        <p className="p-7 text-center">
          Easily shorten, track, and optimize your URLs with a powerful,
          all-in-one solution designed to simplify link management and boost
          engagement.
        </p>
        <button
          
          onClick={() => navigate("/auth")}
          
          className="px-8 py-2 mb-5  bg-[#1E293B] dark:bg-[#E2E8F0] dark:text-neutral-900 text-white text-sm rounded-md font-semibold hover:bg-[#1E293B]/[0.9] hover:dark:bg-[#E2E8F0]/[0.9] hover:shadow-lg cursor-pointer"
        >
          Try It Free
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
