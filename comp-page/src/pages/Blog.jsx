import React from "react";

const Blog = () => {
  return (
    <>
      <div className="flex justify-center lg:mb-4 ">
        <hr className="w-10 h-[5px] bg-[#DE4396] mb-4 md:mb-0 md:mr-4" />
      </div>
      <div className="lg:flex justify-center items-center ">
        <div className="text-center">
          <h1 className=" lg:mb-3 sm-mb-1">
            Our <br />
          </h1>
          <h1 className="font-bold ">Tech stack</h1>
        </div>
      </div>
      <div className="flex justify-center">
        <ul className="flex lg:gap-12 md:gap-3 sm:flex-wrap">
          <li className="relative text-pink-500">
            <span className="absolute inset-x-2 bottom-[-4px] h-1 bg-pink-500"></span>
            Backend
          </li>
          <li>Frontend</li>
          <li>Databases</li>
          <li>Cms</li>
          <li>Cloud testing</li>
          <li>Devops</li>
        </ul>
      </div>
      <div>
        <div className="flex justify-center">
            <ul  className="flex lg:gap-3 md:gap-1 sm:flex-wrap">
                <li><img src="NodeJS.png" alt="node" /> </li>
                <li><img src="PHP.png" alt="php" /></li>
                <li><img src="mysql.png" alt="sql" /></li>
                <li><img src="Java.png" alt="prog" /></li>
                <li><img src="NETCore.png" alt="net" /></li>
            </ul>
        </div>
        {/* second list */}
        <div className="flex justify-center">
            <ul  className="flex lg:gap-2 md:gap-0 sm:flex-wrap">
                <li><img src="Python.png" alt="node" /> </li>
                <li><img src="RubyOnRails.png" alt="php" /></li>
                <li><img src="Go.png" alt="sql" /></li>
                <li><img src="mon 1.png" alt="prog" /></li>
            </ul>
        </div>
      </div>

      {/* second page */}
      <div className="mt-12">
      <div className="flex justify-center lg:mb-4 ">
        <hr className="w-10 h-[5px] bg-[#DE4396] mb-4 md:mb-0 md:mr-4" />
      </div>
      <div className="lg:flex justify-center items-center ">
        <div className="text-center">
          <h1 className=" lg:mb-3 sm-mb-1">
            Featured <br />
          </h1>
          <h1 className="font-bold ">Resources</h1>
        </div>
      </div>

      {/* cards */}
      <div className="flex gap-16 justify-center mt-8 flex-wrap">
        <div>
            <img src="Rectangle 10.png" alt="i" />
            <p>How to Build a Scalable <br />Application up to 1 Million Users on <br /> AWS</p>
        </div>
        <div>
            <img src="Rectangle 10 (1).png" alt="i" />
            <p>How to Build a Scalable <br />Application up to 1 Million Users on <br /> AWS</p>
        </div>
        <div>
            <img src="Rectangle 10 (2).png" alt="i" />
            <p>How to Build a Scalable <br />Application up to 1 Million Users on <br /> AWS</p>
        </div>
        <div>
            <img src="Rectangle 10 (3).png" alt="i" />
            <p>How to Build a Scalable <br />Application up to 1 Million Users on <br /> AWS</p>
        </div>
        <div>
            <img src="Rectangle 10 (4).png" alt="i" />
            <p>How to Build a Scalable <br />Application up to 1 Million Users on <br /> AWS</p>
        </div>
      </div>
      </div>

     
    </>
  );
};

export default Blog;
