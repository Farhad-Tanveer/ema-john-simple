import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

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
              <li>
                {user && (
                  <span>
                    <span>{user.email}</span> ||{" "}
                    <button
                      onClick={handleLogOut}
                      className="border border-purple-600 rounded-full p-2"
                    >
                      Sign Out
                    </button>
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
