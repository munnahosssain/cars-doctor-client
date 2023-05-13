import React from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import image1 from "../../../assets/images/banner/1.png";
import image2 from "../../../assets/images/banner/2.png";
import image3 from "../../../assets/images/banner/3.png";
import image4 from "../../../assets/images/banner/4.png";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={image1} className="w-full rounded-xl" />
        <div className="absolute flex rounded-xl items-center transform h-full top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="ml-15 lg:pl-48 lg:space-y-7 lg:w-1/2">
            <h2 className="lg:text-6xl text-white font-bold leading-tight">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white lg:text-xl">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex">
              <button className="btn btn-error sm:btn-xs lg:btn-lg">
                Discover More
              </button>
              <br />
              <button className="btn btn-error sm:btn-xs lg:btn-lg ml-3">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">
            <BsArrowLeft size={24} />
          </a>
          <a href="#slide2" className="btn btn-circle">
            <BsArrowRight size={24} />
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={image2} className="w-full rounded-xl" />
        <div className="absolute flex rounded-xl items-center transform  h-full top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="ml-15 lg:pl-48 lg:space-y-7 lg:w-1/2">
            <h2 className="lg:text-6xl text-white font-bold leading-tight">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white lg:text-xl">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex">
              <button className="btn btn-error sm:btn-xs lg:btn-lg">
                Discover More
              </button>
              <br />
              <button className="btn btn-error sm:btn-xs lg:btn-lg ml-3">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={image3} className="w-full rounded-xl" />
        <div className="absolute flex rounded-xl items-center transform  h-full top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="ml-15 lg:pl-48 lg:space-y-7 lg:w-1/2">
            <h2 className="lg:text-6xl text-white font-bold leading-tight">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white lg:text-xl">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex">
              <button className="btn btn-error sm:btn-xs lg:btn-lg">
                Discover More
              </button>
              <br />
              <button className="btn btn-error sm:btn-xs lg:btn-lg ml-3">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={image4} className="w-full rounded-xl" />
        <div className="absolute flex rounded-xl items-center transform  h-full top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="ml-15 lg:pl-48 lg:space-y-7 lg:w-1/2">
            <h2 className="lg:text-6xl text-white font-bold leading-tight">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white lg:text-xl">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex">
              <button className="btn btn-error sm:btn-xs lg:btn-lg">
                Discover More
              </button>
              <br />
              <button className="btn btn-error sm:btn-xs lg:btn-lg ml-3">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
