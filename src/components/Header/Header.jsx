import React from "react";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <>
      <nav>
        <div className="navbar bg-primary">
          <div className="flex-1 mx-8 ">
            <img
              className="btn btn-ghost normal-case text-xl"
              src={logo}
              alt=""
            />
          </div>
          <div className="flex-none mx-8 text-white">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Order</a>
              </li>
              <li>
                <a>Order Review</a>
              </li>
              <li>
                <a>Manage Inventory</a>
              </li>
              <li>
                <a>Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
