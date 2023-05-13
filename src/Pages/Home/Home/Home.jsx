import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div className="lg:mx-48">
      <Banner />
      <About />
      <Service />
    </div>
  );
};

export default Home;
