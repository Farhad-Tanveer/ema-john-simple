import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Signup = () => {
  const [error, setError] = useState("");

  // use context which is created in AuthProvider component
  const { createUser } = useContext(AuthContext);

  // handle sign up button and get all value from input field
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);

    // reset error after done everything
    setError("");

    // validate password and confirm password
    if (password !== confirm) {
      setError("Your password did not match");
      return;
    } else if (password.length < 6) {
      setError("Password must be 6 character or longer");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Signup now!</h1>
        </div>
        <form
          onSubmit={handleSignUp}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirm"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <label className="label">
              <p className="text-error">{error}</p>
            </label>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Signup</button>
            </div>
            <label className="label">
              <div>
                <span>Already have an account?</span>
                <Link
                  to="/login"
                  href="#"
                  className="label-text-alt link link-hover ml-2 text-base text-warning btn-link"
                >
                  Login
                </Link>
              </div>
            </label>
            <div className="relative flex py-1 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400">Or</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline">Continue with Google</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
