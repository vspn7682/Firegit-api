import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../Context/UserContext";

const Navbar = () => {
  const context = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary px-4">
      <div className="container-fluid">
        <div className="row w-100">
          <div className="col-lg-8 d-flex align-items-center ">
            <Link to="/home">
              <p className="navbar-brand text-white m-0 pb-0">Firegit-api</p>
            </Link>
            <span className="greet text-white ms-5 me-2">Hello </span> <h6 className="text-white m-0">{context.user?.uid ? context.user.email : 'User'}</h6>

          </div>
          <div className="col-lg-4 d-flex justify-content-end">
            {context.user?.uid ? (
              <Link to='/'><p onClick={() => context.setUser(null)} className="nav-link text-white m-0">Logout</p></Link>
            ) : (
                <div className="loggedIn d-flex">
                  <Link to="/">
                    <p className="nav-link text-white m-0">Sign In</p>
                  </Link>
                  <Link to="/register">
                    <p className="nav-link text-white m-0">Sign Up</p>
                  </Link>
                </div>
              )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
