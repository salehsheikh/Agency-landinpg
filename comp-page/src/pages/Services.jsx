import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Star from "../components/Star";
function Services() {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    centerPadding: "80px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-[1440px]h-auto bg-[#F9F9FF] z-20 mt-16 translate-y-[-58px]">
        <h1 className="text-center font-bold pt-4 pb-5">Services we offer</h1>
        <div className="slider-container">
          <Slider {...settings}>
            {/* cards start now */}

            <div className=" bg-[#ffffff] shadow-lg rounded-lg p-8  ">
              <div>
                <img
                  src="Code_perspective_matte.png"
                  alt="code"
                  className="rounded-full border-2 border-red-500"
                />
                <h1 className=" text-lg bg-gradient-to-r from-[#F76680] to-[#57007B] text-transparent bg-clip-text">
                  website design and development
                </h1>
                <p className="color-[#4A5568] text-sm">
                  A Website is an extension of yourself and we can help you to
                  express it properly. Your website is your number one marketing
                  asset because we live in a digital age.
                </p>
              </div>
            </div>
            <div className=" bg-[#ffffff] shadow-lg rounded-lg p-8">
              <div>
                <img
                  src="Dashboard_perspective_matte.png"
                  alt="code"
                  className="rounded-full border-2 border-red-500"
                />
                <h1 className=" text-lg bg-gradient-to-r from-[#F76680] to-[#57007B] text-transparent bg-clip-text">
                  Software testing services
                </h1>
                <p className="color-[#4A5568] text-sm">
                  A Website is an extension of yourself and we can help you to
                  express it properly. Your website is your number one marketing
                  asset because we live in a digital age.
                </p>
              </div>
            </div>
            <div className=" bg-[#ffffff] shadow-lg rounded-lg p-8">
              <div>
                <img
                  src="Mobile_app_perspective_matte.png"
                  alt="code"
                  className="rounded-full border-2 border-red-500"
                />
                <h1 className=" text-lg bg-gradient-to-r from-[#F76680] to-[#57007B] text-transparent bg-clip-text">
                  Mobile app development
                </h1>
                <p className="color-[#4A5568] text-sm">
                  A Website is an extension of yourself and we can help you to
                  express it properly. Your website is your number one marketing
                  asset because we live in a digital age.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="text-center md:text-left h-[460px] leading-loose">
            <hr className="w-8 h-[5px] bg-[#DE4396] mb-4 md:mb-0 md:mr-4" />
            <br />
            <h2 className="text-lg font-semibold mb-2 leading-loose">
              Leading companies trust us to{" "}
              <span className="text-[#DE4396]">develop software</span>
            </h2>
            <p className="text-gray-600 mb-4 md:max-w-md">
              We add development capacity to tech teams. Our value isn’t limited
              to building teams but is equally distributed across the project
              lifecycle. We are a custom software development company that
              guarantees the successful delivery of your project.
            </p>
            <p className="text-[#57007B]">
              See more Information{" "}
              <span className="text-[#DE4396] w-6 h-2">→</span>
            </p>
          </div>
          <div>
            <img
              src="Abou-us-Video.png"
              alt="About us video"
              className="w-[640px] h-[460px] md:w-auto"
            />
          </div>
        </div>
        <div className="px-[117px] mt-[100px] flex-1">
          <hr className="w-8 h-[5px] bg-[#DE4396] mb-4 md:mb-0 md:mr-4" />
          <h1>
            Meet the People <br />
            <span className="font-bold">We are Working With</span>{" "}
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center mr-8 lg:ml-[900px]">
            <span className="rounded-full bg-white text-blue-300 w-10 h-10 flex justify-center items-center border border-blue-300">
              →
            </span>
          </div>
          <div className="flex justify-center items-center">
            <span className="rounded-full bg-blue-500 text-white w-10 h-10 flex justify-center items-center">
              ←
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center mt-5">
          <img src="Ellipse 180.png" alt="ellipse" />
        </div>
        <div className="flex flex-wrap justify-center  bg-[#F7F7FA] translate-y-[-41px]">
          <img src="image.png" alt="0" className="m-2 w-32 h-32 lg:w-48 lg:h-20" />
          <img src="image1.png" alt="1" className="m-2 w-32 h-32 lg:w-48 lg:h-20" />
          <img src="image2.png" alt="2" className="m-2 w-32 h-32 lg:w-48 lg:h-20" />
          <img src="image3.png" alt="3" className="m-2 w-32 h-32 lg:w-48 lg:h-20" />
          <img src="image4.png" alt="4" className="m-2 w-32 h-32 lg:w-48 lg:h-20" />
          <img src="image5.png" alt="5" className="m-2 w-32 h-32 lg:w-48 lg:h-20" />
        </div>

        <div className="flex justify-center">
          <hr className="w-10 h-[5px] bg-[#DE4396] mb-4 md:mb-0 md:mr-4" />
        </div>
        <div className="text-center ">
          <h1 className="text-3xl  mb-4">
            Why customers love <br />{" "}
            <span className="font-bold">working with us</span>
          </h1>
          <p className="text-lg text-[#718096]">
            <span className="text-[#DE4396] lg:pr-20 md:pr-2 sm:pr-0 font-bold  ">
              &lsquo;
            </span>
            Without any doubt I recommend Alcaline Solutions as one of
            <br /> the best web design and digital marketing agencies. One of
            <br /> the best agencies I’ve come across so far. Wouldn’t <br />
            hesitate to introduce their work to someone else.
            <br />{" "}
            <span className="text-[#DE4396] lg:pl-[650px] font-bold sm:pl-0 md:pl-0 ">
              &rsquo;
            </span>
          </p>
        </div>
        <div className="flex flex-wrap justify-around">
          <div className="flex flex-col items-center mb-4">
            <div className="rounded-full overflow-hidden w-20 h-20 sm:w-24 sm:h-24 flex justify-center items-center">
              <img
                src="p1.jpeg"
                alt="img"
                className="w-full h-full object-cover"
              />
            </div>
            <Star stars={4} />
            <p>Fatima</p>
          </div>

          <div className="flex flex-col items-center mb-4">
            <div className="rounded-full overflow-hidden w-20 h-20 sm:w-24 sm:h-24 flex justify-center items-center">
              <img
                src="p2.jpeg"
                alt="2"
                className="w-full h-full object-cover"
              />
            </div>
            <Star stars={5} />
            <p>Laibah</p>
          </div>

          <div className="flex flex-col items-center mb-4">
            <div className="rounded-full overflow-hidden w-20 h-20 sm:w-24 sm:h-24 flex justify-center items-center shadow-lg">
              <img
                src="p3.jpeg"
                alt="3"
                className="w-full h-full object-cover"
              />
            </div>
            <Star stars={3} />
            <p>Ali</p>
          </div>

          <div className="flex flex-col items-center mb-4">
            <div className="rounded-full overflow-hidden w-20 h-20 sm:w-24 sm:h-24 flex justify-center items-center">
              <img
                src="p4.jpeg"
                alt="4"
                className="w-full h-full object-cover"
              />
            </div>
            <Star stars={2} />
            <p>Umer</p>
          </div>

          <div className="flex flex-col items-center mb-8">
            <div className="rounded-full overflow-hidden w-20 h-20 sm:w-24 sm:h-24 flex justify-center items-center">
              <img
                src="p5.jpeg"
                alt="p"
                className="w-full h-full object-cover"
              />
            </div>
            <Star stars={4} />
            <p>Ayesha</p>
          </div>
        </div>

        {/* image clip */}
        <div className="flex justify-between md:justify-around m-8 relative z-10">
  <img src="Deco-img-arrow (1).png" alt="arrow" className="w-1/2 md:w-auto" />
  <img src="Deco-img-arrow.png" alt="img" className="w-1/2 md:w-auto" />
</div>



      </div>
    </>
  );
}

export default Services;
