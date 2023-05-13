import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          {/* <div> */}
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          {/* </div>
          <div> */}
          <img
            src={parts}
            className="w-1/2 absolute rounded-lg shadow-2xl right-8 top-1/2 border-8 border-white"
          />
          {/* </div> */}
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-2xl font-bold text-red-500">About Us</h1>
          <h1 className="text-5xl font-bold my-4">
            We are qualified & of experience in this field
          </h1>
          <p className="mb-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
            <br /> <br />
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
