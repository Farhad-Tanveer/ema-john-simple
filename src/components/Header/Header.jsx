import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <>
      <nav>
        <div className="navbar bg-primary">
          <div className="flex-1 mx-8 ">
            <Link to="/">
              <img
                className="btn btn-ghost normal-case text-xl"
                src={logo}
                alt=""
              />
            </Link>
          </div>
          <div className="flex-none mx-8 text-white">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/">Shop</Link>
              </li>
              <li>
                <Link to="/orders">Orders</Link>
              </li>
              <li>
                <Link to="/inventory">Inventory</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
