import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="container mx-auto px-4 md:px-12 py-4 gap-3 flex flex-col md:flex-row">
        {/* First div */}
        <div className="flex flex-col justify-center space-y-5 mb-8 text-[#4A5568] md:w-1/2">
          <h1 className="text-4xl font-bold leading-normal">
            Great{" "}
            <span className="bg-gradient-to-r from-[#DE4396] to-[#0D1C9F] text-transparent bg-clip-text">
              Product
            </span>{" "}
            is <br />{" "}
            <span className="text-black">built by great</span>{" "}
            <span className="bg-gradient-to-r from-[#F7666F] to-[#406AFF] text-transparent bg-clip-text">
              teams
            </span>
          </h1>
          <p className="text-base text-gray-700 leading-loose">
            We help build and manage a team of world-class developers <br /> to
            bring your vision to life
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 w-[175px]">
            Learn More
          </button>
        </div>

        {/* Second div */}
        <div className="flex justify-center md:w-1/2">
          <img
            src="Hero-Wrapper__image--center.png"
            alt="About Us"
            className="rounded-md"
          />
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <img src="Ellipse 180.png" alt="ellipse" />
      </div>
    </>
  );
};

export default AboutUs;
