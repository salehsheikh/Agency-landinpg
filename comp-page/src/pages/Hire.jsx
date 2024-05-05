import React from "react";

const Hire = () => {
  return (
    <div className="w-full max-w-[1230px] bg-gradient-to-r from-[#F1F1F5] to-[#E4ECF7] mx-auto rounded-md mt-10 p-4 md:p-6">
      <div className="md:flex items-center">
        <div className="md:w-1/2 md:pr-8">
          <h5 className="font-bold leading-loose text-gray-800 text-2xl md:text-4xl">
            Hire the best developers and designers around!
          </h5>
        </div>
        <div className="md:w-1/2 md:pl-8 md:text-center md:mt-0 mt-4">
          <img
            src="Group 40.png"
            alt="confusion"
            className="mx-auto md:mx-0 my-4 md:my-0"
          />
          <button className="block mx-auto md:translate-y-[-120px] md:translate-x-[-220px] px-6 py-3 bg-gradient-to-r from-[#FFC656] to-[#F16063] text-white rounded-md ">
            Hire Top Developers
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hire;
