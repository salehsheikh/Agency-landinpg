import React from "react";

const CaseStudies = () => {
  return (
    <div className="bg-[#F5F5F5] translate-y-[-140px] mt-36 ">
      <div className="lg:pl-[410px] md:pl-[40px] lg:pt-9">
        <img src="Ellipse 180.png" alt="elipse" className="w-[18px] h-[18px]" />
      </div>
      <div className="flex justify-center mb-4">
        <hr className="w-10 h-[5px] bg-[#DE4396] mb-4 md:mb-0 md:mr-4" />
      </div>
      <div className="flex justify-center items-center ">
        <div className="text-center">
          <h1 className="mb-3">Our recent</h1>
          <h1 className="font-bold">Case studies</h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 md:gap-8 m-8 md:m-28 bg-[#F1F2FF]">
        <div className="flex-1">
          <img src="Case-study__image.png" alt="pp" className="w-full h-auto" />
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-center md:text-left leading-loose pt-12 pb-8">
            Website Design for SCFC Canada
          </h1>
          <p className="text-balance md:text-left leading-relaxed">
            Born out of a vision, a single-minded objective that puts service
            before anything else, Swift Clearance and Forwarding Corp. surging
            forth to deliver the best services in the shipping and logistics
            scenario. Its meteoric rise stems out of a solid foundation. The
            management boasts of over 20 years of rich and varied experience in
            the shipping and freight forwarding industry.
          </p>
          <p className="bg-gradient-to-r from-[#DE4396] to-[#0D1C9F] text-transparent bg-clip-text lg:ml-[390px] pt-[70px]">
            Read more &gt;
          </p>
        </div>
      </div>

      {/* second card */}

      <div className="flex flex-col md:flex-row gap-2 md:gap-8 m-8 md:m-28 bg-[#F0FFF7]">
        <div className="flex-1">
          <img
            src="Case-study__image (1).png"
            alt="pp"
            className="w-full h-auto"
          />
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-center md:text-left leading-loose pt-12 pb-8">
            Website Design for SCFC Canada
          </h1>
          <p className="text-balance md:text-left leading-relaxed">
            Born out of a vision, a single-minded objective that puts service
            before anything else, Swift Clearance and Forwarding Corp. surging
            forth to deliver the best services in the shipping and logistics
            scenario. Its meteoric rise stems out of a solid foundation. The
            management boasts of over 20 years of rich and varied experience in
            the shipping and freight forwarding industry.
          </p>
          <p className="bg-gradient-to-r from-[#DE4396] to-[#0D1C9F] text-transparent bg-clip-text lg:ml-[390px] pt-[70px]">
            Read more &gt;
          </p>
        </div>
      </div>

      {/* third card */}

      <div className="flex flex-col md:flex-row gap-2 md:gap-8 m-8 md:m-28 bg-[#FFF4F4]">
        <div className="flex-1">
          <img
            src="Case-study__image (2).png"
            alt="pp"
            className="w-full h-auto"
          />
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-center md:text-left leading-loose pt-12 pb-8">
            Website Design for SCFC Canada
          </h1>
          <p className="text-balance md:text-left leading-relaxed">
            Born out of a vision, a single-minded objective that puts service
            before anything else, Swift Clearance and Forwarding Corp. surging
            forth to deliver the best services in the shipping and logistics
            scenario. Its meteoric rise stems out of a solid foundation. The
            management boasts of over 20 years of rich and varied experience in
            the shipping and freight forwarding industry.
          </p>
          <p className="bg-gradient-to-r from-[#DE4396] to-[#0D1C9F] text-transparent bg-clip-text lg:ml-[390px] pt-[70px]">
            Read more &gt;
          </p>
        </div>
      </div>

      <p className=" bottom-0 lg:ml-[990px] md:ml-[340px] bg-gradient-to-r from-[#DE4396] to-[#0D1C9F] text-transparent bg-clip-text p-4">
        Read more case studies &gt;
      </p>
    </div>
  );
};

export default CaseStudies;
