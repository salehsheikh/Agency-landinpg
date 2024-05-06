import React from "react";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  return (
    <footer className="mt-8 py-8 mb-0">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* First List */}
        <div className=" md:mb-0">
          <div className="flex mb-4">
            <img src="Vector.png" alt="logo" className="w-8 h-8 mr-2" />
            <img src="Ik developers.png" alt="logo2" className="w-8 h-8" />
          </div>
          <p className="text-md text-gray-600 leading-loose">
            Lorem Ipsum is simply dummy text of the
            <br /> printing and typesetting industry.
          </p>
          <img
            src="google-page-speed 1.png"
            alt="google"
            className="mt-4 w-24"
          />
        </div>

        {/* Second List */}
        <div className="mt-10 md:mb-0">
          <ul className="text-md text-gray-600">
            <li className="mb-2 font-bold">Links</li>
            <li className="mb-2">About us</li>
            <li className="mb-2">Services</li>
            <li className="mb-2">Case studies</li>
            <li className="mb-2">How it works</li>
            <li className="mb-2">Blog</li>
          </ul>
        </div>

        {/* Third List */}
        <div className="mt-2 ">
          <ul className="text-md text-gray-600">
            <li className="mt-2 font-bold">Contact Us</li>
            <li className="mt-2 leading-loose">
              Lorem Ipsum is simply dummy text
              <br /> of the printing and type setting
              <br />
              industry.
            </li>
            <li>+923181546330</li>
          </ul>
        </div>

        {/* Fourth List */}
        <div className="mt-32">
          <ul className="flex ">
            <li className="mr-4 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md z-10">
              <RiInstagramFill className="text-2xl text-gray-600" />
            </li>
            <li className="mr-4 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md z-10">
              <IoLogoFacebook className="text-2xl text-gray-600" />
            </li>
            <li className="mr-4 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md z-10">
              <IoLogoTwitter className="text-2xl text-gray-600" />
            </li>
            <li className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md z-10">
              <IoLogoLinkedin className="text-2xl text-gray-600" />
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-8 border-t border-gray-200" />
      <p className="text-center text-sm text-gray-600">
        © 2024 Copyright by Saleh Muzaffar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
