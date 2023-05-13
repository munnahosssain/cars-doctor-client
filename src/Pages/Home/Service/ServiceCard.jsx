import React from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <div>
              <h2 className="card-title">{title}</h2>
              <p className="text-red-500 mt-2 font-bold">Price: ${price}</p>
            </div>
            <div className="card-action">
              <Link to={`/book/${_id}`}>
                <button className="rounded-full bg-red-400 p-3 text-white">
                  <BsArrowRight size={24} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
