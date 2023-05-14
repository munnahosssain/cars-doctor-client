import React, { useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);

  fetch("https://car-doctor-server-livid-seven.vercel.app/services")
    .then(res => res.json())
    .then(data => setServices(data));
  return (
    <div>
      <div>
        <h3>Our Service Area</h3>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(service => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Service;
