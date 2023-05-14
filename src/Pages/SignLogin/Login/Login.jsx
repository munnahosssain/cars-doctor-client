import React, { useContext } from "react";
import image from "../../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(result => {
        const user = result.user;

        console.log(user);
        navigate(from, { replace: true });
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
            <h1 className="text-4xl text-center font-bold">Login</h1>
            <form onSubmit={handleLogin}>
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
                  <span className="label-text">Confirm Password</span>
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
                  value="Login"
                  className="btn btn-primary"
                />
              </div>
              <label className="">
                Have an account?
                <Link
                  to="/signUp"
                  className="label-text-alt link link-hover text-lg font-bold"
                >
                  {" "}
                  Sign In
                </Link>
              </label>
              <SocialLogin />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
