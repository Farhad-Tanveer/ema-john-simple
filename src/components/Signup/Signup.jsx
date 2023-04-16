import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
            <div class="relative flex py-5 items-center">
              <div class="flex-grow border-t border-gray-400"></div>
              <span class="flex-shrink mx-4 text-gray-400">Or</span>
              <div class="flex-grow border-t border-gray-400"></div>
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
