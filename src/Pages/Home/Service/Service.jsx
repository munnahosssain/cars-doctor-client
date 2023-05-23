import React, { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);
  const [asc, setAsc] = useState(true);
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    fetch(
      `http://localhost:5000/services?search=${search}&sort=${
        asc ? "asc" : "desc"
      }`
    )
      .then(res => res.json())
      .then(data => setServices(data));
  }, [asc, search]);

  const handleSearch = event => {
    setSearch(searchRef.current.value);
  };

  return (
    <div>
      <div className="text-center">
        <h3 className="font-bold text-4xl mb-4">Our Service Area</h3>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which don't look even slightly believable.{" "}
        </p>
      </div>
      <button onClick={() => setAsc(!asc)} className="btn flex text-end">
        {asc ? "High to low (Price)" : "Low to high (Price)"}
      </button>
      <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            ref={searchRef}
            placeholder="Search…"
            className="input input-bordered"
          />
          <button onClick={handleSearch} className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
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
