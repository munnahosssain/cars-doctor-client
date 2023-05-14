import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import BookingRow from "./BookingRow";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://car-doctor-server-livid-seven.vercel.app/bookings?email=${user?.email}`;
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("Car-access-token")}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          setBookings(data);
        } else {
          navigate("/");
        }
      });
  }, []);

  const handleDelete = id => {
    const proceed = (confirm = "Are you sure? you want to delete");
    if (proceed) {
      fetch(`https://car-doctor-server-livid-seven.vercel.app/bookings/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(),
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            swal({
              title: "Are you sure?",
              text: "Once deleted, you will not be able to recover this imaginary file!",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            }).then(willDelete => {
              if (willDelete) {
                swal("Your booking has been deleted!", {
                  icon: "success",
                });
              } else {
                swal("Your imaginary file is safe!");
              }
            });
            const remaining = bookings.filter(booking => booking._id !== id);
            setBookings(remaining);
          }
          console.log(data);
        });
    }
  };

  const handleBookingConfirm = id => {
    fetch(`https://car-doctor-server-livid-seven.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter(booking => booking._id !== id);
          const updated = bookings.find(booking => booking._id !== id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };

  return (
    <div className="lg:mx-48">
      <h3>Booking {bookings.length}</h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <tbody>
            {bookings.map(booking => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
