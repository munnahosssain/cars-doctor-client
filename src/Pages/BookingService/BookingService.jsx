import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import image1 from "../../assets/images/banner/1.png";
import { AuthContext } from "../../Providers/AuthProviders";

const BookingService = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, service_id, title, price, img } = service;
  // console.log(service);
  // console.log(service.img);

  const handleOrder = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const price = form.price.value;
    const message = form.message.value;

    const booking = {
      customerName: name,
      email,
      date,
      image: img,
      service: title,
      service_id: _id,
      price: price,
      message: message,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId > 0) {
          alert("Booked");
          swal("Booked!", "You clicked the button!", "success");
        }
        console.log(data);
      });
  };
  return (
    <div className="lg:mx-48 md:mx-24 ">
      <div className="mb-24">
        <img src={image1} className="w-full lg:h-96 rounded-xl" />
        <div className="absolute flex rounded-xl items-center transform lg:mt-[8px] lg:h-96 lg:top-24 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="ml-15 lg:pl-48 lg:space-y-7 ">
            <h2 className="lg:text-6xl text-white font-bold leading-tight">
              {title}
            </h2>
          </div>
        </div>
      </div>
      <div className="my-24 bg-[#F3F3F3]">
        <form onSubmit={handleOrder} className="lg:mx-72 md:mx-32">
          <div className="lg:flex items-center justify-center my-8">
            <div>
              <span className="m-2">Your Name</span>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="Name"
                className="input input-bordered input-lg w-full max-w-lg my-4 pr-6"
              />
              <span className="m-2">Phone Number</span>
              <input
                readOnly
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="Your Phone"
                className="input input-bordered input-lg w-full max-w-lg mr-5"
              />
            </div>
            <div className="lg:m-6">
              <span className="m-2">Select Your Date</span>
              <input
                type="date"
                name="date"
                placeholder="Date"
                className="input input-bordered input-lg w-full max-w-lg my-4"
              />
              <span className="m-2">Due Amount</span>
              <input
                readOnly
                type="text"
                name="price"
                defaultValue={"$ " + price}
                className="input input-bordered input-lg w-full max-w-lg"
              />
            </div>
          </div>
          <span className="m-2">Your Message</span>
          <input
            type="text"
            name="message"
            placeholder="Your Message... "
            className="input input-bordered input-lg h-24 w-full max-w-2/4"
          />
          <input
            type="submit"
            value="Order Confirm"
            className="btn btn-block my-8 bg-[#FF3811] hover:bg-red-600 border-none"
          />
        </form>
      </div>
    </div>
  );
};

export default BookingService;
