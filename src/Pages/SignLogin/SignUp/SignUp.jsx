import React, { useContext } from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/images/login/login.svg";
import { AuthContext } from "../../../Providers/AuthProviders";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(result => {
        const signedUser = result.user;
        console.log(signedUser);
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex justify-between flex-col lg:flex-row">
        <div className="w-1/2 lg:mr-48">
          <img src={image} alt="login image" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-md w-1/2 border-red-900">
          <div className="card-body border-red-900">
            <h1 className="text-4xl text-center font-bold">Sign Up</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn btn-primary"
                />
              </div>
              <div className="divider">OR</div>
              <label className="">
                Already have an account?
                <Link
                  to="/login"
                  className="label-text-alt link link-hover text-lg font-bold"
                >
                  {" "}
                  Login
                </Link>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
